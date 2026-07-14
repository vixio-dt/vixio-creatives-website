# ADR-13: The single contact CTA string is "Contact"

Every surface with contact intent uses exactly one string: "Contact". Nav link, footer link, studio-page CTA, and the contact page h1 all read "Contact". The previous system used "Start a conversation" as the CTA while the nav said "Contact": two labels for one intent, which the no-duplicate-CTA-intent rule forbids. Of the two, "Contact" is the purely functional verb in the reference register (Play Trailer, Get Tickets, Contact); "Start a conversation" is retired as warm-but-decorative.

## Consequences

The string lives once in the copy module and is imported wherever contact intent appears. The contact page intro line may add factual scope ("For studios, rights holders, and collaborators.") because it is body copy, not a CTA.
