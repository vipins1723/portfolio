export const profile = {
  name: 'Vipin Singh',
  role: 'Senior SDE – QA',
  company: 'Fleetx',
  location: 'India',
  email: 'vipins7150@gmail.com',
  phone: '+91-9001380664',
  linkedin: 'https://www.linkedin.com/in/vipin-singh-05v12a',
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
  role: string
  period: string
  blurb: string
  points: string[]
  tags: string[]
}

export const experience: Job[] = [
  {
    company: 'Fleetx Technologies',
    role: 'Senior Software Development Engineer – QA',
    period: 'Aug 2026 – Present',
    blurb: 'Quality owner for a fleet-management SaaS product shipping every 15 days.',
    points: [
      'Own end-to-end QA for every 15-day sprint release, from feature readiness to release validation, across functional, API and automation testing.',
      'Building API and UI automation frameworks for new agentic modules from scratch, so failures surface early as AI capabilities join the existing product.',
      'Mentor 2 junior engineers: plan their sprint deliverables and review their automation code before merge.',
    ],
    tags: ['Release ownership', 'Agentic AI testing', 'Framework design', 'Mentoring'],
  },
  {
    company: 'Paytm (One97 Communications)',
    role: 'QA Engineer',
    period: 'Dec 2024 – Aug 2026',
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
    role: 'Software Engineer',
    period: 'Jul 2023 – Aug 2024',
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

export const skills = [
  { group: 'Languages', items: ['Java', 'JavaScript', 'Python', 'SQL'] },
  {
    group: 'UI & mobile automation',
    items: ['Selenium WebDriver', 'Playwright', 'Appium', 'TestNG', 'Page Object Model'],
  },
  {
    group: 'API & data',
    items: ['Rest Assured', 'REST APIs', 'Postman', 'Swagger', 'Database testing'],
  },
  {
    group: 'AI-assisted QA',
    items: ['LLM workflows', 'MCP', 'Agentic testing', 'LambdaTest'],
  },
  {
    group: 'CI/CD & tooling',
    items: ['Jenkins', 'Maven', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Charles Proxy', 'JMeter'],
  },
  {
    group: 'Testing practice',
    items: [
      'Test strategy',
      'Regression',
      'Functional',
      'Exploratory',
      'Integration',
      'End-to-end',
      'Mobile',
      'Root-cause analysis',
    ],
  },
  {
    group: 'Engineering',
    items: ['OOP', 'Data structures & algorithms', 'DBMS', 'System design basics', 'Framework design', 'Agile / Scrum'],
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
  school: 'Dr. B. R. Ambedkar National Institute of Technology, Jalandhar',
  degree: 'B.Tech, Chemical Engineering',
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
