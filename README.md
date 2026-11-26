# Faculty Leadership for Life — website

Static website for the Faculty Leadership for Life program (Nurturing Future Leadership Program, Malaviya Mission Teacher Training Program) at IIT Gandhinagar.

Plain HTML and images: no build step, no frameworks. The Manrope typeface is bundled in `assets/fonts/` (SIL Open Font License), so the site needs no outside services.

## Pages

| File | Tab |
|---|---|
| `index.html` | About |
| `objectives.html` | Objectives |
| `program.html` | Program |
| `logistics.html` | Logistics |
| `lead.html` | Lead |
| `iitgn.html` | IITGN |
| `contact.html` | Contact |

Photos and logos are in `assets/img/`. All links are relative, so the site works from any folder or sub-path.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `nflp-website`).
2. Upload everything in this folder to the root of the repository, including the hidden `.nojekyll` file. To upload from the browser, use **Add file → Upload files** and drag in the contents of the folder.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, and save.
4. After a minute or two, the site is live at `https://<your-username>.github.io/<repository-name>/`.

To use a custom domain, add it under **Settings → Pages → Custom domain**.

## Colour schemes

The site ships with six colour schemes:

| Name | Code | Look |
|---|---|---|
| Lal Minar | `lalminar` | Brick red and ink on white (default) |
| Sabarmati | `sabarmati` | River teal, mint and deep slate |
| Gulmohar | `gulmohar` | Flame orange-red on warm cream, with maroon |
| Indian Roller | `roller` | Electric indigo with turquoise |
| Monsoon Night | `monsoon` | Dark mode: charcoal with amber |
| Bandhani | `bandhani` | Gujarati tie-dye: magenta and marigold on off-white |

- **Preview a scheme:** add `?scheme=` and a code to any page address, for example `https://<username>.github.io/<repo>/?scheme=gulmohar`. Links between pages keep the scheme.
- **Change the default for everyone:** open `assets/scheme.js` and change `DEFAULT_SCHEME = 'lalminar'` to another code, then commit.

## Editing

Each page is a single HTML file with inline styles. Open it in any text editor, change the text, and commit. To swap a photo, replace the file in `assets/img/` and keep the same file name.
