import { useEffect, useRef, useState } from 'react'
import {
  education,
  experience,
  featured,
  interests,
  leadership,
  profile,
  projects,
  runnerLines,
  skills,
  stats,
} from './data'
import './App.css'

type Theme = 'light' | 'dark'

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem('theme')
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(readStoredTheme)

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme
    else delete document.documentElement.dataset.theme
  }, [theme])

  const toggle = () => {
    const current =
      theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next: Theme = current === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
  }

  return toggle
}

function TestRunner() {
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [shown, setShown] = useState(reduceMotion ? runnerLines.length : 0)

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setShown((n) => (n > runnerLines.length + 6 ? 0 : n + 1))
    }, 650)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  const done = shown >= runnerLines.length

  return (
    <div className="runner" aria-hidden="true">
      <div className="runner-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="runner-title">vipin@qa ~ npm test</span>
      </div>
      <div className="runner-body">
        <p className="muted">&gt; running regression suite…</p>
        {runnerLines.slice(0, shown).map((line) => (
          <p key={line.name}>
            <span className="pass">✓</span> {line.name}
            <span className="muted"> ({line.time})</span>
          </p>
        ))}
        {done ? (
          <p className="summary">
            <span className="pass">{runnerLines.length} passed</span>
            <span className="muted">, 0 failed, 0 flaky</span>
          </p>
        ) : (
          <p className="cursor">▍</p>
        )}
      </div>
    </div>
  )
}

const navLinks = [
  ['home', 'Home'],
  ['experience', 'Experience'],
  ['work', 'Work'],
  ['skills', 'Skills'],
  ['about', 'About'],
  ['contact', 'Contact'],
]

const sectionIds = navLinks.map(([id]) => id)

// Tracks which section sits in the upper-middle of the screen, for the nav highlight.
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
)

const PinIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...iconProps} width={size} height={size}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const DocIcon = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#0a66c2" />
    <path
      fill="#fff"
      d="M7.1 9.5h-2.4V18h2.4V9.5ZM5.9 5.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM18.8 13.3c0-2.5-1.3-3.9-3.2-3.9-1.3 0-2 .7-2.4 1.3V9.5H11V18h2.4v-4.4c0-1.1.4-2 1.5-2s1.4 1 1.4 2V18h2.4v-4.7Z"
    />
  </svg>
)

const mailSubject = encodeURIComponent('Hello Vipin, reaching out from your portfolio')

const mailLinks = {
  app: `mailto:${profile.email}?subject=${mailSubject}`,
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${mailSubject}`,
  outlook: `https://outlook.office.com/mail/deeplink/compose?to=${profile.email}&subject=${mailSubject}`,
}

function App() {
  const toggleTheme = useTheme()
  const [copied, setCopied] = useState(false)
  const active = useActiveSection(sectionIds)
  const pillRef = useRef<HTMLElement>(null)

  // On narrow screens the pill scrolls sideways: fade whichever edge has hidden links.
  const [pillEdges, setPillEdges] = useState('')
  useEffect(() => {
    const pill = pillRef.current
    if (!pill) return
    const update = () => {
      const left = pill.scrollLeft > 4
      const right = pill.scrollLeft + pill.clientWidth < pill.scrollWidth - 4
      setPillEdges([left && 'fade-left', right && 'fade-right'].filter(Boolean).join(' '))
    }
    const frame = requestAnimationFrame(update)
    pill.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      pill.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Keep the highlighted link in view inside the pill.
  useEffect(() => {
    const pill = pillRef.current
    const link = pill?.querySelector<HTMLElement>('a.active')
    if (!pill || !link || pill.scrollWidth <= pill.clientWidth) return
    pill.scrollTo({ left: link.offsetLeft - (pill.clientWidth - link.offsetWidth) / 2, behavior: 'smooth' })
  }, [active])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS); fall back to the mail app.
      window.location.href = mailLinks.app
    }
  }

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#home" className="brand">
            VS<span className="pass">.</span>
          </a>
          <nav ref={pillRef} className={`pill-nav ${pillEdges}`} aria-label="Sections">
            {navLinks.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : undefined}
                aria-current={active === id ? 'true' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle colour theme">
            <span className="icon-sun">☀</span>
            <span className="icon-moon">☾</span>
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero wrap">
          <div className="hero-text">
            <p className="eyebrow">
              <span className="status" /> {profile.role} at {profile.company} · {profile.location}
            </p>
            <h1>{profile.name}</h1>
            <p className="headline">{profile.headline}</p>
            <p className="lede">{profile.summary}</p>
            <div className="actions">
              <a className="btn primary" href="#contact">
                Get in touch
              </a>
              <a className="btn" href="#work">
                See my work
              </a>
              <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
                <DocIcon /> View resume
              </a>
            </div>
          </div>
          <TestRunner />
        </section>

        <section className="wrap stats" aria-label="Highlights">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        <section id="experience" className="wrap section">
          <h2 className="section-title">
            <span className="num">01</span> Experience
          </h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company} className="job">
                <article className="job-card">
                  <div className="job-logo">
                    <img src={job.logo} alt={`${job.company} logo`} width="44" height="44" loading="lazy" />
                  </div>
                  <h3 className="job-company">{job.company}</h3>
                  <p className="job-role">{job.role}</p>
                  <span className="job-period">{job.period}</span>
                  <p className="job-location">
                    <PinIcon size={16} /> {job.location}
                  </p>
                  <p className="job-blurb">{job.blurb}</p>
                  <ul className="job-points">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="tags job-tags">
                    {job.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="wrap section">
          <h2 className="section-title">
            <span className="num">02</span> Selected work
          </h2>

          <article className="featured">
            <div className="featured-head">
              <p className="eyebrow">Featured project · {featured.where}</p>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
            </div>
            <ol className="pipeline">
              {featured.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-num">{i + 1}</span>
                  <strong>{step.title}</strong>
                  <span>{step.detail}</span>
                </li>
              ))}
            </ol>
            <div className="featured-foot">
              <div className="outcomes">
                {featured.outcomes.map((o) => (
                  <div key={o.label}>
                    <strong>{o.value}</strong>
                    <span>{o.label}</span>
                  </div>
                ))}
              </div>
              <div className="tags">
                {featured.stack.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="cards">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <p className="eyebrow">{p.where}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <p className="metric">{p.metric}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="wrap section">
          <h2 className="section-title">
            <span className="num">03</span> Toolkit
          </h2>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-group">
                <h3>{s.group}</h3>
                <div className="tags">
                  {s.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="wrap section">
          <h2 className="section-title">
            <span className="num">04</span> Beyond the test suite
          </h2>
          <div className="about-grid">
            <div className="about-col">
              <h3 className="col-title">Leadership &amp; community</h3>
              {leadership.map((item) => (
                <div key={item.title} className="about-item">
                  <h4>{item.title}</h4>
                  <p className="company">{item.where}</p>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="about-col">
              <h3 className="col-title">Education</h3>
              <div className="about-item">
                <h4>{education.degree}</h4>
                <p className="company">{education.school}</p>
                <p>
                  {education.period} · {education.grade}
                </p>
              </div>
              <p className="note">
                I trained as a chemical engineer, which taught me to think in processes, controls and failure
                modes. It turned out to be good preparation for testing software.
              </p>
              {education.internships.map((i) => (
                <div key={i.org} className="about-item">
                  <h4>{i.org}</h4>
                  <p className="company">Intern · {i.period}</p>
                  <p>{i.text}</p>
                </div>
              ))}
              <h3 className="col-title">Outside work</h3>
              <div className="tags">
                {interests.map((i) => (
                  <span key={i} className="tag">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <p className="contact-kicker">Get in touch</p>
          <h2>Let’s ship something reliable.</h2>
          <p className="lede">
            Open to conversations about QA leadership, SDET roles and AI-assisted testing. Whether you’re hiring or
            just want to connect, feel free to reach out.
          </p>
          <div className="contact-cards">
            <a className="contact-card" href={mailLinks.app}>
              <span className="contact-icon">
                <MailIcon />
              </span>
              <span>
                <strong>Email</strong>
                <span>{profile.email}</span>
              </span>
            </a>
            <a className="contact-card" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
              <span className="contact-icon">
                <PhoneIcon />
              </span>
              <span>
                <strong>Phone</strong>
                <span>{profile.phone}</span>
              </span>
            </a>
            <div className="contact-card">
              <span className="contact-icon">
                <PinIcon />
              </span>
              <span>
                <strong>Location</strong>
                <span>{profile.location}</span>
              </span>
            </div>
            {profile.linkedin && (
              <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="contact-icon">
                  <LinkedInIcon />
                </span>
                <span>
                  <strong>LinkedIn</strong>
                  <span>{profile.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
                </span>
              </a>
            )}
          </div>
          <p className="mail-alt">
            No mail app? Write from{' '}
            <a href={mailLinks.gmail} target="_blank" rel="noreferrer">
              Gmail
            </a>{' '}
            or{' '}
            <a href={mailLinks.outlook} target="_blank" rel="noreferrer">
              Outlook
            </a>
            , or{' '}
            <button type="button" onClick={copyEmail}>
              {copied ? 'copied ✓' : 'copy the address'}
            </button>
            .
          </p>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="muted">All tests passing.</span>
      </footer>
    </>
  )
}

export default App
