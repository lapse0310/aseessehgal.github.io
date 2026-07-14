# aseessehgal.com

Personal site for Asees Sehgal — a resume-first portfolio styled as a physical
field journal. Static HTML/CSS/JS, no build step, hosted on GitHub Pages at
[www.aseessehgal.com](https://www.aseessehgal.com).

## Structure

- `index.html` — the main scrolling site (Cover, Work, Research, Build, Ride, Life, Contact)
- `resume.html` — standalone printable résumé
- `css/styles.css` — all styling and design tokens
- `js/main.js` — scroll-progress ribbon and tab-nav smooth scrolling
- `CNAME` — custom domain config for GitHub Pages

## Local development

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Pushes to `master` deploy automatically via GitHub Pages. DNS for
aseessehgal.com is managed on Squarespace and points at GitHub Pages.
