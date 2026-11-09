import { useState } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  BadgeCheck,
  Blocks,
  BookOpen,
  Check,
  ChevronDown,
  ExternalLink,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  PenTool,
  ShoppingBag,
  Sparkles,
  Store,
  X,
} from 'lucide-react';

const skills = [
  {
    number: '01',
    title: 'E-commerce website development',
    description: 'Building clear, welcoming online shopping experiences that make it easier for customers to explore.',
    icon: ShoppingBag,
  },
  {
    number: '02',
    title: 'Online store management',
    description: 'Understanding the thoughtful details that help an online store feel organised and easy to use.',
    icon: Store,
  },
  {
    number: '03',
    title: 'Website design',
    description: 'Creating clean, considered layouts with a focus on approachable browsing and visual clarity.',
    icon: PenTool,
  },
  {
    number: '04',
    title: 'Product management',
    description: 'Presenting products and their information in a way that feels simple to browse and understand.',
    icon: PackageCheck,
  },
  {
    number: '05',
    title: 'Digital business understanding',
    description: 'Exploring how useful digital experiences can support businesses as they grow their online presence.',
    icon: Blocks,
  },
];

function Brand({ onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick} aria-label="Fatima Khan, home">
      <span className="brand-mark">F<span>.</span></span>
      <span className="brand-name">Fatima Khan</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const links = [
    ['About', '#about'],
    ['Expertise', '#expertise'],
    ['Work', '#work'],
    ['Education', '#education'],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand onClick={closeMenu} />
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Abstract illustration of an online storefront">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-sparkle sparkle-one"><Asterisk size={23} strokeWidth={1.4} /></div>
      <div className="art-sparkle sparkle-two"><Sparkles size={20} strokeWidth={1.4} /></div>
      <div className="art-caption caption-top"><span className="caption-dot" /> A little digital magic</div>
      <div className="store-window">
        <div className="window-topbar">
          <div className="window-dots"><i /><i /><i /></div>
          <div className="window-address"><span /> omnagora.com</div>
          <ArrowUpRight size={13} />
        </div>
        <div className="store-content">
          <div className="store-nav"><span className="store-logo">omna<span>gora</span></span><div className="store-nav-lines"><i /><i /></div><ShoppingBag size={15} /></div>
          <div className="store-hero-copy"><span className="store-eyebrow">A CURATED EVERYDAY</span><strong>Find your<br /><em>everyday</em> lovely.</strong><span className="store-shop">DISCOVER THE COLLECTION <ArrowRight size={11} /></span></div>
          <div className="store-product product-a"><span className="product-shape shape-bottle" /><span className="product-line" /></div>
          <div className="store-product product-b"><span className="product-shape shape-vase" /><span className="product-line" /></div>
          <div className="store-product product-c"><span className="product-shape shape-jar" /><span className="product-line" /></div>
          <div className="store-bottom"><span>Thoughtful finds, made for you.</span><span className="store-arrows">← &nbsp; →</span></div>
        </div>
      </div>
      <div className="art-caption caption-bottom"><span className="caption-star">✳</span> Thoughtfully made, always.</div>
      <div className="art-stamp"><span>DESIGNED<br />WITH CARE</span><Asterisk size={16} /></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="eyebrow-line" /> HELLO, AND WELCOME</div>
        <h1>Hi, I’m<br /><span>Fatima Khan.</span></h1>
        <p className="hero-role">E-commerce Website Specialist <span className="role-divider">|</span><br className="mobile-break" /> Digital Enthusiast</p>
        <p className="hero-description">I’m passionate about creating modern online stores and thoughtful digital experiences that help businesses find their place in the online world.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">View my work <ArrowUpRight size={16} /></a>
          <a className="button button-text" href="#contact">Contact me <ArrowDownRight size={17} /></a>
        </div>
        <a className="scroll-hint" href="#about"><span className="scroll-icon"><ArrowDown size={14} /></span> SCROLL TO EXPLORE</a>
      </div>
      <HeroArtwork />
      <div className="hero-bottom-note"><span>01 / 05</span><span>LAHORE, PAKISTAN</span></div>
    </section>
  );
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span className="label-rule" />{children}</div>;
}

function About() {
  return (
    <section className="about-section section-wrap" id="about">
      <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
      <div className="about-grid">
        <h2 className="section-heading">Building online<br />experiences with <em>intention.</em></h2>
        <div className="about-copy">
          <p>I’m Fatima Khan, based in Lahore, Pakistan. I am passionate about e-commerce and creating modern online shopping experiences. I enjoy exploring digital solutions and developing user-friendly e-commerce websites that help businesses build their online presence.</p>
          <div className="about-location"><MapPin size={16} /><span>Lahore, Pakistan</span><span className="location-separator">·</span><span>Digital enthusiast</span></div>
        </div>
      </div>
      <div className="about-ribbon"><span>CURIOUS BY NATURE</span><Asterisk size={15} /><span>THOUGHTFUL BY DESIGN</span><Asterisk size={15} /><span>ALWAYS LEARNING</span><Asterisk size={15} /></div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <div className="section-wrap expertise-inner">
        <SectionLabel number="02">WHAT I’M EXPLORING</SectionLabel>
        <div className="expertise-intro">
          <h2 className="section-heading">My areas of<br /><em>interest.</em></h2>
          <p>A growing set of interests centred around making online business feel more human, useful and easy to navigate.</p>
        </div>
        <div className="skills-grid">
          {skills.map(({ number, title, description, icon: Icon }) => (
            <article className="skill-card" key={number}>
              <div className="skill-card-top"><span className="skill-number">{number}</span><span className="skill-icon"><Icon size={20} strokeWidth={1.6} /></span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight className="skill-arrow" size={17} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview() {
  return (
    <div className="project-preview" aria-label="Illustrated preview of the Omnagora online store">
      <div className="preview-browser">
        <div className="preview-browser-top"><div className="window-dots"><i /><i /><i /></div><div className="preview-url"><Globe2 size={11} /> https://omnagora.com</div><span className="preview-fullscreen"><ArrowUpRight size={12} /></span></div>
        <div className="preview-page">
          <div className="preview-site-nav"><span className="preview-logo">omna<span>gora</span></span><div className="preview-navlinks"><span>Home</span><span>Shop</span><span>About</span></div><div className="preview-bag"><ShoppingBag size={13} /></div></div>
          <div className="preview-hero">
            <div className="preview-hero-text"><span className="preview-kicker">A MORE THOUGHTFUL WAY TO SHOP</span><strong>Little things.<br /><em>Lovely living.</em></strong><span className="preview-button">EXPLORE THE SHOP <ArrowRight size={10} /></span></div>
            <div className="preview-objects"><div className="object object-vase"><span /></div><div className="object object-candle"><span /></div><div className="object object-pot"><span /></div><div className="object-leaf leaf-one" /><div className="object-leaf leaf-two" /></div>
          </div>
          <div className="preview-featured"><span className="featured-label">A FEW FAVOURITES</span><div className="featured-products"><div className="featured-product"><i className="mini-product mini-one" /><span>Everyday essentials</span></div><div className="featured-product"><i className="mini-product mini-two" /><span>Made for slow days</span></div><div className="featured-product"><i className="mini-product mini-three" /><span>Small joys, often</span></div></div></div>
        </div>
      </div>
      <div className="preview-tag"><span className="tag-dot" /> FEATURED PROJECT</div>
      <div className="preview-decoration decoration-one" />
      <div className="preview-decoration decoration-two" />
    </div>
  );
}

function Project() {
  return (
    <section className="project-section section-wrap" id="work">
      <SectionLabel number="03">A PROJECT I’M PROUD TO SHARE</SectionLabel>
      <div className="project-layout">
        <ProjectPreview />
        <div className="project-copy">
          <div className="project-kicker"><span>FEATURED PROJECT</span><span className="project-kicker-line" /></div>
          <h2 className="section-heading">Meet<br /><em>Omnagora.</em></h2>
          <p>An e-commerce website project showcasing my interest and skills in online business and digital commerce. A space to explore the possibilities of a thoughtful online store.</p>
          <div className="project-domain"><Globe2 size={15} /><span>omnagora.com</span><BadgeCheck size={14} /></div>
          <a className="button button-dark" href="https://omnagora.com" target="_blank" rel="noreferrer">Visit website <ExternalLink size={15} /></a>
          <div className="project-footnote"><span><Layers3 size={14} /></span> A personal project in digital commerce</div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-wrap education-inner">
        <SectionLabel number="04">EDUCATION & ROOTS</SectionLabel>
        <div className="education-layout">
          <div><h2 className="section-heading">Grounded in<br /><em>learning.</em></h2><p className="education-intro">Every journey starts somewhere. Mine is shaped by curiosity, a love of digital commerce, and a commitment to keep learning.</p></div>
          <article className="education-card">
            <div className="education-card-icon"><BookOpen size={22} strokeWidth={1.5} /></div>
            <div className="education-card-content"><span className="education-kicker">EDUCATION</span><h3>Matric Pass</h3><div className="education-place"><MapPin size={14} /> Lahore, Pakistan</div></div>
            <span className="education-mark"><Asterisk size={24} strokeWidth={1.2} /></span>
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const message = form.get('message')?.toString().trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    setSubmitted(true);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <SectionLabel number="05">LET’S CONNECT</SectionLabel>
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="contact-spark"><Asterisk size={19} /></span>
            <h2 className="section-heading">Have a project<br />in mind? <em>Let’s talk.</em></h2>
            <p>I’m always interested in learning about new ideas and thoughtful digital projects. Send a note and let’s start a conversation.</p>
            <div className="contact-note"><Mail size={15} /><span>No email address was provided, so this form opens your email app with your message ready to send.</span></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" placeholder="What should I call you?" autoComplete="name" required />
            <label htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" placeholder="Tell me a little about what you have in mind..." rows="3" required />
            <button className="button button-dark form-submit" type="submit">{submitted ? 'Open your email app' : 'Send a message'} {submitted ? <Check size={15} /> : <ArrowUpRight size={16} />}</button>
            <p className="form-privacy">Your details are used only to prepare this message in your email app.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <Brand />
        <span className="footer-copy">© 2026 Fatima Khan. All Rights Reserved.</span>
        <a className="back-top" href="#home">Back to top <ChevronDown size={14} /></a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Project />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
