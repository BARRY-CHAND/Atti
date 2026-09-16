import Reveal from './../ui/Reveal.jsx'
import Icon from './../ui/Icon.jsx'
import SectionHeading from './../ui/SectionHeading.jsx'
import { LEGAL_FOUNDATION, LEGAL_FOUNDATION_NOTE } from '../../data/organization.js'

// "Built on a professional foundation." — verified registrations only.
function LegalFoundation() {
  return (
    <section className="section section--dark about-foundation">
      <div className="container">
        <div className="about-foundation__header">
          <SectionHeading onDark eyebrow="Professional Foundation / Governance" title="BUILT ON A PROFESSIONAL FOUNDATION." />
          <p>Creative ambition is supported by verified registrations, defined governance and a responsible operating base.</p>
        </div>
        <div className="legal about-foundation__grid">
          {LEGAL_FOUNDATION.map((item, i) => (
            <Reveal key={item} dir="up" delay={(i % 2) * 80}>
              <article className="legal__item">
                <Icon name="shield" size={17} />
                <span>{item}</span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal dir="up" delay={200}>
          <p className="legal__note">{LEGAL_FOUNDATION_NOTE}</p>
        </Reveal>
      </div>
    </section>
  )
}

export default LegalFoundation
