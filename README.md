# pwasecurity — Password Generator

> Free, private, browser-only password generator with built-in AI Mode. No account. No server. Nothing leaves your device.

**Live site → [pwasecurity.org](https://pwasecurity.org)**

<p align="center">
  <img width="600" alt="pwasecurity password generator screenshot" src="<img width="480" height="959" alt="Secure Password Generator — Free   Private  pwasecurity 2" src="<img width="480" height="959" alt="Secure Password Generator — Free   Private  pwasecurity 2" src="https://github.com/user-attachments/assets/096fac80-eb45-4662-a389-be538da4f812" />
" />
" />
  <br/>
  <sub>Random · Passphrase · PIN · AI Mode — all running in your browser</sub>
</p>

---

## AI Mode

Describe what you need in plain English and get a password suggestion back — powered by **Cloudflare Workers AI** (Meta Llama). No prompt engineering needed: just type something like *"16 chars, no symbols, for a banking app"* and the model returns a tailored suggestion with a brief explanation.

> Note: AI Mode is the only feature that sends data off-device. Your text prompt goes to Cloudflare Workers AI. Don't include real passwords or sensitive data in the prompt.

---

## What it does

Four generation modes:

| Mode | Description |
|------|-------------|
| **Random** | Cryptographically secure character-based passwords up to 128 chars |
| **Passphrase** | Word-list passphrases with custom separators, capitalization, and appended numbers |
| **PIN** | Numeric PINs from 4 to 12 digits |
| **AI Mode** | Describe what you need — Cloudflare Workers AI returns a tailored suggestion |

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

All password generation runs locally using `crypto.getRandomValues()`. There is no server, no database, no analytics — except for AI Mode, which is covered above.

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
