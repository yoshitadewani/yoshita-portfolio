export type ProjectCategory =
  | 'Brand Identity'
  | 'Posters'
  | 'Social Media'
  | 'Campaigns'
  | 'Presentation Design'
  | 'Other'

export type PortfolioProject = {
  id: string
  title: string
  client: string
  category: ProjectCategory
  year: string
  description: string
  images: string[]
  featured?: boolean
}

export const projectCategories: Array<'All' | ProjectCategory> = [
  'All',
  'Brand Identity',
  'Posters',
  'Social Media',
  'Campaigns',
  'Presentation Design',
  'Other',
]

export const projects: PortfolioProject[] = [
  {
    id: 'fashion-campaign',
    title: 'New Drop / Fashion Campaign',
    client: 'Fashion social set',
    category: 'Campaigns',
    year: '2024',
    description: 'A coordinated set of fashion campaign graphics built for launch announcements, reviews, and promotional moments.',
    images: [
      '/assets/fashion-brand-1.png',
      '/assets/fashion-brand-2.png',
      '/assets/fashion-brand-3.png',
      '/assets/fashion-brand-4.png',
      '/assets/fashion-brand-5.png',
      '/assets/fashion-brand-6.png',
    ],
    featured: true,
  },
  {
    id: 'poster-party',
    title: 'Thirsty Sunday',
    client: "Dee's Club and Lounge",
    category: 'Posters',
    year: '2024',
    description: 'A bold event poster balancing editorial type, portraiture, and a saturated nightlife palette.',
    images: ['/assets/poster-party.png'],
    featured: true,
  },
  {
    id: 'poster-waffle',
    title: 'Weekends Are For Waffles',
    client: 'The Waffle Crunch',
    category: 'Posters',
    year: '2024',
    description: 'A playful food poster with tactile color, product focus, and a clear delivery call to action.',
    images: ['/assets/poster-waffle.png'],
  },
  {
    id: 'poster-hiring',
    title: 'We Are Hiring',
    client: 'Sandhills Global',
    category: 'Posters',
    year: '2024',
    description: 'A recruitment poster using a direct typographic hierarchy and an approachable workplace image.',
    images: ['/assets/poster-hiring.png'],
  },
]

export const services = [
  { label: 'Brand identity', detail: 'Logos, visual direction, and systems that make a brand feel considered.' },
  { label: 'Social media design', detail: 'Campaign sets and single assets designed to stop the scroll.' },
  { label: 'Poster design', detail: 'Clear, expressive compositions for events, launches, and announcements.' },
  { label: 'Presentation design', detail: 'Slides that give ideas a stronger rhythm and visual point of view.' },
]

export const process = [
  ['01', 'Understand', 'I start with the brief, audience, and the feeling the work needs to create.'],
  ['02', 'Explore', 'I build visual directions that test type, color, imagery, and tone.'],
  ['03', 'Refine', 'We sharpen the chosen route through focused feedback and clear decisions.'],
  ['04', 'Deliver', 'You receive polished, practical assets ready for their intended channel.'],
] as const
