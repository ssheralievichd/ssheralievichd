---
name: Abdurahmon Sheralievich
description: A fintech engineer's record set like a bank's annual report, in ruled tables and key figures.
colors:
  field: "oklch(0.32 0.068 165)"
  field-2: "oklch(0.37 0.072 165)"
  accent: "oklch(0.4 0.085 165)"
  signal: "oklch(0.89 0.105 165)"
  paper: "oklch(0.985 0.004 160)"
  paper-2: "oklch(0.958 0.009 160)"
  ink: "oklch(0.21 0.02 165)"
  ink-2: "oklch(0.42 0.022 165)"
  rule: "oklch(0.21 0.02 165 / 16%)"
  rule-strong: "oklch(0.21 0.02 165)"
  field-ink: "oklch(0.975 0.012 160)"
  field-ink-2: "oklch(0.975 0.012 160 / 76%)"
  field-rule: "oklch(0.975 0.012 160 / 26%)"
typography:
  display: { fontFamily: "Geologica, Onest, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2.6rem, 8.4vw, 6rem)", fontWeight: 600, lineHeight: 0.96, letterSpacing: "-0.04em" }
  headline: { fontFamily: "Geologica, Onest, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.028em" }
  title: { fontFamily: "Geologica, Onest, ui-sans-serif, system-ui, sans-serif", fontSize: "1.1875rem", fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.015em" }
  figure: { fontFamily: "Geologica, Onest, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(2rem, 4.6vw, 3.75rem)", fontWeight: 500, lineHeight: 1, letterSpacing: "-0.035em", fontFeature: "tnum, lnum" }
  lead: { fontFamily: "Onest, ui-sans-serif, system-ui, sans-serif", fontSize: "clamp(1.2rem, 1.7vw, 1.45rem)", fontWeight: 400, lineHeight: 1.42, letterSpacing: "-0.012em" }
  body: { fontFamily: "Onest, ui-sans-serif, system-ui, sans-serif", fontSize: "1.0625rem", fontWeight: 400, lineHeight: 1.6 }
  label: { fontFamily: "Onest, ui-sans-serif, system-ui, sans-serif", fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace", fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.6 }
rounded:
  sm: "2px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  nav-h: "68px"
  row: "18px"
  section-top: "clamp(40px, 5vw, 64px)"
  section-bottom: "clamp(64px, 9vw, 120px)"
components:
  button-primary: { backgroundColor: "{colors.ink}", textColor: "{colors.paper}", typography: "{typography.label}", rounded: "{rounded.sm}", padding: "0 20px", height: "46px" }
  button-primary-hover: { backgroundColor: "{colors.accent}", textColor: "{colors.paper}" }
  button-line: { backgroundColor: "transparent", textColor: "{colors.ink}", rounded: "{rounded.sm}", padding: "0 20px", height: "46px" }
  button-line-hover: { backgroundColor: "{colors.ink}", textColor: "{colors.paper}" }
  button-on-field: { backgroundColor: "{colors.field-ink}", textColor: "{colors.field}", rounded: "{rounded.sm}", padding: "0 20px", height: "46px" }
  button-on-field-hover: { backgroundColor: "{colors.signal}", textColor: "{colors.field}" }
  mark: { backgroundColor: "{colors.field}", textColor: "{colors.field-ink}", rounded: "{rounded.sm}", padding: "2px 8px" }
  nav: { backgroundColor: "transparent", textColor: "{colors.field-ink}", height: "{spacing.nav-h}" }
  nav-solid: { backgroundColor: "{colors.paper}", textColor: "{colors.ink}", height: "{spacing.nav-h}" }
  icon-button: { backgroundColor: "transparent", rounded: "{rounded.sm}", size: "40px" }
  code-block: { backgroundColor: "{colors.field}", textColor: "{colors.field-ink}", typography: "{typography.mono}", rounded: "{rounded.sm}", padding: "20px 22px" }
---

# Design System: Abdurahmon Sheralievich

## Overview

**Creative North Star: "The Annual Report"**

The site presents one engineer's record the way a bank reports a year: a deep pine cover that states who and how much, then page after page of ruled tables on cool-white paper, then a pine back cover with the contact details. Facts sit in rows with a key column and a value column. Figures are large, tabular and counted, never decorated.

Density is that of a printed report: generous section spacing, tight rows, one 1240px measure. Everything is flat. The system refuses the dark neon developer portfolio with terminal art, and the cream editorial serif page. Light is the default theme; dark is a toggle that remaps the same token names and keeps both pine fields.

**Key Characteristics:**
- Two full-bleed pine fields (first screen and closing contact band) with paper between them.
- Content as ruled tables: a narrow key column, a wide value column, 1px rules between rows.
- One hue (pine, 165) across field, accent, signal and neutrals; no second accent.
- Geologica for names, headings and figures; Onest for everything read as text; both carry Cyrillic.
- 2px corners, 1px rules, no elevation shadows.

## Colors

A single pine hue at four strengths on a cool-white paper whose neutrals are tinted toward the same hue.

### Primary
- **Pine Field** (`field`): the full-bleed band behind the hero and the contact section. Also the small filled status mark, code blocks in posts, text selection and the resume's heading colour. `field-2` is its one lighter step, used for hover on pine-filled controls.
- **Pine Accent** (`accent`): text links, the primary button's hover, focus rings and the caret on paper. In dark theme it flips to a light mint so it still reads on dark paper.
- **Mint Signal** (`signal`): on the field only. Key figures, hover on field buttons and contact rows, focus rings on the field, and a 55% wash under highlighted metrics.

### Neutral
- **Cool Paper** (`paper`, `paper-2`): page background, and one step darker for hovered project rows, inline code and the desk behind the resume sheet.
- **Pine Ink** (`ink`, `ink-2`): body text and headings; the secondary step for key columns, dates, notes and stack lists.
- **Rules** (`rule`, `rule-strong`): ink at 16% between rows; full ink above each section and under the post header.
- **Field Ink** (`field-ink`, `field-ink-2`, `field-rule`): near-white text on the field, 76% for secondary text, 26% for rules and outlined button borders.
- The GitHub heatmap uses its own five-step pine ramp (`--heat-0` to `--heat-4`); it belongs to that chart and to nothing else.

### Named Rules
**The Two Fields Rule.** Pine fills a full-width band exactly twice per page: the opening screen and the closing contact band. Between them pine appears only at small scale (mark, code block, selection, links).

**The Signal Stays On The Field Rule.** Mint is a figure-and-state colour for pine surfaces. On paper its only use is the faint wash under a highlighted metric.

## Typography

**Display Font:** Geologica (with Onest, ui-sans-serif, system-ui)
**Body Font:** Onest (with ui-sans-serif, system-ui)
**Label/Mono Font:** JetBrains Mono, for code in blog posts only

**Character:** Two closely related geometric sans faces, one slightly wider and firmer for names and numbers, one quieter for reading. The contrast is weight and size, not style.

### Hierarchy
- **Display** (600, clamp(2.6rem, 8.4vw, 6rem), 0.96, -0.04em): the name on the hero. The contact heading and post titles use the same face one step down, topping out at 4.5rem and 4rem.
- **Headline** (600, clamp(1.7rem, 2.6vw, 2.35rem), 1.08, -0.028em): section headings, balanced wrapping.
- **Title** (600, 1.1875rem, 1.3, -0.015em): row titles, project names, sub-headings inside a section.
- **Figure** (500, clamp(2rem, 4.6vw, 3.75rem), 1, tabular lining numerals): key figures on the field; GitHub stats repeat it at 1.75rem.
- **Lead** (400, clamp(1.2rem, 1.7vw, 1.45rem), 1.42): the first paragraph of a section or post, and the hero and contact leads.
- **Body** (400, 1.0625rem, 1.6): running text, capped at 64 to 68ch. Post bodies run at 1.125rem / 1.65.
- **Label** (400, 0.9375rem, 1.5; 500 on buttons): key columns, dates, organisations, notes, nav links. Stack lists and the footer drop to 0.875rem.

### Named Rules
**The Sentence Case Rule.** No uppercase labels, no tracked-out small caps, no label sitting above a heading. Hierarchy comes from the key column and from weight.

**The Counted Figure Rule.** Any number shown as a figure is Geologica 500 with tabular lining numerals. A claim inside running text is marked with weight 600 and the mint wash, not with a bigger size.

## Layout

One container (max 1240px, gutter clamp(20px, 4vw, 48px)). Each section opens with a full-ink 1px rule and splits 4fr / 8fr: the heading sticks under the nav in the left column while the table scrolls on the right. Wide sections (projects) stack the heading above a three-column 3 / 6 / 3 row. Rows inside a table split 3fr / 9fr with 18px vertical padding. Sections pad clamp(40px, 5vw, 64px) above and clamp(64px, 9vw, 120px) below. The hero is a full 100svh column with the figures pinned to its bottom edge in four ruled columns.

Breakpoints: section grids and project rows collapse to one column at 860px; the nav becomes a full-screen paper sheet of display-weight links at 920px; figures go two-up at 720px; rows stack key above value at 620px.

## Elevation & Depth

Flat. There is no elevation shadow anywhere, in either theme. Separation is done with 1px rules, the paper-to-field change, and one tonal step (`paper-2`) for hover and inline code. The fixed nav gains a paper background and a hairline when it leaves the field; it does not gain a shadow or blur.

### Named Rules
**The Rule Not Shadow Rule.** Anything that needs separating gets a 1px rule or a tonal step. The only `box-shadow` in the build is the inset wash under a metric, which is a highlight, not depth.

## Shapes

Corners are 2px on every control and filled block (buttons, icon buttons, mark, code, focus ring) and square on everything structural: rows, fields, the nav, heatmap cells. Borders are 1px. List markers on the site are 8px horizontal dashes. The resume sheet is a literal A4 page (210mm, white, hairline border) and carries its own print-sized values, including a 1.5pt pine rule under the header and small round bullet dots.

## Components

### Buttons
- **Shape:** near-square (2px), 46px tall, 20px side padding, 16px icon before the label, label 0.9375rem / 500.
- **Primary:** ink fill with paper text on paper; hover fills with the pine accent. On the field it inverts to field-ink fill with pine text; hover fills with mint.
- **Line:** transparent with a 1px border (full ink on paper, 26% field-ink on the field); hover fills solid in the text colour.
- **States:** colour transitions run 0.2s on `cubic-bezier(0.16, 1, 0.3, 1)`; active nudges down 1px; focus is a 2px outline offset 3px (accent on paper, mint on the field).

### Ruled rows
The system's main container. A list bounded by a bottom rule, each row opened by a top rule; key column in `ink-2` label type, value column with a title, a meta line and a dash-marked list. Linked rows (projects) tint to `paper-2` across the row and 12px beyond it, and their arrow shifts 2px up and right and takes the accent. Unlinked rows have no hover state.

### Key figures
Four columns on the field separated by 26% rules: a mint figure above a two-line label. On load each column wipes in left to right, staggered 70ms, after the name, lead and actions rise 18px in sequence. Reduced motion removes all of it.

### Navigation
Fixed, 68px. Over the field it is transparent with field-ink text and the name hidden; after 24px of scroll it becomes paper with ink text, a hairline, and the name fades in at the left. Links underline by a 1px line growing from the left. Language is a two-button text toggle with the active one underlined; theme and menu are 40px icon buttons that tint 10% of the current colour on hover.

### Contact rows
The ruled row on the field: label, value in Geologica 500, arrow. The whole row is the link; hover turns text and arrow mint.

### Mark and text link
The mark is a small pine tag (2px corners, 0.75rem / 500) beside a title, used for a current state. Text links are accent-coloured, weight 500, with an underline that appears on hover.

### Engraving
The opening field carries one guilloché rosette, the interlaced line engraving of banknotes and share certificates. Four braided rings in mint hairlines (0.7px, 40% opacity) sit right of the text, masked out toward the copy and the figures, and counter-rotate over several minutes; reduced motion holds them still. It appears on the first screen only, never on paper and never behind body text.

## Do's and Don'ts

### Do:
- **Do** put new facts in a ruled row with a key column before reaching for any other container.
- **Do** keep every colour on the pine hue (165) and take it from the tokens; both themes remap the same names.
- **Do** set figures in Geologica 500 with tabular lining numerals, mint on the field and ink on paper.
- **Do** keep corners at 2px and separators at 1px.
- **Do** make the whole row the link when a row links somewhere, and give only linked rows a hover.
- **Do** write every string in English and Russian and check the Russian line lengths in the key column.

### Don't:
- **Don't** add a third pine band, or put mint on paper as a text or fill colour.
- **Don't** add elevation shadows, blur, gradients or glow to any surface.
- **Don't** wrap content in bordered or filled cards, or round anything past 2px into a pill.
- **Don't** set uppercase tracked labels, or use the mono face outside code.
- **Don't** introduce a second accent hue, a serif, or terminal-style decoration.
- **Don't** let the resume sheet inherit the theme: it stays white with its own ink in both themes and in print.
