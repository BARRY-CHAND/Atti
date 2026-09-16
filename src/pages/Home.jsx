import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import Icon from '../components/ui/Icon.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import EventCard from '../components/cards/EventCard.jsx'
import WhyAttii from '../components/sections/WhyAttii.jsx'
import ServicesIndex from '../components/sections/ServicesIndex.jsx'
import TalentSection from '../components/sections/TalentSection.jsx'
import FutureDirection from '../components/sections/FutureDirection.jsx'
import { IMAGES } from '../config/images.js'
import { FEATURED_EVENTS, EVENT_PLACEHOLDERS } from '../data/events.js'
import { WORK } from '../data/work.js'
import { LEADERSHIP } from '../data/team.js'

function Hero() {
  const heroSlides = [IMAGES.hero, IMAGES.events.srmPongal2026, IMAGES.events.culturalStage, IMAGES.gallery[0], IMAGES.gallery[1]]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4000)
    return () => window.clearInterval(timer)
  }, [heroSlides.length])

  return (
    <section className={`hero hero--slideshow ${IMAGES.heroVideo ? '' : 'hero--no-media'}`}>
      <div className="hero__media">
        {IMAGES.heroVideo ? (
          <video
            className="hero__video"
            src={IMAGES.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            poster={IMAGES.hero}
            preload="metadata"
          />
        ) : (
          <Img
            key={heroSlides[activeSlide]}
            className="hero__slide"
            src={heroSlides[activeSlide]}
            alt="ATTI VERSE live entertainment and production"
            priority={activeSlide === 0}
          />
        )}
      </div>
      <div className="hero__overlay" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__top">
          <p className="hero__eyebrow hero-line" style={{ animationDelay: '0.1s' }}>
            Entertainment &amp; Productions
          </p>
        </div>

        <div className="hero__brand-lockup hero-line" style={{ animationDelay: '0.2s' }}>
          <span className="hero__brand-rule" />
          <p>ATTI VERSE</p>
          <span className="hero__brand-rule" />
        </div>

        <div className="hero__title-block hero-line" style={{ animationDelay: '0.32s' }}>
          <h1 className="hero__title-line hero__title-line--attii">CREATE</h1>
          <h1 className="hero__title-line hero__title-line--verse">THE MOMENT</h1>
        </div>

        <div className="hero__gold-rule hero-line" style={{ animationDelay: '0.4s' }} />

        <p className="hero__tagline hero-line" style={{ animationDelay: '0.55s' }}>
          Entertainment. Production. Experiences.
        </p>

        <div className="hero__actions hero-line" style={{ animationDelay: '0.7s' }}>
          <Link to="/work" className="btn btn--gold">
            <span>Explore Our Work</span>
            <Icon name="arrow-right" size={16} className="btn--icon-arrow" />
          </Link>
          <Link to="/contact" className="btn btn--outline">
            <span>Work With Us</span>
          </Link>
        </div>

        <div className="hero__meta hero-line" style={{ animationDelay: '0.85s' }}>
          <span>Entertainment</span>
          <span className="hero__meta-sep">/</span>
          <span>Events</span>
          <span className="hero__meta-sep">/</span>
          <span>Production</span>
          <span className="hero__meta-sep">/</span>
          <span>Creative</span>
        </div>
        <div className="hero__slides" aria-label="Hero image slideshow">
          {heroSlides.map((_, index) => (
            <span key={index} className={index === activeSlide ? 'is-active' : ''} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorksAndEvents() {
  const featured = WORK.filter((w) => w.featured)
  const events = [...FEATURED_EVENTS, ...EVENT_PLACEHOLDERS].slice(0, 3)
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="section-head-row">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <Reveal dir="up">
              <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>
                Works &amp; Events
              </span>
              <h2 className="section-title section-head__title">
                MOMENTS WE'VE <span className="text-gold">CREATED.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal dir="up" delay={120}>
            <Link to="/work" className="text-link text-link--dark">
              View All Work →
            </Link>
          </Reveal>
        </div>

        <div className="work-editorial" style={{ marginTop: 'clamp(3rem,6vw,4.5rem)' }}>
          <div className="work-editorial__head">
            <Reveal dir="up">
              <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>
                Selected Work
              </span>
            </Reveal>
          </div>
          <div className="work-editorial__grid">
            {featured.slice(0, 3).map((project, i) => (
              <Reveal key={project.id} dir="up" delay={i * 80}>
                <Link
                  to="/work"
                  className={`work-editorial__item ${i === 0 ? 'work-editorial__item--large' : ''}`}
                >
                  <div className="work-editorial__media">
                    <Img src={project.image} alt={`${project.title} — ${project.category}`} />
                  </div>
                  <div className="work-editorial__overlay">
                    <span className="work-editorial__cat">{project.category}</span>
                    <h3 className="work-editorial__title">{project.title}</h3>
                    <span className="work-editorial__arrow" aria-hidden="true">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="section-head-row" style={{ marginTop: 'clamp(3.5rem,7vw,6rem)' }}>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <Reveal dir="up">
              <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>
                Live Events
              </span>
              <h3 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
                LIVE. UNFORGETTABLE. <span className="text-gold">VERSE.</span>
              </h3>
            </Reveal>
          </div>
          <Reveal dir="up" delay={150}>
            <Link to="/events" className="text-link text-link--dark">
              View All Events →
            </Link>
          </Reveal>
        </div>
        <div className="grid-3" style={{ marginTop: '2rem' }}>
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PeopleBehind() {
  return (
    <section className="section">
      <div className="container">
        <div className="team-equal">
          <div className="team-equal__head">
            <div className="section-head-row">
              <Reveal dir="up">
                <span className="eyebrow">Leadership</span>
                <h2 className="section-title" style={{ marginTop: '1.1rem', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                  THE PEOPLE<br />
                  <span className="text-gold">BEHIND THE VERSE.</span>
                </h2>
              </Reveal>
              <Reveal dir="up" delay={100}>
                <Link to="/team" className="text-link" style={{ alignItems: 'center' }}>
                  Explore the Teams →
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="team-equal__grid" style={{ marginTop: '2.5rem' }}>
            {LEADERSHIP.map((member, i) => (
              <Reveal key={member.id} dir="up" delay={i * 90}>
                <article className="team-equal__card">
                  <div className="team-equal__media">
                    <Img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-equal__info">
                    <h3 className="team-equal__name">{member.name}</h3>
                    <p className="team-equal__role">{member.role}</p>
                    {member.designation && (
                      <p className="team-equal__designation">{member.designation}</p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <Seo
        title="ATTI VERSE Entertainment & Productions | Entertainment, Events & Media Production"
        description="ATTI VERSE Entertainment & Productions brings together entertainment, event management, media production, creative services and talented creators to build memorable experiences."
        path="/"
      />
      <Hero />
      <WhyAttii />
      <ServicesIndex />
      <WorksAndEvents />
      <PeopleBehind />
      <TalentSection />
      <FutureDirection />
      <CTASection
        title="LET'S CREATE SOMETHING WORTH REMEMBERING."
        copy={
          <>
            Whether you are planning an event, looking for creative production, exploring a
            collaboration or building something new — let's start the conversation.
          </>
        }
      />
    </>
  )
}

export default Home