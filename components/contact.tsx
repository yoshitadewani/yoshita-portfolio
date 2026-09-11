'use client'

import { useState } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)
  return <section id="contact" className="contact-section section-pad"><div className="container"><div className="contact-heading"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make something<br /><em>worth remembering.</em></h2><p>Tell me a little about what you&apos;re building, and I&apos;ll get back to you soon.</p></div><div className="contact-layout"><div className="contact-links"><a href="mailto:yoshita.dewani@gmail.com">yoshita.dewani@gmail.com <span>↗</span></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <span>↗</span></a></div><form className="contact-form" action="https://formspree.io/f/xzzrjvqe" method="POST" onSubmit={() => setSent(true)}><label htmlFor="name">Your name<input id="name" name="name" required /></label><label htmlFor="email">Email address<input id="email" name="email" type="email" required /></label><label htmlFor="message">Tell me about the project<textarea id="message" name="message" rows={4} required /></label><button className="button button-light" type="submit">{sent ? 'Message sent — thank you' : 'Send inquiry ↗'}</button></form></div></div></section>
}
