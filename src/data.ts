import fleetxLogo from './assets/logos/fleetx.png'
import incedoLogo from './assets/logos/incedo.png'
import paytmLogo from './assets/logos/paytm.svg'
import nitjLogo from './assets/logos/nitj.png'

export const profile = {
  name: 'Vipin Singh',
  role: 'Senior SDE – QA',
  company: 'Fleetx',
  location: 'India',
  email: 'vipins1723@gmail.com',
  phone: '+91-9001380664',
  linkedin: 'https://www.linkedin.com/in/vipin-singh-05v12a',
  // Served from public/; replace that file to update the resume.
  resume: '/Vipin_Singh_Resume.pdf',
  headline: 'I break software on purpose, so your users never do.',
  summary:
    'QA engineer with 3+ years building automation frameworks across web, mobile and APIs at Paytm, Fleetx and Incedo. ' +
    'I design test systems that catch regressions early, keep pipelines green and give teams the confidence to ship every sprint. ' +
    'Lately I build agentic QA workflows that turn Jira requirements into executed, validated tests.',
}

export const stats = [
  { value: '1,000+', label: 'automated test cases written and maintained' },
  { value: '60%', label: 'less manual testing effort at Paytm' },
  { value: '45%', label: 'faster regression execution' },
  { value: '40%', label: 'fewer regression defects leaking to production' },
]

export type Job = {
  company: string
  logo: string
  role: string
  period: string
  location: string
  blurb: string
  points: string[]
  tags: string[]
}

export const experience: Job[] = [
  {
    company: 'Fleetx Technologies',
    logo: fleetxLogo,
    role: 'Senior Software Development Engineer – QA',
    period: 'Aug 2026 – Present',
    location: 'India',
    blurb: 'Quality owner for a fleet-management SaaS product shipping every 15 days.',
    points: [
      'Own end-to-end QA for every 15-day sprint release, covering feature readiness, functional, manual, UI, API, regression and database testing, release validation and automation code reviews in collaboration with engineering and product teams; mentor 2 junior engineers by planning sprint deliverables and reviewing automation code before merge.',
      'Built a scalable cross-platform mobile test automation framework using Java, Appium (UiAutomator2 for Android, XCUITest for iOS), Selenium WebDriver, TestNG and Maven, following the Page Object Model. It automates 150+ end-to-end tests across Android and iOS apps. I set up GitLab CI/CD pipelines that run smoke tests on every merge request and full regression nightly, with Allure reporting and secure credential management. Shared Appium sessions cut suite runtime by ~80%.',
      'Designed and developed a scalable end-to-end UI test automation framework from scratch using Playwright, JavaScript (Node.js) and the Page Object Model (POM), with 60+ automated test suites covering ERP, TMS, billing, consignment, contract and tyre management modules of a fleet management SaaS platform. Built reusable helper libraries, custom fixtures, session-based authentication, data-driven testing (Chance.js, dotenv) and multi-environment execution (QA/UAT/Production), plus parallel runs with retries, trace/video/screenshot capture on failure, Allure and HTML reporting, and GitLab CI/CD with Slack notifications. This reduced manual regression effort by 70%.',
      'Expanded API test automation coverage by writing and maintaining automated test suites for 25+ new REST APIs across FMS, ERP and TMS modules using Playwright and JavaScript (Node.js). Covered functional, negative, boundary, field-level and data-driven test cases with schema and response validation, ran them across Staging, Pre-Prod and Production through a GitLab CI/CD pipeline with Slack notifications, and found defects early to improve regression stability and release quality.',
    ],
    tags: ['Playwright', 'Appium', 'Java', 'JavaScript', 'REST APIs', 'GitLab CI/CD', 'Allure', 'Release ownership', 'Mentoring'],
  },
  {
    company: 'Paytm (One97 Communications)',
    logo: paytmLogo,
    role: 'QA Engineer',
    period: 'Dec 2024 – Aug 2026',
    location: 'India',
    blurb: 'Quality for Paytm’s Bus business across desktop web, mobile web, Android and iOS.',
    points: [
      'Designed scalable UI, API and mobile automation frameworks with Java, Selenium, TestNG, Rest Assured and Appium, cutting manual effort by 60% and regression time by 45%.',
      'Built and maintained 1,000+ automated tests, reaching 70% automation coverage across 20+ critical workflows and reducing regression defect leakage by 40%.',
      'Validated 15+ customer-facing features; led sprint regression, functional, exploratory and API testing.',
      'Monitored 50+ pipeline runs, ran root-cause analysis and reduced flaky failures by 30%.',
      'Mentored 3 interns for ~6 months; all three shipped automation independently and earned Pre-Placement Offers.',
    ],
    tags: ['Java', 'Selenium', 'Appium', 'Rest Assured', 'TestNG', 'CI pipelines'],
  },
  {
    company: 'Incedo Inc.',
    logo: incedoLogo,
    role: 'Software Engineer',
    period: 'Jul 2023 – Aug 2024',
    location: 'India',
    blurb: 'Automation engineer working daily with a US-based product team.',
    points: [
      'Developed and executed 300+ UI and API automation tests in Java and Selenium, reducing manual testing by roughly 80–90%.',
      'Re-engineered automation reporting with FreeMarker templates, cutting report generation from ~600 ms to ~350 ms.',
      'Extended Jenkins reports with author names, bug IDs and Jira links for end-to-end traceability.',
    ],
    tags: ['Java', 'Selenium', 'Jenkins', 'FreeMarker', 'Jira'],
  },
]

export const featured = {
  title: 'Agentic QA Workflow',
  where: 'Paytm',
  summary:
    'An AI-driven QA pipeline I initiated and architected. It reads a Jira requirement, writes the test scenarios, runs them, checks the results and files the bugs, with a human reviewing the output instead of doing the busywork.',
  steps: [
    { title: 'Read', detail: 'Pulls the Jira story and context over MCP' },
    { title: 'Plan', detail: 'LLM drafts test scenarios from requirements' },
    { title: 'Run', detail: 'Playwright executes on LambdaTest browsers' },
    { title: 'Validate', detail: 'Agent checks results against expectations' },
    { title: 'Report', detail: 'Files Jira bugs, commits artifacts to Git' },
  ],
  outcomes: [
    { value: '40%', label: 'less manual effort and test-cycle time' },
    { value: '5', label: 'engineers adopted it as their daily workflow' },
    { value: '✓', label: 'formally approved by management' },
  ],
  stack: ['LLM / AI', 'MCP', 'Playwright', 'Jira', 'LambdaTest', 'Git'],
}

export const projects = [
  {
    title: 'Cross-platform automation suite',
    where: 'Paytm',
    text: 'One framework covering desktop web, mobile web, Android and iOS for the Bus booking flow. Shared page objects, API-level test data setup and CI-friendly TestNG suites.',
    metric: '70% coverage · 20+ workflows',
  },
  {
    title: 'Agentic module test framework',
    where: 'Fleetx',
    text: 'API and UI automation for agentic AI features, designed from the ground up to catch failures early while the AI capabilities are integrated into a mature product.',
    metric: 'In progress · built from scratch',
  },
  {
    title: 'Faster, traceable test reports',
    where: 'Incedo',
    text: 'Rebuilt report generation on FreeMarker templates and enriched Jenkins output with authors, bug IDs and Jira links so every failure points to an owner.',
    metric: '600 ms → 350 ms',
  },
]

// Shown as the highlighted "core stack" strip and emphasised inside each group.
export const coreSkills = [
  'Java',
  'JavaScript',
  'Playwright',
  'Selenium WebDriver',
  'Appium',
  'Rest Assured',
  'TestNG',
  'API Automation',
  'CI/CD Pipelines',
  'Test Automation Framework Design',
]

export type SkillGroup = {
  group: string
  icon: 'code' | 'device' | 'api' | 'pipeline' | 'check' | 'tool' | 'cpu'
  items: string[]
}

export const skills: SkillGroup[] = [
  { group: 'Programming', icon: 'code', items: ['Java', 'JavaScript', 'Python', 'SQL'] },
  {
    group: 'UI & Mobile Automation',
    icon: 'device',
    items: ['Selenium WebDriver', 'Appium', 'TestNG', 'Playwright', 'Page Object Model (POM)'],
  },
  {
    group: 'API & Database Testing',
    icon: 'api',
    items: ['Rest Assured', 'REST APIs', 'Swagger', 'Postman', 'API Automation', 'Database Testing', 'SQL'],
  },
  {
    group: 'CI/CD & DevOps',
    icon: 'pipeline',
    items: ['Jenkins', 'Maven', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
  },
  {
    group: 'Testing',
    icon: 'check',
    items: [
      'Functional Testing',
      'Regression Testing',
      'Exploratory Testing',
      'Integration Testing',
      'End-to-End Testing',
      'Mobile Testing',
      'API Testing',
      'BDD',
      'Test Strategy',
      'Root Cause Analysis',
    ],
  },
  { group: 'Tools', icon: 'tool', items: ['Jira', 'Charles Proxy', 'JMeter'] },
  {
    group: 'Engineering',
    icon: 'cpu',
    items: [
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'DBMS',
      'System Design Fundamentals',
      'Test Automation Framework Design',
      'Agile/Scrum',
    ],
  },
]

export const leadership = [
  {
    title: 'Mentor',
    where: 'Paytm & Fleetx',
    text: 'Trained 3 interns in testing and automation; all three earned PPOs. Now guiding 2 junior engineers and reviewing their code before merge.',
  },
  {
    title: 'Overall Coordinator, Techniti',
    where: 'NIT Jalandhar',
    text: 'Led a 5-person team inside a 30–40 member committee for a tech fest of 500 participants and 25–30 events. Directly ran 15 events plus scheduling, venues, volunteers and sponsors in a ₹20 lakh sponsorship environment.',
  },
  {
    title: 'Volunteer Teacher, Prayas',
    where: 'NIT Jalandhar · 2 years',
    text: 'Taught 30–40 children from nearby underprivileged communities through weekend and weekday sessions.',
  },
]

export const education = {
  logo: nitjLogo,
  school: 'Dr. B. R. Ambedkar National Institute of Technology, Jalandhar',
  degree: 'B.Tech',
  period: '2019 – 2023',
  grade: 'CGPA 7.41 / 10',
  internships: [
    {
      org: 'Dow Chemical International',
      period: 'Jun – Aug 2022',
      text: 'Industry project on physical recycling of rigid polyurethane foam for PU moulding.',
    },
    {
      org: 'RINL – Visakhapatnam Steel Plant',
      period: 'Dec 2021 – Jan 2022',
      text: 'Technical training at the Coke Oven & Coal Chemicals Plant; project on effluent treatment.',
    },
  ],
}

export const interests = ['Product & technology', 'Entrepreneurship', 'Badminton', 'Travel', 'Fitness']

// Lines printed by the hero's fake test runner.
export const runnerLines = [
  { name: 'jira_story_to_scenarios', time: '2.1s' },
  { name: 'bus_search_dweb', time: '1.4s' },
  { name: 'seat_selection_android', time: '3.2s' },
  { name: 'payment_flow_ios', time: '2.7s' },
  { name: 'booking_api_contract', time: '0.4s' },
  { name: 'agentic_module_regression', time: '1.9s' },
]
