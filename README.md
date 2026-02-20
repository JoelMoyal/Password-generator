# pwasecurity — Password Generator

> Free, private, browser-only password generator. No account. No server. Nothing leaves your device.

**Live site → [pwasecurity.org](https://pwasecurity.org)**

<img width="525" alt="pwasecurity password generator screenshot" src="<img width="480" height="1040" alt="Secure Password Generator — Free   Private  pwasecurity" src="https://github.com/user-attachments/assets/1e0e1f93-0a36-4370-acd4-fdca1e2df125" />
" />

---

## What it does

Three generation modes, all running entirely in your browser:

| Mode | Description |
|------|-------------|
| **Random** | Cryptographically secure character-based passwords up to 128 chars |
| **Passphrase** | Word-list passphrases with custom separators, capitalization, and appended numbers |
| **PIN** | Numeric PINs from 4 to 12 digits |
| **AI Mode** | Describe what you need in plain English — Cloudflare Workers AI returns a suggestion |

---

## Features

- **Web Crypto API** — uses `crypto.getRandomValues()`, not `Math.random()`
- **Entropy-based strength meter** — 4-level rating with bit-count calculation
- **Password history** — last 5 passwords, reveal/hide + copy per entry
- **Exclude ambiguous characters** — removes `0`, `O`, `l`, `1`, `I` etc.
- **Easy to say** — pronounceable CVC-syllable passwords
- **Copy with feedback** — button turns green, resets after 2 s
- **9 languages** — EN, DE, FR, ES, IT, PT, NL, PL, RU
- **Mobile-first** — responsive down to small phones, touch-optimised
- **Single file** — all HTML, CSS, and JS in one `index.html`, zero build step

---

## Security model

All password generation runs locally. There is no server, no database, no analytics.

The **one exception** is AI Mode: your text prompt is sent to Cloudflare Workers AI (Meta Llama model) to generate a suggestion. Don't include real passwords, API keys, or personal data in the prompt.

---

## Languages

| Code | Language   |
|------|------------|
| `en` | English    |
| `de` | German     |
| `fr` | French     |
| `es` | Spanish    |
| `it` | Italian    |
| `pt` | Portuguese |
| `nl` | Dutch      |
| `pl` | Polish     |
| `ru` | Russian    |

To add a language, copy any language block inside the `translations` object in `index.html` and translate the values.

---

## Run locally

No build process or dependencies required.

```bash
git clone https://github.com/JoelMoyal/Password-generator.git
cd Password-generator
open index.html       # macOS
start index.html      # Windows
```

---

## Deploy

The site is hosted on **Cloudflare Pages** and auto-deploys on every push to `main`. Any static host works — it's a single HTML file.

---

## Stack

- Vanilla HTML, CSS, JavaScript
- Web Crypto API (`crypto.getRandomValues`)
- Cloudflare Pages (hosting)
- Cloudflare Workers AI (AI Mode only)

---

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b my-feature`
3. Commit your changes
4. Open a pull request

---

## Author

**Joël Moyal**

- Website: [joelmoyal.com](https://joelmoyal.com)
- GitHub: [@JoelMoyal](https://github.com/JoelMoyal)
- LinkedIn: [Joël Moyal](https://www.linkedin.com/in/joel-moyal)

---

## License

MIT — see [LICENSE](LICENSE)
