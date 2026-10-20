# BioTechs Online — website

Biohazard, crime scene and hoarding remediation services for the Dallas–Fort Worth
metroplex. Static site: vanilla HTML, CSS and JavaScript — no build step required
to serve it.

## Structure

| Path | File |
| --- | --- |
| `/` | `index.html` |
| `/about/` | `about/index.html` |
| `/about/who-we-serve/` | `about/who-we-serve/index.html` |
| `/careers/` | `careers/index.html` |
| `/biohazard-services/` | `biohazard-services/index.html` |
| `/hoarding-cleanup-services/` | `hoarding-cleanup-services/index.html` |
| `/areas-we-service/` | `areas-we-service/index.html` |
| `/contact-us/` | `contact-us/index.html` |
| `/terms-of-service/` | `terms-of-service/index.html` |
| `/privacy-policy/` | `privacy-policy/index.html` |
| `/accessibility-statement/` | `accessibility-statement/index.html` |
| 404 | `404.html` |

Shared assets: `css/styles.css`, `js/main.js`, `images/source/`, `favicon.svg`.

## Editing

The HTML pages are generated from the templates in `build/` to keep the header,
footer and forms identical across every page. After changing anything in
`build/`, regenerate the pages:

```sh
node build/index.mjs
```

Both the templates and the generated HTML are committed, so the site can be
served directly from the repository root with no tooling.

## Forms

All forms POST to the LeadrVision endpoint in `build/parts.mjs` (`BIZ.form`).
They work without JavaScript (returning to the page with `?submitted=1`) and are
also submitted via `fetch()` for an inline confirmation.
