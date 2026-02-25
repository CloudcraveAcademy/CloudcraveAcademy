import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log('Seeding database...');

  // 1. Categories
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .upsert([
      { name: 'Health and Social Care Training', slug: 'health-social-care', description: 'Accredited training for the care sector.' },
      { name: 'SIA Training', slug: 'sia-training', description: 'Security industry authority approved courses.' },
      { name: 'Functional Skills Training', slug: 'functional-skills', description: 'Essential skills for life and work.' }
    ], { onConflict: 'slug' })
    .select();

  if (catError) {
    console.error('Error seeding categories:', catError);
    return;
  }
  console.log('Categories seeded.');

  const catMap = categories.reduce((acc: any, cat: any) => {
    acc[cat.slug] = cat.id;
    return acc;
  }, {});

  // 2. Courses
  const { error: courseError } = await supabase
    .from('courses')
    .upsert([
      {
        title: 'Level 3 Diploma in Adult Care',
        slug: 'level-3-diploma-adult-care',
        category_id: catMap['health-social-care'],
        description: 'Advanced qualification for lead adult care workers.',
        overview: 'This diploma is designed for those who work in adult care settings and have some responsibility for others.',
        price_standard: 850,
        price_platinum: 1200,
        deposit_amount: 50,
        duration: '12 Months',
        format: 'Blended Learning',
        is_published: true,
        image_url: 'https://picsum.photos/seed/care1/800/450',
        learning_outcomes: ['Promote communication in care settings', 'Duty of care', 'Equality and inclusion'],
        who_it_is_for: ['Senior care assistants', 'Team leaders in care']
      },
      {
        title: 'SIA Door Supervisor Training',
        slug: 'sia-door-supervisor',
        category_id: catMap['sia-training'],
        description: 'Get your SIA licence to work as a door supervisor.',
        overview: 'This course covers everything you need to know to work safely and effectively as a door supervisor.',
        price_standard: 250,
        price_platinum: 450,
        deposit_amount: 50,
        duration: '6 Days',
        format: 'In-person',
        is_published: true,
        image_url: 'https://picsum.photos/seed/sia1/800/450',
        learning_outcomes: ['Conflict management', 'Physical intervention', 'Legal aspects of security'],
        who_it_is_for: ['Individuals seeking security work']
      },
      {
        title: 'Functional Skills English Level 2',
        slug: 'functional-skills-english-l2',
        category_id: catMap['functional-skills'],
        description: 'Equivalent to GCSE English Grade 4 (C).',
        overview: 'Improve your English skills for work and everyday life with this Level 2 qualification.',
        price_standard: 150,
        price_platinum: 300,
        deposit_amount: 50,
        duration: 'Flexible',
        format: 'Online',
        is_published: true,
        image_url: 'https://picsum.photos/seed/english1/800/450',
        learning_outcomes: ['Reading comprehension', 'Writing skills', 'Speaking and listening'],
        who_it_is_for: ['Those needing a GCSE equivalent for jobs or uni']
      }
    ], { onConflict: 'slug' });

  if (courseError) {
    console.error('Error seeding courses:', courseError);
    return;
  }
  console.log('Courses seeded.');

  console.log('Seeding complete!');
}

seed();
