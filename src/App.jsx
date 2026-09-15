import { useState } from 'react'
import { ArrowUpRight, Menu, X, Camera, Mail, Play, Plus } from 'lucide-react'
import { services, projects, events, team } from './data/content'

const nav = ['About', 'Services', 'Work', 'Events', 'Team']

function Eyebrow({ children }) { return <div className="eyebrow"><span>✦</span>{children}</div> }
function Button({ children, href = '#contact', outline = false }) { return <a className={`button ${outline ? 'button-outline' : ''}`} href={href}>{children}<ArrowUpRight size={16} /></a> }
function SectionTitle({ eyebrow, title, copy, light = false }) { return <div className={`section-title ${light ? 'light' : ''}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div> }

export default function App() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const close = () => setOpen(false)
  const submitContact = (event) => { event.preventDefault(); setSent(true) }
  return <div className="site-shell">
    <header className={`navbar ${open ? 'is-open' : ''}`}>
      <a className="wordmark" href="#top" onClick={close}><span>ATRI</span> VERSE<span className="dot">.</span></a>
      <nav className="desktop-nav">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      <Button href="#contact">Let's create</Button>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && <nav className="mobile-nav">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}<ArrowUpRight size={20} /></a>)}<a href="#contact" onClick={close}>Start a collaboration <ArrowUpRight size={20} /></a></nav>}
    </header>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy">
          <Eyebrow>Entertainment / Production / Experiences</Eyebrow>
          <h1>We make<br /><em>the moment.</em></h1>
          <p className="hero-intro">ATRI VERSE is a creative entertainment organisation bringing talent, media, events and ideas together under one growing platform.</p>
          <div className="hero-actions"><Button href="#work">Explore our work</Button><a className="text-link" href="#about">Discover Atriverse <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="hero-visual"><img src="/assets/crowd-lights.jpg" alt="Crowd under warm concert lights" /><div className="hero-stamp"><span>AV</span><small>Creative<br />ecosystem</small></div><div className="hero-caption"><span>01 / 04</span><span>Live experiences<br />with a point of view</span></div></div>
        <div className="hero-bottom"><span>Scroll to explore</span><span className="line" /><span>Chennai · Tamil Nadu</span></div>
      </section>

      <section className="statement section-pad" id="about"><div className="statement-mark">✦</div><h2>We create more than events.<br /><span>We create experiences.</span></h2><div className="statement-foot"><p>What began as a creative initiative is growing into a structured organisation for entertainment, production, events and the people who make them possible.</p><a className="text-link" href="#services">How we are built <ArrowUpRight size={15} /></a></div></section>

      <section className="about-block section-pad"><div className="about-grid"><SectionTitle eyebrow="01 / Who we are" title="A creative universe, built to move." copy="Atriverse connects the energy of a live event with the craft of production and the imagination of a creative studio." /><div className="about-aside"><div className="big-stat">∞<span>room for ideas</span></div><p>We bring together performers, creators, organisers, designers and production talent to build work that is considered, collaborative and memorable.</p><Button href="#contact" outline>Work with us</Button></div></div></section>

      <section className="services section-pad" id="services"><SectionTitle eyebrow="02 / What we do" title="Many disciplines.<br />One ecosystem." copy="A flexible creative team for the moments that matter." /><div className="service-list">{services.map(service => <a className="service-row" href="#contact" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight className="service-arrow" /></a>)}</div></section>

      <section className="work section-pad" id="work"><div className="work-head"><SectionTitle eyebrow="03 / Selected work" title="Made to be remembered." /><a className="text-link" href="#contact">View all work <ArrowUpRight size={15} /></a></div><div className="project-grid">{projects.map((project, index) => <a className={`project-card project-${index + 1}`} href="#contact" key={project.number}><div className="project-image"><img src={project.image} alt={project.title} /><span className="project-play"><Play size={15} fill="currentColor" /></span></div><div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div><h3>{project.title}</h3></a>)}</div></section>

      <section className="events section-pad" id="events"><div className="events-intro"><SectionTitle eyebrow="04 / Events & moments" title="The room is yours." copy="From cultural celebrations to high-energy performances, we turn a brief into an atmosphere people carry with them." /><Button href="#contact">Plan an event</Button></div><div className="event-list">{events.map((event, index) => <a className="event-row" href="#contact" key={event.name}><span className="event-index">0{index + 1}</span><img src={event.image} alt={event.name} /><div><span>{event.type}</span><h3>{event.name}</h3><small>{event.location} · {event.date}</small></div><ArrowUpRight /></a>)}</div></section>

      <section className="network section-pad"><div className="network-top"><SectionTitle eyebrow="05 / The network" title="Everything starts with people." light /><p>From dancers and hosts to editors, photographers and writers — the verse is built by the people inside it.</p></div><div className="marquee"><div>Performers <i>✦</i> Creators <i>✦</i> Dancers <i>✦</i> Designers <i>✦</i> Editors <i>✦</i> Photographers <i>✦</i> </div></div><div className="network-bottom"><span>Join the creative network</span><a href="#contact"><Plus size={20} /> Introduce yourself</a></div></section>

      <section className="gallery section-pad"><div className="work-head"><SectionTitle eyebrow="06 / Visual stories" title="A glimpse inside the verse." /><a className="text-link" href="#contact">Bring us into the frame <ArrowUpRight size={15} /></a></div><div className="gallery-grid"><img className="gallery-tall" src="/assets/live-performance.jpg" alt="Live performance on stage" /><img src="/assets/behind-scenes.jpg" alt="Creative production behind the scenes" /><img src="/assets/stage-production.jpg" alt="Stage production lights" /><img className="gallery-wide" src="/assets/production-studio.jpg" alt="Production studio team" /></div></section>

      <section className="journey section-pad"><SectionTitle eyebrow="07 / Our journey" title="Still writing the story." copy="A growing organisation, built one considered step at a time." /><div className="timeline"><div><span>01 / Beginning</span><strong>Creative initiative</strong><p>Where a shared love for entertainment, performance and making things began.</p></div><div><span>02 / Now</span><strong>Building the ecosystem</strong><p>Expanding our divisions, production capabilities and creative network.</p></div><div><span>03 / Next</span><strong>More room to create</strong><p>New collaborations, bigger experiences and stories still waiting to be made.</p></div></div></section>

      <section className="team section-pad" id="team"><SectionTitle eyebrow="08 / The people behind Atriverse" title="A team with<br />a point of view." /><div className="team-grid">{team.map(member => <div className="team-card" key={member.name}><div className="avatar">{member.initials}</div><h3>{member.name}</h3><p>{member.role}</p></div>)}</div></section>

      <section className="principles section-pad"><SectionTitle eyebrow="09 / Why Atriverse" title="We do not just organise events. We create experiences." /><div className="principle-grid"><div><span>01</span><h3>Creativity</h3><p>Ideas with a pulse, shaped around the people and the room.</p></div><div><span>02</span><h3>Execution</h3><p>Thoughtful planning, clear coordination and calm delivery.</p></div><div><span>03</span><h3>Energy</h3><p>Work that feels human, alive and impossible to scroll past.</p></div><div><span>04</span><h3>Experience</h3><p>Every detail considered for the people on the other side.</p></div></div></section>

      <section className="contact section-pad" id="contact"><div className="contact-copy"><Eyebrow>10 / Let's collaborate</Eyebrow><h2>Have an idea?<br /><em>Let's make it real.</em></h2><p>Tell us what you are building, planning or imagining. We will bring the right people into the room.</p><div className="contact-actions"><a className="contact-link" href="mailto:hello@atriverse.in"><Mail size={18} /> hello@atriverse.in <ArrowUpRight size={18} /></a><a className="contact-link" href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={18} /> Follow the verse <ArrowUpRight size={18} /></a></div></div><form className="contact-form" onSubmit={submitContact}>{sent ? <div className="form-success"><span>✦</span><h3>Message received.</h3><p>We will be in touch soon. Thanks for bringing us into the room.</p></div> : <><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>How can we help?<textarea required name="message" rows="4" placeholder="Tell us a little about the idea..." /></label><button className="button" type="submit">Send enquiry <ArrowUpRight size={16} /></button></>}</form></section>
    </main>

    <footer className="footer section-pad"><div className="footer-top"><a className="wordmark" href="#top"><span>ATRI</span> VERSE<span className="dot">.</span></a><p>Our talent. Our verse.<br />Entertainment · Production · Experiences</p><div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© 2026 Atriverse</span><span>Built for what&apos;s next <span className="dot">✦</span></span></div></footer>
  </div>
}
