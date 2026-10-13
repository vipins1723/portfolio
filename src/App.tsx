import { useEffect, useState } from 'react'
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
  ['#experience', 'Experience'],
  ['#work', 'Work'],
  ['#skills', 'Skills'],
  ['#about', 'About'],
  ['#contact', 'Contact'],
]

const mailSubject = encodeURIComponent('Hello Vipin, reaching out from your portfolio')

const mailLinks = {
  app: `mailto:${profile.email}?subject=${mailSubject}`,
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${mailSubject}`,
  outlook: `https://outlook.office.com/mail/deeplink/compose?to=${profile.email}&subject=${mailSubject}`,
}

function App() {
  const toggleTheme = useTheme()
  const [copied, setCopied] = useState(false)

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
          <a href="#top" className="brand">
            VS<span className="pass">.</span>
          </a>
          <nav aria-label="Sections">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href}>
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

      <main id="top">
        <section className="hero wrap">
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
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <p className="blurb">{job.blurb}</p>
                <ul className="points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
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
          <h2>Let’s ship something reliable.</h2>
          <p className="lede">
            Open to conversations about QA leadership, SDET roles and AI-assisted testing.
          </p>
          <div className="actions">
            <a className="btn primary" href={mailLinks.app}>
              {profile.email}
            </a>
            <a className="btn" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
              {profile.phone}
            </a>
            {profile.linkedin && (
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
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
