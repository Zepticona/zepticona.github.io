# Shahriar Islam Sakil — Academic Portfolio (Static HTML)

Plain HTML/CSS/JS, no build tools, no Ruby, no npm required. Single page, with each content section living in its own file.

## Structure

| What                                     | Where                          |
| ---------------------------------------- | ------------------------------ |
| Page shell (sidebar nav + section slots) | `index.html`                   |
| Styling (colors, type, layout)           | `css/style.css`                |
| Section loader + nav behavior            | `js/main.js`                   |
| About / hero content                     | `sections/about.html`          |
| Research content                         | `sections/research.html`       |
| Publications content                     | `sections/publications.html`   |
| CV content                               | `sections/cv.html`             |
| Profile photo                            | `images/profile.png`           |
| CV PDF (download button target)          | `files/PhD_Application_CV.pdf` |

**To edit any section, open its file in `sections/` directly.** You never need to touch `index.html` unless you're adding or removing an entire section.

## How it's modular

`index.html` has empty placeholders like:

```html
<section id="cv" class="section" data-include="sections/cv.html"></section>
```

`js/main.js` fetches each `sections/*.html` file at page load and drops its content into the matching placeholder. So each section is a genuinely separate, independently editable file.

## Adding or removing a section

**To add a new section** (e.g. "Teaching"):

1. Create `sections/teaching.html` with your content
2. In `index.html`, add a placeholder: `<section id="teaching" class="section" data-include="sections/teaching.html"></section>`
3. In `index.html`'s sidebar nav list, add: `<li><a href="#teaching" data-section="teaching">Teaching</a></li>`

**To remove a section:** delete its `<li>` from the nav and its `<section>` placeholder in `index.html`. You can leave the file in `sections/` untouched, it just won't be loaded.

## Previewing locally

Because sections are loaded via JavaScript's `fetch()`, opening `index.html` by double-clicking it won't work (browsers block `fetch` on local files for security reasons). You need a local server, which is one click in VS Code:

1. Install the **Live Server** extension (search for it in VS Code's Extensions panel)
2. Right-click `index.html` in the file explorer → **Open with Live Server**
3. Your browser opens automatically at `http://127.0.0.1:5500` (or similar), and it live-reloads on save

No Ruby, no `bundle install`, no terminal commands needed.

## Deploying to GitHub Pages

1. Push this folder's contents to `[your-username].github.io` (same repo as before, this replaces the Jekyll version entirely)
2. In repo Settings → Pages, confirm the source is the `main` branch, root folder
3. Visit `https://[your-username].github.io`, it works immediately, GitHub Pages serves plain HTML natively, no build step needed
4. The included `.nojekyll` file tells GitHub not to try running its Jekyll processor over this, since it's not needed anymore

## TODO

- [ ] Add a real GitHub link for the Scam Detector project (currently referenced only in the CV text, add a repo link if you want one)
- [ ] Replace `images/profile.png` if you want a different headshot
- [ ] Update `files/PhD_Application_CV.pdf` whenever your CV changes (filename must stay the same, or update the link in `sections/about.html` and `sections/cv.html`)
