# Siddharth Khajuria Portfolio

This is a polished, responsive single-page portfolio built with Bootstrap, custom CSS, and vanilla JavaScript.

## Features

- Preloader spinner on every page.
- Single cohesive blue theme with blurred design elements and consistent styling across pages.
- Multi-page layout: `index.html` (home + about + contact), `education.html`, `skills.html`, `projects.html`.
- Hero banner uses full‑screen background photo with blurred panel (SVG wave has been removed for seamless transition into the about section).
- Dynamic skills & project cards (filterable by category) with GitHub links and modal details.
- Contact form on home page triggers mailto email composition.
- Social links in footer and scroll-to-top button on home.
- Subtle SVG pattern applied globally and inside sections.

## Customization

1. **Images**: the home and about sections share a single large background photo (`Sid.jpg`) with a dark blur overlay; replace it to update both areas and ensure there is no white gap between them. The about section has been enlarged (min‑height 200vh, roughly triple) so the background image shows much more of your photo, and all the text is forced white for readability. For sub-page banners you can create `assets/edu-bg.jpg`, `assets/skills-bg.jpg`, `assets/projects-bg.jpg` and the CSS will apply them automatically. You can also add institution logos (e.g. `assets/algoma.png`, `assets/ptu.png`) which appear on the education page.
2. **Pages**: edit `education.html`, `skills.html`, `projects.html` for content changes. Navigation links at the top of each page correspond to these files.
3. **Skills**: update the array in `script.js` to change names or icons (currently using placeholders from placehold.co).
4. **Projects**: modify the project array in `script.js`; include `github` field for code link and `categories` for filters.
5. **Palette**: adjust CSS variables in `style.css` (primary, bg, text colors) and tweak the pattern or blurred shapes if desired.
6. **Resume**: replace `Siddharth__Resume.pdf` with your latest file.
7. **Social Links**: update URLs in the footer markup on `index.html`.

## Deployment

Simply host the folder as a static site (GitHub Pages, Netlify, Vercel, etc.).

---

Feel free to extend sections (certifications, testimonials) and add more interactivity!
