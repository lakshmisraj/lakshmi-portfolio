// Everything on the page comes from Lakshmi's résumé (October 2026).

export const person = {
  name: 'Lakshmi Shibu Raj',
  first: 'Lakshmi',
  title: 'Software development engineer',
  focus: 'Backend and distributed systems',
  city: 'Brooklyn, NY',
  email: 'shiburajlakshmi@gmail.com',
  phone: '(347) 671-9120',
  phoneHref: 'tel:+13476719120',
  linkedin: 'https://www.linkedin.com/in/lakshmi-shibu-raj-1149661b2/',
  github: 'https://github.com/lakshmisraj',
  resume: '/Lakshmi-Shibu-Raj-Resume.pdf',
  status: 'Open to full-time SDE roles from May 2026',
}

export const intro =
  'I build backend services that stay up under load: Java and Spring Boot microservices, REST APIs and cloud-native systems on AWS and Kubernetes. At Citi I kept enterprise services at 99.98% uptime; at NYU I build serverless and container platforms.'

export const stats = [
  { value: 99.98, decimals: 2, suffix: '%', label: 'uptime held across enterprise deployments at Citi' },
  { value: 18, suffix: '%', label: 'lower API latency after JVM and Tomcat tuning' },
  { value: 200, suffix: '+', label: 'staff hours saved every week by an automation I wrote' },
  { value: 15, suffix: '+', label: 'distributed services moved onto a refactored API framework' },
]

export const experience = [
  {
    company: 'Simplian Software Solutions',
    role: 'Software Engineering Intern',
    dates: 'Jun 2025 – Jul 2025',
    place: 'Diamond Bar, California',
    points: [
      'Built a Java Spring Boot service that controls 20+ menu items, with updates going live automatically.',
      'Cut the people needed to run menu changes from five to one.',
      'Built a self-service screen that took each menu update from 10 minutes to 2.',
      'Shipped maintainable, production-ready software with product and engineering teams.',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    company: 'Citicorp Services',
    role: 'Software Development Engineer, Backend',
    dates: 'Jul 2023 – Aug 2024',
    place: 'India',
    points: [
      'Designed a Spring Boot service that ended 10+ daily failures and stopped pod crashes across enterprise applications.',
      'Refactored the core API framework across 15+ distributed services, removing 20+ recurring production incidents.',
      'Tuned JVM and Tomcat configuration, cutting average API latency by about 18% at peak load.',
      'Automated employee data collection with Python and Excel, saving 200+ staff hours a week.',
      'Kept deployments reliable at 99.98% uptime in an Agile, cross-functional team.',
    ],
    tech: ['Java', 'Spring Boot', 'Kubernetes', 'Tomcat', 'Python'],
  },
  {
    company: 'Royal Bank of Scotland',
    role: 'Software Engineering Intern',
    dates: 'May 2022 – Jul 2022',
    place: 'India',
    points: [
      'Built an interactive dashboard over 15+ KPIs that made reporting 50% faster.',
      'Automated workflows and pipelines for 5+ marketing teams: 30% more engagement, 12% better retention.',
      'Embedded real-time insight in the CRM, cutting manual reporting effort by 40%.',
    ],
    tech: ['Python', 'SQL', 'Dashboards'],
  },
]

// `flow` is the request path drawn on each project card.
export const projects = [
  {
    name: 'Neighborly',
    kind: 'Scalable community platform',
    summary:
      'A React and Django community platform with 30+ REST APIs, 20+ reusable components, JWT auth and Mapbox geolocation, deployed on AWS with Docker CI/CD.',
    results: ['40% less deployment effort', '100% test pass rate'],
    flow: ['React', 'CloudFront', 'EC2', 'Django', 'S3'],
    tech: ['React', 'Django', 'AWS', 'Docker', 'JWT', 'Mapbox'],
    link: 'https://github.com/theadityamittal/Neighborly',
  },
  {
    name: 'Collaborative code editor',
    kind: 'Real-time, serverless',
    summary:
      'A real-time collaborative editor on serverless AWS: Lambda behind API Gateway, with DynamoDB and S3 for state and storage.',
    results: ['Real-time collaboration', 'Scales with concurrent editors'],
    flow: ['Browser', 'API Gateway', 'Lambda', 'DynamoDB'],
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3'],
    link: 'https://github.com/AkM-2018/colab-code-editor',
  },
  {
    name: 'To-do on Kubernetes',
    kind: 'Microservices on EKS',
    summary:
      'Containerised microservices on AWS EKS with MongoDB for persistence and Prometheus monitoring, released through Docker CI/CD pipelines.',
    results: ['40% less deployment effort', 'Monitored with Prometheus'],
    flow: ['CI/CD', 'Docker', 'EKS', 'MongoDB'],
    tech: ['Kubernetes', 'EKS', 'Docker', 'MongoDB', 'Prometheus'],
    link: 'https://github.com/MeenakshiMadhu/CSGY-9223-F-Cloud-Computing-Assignment-2',
  },
  {
    name: 'Dining concierge chatbot',
    kind: 'Event-driven, serverless',
    summary:
      'A restaurant-recommendation chatbot built on Lex, Lambda, API Gateway, DynamoDB, OpenSearch and S3, emailing each suggestion through SES.',
    results: ['Event-driven workflow', 'Email delivery via SES'],
    flow: ['Lex', 'Lambda', 'OpenSearch', 'SES'],
    tech: ['Amazon Lex', 'Lambda', 'OpenSearch', 'DynamoDB', 'SES'],
    link: 'https://github.com/MeenakshiMadhu/AWS-Restaurant-Concierge-Chatbot',
  },
]

// `icon` names map to react-icons in Skills.jsx
export const skills = [
  {
    group: 'Backend',
    items: [
      ['Java', 'java'],
      ['Spring Boot', 'spring'],
      ['REST APIs', 'api'],
      ['Node.js', 'node'],
      ['Django', 'django'],
      ['Tomcat', 'tomcat'],
      ['Maven', 'maven'],
    ],
  },
  {
    group: 'Cloud and infrastructure',
    items: [
      ['AWS', 'aws'],
      ['Kubernetes', 'k8s'],
      ['Docker', 'docker'],
      ['Linux', 'linux'],
      ['CI/CD', 'cicd'],
      ['Git', 'git'],
      ['Prometheus', 'prometheus'],
    ],
  },
  {
    group: 'Data',
    items: [
      ['MongoDB', 'mongo'],
      ['MySQL', 'mysql'],
      ['Redis', 'redis'],
      ['DynamoDB', 'aws'],
      ['OpenSearch', 'opensearch'],
    ],
  },
  {
    group: 'Languages and frontend',
    items: [
      ['Python', 'python'],
      ['C++', 'cpp'],
      ['SQL', 'sql'],
      ['JavaScript', 'js'],
      ['React', 'react'],
    ],
  },
  {
    group: 'AI and ML',
    items: [
      ['PyTorch', 'pytorch'],
      ['TensorFlow', 'tensorflow'],
      ['Keras', 'keras'],
      ['scikit-learn', 'sklearn'],
      ['OpenCV', 'opencv'],
      ['NumPy', 'numpy'],
      ['pandas', 'pandas'],
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
    degree: 'Master of Science in Computer Science',
    dates: 'Graduating May 2026',
    detail: 'GPA 3.6',
  },
  {
    school: 'National Institute of Technology, India',
    degree: 'Bachelor of Technology in Information Technology',
    dates: 'Graduated Apr 2023',
    detail: 'GPA 3.14',
  },
]
