# product-whiteboard

arXiv's product exploration: mockups, research and planning notes. **Not code. Not used in production.**

The arXiv team uses this repository to explore and discuss product questions, including design: a mockup that shows the effect of a policy change, a prototype that helps a group agree on a complex question, or the data from a usability audit. The design system itself lives in [arXiv/design-system](https://github.com/arXiv/design-system). Nothing here is a build reference: a pattern moves into the design system when it is ready.

Browse the mockups: **https://arxiv.github.io/product-whiteboard/mockups/**

| Folder | What it holds |
|---|---|
| `mockups/` | Page mockups and prototypes, public pages and internal tools, with the automated checks for the public ones (`mockups/checks/`). The mockups load the design system from its published site. |
| `planning/` | What keeps changing: the to-do list (`NEXT-STEPS.md`), the accessibility decisions for public pages, and open proposals. |
| `research/` | Finished evidence: audits, studies and the questions saved for user testing. |
| `agent-tests/` | The record of the tests that measure whether AI agents can build pages from the design system: how a test works, the grading rules and each round's results. |
| `blog-theme/` | A packaged copy of the blog.arxiv.org theme, kept here so it lives somewhere besides one laptop. |

## Data in this repository

This repository is public. Everything in it follows the rules in [`mockups/README.md`](mockups/README.md#data-in-a-mockup): people are made up; a page that judges work uses paper and submission IDs that cannot exist; arXiv's rules for judging work never appear, only placeholder text; and no screenshot of an internal tool shows real data. Invented names and safe values are listed in [`mockups/NAMES.md`](mockups/NAMES.md).
