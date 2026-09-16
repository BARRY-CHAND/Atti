import { Link } from 'react-router-dom'
import Reveal from './../ui/Reveal.jsx'
import Icon from './../ui/Icon.jsx'
import { INSTITUTIONAL_POINTS, COLLABORATION_POINTS } from '../../data/organization.js'

// Institutional + collaboration enrolment — one combined contact pathway.
function InstitutionalCTA() {
  return (
    <section className="section" style={{ paddingTop: '0' }}>
      <div className="container">
        <Reveal dir="up">
          <div className="institutional">
            <div className="institutional__text">
              <span className="eyebrow">Colleges, Institutions &amp; Collaborations</span>
              <h2 className="institutional__title">PLANNING AN INSTITUTIONAL EVENT?</h2>
              <p className="institutional__desc">
                From cultural celebrations and college fests to entertainment, performances and
                complete production support — ATTI VERSE can plan, coordinate and deliver. The same
                structured team welcomes brands, creators and organizations for collaborations and
                partnerships.
              </p>
              <Link to="/contact" className="btn btn--gold institutional__cta">
                <span>DISCUSS YOUR EVENT</span>
              </Link>
            </div>

            <div className="institutional__points">
              <div className="institutional__group">
                <span className="institutional__group-title">Colleges &amp; Institutions</span>
                <ul className="institutional__group-list">
                  {INSTITUTIONAL_POINTS.map((point, i) => (
                    <li key={point} className="institutional__point">
                      <Icon name="check" size={15} />
                      <span>{point}</span>
                      <span className="institutional__idx">{String(i + 1).padStart(2, '0')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="institutional__group">
                <span className="institutional__group-title">Brands, Creators &amp; Partners</span>
                <ul className="institutional__group-list">
                  {COLLABORATION_POINTS.map((point, i) => (
                    <li key={point} className="institutional__point">
                      <Icon name="handshake" size={15} />
                      <span>{point}</span>
                      <span className="institutional__idx">{String(i + 1).padStart(2, '0')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default InstitutionalCTA