/**
 * Playwright capture for hero logo reveal (Chromium 1280x720).
 * Run with: node scripts/logo-reveal-playwright.mjs
 * Requires dev server at http://localhost:3000
 */
import { chromium } from 'playwright'
import { mkdir, writeFile } from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = '/opt/cursor/artifacts/screenshots'

async function collectState(page) {
  const videoCount = await page.locator('video').count()
  const canvasCount = await page.locator('canvas').count()

  let videoInDom = videoCount > 0
  let canvasInDom = canvasCount > 0
  let videoVisible = false
  let canvasVisible = false
  let paused = null
  let readyState = null
  let currentTime = null
  let duration = null
  let sources = []
  let networkState = null
  let heroSummary = ''

  if (videoInDom) {
    const v = page.locator('video').first()
    videoVisible = await v.isVisible().catch(() => false)
    paused = await v.evaluate((el) => el.paused).catch(() => null)
    readyState = await v.evaluate((el) => el.readyState).catch(() => null)
    currentTime = await v.evaluate((el) => el.currentTime).catch(() => null)
    duration = await v.evaluate((el) => el.duration).catch(() => null)
    networkState = await v.evaluate((el) => el.networkState).catch(() => null)
    sources = await v
      .evaluate((el) =>
        Array.from(el.querySelectorAll('source')).map((s) => ({
          src: s.getAttribute('src'),
          type: s.getAttribute('type'),
        }))
      )
      .catch(() => [])
  }

  if (canvasInDom) {
    const c = page.locator('canvas').first()
    canvasVisible = await c.isVisible().catch(() => false)
  }

  heroSummary = await page
    .evaluate(() => {
      const section = document.querySelector('section')
      if (!section) return 'No <section> found.'
      const v = section.querySelector('video')
      const canvases = section.querySelectorAll('canvas')
      const h1 = section.querySelector('h1')
      const parts = []
      parts.push(`Headline: "${h1?.textContent?.trim().slice(0, 80) ?? 'none'}"`)
      if (v) {
        parts.push(
          `Video: opacity/computed — ${getComputedStyle(v).opacity}, dimensions ${Math.round(v.getBoundingClientRect().width)}×${Math.round(v.getBoundingClientRect().height)}`
        )
      } else {
        parts.push('Video: none in hero section')
      }
      parts.push(`Canvas count in hero: ${canvases.length}`)
      return parts.join(' | ')
    })
    .catch((e) => String(e))

  return {
    videoInDom,
    canvasInDom,
    videoVisible,
    canvasVisible,
    paused,
    readyState,
    currentTime,
    duration,
    networkState,
    sources,
    heroSummary,
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  })
  const page = await context.newPage()

  const failed = []
  page.on('requestfailed', (req) => {
    const u = req.url()
    if (u.includes('vixio-logo-animation') || u.includes('.webm') || u.includes('.mp4')) {
      failed.push({ url: u, failure: req.failure()?.errorText })
    }
  })

  await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 60000 })

  const report = { steps: [], videoRequestFailures: failed }

  const steps = [
    { label: 'reveal-2s', waitMs: 2000 },
    { label: 'reveal-5s', waitMs: 3000 },
    { label: 'reveal-10s', waitMs: 5000 },
    { label: 'reveal-12s', waitMs: 2000 },
  ]

  for (const step of steps) {
    await new Promise((r) => setTimeout(r, step.waitMs))
    const state = await collectState(page)
    const path = `${OUT_DIR}/${step.label}.png`
    await page.screenshot({ path, fullPage: false })
    report.steps.push({ file: step.label + '.png', elapsedLabel: step.label, ...state })
  }

  await browser.close()

  const outJson = `${OUT_DIR}/logo-reveal-report.json`
  await writeFile(outJson, JSON.stringify(report, null, 2), 'utf8')
  console.log(JSON.stringify(report, null, 2))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
