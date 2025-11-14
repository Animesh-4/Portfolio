# Animesh Toshniwal — Portfolio

Live site: https://animesh-toshniwal-portfolio.netlify.app/

## Project Overview
This repository contains the static portfolio website for Animesh Toshniwal. The site showcases projects, skills, achievements and a contact form. It includes interactive project modals with image slideshows and tech-stack carousels.

Notable projects featured:
- WalletFlow — Real-time collaborative budget planner
- Full-Stack E-Learning Platform (EdTech)
- CryptoClock — Cryptocurrency tracker
- Watchtower (Watchtower: Indian Crime Data Visualization Portal) — Dash / Plotly based analytics portal (images included under `Images/projects/icdv`)

## Live Link
- Live site: https://animesh-toshniwal-portfolio.netlify.app/

## Tech Stack (Frontend)
- HTML5, CSS3
- JavaScript (vanilla)
- Font Awesome (icons)
- Typed.js (typewriter effect)

Project image and logo assets are in the `Images/` directory.

## How to run locally (quick)
Open the folder in a terminal then serve the files as a static site. Two quick options:

1) Using Python (works on Windows if Python is installed):

```powershell
cd "C:\Users\aniau\OneDrive\Desktop\College books\Projects\Portfolio"
python -m http.server 8000
```
Then open: `http://localhost:8000` in your browser.

2) Open directly (for quick preview):
- Open `index.html` in your browser. Note: some browsers may restrict loading local resources (images/scripts) when opened via `file://` — using the local server above avoids that.

## Contact form behavior
- The contact form currently uses client-side JavaScript to show a success alert and reset the form. It does not send emails by default.
- To enable real email sending without a backend, integrate a service such as Formspree or EmailJS and update the form `action` (or use their client SDK). If you want, I can integrate Formspree for you.

## Adding or editing projects
- Project data and slides are added directly in `index.html`.
- Project modals use the `project-modal` structure and the slideshow classes `mySlides` and `dot` — the JavaScript in `script.js` initializes and controls them.
- Project images live under `Images/projects/` (for example `Images/projects/icdv` for Watchtower).

## Deployment
- The site is static and can be deployed to Netlify or Vercel by connecting the repository.
- The live site above was deployed via Netlify (drag & drop or Git integration).

## Notes & Next Steps (optional)
- Add server-side handling (Node/Python) if you want contact form emails processed on your own server.
- Replace placeholder or missing tech-stack icons in `Images/stack/` if needed.
- If you want, I can add CI/CD instructions for auto-deploy on push to GitHub.

---

If you want any edits to the README (more badges, contributor info, screenshots, or a short changelog), tell me which additions and I will update it.
