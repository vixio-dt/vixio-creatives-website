'use client'

import Image from 'next/image'

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image src="/vixio-logo.svg" alt="Vixio Creatives" width={100} height={28} />
        <div className="flex items-center gap-6 text-xs text-slate-500">
          <span>&copy; 2026 Vixio Creatives Ltd</span>
          <span>Hong Kong</span>
        </div>
      </div>
    </footer>
  )
}
