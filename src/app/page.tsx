"use client";

import Image from "next/image";
import { ArrowRight, Facebook, Heart, Instagram, Mail, Menu, Phone, ShoppingBag, Sparkles, X } from "lucide-react";
import { FormEvent, useState } from "react";

const navItems = ["Shop all", "Shirts", "Caps", "Custom orders", "About", "Contact"];

const designs = [
  { title: "Rivalry Runs Deeper Than Oil", tag: "Texas pride", tone: "rust" },
  { title: "The Texas Bow", tag: "Made personal", tone: "bow" },
  { title: "Game Day Glitter", tag: "Custom apparel", tone: "glitter" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [notice, setNotice] = useState("");

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("You’re on the sparkle list — thank you!");
    setModalOpen(false);
  }

  return (
    <main>
      <div className="announcement">New designs are on the way. <button onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}>Get first word when they drop</button></div>

      <header className="site-header">
        <button className="icon-button menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={26} /></button>
        <a className="brand" href="#top" aria-label="Smiley's Custom Creations home"><Image src="/images/smiley-logo.png" alt="Smiley's Custom Creations" width={118} height={118} priority /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.slice(0, 4).map((item) => <a key={item} href={item === "Custom orders" ? "#custom" : "#shop"}>{item}</a>)}
        </nav>
        <a className="phone-link icon-button" href="tel:+19039910500" aria-label="Call Smiley's"><Phone size={23} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>Your style.<br />Your statement.<em>Made personal.</em></h1>
          <p className="hero-text">Custom shirts, caps, tumblers and gifts from Christina Smiley in Texas, made with a little extra sparkle.</p>
          <p className="eyebrow hero-eyebrow"><Sparkles size={16} /> Made with a little extra sparkle</p>
          <div className="hero-actions">
            <a className="button button-pink" href="#shop">Shop the collection <ArrowRight size={18} /></a>
            <a className="button button-outline" href="#custom">Request a custom design</a>
          </div>
          <div className="hero-meta"><span>✦ Texas made</span><span>♥ Made to order</span><span>✦ One-of-a-kind</span></div>
        </div>
        <div className="hero-visual">
          <div className="roundel"><Image src="/images/smiley-logo.png" alt="" width={520} height={520} priority /></div>
        </div>
      </section>

      <section className="brand-banner" aria-label="Smiley's Custom Creations banner">
        <a href="#shop" aria-label="Shop Smiley's Custom Creations">
          <Image
            src="/images/smileys-banner.png"
            alt="Smiley's Custom Creations — let your imagination become our creation"
            width={2048}
            height={768}
            sizes="(max-width: 900px) 100vw, 1200px"
          />
        </a>
      </section>

      <section className="shop-section" id="shop">
        <div className="section-heading"><p className="eyebrow shop-eyebrow"><Sparkles size={16} /> Shop Smiley's</p><h2>Find your fit</h2><span className="scribble" /></div>
        <div className="category-grid">
          <article className="category-card shirts"><div><span>01</span><h3>Shirts</h3><p>Tees with extra personality.</p><a href="#custom">Shop shirts <ArrowRight size={17} /></a></div></article>
          <article className="category-card caps"><div><span>02</span><h3>Caps</h3><p>Top it off your way.</p><a href="#custom">Shop caps <ArrowRight size={17} /></a></div></article>
          <article className="category-card drinkware"><div><span>03</span><h3>Drinkware &amp; gifts</h3><p>Sip, sparkle and make it yours.</p><a href="#custom">Shop drinkware <ArrowRight size={17} /></a></div></article>
        </div>
      </section>

      <section className="designs-section">
        <div className="section-heading inverse"><p className="eyebrow design-eyebrow"><Sparkles size={16} /> A new favorite</p><h2>Fresh off the<br />design table</h2><span className="scribble" /><p className="section-intro">Custom, unique, personal. Always a reason to smile. A few recent Smiley&apos;s designs.</p></div>
        <div className="design-grid">
          {designs.map((design) => <article className={`design-card ${design.tone}`} key={design.title}><div className="design-art"><b>{design.tone === "rust" ? "RIVALRY" : design.tone === "bow" ? "TEXAS" : "GAME DAY"}</b><span>{design.tone === "rust" ? "RUNS DEEPER THAN OIL" : design.tone === "bow" ? "BOWS & BLING" : "GLITTER & GRIT"}</span></div><div className="design-card-footer"><div><small>{design.tag}</small><h3>{design.title}</h3></div><button aria-label={`View ${design.title}`}><ArrowRight size={18} /></button></div></article>)}
        </div>
        <div className="design-cta"><p>Looking for something unique? Get in touch</p><a href="#custom" className="button button-pink">Request a custom design</a></div>
      </section>

      <section className="custom-section" id="custom">
        <div className="custom-copy"><p className="eyebrow dark"><Heart size={16} fill="currentColor" /> Your idea, your way</p><h2>Have an idea?<br />Let&apos;s make it.</h2><span className="scribble" /><p>Birthday crews, family trips, team days or a shirt that&apos;s just for you. Tell Christina what you have in mind and she&apos;ll follow up with the details.</p><a href="mailto:smileyscustomcreations.com@yahoo.com" className="button button-black">Request a custom design <ArrowRight size={18} /></a></div>
        <div className="steps">
          {[{ n: "1", title: "Share your idea", copy: "Pick the item, quantity and sizes, describe the design and add a reference picture if you have one." }, { n: "2", title: "Talk it through", copy: "Christina reaches out by email or phone to confirm the details and pricing with you." }, { n: "3", title: "Wear it proud", copy: "Your piece is made just for you, with love and a little extra sparkle." }].map((step) => <article className="step" key={step.n}><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></article>)}
        </div>
      </section>

      <section className="story-section"><div className="story-mark">♥</div><p className="eyebrow">The heart behind the sparkle</p><h2>Made by Christina,<br />with love</h2><span className="scribble" /><p>Smiley&apos;s Custom Creations is Christina Smiley&apos;s custom shop in Texas, making personalized shirts, caps and more.</p><blockquote>“Making you smile, one design at a time”</blockquote><a href="#custom">More about Smiley&apos;s <ArrowRight size={17} /></a></section>

      <section className="newsletter" id="newsletter"><div><p className="eyebrow dark"><Sparkles size={16} /> Keep in the loop</p><h2>Get first word on<br />new designs</h2><span className="scribble black" /></div><form onSubmit={subscribe}><label htmlFor="email">Email address</label><div className="email-row"><input id="email" type="email" placeholder="you@example.com" required /><button className="button button-black" type="submit">Sign up</button></div><p>By signing up you agree to get emails from Smiley&apos;s Custom Creations. Ask to be removed anytime.</p></form></section>

      <footer><div className="footer-brand"><Image src="/images/smiley-logo.png" alt="Smiley's Custom Creations" width={120} height={120} /><p>Custom shirts, caps, drinkware and gifts, made in Texas. Thank you for supporting small businesses!</p></div><div><h3>Shop</h3>{navItems.slice(0, 4).map((item) => <a href={item === "Custom orders" ? "#custom" : "#shop"} key={item}>{item}</a>)}</div><div><h3>Get in touch</h3><a href="tel:+19039910500"><Phone size={17} />(903) 991-0500</a><a href="mailto:smileyscustomcreations.com@yahoo.com"><Mail size={17} />Email Christina</a><a href="#top"><Facebook size={17} />Smiley&apos;s on Facebook</a><a href="#top"><Instagram size={17} />Follow on Instagram</a></div><p className="copyright">© 2026 Smiley&apos;s Custom Creations.</p></footer>

      {notice && <button className="toast" onClick={() => setNotice("")}>{notice} <X size={16} /></button>}

      {menuOpen && <div className="drawer-overlay" onClick={() => setMenuOpen(false)}><aside className="mobile-drawer" onClick={(e) => e.stopPropagation()}><button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button><Image src="/images/smiley-logo.png" alt="Smiley's Custom Creations" width={132} height={132} /><p>Custom shirts, caps, drinkware and gifts, made in Texas.</p><nav>{navItems.map((item) => <a key={item} href={item === "Custom orders" ? "#custom" : "#shop"} onClick={() => setMenuOpen(false)}>{item}<ArrowRight size={17} /></a>)}</nav><a className="drawer-contact" href="tel:+19039910500"><Phone size={17} />(903) 991-0500</a></aside></div>}

      {!modalOpen && <button className="floating-newsletter" onClick={() => setModalOpen(true)} aria-label="Open newsletter sign up"><Mail size={19} /> Get the sparkle</button>}
      {modalOpen && <div className="modal-backdrop" onClick={() => setModalOpen(false)}><div className="newsletter-modal" onClick={(e) => e.stopPropagation()}><button onClick={() => setModalOpen(false)} aria-label="Close newsletter"><X /></button><Image src="/images/smiley-logo.png" alt="" width={115} height={115} /><h2>A little more sparkle<br />in your inbox</h2><p>Sign up to be first to know when new designs drop and the shop opens.</p><form onSubmit={subscribe}><label htmlFor="modal-email">Email address</label><div className="email-row"><input id="modal-email" type="email" placeholder="you@example.com" required /><button className="button button-pink" type="submit">Sign up</button></div></form></div></div>}
    </main>
  );
}
