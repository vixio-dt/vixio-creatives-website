import { describe, it, expect, vi, beforeEach } from 'vitest'

// ---------------------------------------------------------------------------
// Mocks must be declared at module scope before any imports of the module
// under test. Vitest hoists vi.mock calls to the top.
// ---------------------------------------------------------------------------

const mockInsert = vi.fn()
const mockFrom = vi.fn(() => ({ insert: mockInsert }))

vi.mock('@/lib/supabase', () => ({
  getSupabase: () => ({ from: mockFrom }),
}))

const mockEmailsSend = vi.fn()

vi.mock('resend', () => ({
  Resend: class {
    emails = { send: mockEmailsSend }
  },
}))

// Import the route under test after mocks are declared
import { POST } from '@/app/api/contact/route'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeRequest(body: unknown): Request {
  return new Request('http://test/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
}

function makeRawRequest(raw: string): Request {
  return new Request('http://test/api/contact', {
    method: 'POST',
    body: raw,
    headers: { 'Content-Type': 'application/json' },
  })
}

// ---------------------------------------------------------------------------
// Reset mocks between tests
// ---------------------------------------------------------------------------

beforeEach(() => {
  mockInsert.mockReset()
  mockFrom.mockReset()
  mockEmailsSend.mockReset()

  // Default: from() returns { insert }
  mockFrom.mockReturnValue({ insert: mockInsert })
  // Default: insert succeeds
  mockInsert.mockResolvedValue({ error: null })
  // Default: email send succeeds
  mockEmailsSend.mockResolvedValue({})
})

// ---------------------------------------------------------------------------
// Invalid JSON
// ---------------------------------------------------------------------------

describe('POST /api/contact — invalid JSON', () => {
  it('returns 400 with {error:"Invalid JSON"}', async () => {
    const res = await POST(makeRawRequest('not-json'))
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json).toEqual({ error: 'Invalid JSON' })
  })
})

// ---------------------------------------------------------------------------
// Invalid form type
// ---------------------------------------------------------------------------

describe('POST /api/contact — invalid type', () => {
  it('returns 400 for unknown type', async () => {
    const res = await POST(makeRequest({ type: 'unknown' }))
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toBeTruthy()
  })

  it('returns 400 when type is missing', async () => {
    const res = await POST(makeRequest({ name: 'Alice' }))
    expect(res.status).toBe(400)
  })
})

// ---------------------------------------------------------------------------
// Buyer submissions
// ---------------------------------------------------------------------------

describe('POST /api/contact — buyer', () => {
  it('returns 400 when contact is missing', async () => {
    const res = await POST(makeRequest({ type: 'buyer' }))
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toBeTruthy()
  })

  it('returns 400 when contact is empty string', async () => {
    const res = await POST(makeRequest({ type: 'buyer', contact: '' }))
    expect(res.status).toBe(400)
  })

  it('inserts {contact} into buyer_submissions and returns 200 success', async () => {
    const res = await POST(makeRequest({ type: 'buyer', contact: 'buyer@example.com' }))
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json).toEqual({ success: true })

    // Verify the correct table was targeted
    expect(mockFrom).toHaveBeenCalledWith('buyer_submissions')
    // Verify the exact insert payload
    expect(mockInsert).toHaveBeenCalledWith({ contact: 'buyer@example.com' })
  })

  it('returns 500 and does not attempt email send when insert errors', async () => {
    mockInsert.mockResolvedValueOnce({ error: { message: 'db error' } })

    const res = await POST(makeRequest({ type: 'buyer', contact: 'buyer@example.com' }))
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json).toEqual({ error: 'Failed to submit' })

    // Email must not be sent when the DB insert fails
    expect(mockEmailsSend).not.toHaveBeenCalled()
  })
})

// ---------------------------------------------------------------------------
// Creator submissions
// ---------------------------------------------------------------------------

describe('POST /api/contact — creator', () => {
  it('returns 400 when name is missing', async () => {
    const res = await POST(
      makeRequest({ type: 'creator', idea: 'Great idea', contact: 'c@example.com' }),
    )
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toBeTruthy()
  })

  it('returns 400 when idea is missing', async () => {
    const res = await POST(
      makeRequest({ type: 'creator', name: 'Alice', contact: 'c@example.com' }),
    )
    expect(res.status).toBe(400)
  })

  it('returns 400 when contact is missing', async () => {
    const res = await POST(
      makeRequest({ type: 'creator', name: 'Alice', idea: 'Great idea' }),
    )
    expect(res.status).toBe(400)
  })

  it('inserts full creator row into creator_submissions and returns 200 success', async () => {
    const payload = {
      type: 'creator',
      name: 'Alice',
      portfolio: 'https://alice.example.com',
      idea: 'A short film about memory',
      contact: 'alice@example.com',
    }

    const res = await POST(makeRequest(payload))
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json).toEqual({ success: true })

    expect(mockFrom).toHaveBeenCalledWith('creator_submissions')
    expect(mockInsert).toHaveBeenCalledWith({
      name: 'Alice',
      portfolio: 'https://alice.example.com',
      idea: 'A short film about memory',
      contact: 'alice@example.com',
    })
  })

  it('stores null for portfolio when omitted', async () => {
    const res = await POST(
      makeRequest({
        type: 'creator',
        name: 'Bob',
        idea: 'Documentary',
        contact: 'bob@example.com',
      }),
    )
    expect(res.status).toBe(200)
    expect(mockInsert).toHaveBeenCalledWith({
      name: 'Bob',
      portfolio: null,
      idea: 'Documentary',
      contact: 'bob@example.com',
    })
  })

  it('returns 500 and does not attempt email send when insert errors', async () => {
    mockInsert.mockResolvedValueOnce({ error: { message: 'db error' } })

    const res = await POST(
      makeRequest({
        type: 'creator',
        name: 'Charlie',
        idea: 'A feature',
        contact: 'charlie@example.com',
      }),
    )
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json).toEqual({ error: 'Failed to submit' })

    expect(mockEmailsSend).not.toHaveBeenCalled()
  })
})
