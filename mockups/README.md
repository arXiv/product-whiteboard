# Page Mockups — Preview, NOT Production

This folder contains **in-progress page mockups** for the arXiv redesign. They're hosted here so stakeholders can review the work via a GitHub Pages URL without needing to clone the repo or unzip a bundle.

> **Agent contract:** nothing in `mockups/` is a build or style reference. Patterns are promoted into the design system ([arXiv/design-system](https://github.com/arXiv/design-system)) when stable — only the promoted version is canonical.

## What this is

Mockups are organized by context: public pages and internal tools.

## Data in a mockup

This repository is public. Before committing a mockup, check its text and its images:

- **People are made up:** every name, email address and IP address. Take names from [NAMES.md](NAMES.md), which lists names already checked against arXiv and the safe values for emails, IP addresses and IDs; new names go into the list first, and `mockups/checks/check-names.py` checks them.
- **Paper IDs cannot exist.** Use a number higher than arXiv publishes in a month, such as `2607.93842`. A public mockup that only displays a paper, such as the HTML paper page, may show a real one; a page that passes judgement on a paper (moderation, ownership, overlap) never does.
- **A page that judges work never shows arXiv's rules for judging it:** no thresholds, no criteria a moderator applies, no detail of how a check finds problems. Authors who knew the rules could game them. Where such a message goes, put a placeholder, such as "Warning message will display here"; the developers know the real text.
- **No screenshots of internal tools with real data.** The checks for personal data cannot read an image.

## The mockups by context

**`public/` — arxiv.org pages**

- **`abstract-phase2.html`** — the abstract page (paper landing page with title, authors, abstract, format/download actions, and citation section).
- **`html-phase1.html`** — the HTML paper: the abstract page and the full-paper reader on one continuous surface, at Phase 1 scope. This is the current HTML-paper mockup. It replaces two earlier explorations.
- **`optin-modal/`** — the Labs opt-in modal, layered on a saved arxiv.org page.
- (`images/` and `lib/` are shared assets for these pages.)

**`internal/` — staff tools**

- **`admin-console/`** — Admin Console mockups: `user-page/`, `ownership-requests/`, `paper-details/`. Home of the metadata-panel, action-bar, and category-editor patterns queued for promotion. (A standalone `category-management/` page was removed 2026-08-11 — the category editor now lives inside the user page's privileges accordion and the paper page's edit-metadata modal.)
- **`arxiv-check/`** — arXiv Check checkmark/save affordances: `checkmark-buttons.html` plus three annotated design images.
- **`arxiv-check/overlap-report/`** — the overlap report, an arXiv Check page: a moderator compares the text of two or more papers or submissions. One page; each view is a URL parameter: none (a new version sent as a new paper), `?view=fraud`, `?view=three-ids`, `?view=form`, `?view=error`. `overlap.css` holds what the design system does not provide.
- **`activity-dashboard/`** — the moderation reports (Submissions overview, Charts, Moderator contacts), in the structure Shamsi set on 2026-10-14: the reports in the header, each report's views and the subject filter in the second row.

Each page is static HTML (some with a sibling `styles.css`/`script.js`). Open in a browser; no build step, no server required.

## What this is NOT

- **Not a working arXiv build.** Most navigation stays inside the demo page. Links to PDF/TeX source on the abstract page do point to live arxiv.org.
- **Not the canonical design system.** The validated patterns (button styles, link styles, popovers, etc.) live in `https://arxiv.github.io/design-system/docs/public/`. These mockups *use* the design language being codified there but also include exploratory and in-progress treatments that may never reach production.
- **Not final visuals.** Colors, sizes, typography, and interactions are still iterating. Treat anything you see as a draft.
- **Not the complete redesign.** Search, browse, info pages, the submission flow, and other pages are not in this set.

## Where the source of truth lives

Mockups iterate quickly. Patterns that stabilize get promoted to the canonical design system:

| Want to see... | Look at... |
|---|---|
| Validated component CSS + tokens | [`https://arxiv.github.io/design-system/docs/design-system.css`](https://arxiv.github.io/design-system/docs/design-system.css) |
| Component demo pages | [`https://arxiv.github.io/design-system/docs/public/`](https://arxiv.github.io/design-system/docs/public/) (`buttons.html`, `link-styles.html`, etc.) |
| Color palette and rules | [`https://arxiv.github.io/design-system/docs/colors.html`](https://arxiv.github.io/design-system/docs/colors.html) |
| Typography system | [`https://arxiv.github.io/design-system/docs/typography.md`](https://arxiv.github.io/design-system/docs/typography.md) |
| Non-negotiable design rules | [`https://arxiv.github.io/design-system/docs/DESIGN-POLICIES.md`](https://arxiv.github.io/design-system/docs/DESIGN-POLICIES.md) |
| Pattern roadmap (what's promoted, what's queued) | [`https://arxiv.github.io/design-system/docs/public/README.md`](https://arxiv.github.io/design-system/docs/public/README.md) |

## Feedback

Projects that generate mockups will have their own communication channels (Slack and shared google docs). To share other feedback or random thoughts open an issue or message Shamsi directly.
