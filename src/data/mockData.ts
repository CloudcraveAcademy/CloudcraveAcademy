export const MOCK_CATEGORIES = [
  { id: '1', name: 'Health & Social Care', slug: 'health-social-care', icon: '🏥' },
  { id: '2', name: 'SIA Training', slug: 'sia-training', icon: '🛡️' },
  { id: '3', name: 'Functional Skills', slug: 'functional-skills', icon: '📚' },
];

export const MOCK_COURSES = [
  {
    id: 'c1',
    category_id: '1',
    title: 'Level 3 Diploma in Adult Care',
    slug: 'level-3-diploma-adult-care',
    description: 'The perfect starting point for a career in senior care roles, providing essential knowledge and practical skills.',
    overview: 'This qualification is designed for those who work in a health and social care setting and have a degree of responsibility in their role. It covers a wide range of topics including duty of care, safeguarding, and person-centered support.',
    learning_outcomes: [
      'Understand the role of the social care worker',
      'Implement person-centered approaches',
      'Maintain health and safety in a care setting',
      'Support individuals with specific needs'
    ],
    who_it_is_for: [
      'Senior Care Assistants',
      'Support Workers',
      'Team Leaders in Care',
      'Individuals looking to progress in Social Care'
    ],
    duration: '12 Months',
    format: 'Blended Learning',
    certification_details: 'TQUK Level 3 Diploma (RQF)',
    price_standard: 850.00,
    price_platinum: 1150.00,
    deposit_amount: 50.00,
    image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    is_published: true,
    categories: MOCK_CATEGORIES[0]
  },
  {
    id: 'c2',
    category_id: '2',
    title: 'SIA Door Supervision Training',
    slug: 'sia-door-supervision',
    description: 'Get your SIA license and start working as a professional security guard or door supervisor in the UK.',
    overview: 'This 6-day course is mandatory for anyone wishing to work as a Door Supervisor. It covers physical intervention, conflict management, and civil/criminal law relevant to security.',
    learning_outcomes: [
      'Physical intervention skills',
      'Conflict management for the security industry',
      'Working as a Door Supervisor',
      'Emergency first aid at work'
    ],
    who_it_is_for: [
      'New entrants to the security industry',
      'Individuals seeking flexible evening/weekend work',
      'Event security staff'
    ],
    duration: '6 Days',
    format: 'In-person / Classroom',
    certification_details: 'SIA Recognized Level 2 Award',
    price_standard: 199.00,
    price_platinum: 299.00,
    deposit_amount: 50.00,
    image_url: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80',
    is_published: true,
    categories: MOCK_CATEGORIES[1]
  },
  {
    id: 'c3',
    category_id: '3',
    title: 'Functional Skills English Level 2',
    slug: 'functional-skills-english-l2',
    description: 'Achieve a GCSE equivalent qualification in English to unlock higher education and better job opportunities.',
    overview: 'Functional Skills Level 2 English is equivalent to a GCSE Grade 4 (C). This course focuses on practical English skills used in everyday life and work.',
    learning_outcomes: [
      'Effective reading and comprehension',
      'Professional writing and grammar',
      'Speaking, listening, and communication',
      'Exam preparation and techniques'
    ],
    who_it_is_for: [
      'Apprentices',
      'University applicants',
      'Professionals needing GCSE equivalents',
      'Adult learners'
    ],
    duration: '3-6 Months',
    format: 'Online / Self-paced',
    certification_details: 'City & Guilds Level 2 Functional Skills',
    price_standard: 150.00,
    price_platinum: 250.00,
    deposit_amount: 50.00,
    image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    is_published: true,
    categories: MOCK_CATEGORIES[2]
  }
];

export const MOCK_ENROLLMENTS = [
  {
    id: 'e1',
    user_id: 'u1',
    course_id: 'c1',
    package_type: 'platinum',
    status: 'active',
    progress: 45,
    enrolled_at: new Date().toISOString(),
    courses: MOCK_COURSES[0]
  }
];
