# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Layout: single-context

- **`CONTEXT.md`** at the repo root is the glossary. Read it before exploring.
- **`docs/adr/`** holds Architecture Decision Records, numbered `0001-slug.md` upward. Read ADRs that touch the area you are about to work in.

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Do not drift to synonyms the glossary explicitly avoids.

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-0007 (...) - but worth reopening because..._

## Authority order for this repo

Company Compass v2.0 (9 June 2026, in the company folder one level above this repo) wins all conflicts, then the active restructure brief, then installed skill doctrine, then repo docs. `DESIGN.md` describes the current shipped system; superseded design docs are history, not instruction.
