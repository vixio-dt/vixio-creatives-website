# ADR-14: Centralized typed copy module, locale-ready

Every visible string lives in `lib/copy.ts`, typed by a `SiteCopy` interface, and in `lib/slate.ts` for slate content; components import strings and never define them. This makes the Section 6 ban scans mechanical (two files cover all public copy plus slate) and keeps Traditional and Simplified Chinese unblocked: a future locale is a parallel module (`lib/copy.zh-Hant.ts`) implementing the same `SiteCopy` interface, selected by a locale switch that does not exist yet and is deliberately not built now.

## Considered options

- An i18n framework (next-intl, react-i18next) now: rejected; zero locales beyond English ship today, and a framework would add runtime surface for a hypothetical. The typed-interface pattern is the smallest thing that does not block it.
- Per-component strings with a lint rule: rejected; scanning N components is fragile versus scanning two files.

## Consequences

Exceptions to centralization, documented: the frozen API route's server-side strings (`app/api/contact/route.ts`) stay untouched per the frozen contract, and metadata exports read from the copy module. The ban grep targets `lib/copy.ts` and `lib/slate.ts` and must return zero hits before any commit touching copy.
