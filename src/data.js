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
  'Results-driven Software Development Engineer with experience building scalable backend systems, distributed microservices, cloud-native applications, and full-stack platforms across banking, enterprise software, and cloud environments.'

// Professional Overview, as written on the résumé
export const about = [
  'Results-driven Software Development Engineer with experience building scalable backend systems, distributed microservices, cloud-native applications, and full-stack platforms across banking, enterprise software, and cloud environments. Proven expertise in Java, Spring Boot, REST APIs, AWS, Docker, Kubernetes, and microservices architecture.',
  'Demonstrated success in improving system reliability, reducing API latency, automating operational processes, and delivering high-availability production systems. Experienced in designing backend services, cloud deployments, CI/CD pipelines, and scalable software solutions with measurable impact on performance, throughput, and operational efficiency.',
  'Strong foundation in algorithms, software engineering, system design, and cloud-native application development.',
]

export const facts = [
  ['Based in', 'Brooklyn, NY'],
  ['Education', 'MS Computer Science, New York University'],
  ['Graduating', 'May 2026'],
  ['Focus', 'Backend & distributed systems'],
]

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
      'Developed scalable Java Spring Boot solution enabling dynamic control of 20+ menu items with real-time automated updates',
      'Designed efficient backend operations, significantly reducing administrative dependency from five personnel to just one',
      'Built a self-service management interface cutting menu update time from 10 minutes to 2 minutes, boosting operational efficiency',
      'Partnered with product and engineering teams to deliver maintainable, production-ready enterprise software solutions',
      'Streamlined processes and improved system usability, significantly enhancing overall business productivity and efficiency',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    company: 'Citicorp Services',
    role: 'Software Development Engineer / Backend Developer',
    dates: 'Jul 2023 – Aug 2024',
    place: 'India',
    points: [
      'Designed a Java Spring Boot service eliminating 10+ daily failures, preventing critical pod crashes across enterprise applications',
      'Automated enterprise employee data collection with Python/Excel, saving 200+ staff hours weekly in Chief of Staff division',
      'Enhanced deployment reliability, sustaining consistent 99.98% uptime in dynamic Agile cross-functional enterprise environments',
    ],
    tech: ['Java', 'Spring Boot', 'Kubernetes', 'Python'],
  },
  {
    company: 'Royal Bank of Scotland',
    role: 'Software Engineering Intern',
    dates: 'May 2022 – Jul 2022',
    place: 'India',
    points: [
      'Developed an interactive dashboard analyzing 15+ KPIs, improving reporting efficiency by 50% across business functions',
      'Automated workflows and pipelines for 5+ marketing teams, driving 30% engagement growth and 12% retention improvement',
      'Embedded real-time analytical insights into CRM, reducing manual reporting effort by 40% and accelerating decision cycles',
      'Strengthened BI capabilities through scalable data-driven solutions and automation initiatives supporting enterprise operations',
      'Delivered actionable insights enabling marketing, sales, and operations teams to improve efficiency and customer outcomes',
    ],
    tech: ['Python', 'SQL', 'Dashboards', 'CRM'],
  },
]

// `flow` is the request path drawn on each project card
export const projects = [
  {
    name: 'Neighborly',
    kind: 'Scalable Community Platform',
    points: [
      'Architected React/Django community platform delivering 30+ REST APIs, 20+ reusable components, JWT auth, and Mapbox geolocation',
      'Deployed AWS EC2/S3/CloudFront with Docker CI/CD pipelines, reducing deployment effort 40% and achieving 100% test pass rate',
    ],
    flow: ['React', 'CloudFront', 'EC2', 'Django', 'S3'],
    tech: ['React', 'Django', 'AWS', 'Docker', 'JWT', 'Mapbox'],
    link: 'https://github.com/theadityamittal/Neighborly',
  },
  {
    name: 'Collaborative Code Editor',
    kind: 'Serverless AWS',
    points: [
      'Built collaborative platform leveraging serverless AWS architecture with Lambda, API Gateway, DynamoDB, and S3 integrations',
      'Implemented scalable backend services enabling real-time collaboration, improving development efficiency and system reliability',
    ],
    flow: ['Browser', 'API Gateway', 'Lambda', 'DynamoDB'],
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3'],
    link: 'https://github.com/AkM-2018/colab-code-editor',
  },
  {
    name: 'To-Do Application',
    kind: 'Microservices on AWS EKS',
    points: [
      'Developed containerized microservices architecture on AWS EKS/Kubernetes, integrating MongoDB persistence and Prometheus monitoring',
      'Orchestrated Docker releases with CI/CD pipelines, reducing deployment effort 40% while ensuring scalable, production-ready reliability',
    ],
    flow: ['CI/CD', 'Docker', 'EKS', 'MongoDB'],
    tech: ['Kubernetes', 'EKS', 'Docker', 'MongoDB', 'Prometheus'],
    link: 'https://github.com/MeenakshiMadhu/CSGY-9223-F-Cloud-Computing-Assignment-2',
  },
  {
    name: 'Dining Concierge Chatbot',
    kind: 'AWS Serverless',
    points: [
      'Built AWS serverless restaurant recommendation chatbot with Lex, Lambda, API Gateway, DynamoDB, OpenSearch, and S3 integrations',
      'Implemented event-driven workflows and email delivery via SES, reducing manual effort and enhancing real-time user interaction',
    ],
    flow: ['Lex', 'Lambda', 'OpenSearch', 'SES'],
    tech: ['Amazon Lex', 'Lambda', 'OpenSearch', 'DynamoDB', 'SES'],
    link: 'https://github.com/MeenakshiMadhu/AWS-Restaurant-Concierge-Chatbot',
  },
]

// Technical Skills, in the résumé's categories. `icon` names map to react-icons in Skills.jsx
export const skills = [
  {
    group: 'Cloud & Infrastructure',
    items: [
      ['AWS (EC2, S3, Lambda, CloudFront, API Gateway, DynamoDB, OpenSearch, SQS, SES, CloudWatch, EKS)', 'aws'],
      ['Kubernetes', 'k8s'],
      ['Docker', 'docker'],
      ['Linux', 'linux'],
    ],
  },
  {
    group: 'Backend Engineering',
    items: [
      ['Java Spring Boot', 'spring'],
      ['Microservices Architecture'],
      ['REST APIs', 'api'],
      ['Distributed Systems'],
      ['Node.js', 'node'],
      ['Django', 'django'],
      ['Tomcat', 'tomcat'],
      ['Maven', 'maven'],
    ],
  },
  {
    group: 'DevOps & CI/CD',
    items: [
      ['CI/CD Pipelines', 'cicd'],
      ['Git', 'git'],
      ['Containerization'],
      ['Deployment Automation'],
      ['Infrastructure Management'],
    ],
  },
  {
    group: 'AI/ML Technologies',
    items: [
      ['PyTorch', 'pytorch'],
      ['TensorFlow', 'tensorflow'],
      ['Keras', 'keras'],
      ['Scikit-learn', 'sklearn'],
      ['OpenCV', 'opencv'],
      ['NumPy', 'numpy'],
      ['Pandas', 'pandas'],
    ],
  },
  {
    group: 'Databases',
    items: [
      ['MongoDB', 'mongo'],
      ['MySQL', 'mysql'],
      ['Redis', 'redis'],
      ['DynamoDB', 'aws'],
      ['NoSQL Databases'],
    ],
  },
  {
    group: 'Programming Languages',
    items: [
      ['Java', 'java'],
      ['Python', 'python'],
      ['C++', 'cpp'],
      ['SQL', 'sql'],
      ['JavaScript', 'js'],
    ],
  },
  {
    group: 'Frontend Development',
    items: [
      ['React.js', 'react'],
      ['JavaScript', 'js'],
      ['HTML5', 'html'],
      ['CSS3', 'css'],
    ],
  },
]

export const competencies = [
  'Backend Software Development',
  'Distributed Systems Engineering',
  'Microservices Architecture',
  'REST API Development',
  'System Design & Scalability',
  'Cloud-Native Application Development',
  'AWS Architecture & Deployment',
  'Kubernetes Orchestration',
  'Docker Containerization',
  'CI/CD Pipeline Automation',
  'Performance Optimization',
  'High Availability Systems',
  'Database Design & Optimization',
  'Full Stack Development',
  'Agile Software Development',
  'Production Support & Reliability Engineering',
  'Infrastructure Automation',
  'Software Architecture & Technical Problem Solving',
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
    school: 'National Institute of Technology, India',
    place: 'India',
    degree: 'Bachelor of Technology in Information Technology',
    dates: 'Apr 2023',
    detail: 'GPA 3.14',
  },
]
