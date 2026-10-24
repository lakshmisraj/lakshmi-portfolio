// Site content, taken from Lakshmi's résumé (Software Development Engineer_Resume.docx).

export const person = {
  name: 'Lakshmi Shibu Raj',
  first: 'Lakshmi',
  title: 'Software Development Engineer',
  focus: 'Backend & distributed systems',
  city: 'Brooklyn, NY',
  email: 'shiburajlakshmi@gmail.com',
  phone: '(347) 671-9120',
  phoneHref: 'tel:+13476719120',
  linkedin: 'https://www.linkedin.com/in/lakshmi-shibu-raj-1149661b2/',
  github: 'https://github.com/lakshmisraj',
  resume: '/Lakshmi-Shibu-Raj-Resume.pdf',
  availability: 'Open to full-time roles from May 2026',
}

export const intro =
  "I'm a backend engineer finishing my MS in Computer Science at NYU. I've built Java and Spring Boot services at Citi, a menu management system at Simplian and reporting dashboards at Royal Bank of Scotland, and at NYU I've been building on AWS: serverless apps, Kubernetes deployments and a chatbot."

export const about = [
  "Most of my experience is on the backend. At Citi I designed a Spring Boot service that stopped 10+ daily failures and the pod crashes that came with them, kept deployments at 99.98% uptime, and automated a data-collection process that was taking up 200+ staff hours a week.",
  "Before that I interned at Royal Bank of Scotland, building a KPI dashboard and automating workflows for marketing teams. In 2025 I interned at Simplian, where I built a Spring Boot service and a self-service screen that took menu updates from ten minutes and five people to two minutes and one.",
  "I'm graduating from NYU in May 2026 and looking for a full-time backend, platform or cloud engineering role.",
]

export const facts = [
  ['Based in', 'Brooklyn, New York'],
  ['Studying', 'MS Computer Science, NYU'],
  ['Graduating', 'May 2026'],
  ['Focus', 'Backend, distributed systems, AWS'],
]

// `display` overrides the counted number for figures that aren't a single value
export const stats = [
  { value: 99.98, decimals: 2, suffix: '%', label: 'uptime across enterprise deployments at Citi' },
  { value: 10, suffix: '+', label: 'daily failures eliminated by one Spring Boot service' },
  { value: 200, suffix: '+', label: 'staff hours saved each week through automation' },
  { display: '10 → 2 min', label: 'per menu update at Simplian, with one person instead of five' },
]

export const experience = [
  {
    company: 'Simplian Software Solutions',
    role: 'Software Engineering Intern',
    dates: 'Jun 2025 – Jul 2025',
    place: 'Diamond Bar, California',
    points: [
      'Built a Java Spring Boot service to manage 20+ menu items, with updates published automatically in real time.',
      'Redesigned the backend workflow so menu changes need one person instead of five.',
      'Built a self-service management screen that cut each menu update from 10 minutes to 2.',
      'Worked with product and engineering teams to ship maintainable, production-ready software.',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    company: 'Citicorp Services',
    role: 'Software Development Engineer / Backend Developer',
    dates: 'Jul 2023 – Aug 2024',
    place: 'India',
    points: [
      'Designed a Java Spring Boot service that eliminated 10+ daily failures and prevented critical pod crashes across enterprise applications.',
      "Automated employee data collection with Python and Excel, saving 200+ staff hours a week in the Chief of Staff's division.",
      'Improved deployment reliability, keeping a consistent 99.98% uptime on an Agile, cross-functional team.',
    ],
    tech: ['Java', 'Spring Boot', 'Kubernetes', 'Python'],
  },
  {
    company: 'Royal Bank of Scotland',
    role: 'Software Engineering Intern',
    dates: 'May 2022 – Jul 2022',
    place: 'India',
    points: [
      'Built an interactive dashboard tracking 15+ KPIs, making reporting 50% faster across business functions.',
      'Automated workflows and pipelines for 5+ marketing teams, contributing to 30% higher engagement and 12% better retention.',
      'Embedded real-time insights into the CRM, cutting manual reporting effort by 40%.',
    ],
    tech: ['Python', 'SQL', 'Dashboards', 'CRM'],
  },
]

// `flow` is the request path drawn on each project card
export const projects = [
  {
    name: 'Neighborly',
    kind: 'Community platform',
    summary:
      'A React and Django community platform with 30+ REST APIs, 20+ reusable components, JWT authentication and Mapbox geolocation. Deployed on AWS EC2, S3 and CloudFront with Docker-based CI/CD.',
    results: ['40% less deployment effort', '100% test pass rate'],
    flow: ['React', 'CloudFront', 'EC2', 'Django', 'S3'],
    tech: ['React', 'Django', 'AWS', 'Docker', 'JWT', 'Mapbox'],
    link: 'https://github.com/theadityamittal/Neighborly',
  },
  {
    name: 'Collaborative Code Editor',
    kind: 'Real-time, serverless',
    summary:
      'A real-time collaborative code editor on a serverless AWS stack: Lambda functions behind API Gateway, with DynamoDB and S3 for state and storage.',
    results: ['Real-time collaboration', 'Serverless backend'],
    flow: ['Browser', 'API Gateway', 'Lambda', 'DynamoDB'],
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3'],
    link: 'https://github.com/AkM-2018/colab-code-editor',
  },
  {
    name: 'To-Do Application',
    kind: 'Microservices on Kubernetes',
    summary:
      'Containerised microservices on AWS EKS with MongoDB for persistence and Prometheus for monitoring, released through Docker CI/CD pipelines.',
    results: ['40% less deployment effort', 'Prometheus monitoring'],
    flow: ['CI/CD', 'Docker', 'EKS', 'MongoDB'],
    tech: ['Kubernetes', 'EKS', 'Docker', 'MongoDB', 'Prometheus'],
    link: 'https://github.com/MeenakshiMadhu/CSGY-9223-F-Cloud-Computing-Assignment-2',
  },
  {
    name: 'Dining Concierge Chatbot',
    kind: 'Serverless chatbot',
    summary:
      'A restaurant-recommendation chatbot built on Amazon Lex, Lambda, API Gateway, DynamoDB, OpenSearch and S3, with event-driven workflows that email suggestions through SES.',
    results: ['Event-driven workflow', 'Email delivery via SES'],
    flow: ['Lex', 'Lambda', 'OpenSearch', 'SES'],
    tech: ['Amazon Lex', 'Lambda', 'OpenSearch', 'DynamoDB', 'SES'],
    link: 'https://github.com/MeenakshiMadhu/AWS-Restaurant-Concierge-Chatbot',
  },
]

// `icon` names map to react-icons in Skills.jsx
export const skills = [
  {
    group: 'Languages',
    items: [
      ['Java', 'java'],
      ['Python', 'python'],
      ['C++', 'cpp'],
      ['SQL', 'sql'],
      ['JavaScript', 'js'],
    ],
  },
  {
    group: 'Backend',
    items: [
      ['Spring Boot', 'spring'],
      ['REST APIs', 'api'],
      ['Node.js', 'node'],
      ['Django', 'django'],
      ['Tomcat', 'tomcat'],
      ['Maven', 'maven'],
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      ['AWS', 'aws'],
      ['Kubernetes', 'k8s'],
      ['Docker', 'docker'],
      ['Linux', 'linux'],
      ['Git', 'git'],
      ['CI/CD', 'cicd'],
    ],
  },
  {
    group: 'Databases',
    items: [
      ['MongoDB', 'mongo'],
      ['MySQL', 'mysql'],
      ['Redis', 'redis'],
      ['DynamoDB', 'aws'],
    ],
  },
  {
    group: 'AI / ML',
    items: [
      ['PyTorch', 'pytorch'],
      ['TensorFlow', 'tensorflow'],
      ['Keras', 'keras'],
      ['scikit-learn', 'sklearn'],
      ['OpenCV', 'opencv'],
      ['NumPy', 'numpy'],
      ['Pandas', 'pandas'],
    ],
  },
  {
    group: 'Frontend',
    items: [
      ['React', 'react'],
      ['HTML5', 'html'],
      ['CSS3', 'css'],
    ],
  },
]

export const awsServices = [
  'EC2',
  'S3',
  'Lambda',
  'CloudFront',
  'API Gateway',
  'DynamoDB',
  'OpenSearch',
  'SQS',
  'SES',
  'CloudWatch',
  'EKS',
]

export const education = [
  {
    school: 'New York University',
    place: 'New York',
    degree: 'Master of Science in Computer Science',
    dates: 'May 2026',
    detail: 'GPA 3.6',
  },
  {
    school: 'National Institute of Technology',
    place: 'India',
    degree: 'Bachelor of Technology in Information Technology',
    dates: 'Apr 2023',
    detail: 'GPA 3.14',
  },
]
