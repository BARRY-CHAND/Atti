import { Link, useParams, Navigate } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { SERVICES } from '../data/services.js'
import { PROCESS_STEPS } from '../data/organization.js'
import { PLACEHOLDER } from '../config/site.js'

function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find((item) => item.slug === slug)
  if (!service) return <Navigate to="/services" replace />
  const gallery = [service.image, ...SERVICES.filter((s) => s.slug !== slug).slice(0, 2).map((s) => s.image)]

  return (
    <div className="service-detail">
      <Seo title={`${service.title} | ATTI VERSE`} description={service.description} path={`/services/${slug}`} />
      <PageHeader eyebrow={`${service.number} — Services`} crumb={service.title} title={service.title.toUpperCase()} subtitle={service.tagline} image={service.image} />

      <section className="section service-detail__overview">
        <div className="container service-overview">
          <Reveal dir="right" delay={100}>
            <div className="service-overview__media"><Img src={service.image} alt={`${service.title} — ATTI VERSE`} priority /></div>
          </Reveal>
          <div className="service-overview__copy">
            <Reveal dir="up">
              <span className="eyebrow">01 / Overview</span>
              <h2 className="service-overview__title">{service.title}</h2>
              <p className="service-overview__hero">{service.hero}</p>
              <p className="service-overview__desc">{service.description}</p>
            </Reveal>
            <Reveal dir="up" delay={120}>
              <div className="service-overview__meta">
                <div><span>Category</span><strong>{service.lens}</strong></div>
                <div><span>Delivery</span><strong>Planned &amp; Coordinated</strong></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--off-white service-detail__capabilities">
        <div className="container service-capabilities">
          <div><SectionHeading eyebrow="02 / Capabilities" title={<>WHAT THIS DIVISION <span className="text-gold">HANDLES.</span></>} /><p className="service-capabilities__intro">The specific skills and services within {service.title.toLowerCase()}. Project examples are added as they are documented.</p></div>
          <Reveal dir="left" delay={140}><div className="service-capabilities__list">{service.capabilities.map((cap, i) => <div key={cap}><span>{String(i + 1).padStart(2, '0')}</span><strong>{cap}</strong></div>)}</div></Reveal>
        </div>
      </section>

      <section className="section service-projects-section">
        <div className="container">
          <SectionHeading eyebrow="03 / Relevant Work" title="PROJECT EXAMPLES" subtitle="Documented work within this service. New projects are added as they are verified." />
          {service.portfolio?.length > 0 ? <div className="service-projects" style={{ marginTop: '2rem' }}>{service.portfolio.map((p, i) => <Reveal key={p.title} dir="up" delay={i * 80}><article className="service-project"><span>{service.number} / {p.category}</span><h3>{p.title}</h3><strong>{p.year === 'TBA' ? PLACEHOLDER.tba : p.year}</strong><p>Project details coming soon.</p></article></Reveal>)}</div> : <p className="service-empty">Project details coming soon.</p>}
        </div>
      </section>

      <section className="section section--dark service-process-section">
        <div className="container"><SectionHeading center onDark eyebrow="04 / Process" title="HOW WE WORK" /><div className="service-process" style={{ marginTop: '2rem' }}>{PROCESS_STEPS.map((step, i) => <Reveal key={step.number} dir="up" delay={i * 80}><article className="service-process__step"><span>{step.number}</span><h3>{step.title}</h3><p>{step.note}</p></article></Reveal>)}</div></div>
      </section>

      <section className="section section--light-green service-gallery-section">
        <div className="container"><SectionHeading center eyebrow="05 / Gallery" title="VISUAL MOMENTS" subtitle="Seasonal visuals are added here as they are captured." /><div className="service-gallery" style={{ marginTop: '2rem' }}>{gallery.map((src, i) => <Reveal key={src + i} dir="up" delay={i * 80}><div className={`service-gallery__item ${i === 0 ? 'service-gallery__item--large' : ''}`}><Img src={src} alt={`${service.title} — visual ${i + 1}`} /></div></Reveal>)}</div></div>
      </section>

      <section className="section service-other-section">
        <div className="container"><SectionHeading eyebrow="06 / Explore" title="OTHER SERVICES" /><div className="service-other" style={{ marginTop: '2rem' }}>{SERVICES.filter((s) => s.slug !== slug).map((s, i) => <Reveal key={s.id} dir="up" delay={(i % 3) * 60}><Link to={`/services/${s.slug}`} className="service-other__item"><div className="service-other__media"><Img src={s.image} alt={s.title} /></div><div className="service-other__body"><span>{s.number} — SERVICE</span><h3>{s.title}</h3><strong>EXPLORE ↗</strong></div></Link></Reveal>)}</div></div>
      </section>

      <CTASection title="READY TO TALK?" copy={<>Need {service.title.toLowerCase()} for an event, a brand, a campus or a production? Tell us what you&apos;re building — we&apos;ll find the right team and the right approach.</>} />
    </div>
  )
}

export default ServiceDetail
