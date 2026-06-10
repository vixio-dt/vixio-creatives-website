# ADR-09: Newsletter uses the frozen buyer payload, no simulated success

The newsletter form POSTs the frozen contract `{type:'buyer', contact}` to `/api/contact`, which writes to the existing `buyer_submissions` table and notifies hello@vixiocreatives.com via Resend. This is a real capture path already wired and deployed (the previous design's follow form used it); reusing it costs zero new surface, touches neither `app/api/` nor `lib/supabase.ts`, and keeps every field name frozen.

## Considered options

- mailto: link as the capture path: rejected; a mailto "newsletter" is not a list, loses the address the moment the visitor's mail client misfires, and cannot set expectations on success.
- A third-party list provider: rejected; new dependency, new external surface, and the frozen contract already does the job at current volume. Migration to a proper ESP can happen server-side later without touching the public payload.

## Consequences

Success and error states reflect the actual HTTP response: success copy renders only on `200 {success:true}`, error copy on anything else, with the direct email address as the fallback path. The expectation-setting microcopy (what you get, how often) lives in the copy module per the deck. The honest-fit note: `buyer_submissions` is an internal table name from the product era; the public surface says only "newsletter", which is what the list functionally is.
