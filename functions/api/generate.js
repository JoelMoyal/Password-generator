export async function onRequestPost(context) {
    const { request, env } = context;

    let description, lang;
    try {
        const body = await request.json();
        description = body.description;
        lang = body.lang || 'en';
    } catch {
        return new Response(JSON.stringify({ error: 'Invalid request body' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (!description || typeof description !== 'string' || description.trim().length === 0) {
        return new Response(JSON.stringify({ error: 'Description is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (description.length > 500) {
        return new Response(JSON.stringify({ error: 'Description too long' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (!env.AI) {
        return new Response(JSON.stringify({
            error: 'Workers AI binding not configured. Add an AI binding named "AI" in Cloudflare Pages settings.'
        }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const langNames = { en:'English', de:'German', fr:'French', es:'Spanish', it:'Italian', pt:'Portuguese', nl:'Dutch', pl:'Polish', ru:'Russian' };
    const replyLang = langNames[lang] || 'English';

    const systemPrompt = `You are a password generator assistant. The user will describe what they need a password for.
Generate a strong, secure password or passphrase tailored to their description.
- If they want something memorable, use a passphrase like "Purple-Elephant-Runs-42!"
- If they want maximum security, use a random mix of uppercase, lowercase, numbers, and symbols
- Always aim for at least 16 characters
- Write the explanation in ${replyLang}. The explanation should be 1-2 sentences describing why this password is strong and how it fits the user's needs.
- Respond ONLY with valid JSON in this exact format, nothing else:
{"password":"<the password>","explanation":"<1-2 sentence explanation in ${replyLang}>"}`;

    try {
        const result = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: description.trim() }
            ],
            max_tokens: 300
        });

        const rawText = result.response || '';

        // Extract JSON from the response
        const jsonMatch = rawText.match(/\{[\s\S]*"password"[\s\S]*"explanation"[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('Could not parse AI response');
        }

        const parsed = JSON.parse(jsonMatch[0]);

        return new Response(JSON.stringify({
            password: parsed.password || '',
            explanation: parsed.explanation || ''
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: 'AI generation failed. Please try again.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
