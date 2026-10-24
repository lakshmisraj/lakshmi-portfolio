# Lakshmi Shibu Raj — portfolio

A one-page portfolio for a software development engineer (backend and distributed systems): hero with a live terminal, impact numbers, about, experience timeline, projects, skills, education and a contact form.

Built with Vite, React 19, Motion (animations) and react-icons. Fonts: Space Grotesk, IBM Plex Sans and IBM Plex Mono (Google Fonts).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production files in dist/
npm run preview    # serve dist/ locally
```

## Edit the content

All text lives in `src/data.js`: contact details, intro, stats, experience, projects (with the request path drawn on each card), skills and education. The About paragraph is in `src/components/About.jsx` and the terminal lines in `src/components/Terminal.jsx`. Replace `public/Lakshmi-Shibu-Raj-Resume.pdf` to update the résumé download.

## Contact form (EmailJS)

Without keys the form opens the visitor's email app with the message filled in. To send straight from the page:

1. Create a free account at emailjs.com, add an email service and a template that uses `{{from_name}}`, `{{reply_to}}` and `{{message}}`.
2. Copy `.env.example` to `.env` and fill in the three values (locally), and add the same three variables in Netlify under Site configuration → Environment variables.
3. Rebuild.

## Deploy (Netlify)

`netlify.toml` already sets the build: `npm run build`, publish `dist`, Node 22. In Netlify choose **Add new site → Import an existing project → GitHub**, pick this repository, and deploy. Every push to `main` redeploys.
