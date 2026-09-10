# Shahriar Islam Sakil — Academic Portfolio

Built on the [academicpages](https://github.com/academicpages/academicpages.github.io) Jekyll template, trimmed down to only the sections currently in use, structured so new sections can be re-enabled later without touching layout code.

## Structure

| What                                         | Where                                    |
| -------------------------------------------- | ---------------------------------------- |
| Site-wide settings (name, bio, social links) | `_config.yml`                            |
| Top navigation (which sections show up)      | `_data/navigation.yml`                   |
| Homepage / About                             | `_pages/about.md`                        |
| CV page                                      | `_pages/cv.md`                           |
| Portfolio entries                            | `_portfolio/*.md` (one file per project) |
| Publications (currently empty, ready to use) | `_publications/*.md`                     |
| Talks (currently empty, ready to use)        | `_talks/*.md`                            |
| Teaching (currently empty, ready to use)     | `_teaching/*.md`                         |
| Uploaded files (CV PDF, etc.)                | `files/`                                 |
| Profile photo                                | `images/profile.png`                     |

## How to add a new section later (e.g. Publications)

1. Add a markdown file into the relevant folder (e.g. `_publications/2027-01-01-my-paper.md`), following the front-matter format of the template's original sample files (check the [academicpages wiki](https://github.com/academicpages/academicpages.github.io/wiki) if you deleted the samples and forget the format).
2. Open `_data/navigation.yml` and uncomment the matching block (or add a new one).
3. Commit and push. GitHub Pages rebuilds automatically.

## How to add a new portfolio project

Add a new file to `_portfolio/`, e.g. `_portfolio/my-new-project.md`:

```markdown
---
title: "Project Name"
excerpt: "One-line description.<br/>"
collection: portfolio
---

Full project description here.
```

## Local setup (to preview before pushing)

Requires Ruby + Bundler installed locally.

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000`.

## Deploying

1. Push this repo to `https://github.com/[your-username]/[your-username].github.io`
2. In the repo's Settings > Pages, confirm the source is set to the `main` branch (or whichever branch you push to)
3. Your site will be live at `https://[your-username].github.io` within a few minutes

## TODO checklist before going live

- [ ] Set `github`, `linkedin`, and `googlescholar` fields in `_config.yml`
- [ ] Replace `url` and `repository` in `_config.yml` with your actual GitHub username
- [ ] Add your headshot as `images/profile.png`
- [ ] Upload your CV PDF as `files/CV.pdf`
- [ ] Add real GitHub links in `_pages/cv.md` and `_portfolio/scam-detector.md`
- [ ] Double check IELTS score line in `_pages/cv.md` (General Training vs Academic)
