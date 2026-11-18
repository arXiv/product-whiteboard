# Agent build tests

These tests answer one question: given only the design system repository, does an AI coding agent build an arXiv page that Shamsi accepts visually and that conforms to the design system technically?

This folder is the public record: how a test works (this file), what the grades mean ([GRADING.md](GRADING.md)), and what each round found ([TEST-LOG.md](TEST-LOG.md)). The test briefs, scoring notes, tooling and full runs are kept outside the repository.

## One test, five steps

1. **Brief.** A brief in product words, naming no classes or components, with sample content and notes on what to look for, written before anything is built. Shamsi reviews it first.
2. **Build.** Each build runs a fresh agent in a clean copy of the design system repository, which holds no tests, scoring notes or earlier results. By default there are four builds: two with Claude Sonnet and two with Claude Opus.
3. **Technical evaluation.** Computed checks run first, then Claude reads each builder's reasoning.
4. **Visual review.** Shamsi sees every build side by side, labelled A to D in shuffled order, without the model. Shamsi rates how closely each follows the design system, from 1 (Start over) to 5 (Ship as is), and picks the build that worked best.
5. **Report.** The round's average fidelity to the design system and average tokens per build, each build's grade, what the builds had in common, and what changed in the design system as a result. arXiv's developers build with Opus, so its builds show what they will get; the Sonnet builds test the docs.

## What the computed checks cover

For every page of every build: CSS written outside the one permitted file, classes that are defined nowhere, classes the builder invented, colours that are not in the design system, changes to existing files, anything loaded from another host, broken file paths, horizontal overflow at 768px and 320px, axe-core accessibility rules in light mode, contrast in dark mode, the tab order and whether each stop shows focus, and how much text is left with JavaScript off.
