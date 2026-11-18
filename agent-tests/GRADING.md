# How the report grades a build

For Shamsi and Claude. Both report pages link here; this file says what their grades mean.

## Fidelity score

How closely a build follows the design system, out of 100. The report shows each part beside the total, so a reader can see where a score comes from.

- **Shamsi's rating, half.** The review page asks of each build: "How closely does this build follow the design system?" Each point is named by what the build would need: 5, Ship as is; 4, Small fixes only; 3, Several fixes; 2, Major rework; 1, Start over. 1 counts as 0% and 5 as 100%. It is saved in `review.json` as `builds.<label>.rating`.
- **Automated checks passed, a quarter.** The share of the checks below that the build passes.
- **Rules followed, a quarter.** The share of the predictions in the test's scoring notes that the build met in Claude's technical review: met counts 1, partly met a half, not met 0, and a prediction that does not apply to the build is left out. It is saved in `technical.json` as `builds.<label>.rules`, `{"held": 15.5, "total": 18}`.

Without a rating the report gives no total: it shows Claude's half, the checks and the rules, out of 50, marked as partial. A rating is given while the docs are the ones the round was built with; once they have changed, a rating would not mean what it meant then, so that round stays unrated. Round 10 is unrated for this reason: `history.json` marks it, its review page asks for no rating, and no later round compares its fidelity with round 10's.

### The automated checks

Each check passes or fails, from `evaluation.json`. On each page:

1. No accessibility problems: axe finds nothing in light mode (`axe_light`).
2. No contrast problems in dark mode (`axe_dark_contrast`).
3. No sideways scrolling at 768px or at 320px (`overflow_px` is 0 at both). This check counts the phone width for internal tools too, though the programmatic grade below does not.
4. Every tab stop shows a focus indicator (`tab_stops_without_focus_indicator` is empty).
5. The page works without JavaScript: at least 90% of the text shown with JavaScript is still there without it (`text_length_without_js` against `text_length`).
6. Nothing is loaded from another site (`external_requests`).
7. No request is broken (`broken_requests`).
8. No class is defined nowhere (`classes_defined_nowhere`). A `ds-` class that the docs' own pages write counts as defined: `.ds-section-desc`, for one, has no styles and marks a summary for the digests.
9. No page-only CSS classes (`classes_from_own_css`).
10. No inline styles or style blocks: no `style` attribute and no `<style>` element in the page as the builder wrote it. This one reads the built file, because `inline_styles` in `evaluation.json` is taken after the scripts run, and the design system's own scripts set some.
11. The page's frame: one `<main>`, a skip link before it that points at it, and the standard footer, `.ds-site-footer` (`frame`).
12. No element written `hidden` still shows (`hidden_but_shown`).
13. No inline icon is drawn wider than 48px, outside a figure or a picture (`huge_icons`).
14. No accessibility problems inside a dialog: each `<dialog>` is opened and axe runs on it (`axe_dialogs`).

Checks 11 to 14 were added after round 13. A page evaluated before them has no result for them, and they are left out of its count, so earlier scores stand.

And once for the whole build:

15. No existing file is modified (`modified_existing`).

A page the build did not make fails its ten checks. A test with two pages has 21 checks.

### Complexity

A label beside the scores, never part of them. It is set in `test.json` as `"complexity"` when a test is written, and confirmed in Shamsi's review of the spec; `history.json` keeps it for the tests written before the field.

- **Simple:** one or two content pages with standard components and little interaction (the help pages).
- **Moderate:** several page types, or a mix of content and controls (the search pages).
- **Complex:** dense data, many controls, and decisions about what comes first (the staff dashboards).

## Visual fidelity

Shamsi reviews all the builds on one page, rates each one (half of the fidelity score, above), writes notes on each build and on all of them, and votes for the build that worked best, with the reason. Shamsi's report shows the pick with its reason, and Shamsi's notes beside each build; the team's copy shows the pick and its reason without the notes.

The V1 exit test asks whether a build is good enough to ship, so it keeps a verdict for each build: Accept, Accept with changes, or Reject. A test sets `"verdict": true` in its `test.json` for this; the verdicts are given on the review page, in place of the best build, and the report shows them as given.

## Programmatic fidelity

Claude's grade from the automated checks and a read of the code. It is written to `technical.json` as `programmatic`, with the reasons in `notes`; the report shows both beside each build. It is the report's only technical grade.

Phone widths are not part of the grade for the internal-tools tests (decided 2026-10-08); they still count for public pages.

- **Pass:** every automated check passes, with no accessibility problem at any level, and the code uses only design-system classes and tokens. The checks are accessibility (axe), contrast in light and dark, no sideways scrolling on a phone, a visible keyboard focus, the page working without JavaScript, and nothing loaded from another site.
- **Pass with changes:** no serious or critical accessibility problem, but moderate or minor ones; or the code departs from the design system in small ways: a few page-only styles, the wrong component for a job, or a component rebuilt by hand instead of reused.
- **Fail:** a serious or critical accessibility problem, or the page ignores the design system's components.

Critical, serious, moderate and minor are the impact levels axe gives each problem. The report lists every accessibility problem under its build, with its level.

## Tokens

The total the agent used: input, output, and cache reads and writes. Most of it is cache reads, so the total is much larger than the text the agent wrote. There is no dollar figure, because the builds run on a Claude plan. In a paired round, an agent's tokens are its build and its second pass together.

The report compares a round's averages only with the previous round of the same test (`previous` in `test.json`): tokens always, and fidelity when both rounds have a full score. The chart of every round shows each round's average tokens per build, coloured by test family, from `history.json`.

## What the review found

Up to three gaps in the design system that the review showed, written to `technical.json` as `findings`; what was changed in the design system as a result, as `changes`, once the docs change is made; and one line on what comes next, as `next`.
