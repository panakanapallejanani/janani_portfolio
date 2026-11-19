import certCisco from '@/assets/cert-cisco.png';
import certCodeon from '@/assets/cert-codeon.png';
import certPwc from '@/assets/cert-pwc.png';
import certServiceNow from '@/assets/cert-servicenow.png';
import certSmartBridge from '@/assets/cert-smartbridge.png';
import emailGenerator from '@/assets/email-generator.png';
import hospitalWorkflow from '@/assets/hospital-workflow.png';
import paymentDashboard from '@/assets/payment-dashboard.png';
import profile from '@/assets/profile.png';

export const profileImage = profile;

export const links = {
  github: 'https://github.com/panakanapallejanani',
  linkedin: 'https://linkedin.com/in/janani-panakanapalle-b88aa2300/',
  email: 'mailto:heyjanani07@gmail.com',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const aboutStats = [
  { value: 'Computer Science', label: 'Engineering' },
  { value: 'Industry-focused', label: 'certifications' },
  { value: 'Full-stack', label: 'Development interests' },
];

export const education = [
  {
    level: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    school: 'Sri Venkateswara College of Engineering',
    years: '2024 – 2027',
    cgpa: 'CGPA: 8.9/10',
    location: 'Tirupati, Andhra Pradesh.',
  },
  {
    level: 'Diploma',
    field: 'Computer Engineering',
    school: 'Government Polytechnic Institute for Women',
    years: '2021 – 2024',
    cgpa: 'CGPA: 9.1/10',
    location: 'Kadapa, Andhra Pradesh.',
  },
];

export const skills = [
  { category: 'Programming', items: ['Java', 'Python', 'C', 'SQL'] },
  {
    category: 'Web & Backend',
    items: ['HTML', 'CSS', 'JavaScript', 'JDBC', 'Hibernate / JPA', 'REST APIs'],
  },
  { category: 'Databases', items: ['MySQL', 'Oracle', 'DBMS'] },
  {
    category: 'Cloud Computing',
    items: ['AWS', 'Microsoft Azure', 'Cloud Storage Concepts', 'Basic Deployment'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Eclipse', 'IntelliJ IDEA', 'VS Code', 'Figma', 'Maven'],
  },
  { category: 'Core Concepts', items: ['Operating Systems', 'Computer Networks'] },
];

export interface Project {
  tag: string;
  previewTag: string;
  title: string;
  summary: string;
  stack: string[];
  preview: {
    image: string;
    heading: string;
    subheading: string;
    badges: string[];
    disclaimer: string;
  };
  detailsTitle: string;
  contributions: string[];
}

export const projects: Project[] = [
  {
    tag: '01 / DATA ANALYTICS',
    previewTag: 'PAYMENT INTELLIGENCE / CONCEPTUAL PREVIEW',
    title: 'Payment Failure Analysis',
    summary:
      'Analyzed 13K+ payment transactions to identify failure patterns, key failure reasons and transaction trends.',
    stack: ['Python', 'SQL', 'MySQL', 'Power BI'],
    preview: {
      image: paymentDashboard,
      heading: '13K+',
      subheading: 'payment transactions analyzed',
      badges: ['Payment methods', 'Failure categories', 'Transaction trends'],
      disclaimer:
        'Illustrative layout, not an actual project screenshot. No performance metrics are represented.',
    },
    detailsTitle: 'Project details & key contributions',
    contributions: [
      'Used Python to clean, preprocess and prepare transaction data for analysis.',
      'Performed SQL analysis using MySQL to evaluate payment failure rates, payment methods, transaction trends and failure categories.',
      'Created an interactive Power BI dashboard to visualize KPIs, payment performance, failure reasons and key business insights.',
      'Identified recurring payment failure patterns and provided data-driven insights to support better payment performance.',
    ],
  },
  {
    tag: 'JAVA APPLICATION',
    previewTag: 'PROJECT WORKFLOW / CONCEPTUAL PREVIEW',
    title: 'Hospital Management System',
    summary:
      'Developed a hospital management system using Java, Hibernate and MySQL to manage patients, doctors, appointments and billing.',
    stack: ['Java', 'Hibernate', 'MySQL', 'Maven'],
    preview: {
      image: hospitalWorkflow,
      heading: 'Patients · Doctors · Appointments · Billing',
      subheading: 'Hospital records & workflow',
      badges: [],
      disclaimer: '',
    },
    detailsTitle: 'Key contributions',
    contributions: [
      'Implemented CRUD operations for efficient management of hospital records and workflows.',
      'Integrated Hibernate ORM with MySQL for database connectivity and persistent data management.',
      'Structured and managed the project using Maven for dependency management and build automation.',
    ],
  },
  {
    tag: 'GENERATIVE AI',
    previewTag: 'PROJECT WORKFLOW / CONCEPTUAL PREVIEW',
    title: 'AI Email Reply Generator',
    summary:
      'Developed a Generative AI-powered email response generator using Python, Streamlit and the Gemini API.',
    stack: ['Python', 'Streamlit', 'Gemini API'],
    preview: {
      image: emailGenerator,
      heading: 'Context + tone + requirements',
      subheading: 'Professional, context-aware email responses',
      badges: [],
      disclaimer: '',
    },
    detailsTitle: 'Key contributions',
    contributions: [
      'Implemented prompt engineering to generate professional email responses based on user-selected tones and requirements.',
      'Built an interactive Streamlit web application for automated, context-aware email response generation.',
      'Integrated the Gemini API to process user inputs and generate relevant responses in real time.',
    ],
  },
];

export const experience = [
  {
    period: 'February 2026 – August 2026',
    organization: 'PwC Launchpad Advisory Program',
    role: 'Professional training program',
    points: ['Generative AI', 'Modern Data Systems', 'Python Programming', 'Cloud Engineering'],
    listLabel: 'Participated in industry-focused training covering:',
  },
  {
    period: 'November 2023 – May 2024',
    organization: 'Codeon Technologies Pvt. Ltd.',
    role: 'Web Development & UI/UX Intern',
    points: [
      'Designed responsive web interfaces.',
      'Gained hands-on experience in UI/UX design.',
      'Worked on frontend development.',
      'Developed practical experience in web design and interface development.',
    ],
    listLabel: '',
  },
];

export const certifications = [
  {
    number: '01',
    image: certPwc,
    title: 'Generative AI, Modern Data Systems & Python Fundamentals',
    issuer: 'PwC Launchpad Program',
  },
  {
    number: '02',
    image: certCodeon,
    title: 'Web Development & UI/UX',
    issuer: 'Codeon Technologies Pvt. Ltd.',
  },
  {
    number: '03',
    image: certServiceNow,
    title: 'ServiceNow Platform Fundamentals',
    issuer: 'ServiceNow',
  },
  {
    number: '04',
    image: certCisco,
    title: 'Introduction to Networks',
    issuer: 'Cisco Networking Academy',
  },
  {
    number: '05',
    image: certSmartBridge,
    title: 'Full Stack Development',
    issuer: 'Smart Bridge',
  },
];
