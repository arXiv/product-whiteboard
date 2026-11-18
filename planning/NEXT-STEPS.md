# Next steps

Open items only. Finished items are removed.

## Decisions for Shamsi

- **The tokens with "grey" in their names** (`--ds-grey-*`, `--ds-library-grey`): rename them to American spelling or not. Builders already use them, and renames are free only until the first version is tagged.
- **The direction for the Papers rules** (29 today): three to five rules per section for people; the detail in each demo's class key; LaTeXML-specific rules moved to the renderer.
- **What an older version's page shows:** whether version 1's page shows a journal reference the paper gained later (round 12).
- **Citations on a paper's page** (round 12): a worked citation in the docs; which version an older version's citation names; whether a citation style may change the title's capitals, against "show the author's text as written".
- **The Smileybones description:** a serial comma in "ease of use, and brand fidelity", and a space after the ellipsis ("rules… or").
- **The spacing scale:** is it too sparse in the middle? Deferred by Shamsi: judge it in a real page, not from a frequency table.
- **Brand metrics**, with leadership: the promise and proxy table is in Shamsi's brainstorm document, kept outside this repository.

## Docs

- **Pages not yet reviewed:** brand.html, outreach.html and references.html. They have no digest until they are in `verification/reviewed-pages.txt`.
- **`docs/examples/`:** whole pages built only from documented components. It holds only its README so far. Start with form validation (approved in principle); a page where a sidebar beats the bottom of the page is another candidate (round 6).
- **A shared popover script,** like `tooltip.js`. Agents write their own opening code or avoid popovers.
- **references.html interactivity,** deferred until agents do the basics well: citation and footnote markers in the text, Jump to reference and Back to your place, from the behavior in `html-phase1.html` (comment block 9). Questions to settle then: ship `popover.js` and `references.js`; footnotes on a wide screen as a CSS margin note or the mockup's marker; whether LaTeXML's "Cited by" and "External Links" belong in a popover's copy; renaming Papers' "Citations and references". The mockup's CSS fades ignore reduced motion, its return wash is color only, its footnote popover needs Escape and scroll, and `.ds-paper-element:target` removes the outline.
- **Patterns still to build:** the author list for the 100+ author case; the Labs opt-in section; the category editor (reorderable tags, primary first, inline remove, search to add), which `internal-tools.css` mentions but has no styles for; applying dates to every view ("use these dates for all tabs"), as the live site does.
- **Brand assets page:** logos, the X mark, the smileybones and friends, in the sizes and colors needed, SVG and PNG, with usage notes. Includes the Smileybones logo when Shamsi has made it; the header text then becomes the logo, with the alt text "Smileybones".
- **The internal palette** on `colors.html`, documented as fully as the public palette.
- **Type:** whether headings get a display treatment; build and measure a subsetted variable font.
- **A prominent card variant:** asked for in round 5. Shamsi prefers fewer variants.
- **From the V1 review, not needed for V1:** a "Not in this version" list in the release notes; patterns for an action in progress, an empty table and file upload; one set of breakpoints, in rem; prefixing the five form-message classes (`field-error` and the rest) before the first tag; "notice" or "alert"; the header divider class beside `.ds-divider--vertical`; one base focus ring; a check that a tagged version never loses a class.
- **Spacing outside a paper in a list:** the data list and the tag list space themselves only inside `.ds-paper`, so used anywhere else they touch (round 12).
- **Accordions in a sidebar:** Layouts puts several in a `.ds-acc-stack`; the sidebar on Papers puts them straight into the section (round 12).
- **Header:** at phone width the menu stays open behind the search overlay; step 3 of the centered space's fold (links fold into the menu) is not built in `docs/header.js`.
- **Two tokens kept for the mockups:** `--ds-accent-active` and `--ds-danger-active` are read only by two admin console mockups. Delete them when those mockups stop using them.
- **Old links:** the mockups README and comments in the two paper mockups still point at `docs/public/`, removed in the October reorganization.
- **An identifier in a table's header row:** `<thead>` text is uppercased, so an ID such as `submit/9104582` shows as `SUBMIT/9104582`, against the copy rule. The overlap report mockup puts its IDs in `<th scope="col">` cells in the first body row instead.
- **Table text is 13px:** fine for data, small for reading prose, such as two papers side by side in the overlap report mockup.
- **The internal header example** on Header is labelled Admin Console, but its links (Resources, Submission, User Support, Students) are arXiv Check's. Check them against the Admin Console.

## Compact elements (its own session)

- The secondary navigation at phone width wraps to two lines and is hard to read.
- The joined sort bar wraps badly at phone width.
- Other wide elements at phone width: filter bars, tables, button groups. The V1 review found them untidy rather than broken: no overflow or overlap.
- The activity dashboard's filter bar: is it a compact form, with compact buttons?

## Testing

- **V1:** reached when the test rounds Shamsi chooses pass both the automated technical reviews and Shamsi's own review, with no obvious error left that could be fixed now. Not yet declared.
- **The test tooling,** briefs and full runs are kept outside this repository; the public record is in `agent-tests/`.
- **Blind technical reviews:** the first line of a build's transcript names its model. Remove it from the copy the reviewers get (two reviewers saw it by accident in round 14).
- **Round 14's scoring notes** are out of date in four places (predictions 3, 13, 16 and 24) after the V1 fixes. Update them before the brief is used again.
- **Agents try the alternatives:** build two arrangements of the hardest placement choice and compare them, as a designer would. Test as a before-and-after pair, as in round 6, and weigh the extra tokens.
- **The internal reference page:** round 9 gave the best internal builds (best D, worst B). Build D, with parts of C, is the starting point for the reference pages in `mockups/internal/activity-dashboard/`.
- **arXiv Check, in React.** Shamsi takes screenshots first. See the testing plan, kept outside this repository.
- **The build and audit skills:** thin routers into the docs, never a second copy of the system.
- **User testing of the paper mockups** (`abstract-phase2.html`, `html-phase1.html`): script, tasks, recruitment (working researchers first). Parked questions are in `accessibility-research-questions.md`.

## Mockups

- **Rebuild the paper mockup's structure** (`html-phase1.html`) so the layout is ours rather than what ar5iv emits. This also fixes a known failure: at 1280px the mockup fails text-only zoom, because ar5iv's body grid is sized by its content (noted in `verify-mockups.py`).
- **Reconcile the mockups with the docs** (`html-phase1.html`; the abstract page mockup is out of date): the Permalink pill, line height, the figure viewer caption, removing "Who cites this", and the author list from arXiv's metadata (LaTeXML's author blocks are not one per person).
- **Admin console mockups:** px font sizes still to convert to rem, with the internal tools work (noted by `check-policies.py`).

## Accessibility

- **Is a closed accordion "visible"?** The Accessibility accordion in the paper sidebar stays closed for now.
- **One general set of accessibility rules** in the design system, informed by the HTML papers work, with paper-specific decisions living with the renderer. The paper-page decisions are in `accessibility-priorities.md`, beside this file.

## Later, against real content

- Data visualization: charts, meters, legends.
- User portal and Admin Console mockups.
- An agent pointer file other arXiv repos could include, naming the design system docs as the reference for look and feel, so agents stop copying sibling services.
