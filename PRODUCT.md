# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, hiring managers and tech leads who open the link from a job application (a Telegram or email отклик, or the resume PDF). They are screening many candidates and decide in about a minute whether to reply. They read Russian or English, on a work laptop or a phone.

## Product Purpose

The personal site and resume of Abdurahmon Sheralievich, a senior full-stack engineer (Python backend first) looking for remote roles or roles in Tajikistan. Success is the reader replying: by Telegram, email or LinkedIn, or downloading the resume to pass on.

## Positioning

A backend-focused full-stack engineer with production fintech experience at Alif Bank who also ships complete products alone: more than ten products, of which ten are listed, across Python/FastAPI, PHP/Laravel, Vue and React.

## Operating Context

- Reached from an application message, so the reader already knows the target role and wants confirmation: role, stack, years, employers, proof, contact.
- The resume page is printed to PDF; that PDF is attached to every job application.
- Deployed as a static site to GitHub Pages at ssheralievichd.baselinux.net on every push to `main`.

## Capabilities and Constraints

- SvelteKit 5, prerendered static output; routes `/`, `/resume`, `/blog/[slug]`.
- English and Russian for all copy; both dictionaries share one key set.
- Light and dark themes with a toggle; light is the default (confirmed 2026-10-08).
- Sections stay: about, stack, experience, projects, life, education, blog, contact. Life and interests, live GitHub stats and decorative art may be shortened or simplified; nothing else is removed.
- Wording may be tightened in both languages; no new claims, numbers, employers or technologies.
- The resume must stay one column, text-selectable, ATS-readable and fit a single printed page.

## Brand Commitments

- Name: Abdurahmon Sheralievich. Handle `ssheralievichd` on GitHub, LinkedIn and Telegram.
- Title: Senior Full-Stack Software Engineer.

## Evidence on Hand

- Employment history with dates: fintech startup (Senior Full-Stack Engineer Oct 2025–Jun 2026, Team Lead Jun 2026–present), Alif Bank (Aug 2022–Oct 2024), Formika (Oct 2024–Jan 2025), freelance (2021–2022). `src/lib/data/experience.ts`
- Stated results: 50%+ faster responses on high-traffic endpoints, about 60% faster deployments.
- Ten listed projects with stack tags (a selection, not the full count); six have public links. `src/lib/data/projects.ts`
- Three blog posts. `src/posts/`
- B.Sc. Computer Science, Russian-Tajik Slavonic University, 2020–2024.
- No photo, no testimonials, no client logos, no screenshots of projects. Do not fabricate any.

## Product Principles

- The reader's first screen answers who, what stack, how senior, where from, and how to reply.
- Facts and specifics over adjectives; every claim is one the resume also makes.
- The site and the resume PDF read as one identity.
- Nothing on the page asks for attention it has not earned.
