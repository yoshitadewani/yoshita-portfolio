'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['Work', '#work'], ['About', '#about'], ['Services', '#services'], ['Contact', '#contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-nav">
    <div className="container nav-inner">
      <a className="wordmark" href="#top" aria-label="Yoshita Dewani home">Yoshita<span>.</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a className="nav-cta" href="#contact">Let&apos;s work <span aria-hidden="true">↗</span></a></nav>
      <button className="mobile-menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s work <span aria-hidden="true">↗</span></a></nav>}
  </header>
}
