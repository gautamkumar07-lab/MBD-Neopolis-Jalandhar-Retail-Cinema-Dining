export interface Store {
  id: string;
  name: string;
  shopNumber: string;
  floor: 'Lower Ground' | 'Ground Floor' | 'First Floor' | 'Second Floor' | 'Food Court / Top Floor';
  floorCode: 'LGF' | 'GF' | 'FF' | 'SF' | 'TF';
  category: 'Department & Anchors' | 'Fashion & Apparel' | 'Beauty & Personal Care' | 'Footwear & Sports' | 'Electronics & Tech' | 'Wellness & Spa' | 'Cinema & Multiplex' | 'Food Court & Dining' | 'Entertainment & Gaming';
  phone: string;
  secondaryPhone?: string;
  description: string;
  tags: string[];
  isAnchor?: boolean;
  timings?: string;
  featured?: boolean;
}

export interface MallEvent {
  id: string;
  title: string;
  year?: string;
  category: 'Celebration' | 'Sports & Fitness' | 'Automobile Display' | 'Store Launch' | 'Community & Culture' | 'Entertainment';
  summary: string;
  publishedStatus: 'Historical Listing';
}

export interface FloorInfo {
  code: 'LGF' | 'GF' | 'FF' | 'SF' | 'TF';
  name: string;
  shortName: string;
  levelNumber: number;
  highlight: string;
  description: string;
}

export const FLOORS_CONFIG: FloorInfo[] = [
  {
    code: 'LGF',
    name: 'Lower Ground Floor',
    shortName: 'LGF',
    levelNumber: -1,
    highlight: 'Sports & Active Lifestyle Anchor',
    description: 'Home to the massive Decathlon anchor store featuring athletic equipment, sportswear, and outdoor gear.'
  },
  {
    code: 'GF',
    name: 'Ground Floor',
    shortName: 'Ground',
    levelNumber: 0,
    highlight: 'Luxury Department, Beauty & Global Fashion',
    description: 'Atrium entrance level featuring Shoppers Stop anchor, Nykaa beauty boutique, Skechers, Jack & Jones, and Octave.'
  },
  {
    code: 'FF',
    name: 'First Floor',
    shortName: 'Level 1',
    levelNumber: 1,
    highlight: 'PVR Gold Class Multiplex & Apparel',
    description: 'Direct entry to 4-Screen PVR Multiplex anchor, United Colors of Benetton, Jockey, Tommy Travel Gear, and Tech Care.'
  },
  {
    code: 'SF',
    name: 'Second Floor',
    shortName: 'Level 2',
    levelNumber: 2,
    highlight: 'Luxury Spas & Holistic Rejuvenation',
    description: 'Serene wellness level hosting Peaceful SPA and Banyan Tree SPA for premium therapeutic treatments.'
  },
  {
    code: 'TF',
    name: 'Top Floor / Gigabite & Gaming',
    shortName: 'Food & Fun',
    levelNumber: 3,
    highlight: 'Gigabite 20,000+ sq. ft. Food Lounge & Gaming Zone',
    description: 'Sprawling culinary destination with Domino’s, Spaghetti Club, Juice Café, China Bowls, Blend Berry, Bar, and Plutuss Gaming Zone.'
  }
];

export const STORES_DIRECTORY: Store[] = [
  {
    id: 'shoppers-stop',
    name: 'Shoppers Stop',
    shopNumber: 'Anchor GF',
    floor: 'Ground Floor',
    floorCode: 'GF',
    category: 'Department & Anchors',
    phone: '0181-4069000',
    description: 'Flagship multi-brand luxury department store featuring premier international cosmetics, designer apparel, footwear, and fashion accessories.',
    tags: ['Department Store', 'Luxury Fashion', 'Perfumes', 'Watches'],
    isAnchor: true,
    featured: true,
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'decathlon',
    name: 'Decathlon',
    shopNumber: 'Anchor LGF',
    floor: 'Lower Ground',
    floorCode: 'LGF',
    category: 'Footwear & Sports',
    phone: '8431910063',
    description: 'World-renowned sports mega-retailer carrying over 50 sports categories, camping gear, fitness equipment, athletic apparel, and outdoor footwear.',
    tags: ['Sports Gear', 'Fitness Equipment', 'Outdoor Camping', 'Running Shoes'],
    isAnchor: true,
    featured: true,
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'pvr-cinemas',
    name: 'PVR Cinemas',
    shopNumber: 'Anchor FF',
    floor: 'First Floor',
    floorCode: 'FF',
    category: 'Cinema & Multiplex',
    phone: '9311565544',
    description: 'Four-screen world-class multiplex featuring ultra-luxurious Gold Class reclining seating, Dolby Surround sound, gourmet cinema snacks, and box office.',
    tags: ['4-Screen Multiplex', 'Gold Class Recliners', 'Dolby Cinema', 'Movies'],
    isAnchor: true,
    featured: true,
    timings: '09:30 AM – 11:30 PM'
  },
  {
    id: 'nykaa',
    name: 'Nykaa',
    shopNumber: 'G-1',
    floor: 'Ground Floor',
    floorCode: 'GF',
    category: 'Beauty & Personal Care',
    phone: '0181-4649789',
    description: 'Curated beauty haven showcasing prestige makeup, luxury skincare, fragrances, haircare, and personal beauty consultations.',
    tags: ['Cosmetics', 'Skincare', 'Luxury Fragrances', 'Beauty Studio'],
    featured: true,
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'i-delta',
    name: 'I-Delta',
    shopNumber: 'G-3',
    floor: 'Ground Floor',
    floorCode: 'GF',
    category: 'Electronics & Tech',
    phone: '0181-4157901',
    secondaryPhone: '7089078786',
    description: 'Premier consumer electronics and authorized Apple & lifestyle device hub with smartphones, tablets, premium audio, and accessories.',
    tags: ['Apple Devices', 'Smartphones', 'Audio Gadgets', 'Accessories'],
    featured: true,
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'skechers',
    name: 'Skechers',
    shopNumber: 'G-4',
    floor: 'Ground Floor',
    floorCode: 'GF',
    category: 'Footwear & Sports',
    phone: '0181-5017531',
    description: 'Global footwear leader providing innovative comfort walking shoes, performance running models, slip-ins, and athletic lifestyle sneakers.',
    tags: ['Walking Shoes', 'Arch Fit', 'Athletic Footwear', 'Comfort Sneakers'],
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'jack-jones',
    name: 'Jack & Jones',
    shopNumber: 'G-5',
    floor: 'Ground Floor',
    floorCode: 'GF',
    category: 'Fashion & Apparel',
    phone: '0181-4636603',
    description: 'European men’s denim and contemporary fashion brand with premium denim fits, tailored urban jackets, graphic tees, and streetwear.',
    tags: ['Men’s Denim', 'Urban Jackets', 'European Fashion', 'Casualwear'],
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'octave',
    name: 'Octave',
    shopNumber: 'G-6',
    floor: 'Ground Floor',
    floorCode: 'GF',
    category: 'Fashion & Apparel',
    phone: '0181-5017704',
    description: 'Renowned apparel house featuring comfortable premium cotton casuals, polos, smart trousers, sweatshirts, and seasonal knitwear.',
    tags: ['Casual Wear', 'Knitwear', 'Polo Shirts', 'Winter Wear'],
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'true-value',
    name: 'True Value',
    shopNumber: 'F-1',
    floor: 'First Floor',
    floorCode: 'FF',
    category: 'Fashion & Apparel',
    phone: '0181-2911022',
    description: 'Curated retail showroom providing value lifestyle merchandise, travel essentials, and wardrobe collections.',
    tags: ['Lifestyle', 'Fashion Staples', 'Everyday Essentials'],
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'q-digi',
    name: 'Q-Digi',
    shopNumber: 'F-2',
    floor: 'First Floor',
    floorCode: 'FF',
    category: 'Electronics & Tech',
    phone: '0181-4660012',
    description: 'Certified electronic service, repair and support destination specialized in prompt troubleshooting, hardware care, and warranty assistance.',
    tags: ['Device Care', 'Authorized Service', 'Hardware Repair', 'Mobile Support'],
    timings: '11:00 AM – 9:00 PM'
  },
  {
    id: 'tommy-travel-gear',
    name: 'Tommy Travel Gear',
    shopNumber: 'F-4',
    floor: 'First Floor',
    floorCode: 'FF',
    category: 'Fashion & Apparel',
    phone: '0181-4642409',
    description: 'Signature luggage, hardshell trolleys, business briefcases, backpacks, and durable leather travel accessories by Tommy Hilfiger.',
    tags: ['Travel Luggage', 'Trolley Bags', 'Business Backpacks', 'Travel Gear'],
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'ucb',
    name: 'UCB (United Colors of Benetton)',
    shopNumber: 'F-6',
    floor: 'First Floor',
    floorCode: 'FF',
    category: 'Fashion & Apparel',
    phone: '0181-4155677',
    description: 'Celebrated Italian brand blending vibrant color palettes, sustainable fabrics, fine knitwear, and modern casual apparel for men and women.',
    tags: ['Italian Fashion', 'Knitwear', 'Vibrant Polos', 'Casual Chic'],
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'jockey',
    name: 'Jockey',
    shopNumber: 'F-7',
    floor: 'First Floor',
    floorCode: 'FF',
    category: 'Fashion & Apparel',
    phone: '0181-5083266',
    description: 'Exclusive brand outlet featuring premium innerwear, thermals, loungewear, athleisure trackpants, and comfort sleepwear.',
    tags: ['Innerwear', 'Loungewear', 'Athleisure', 'Activewear'],
    timings: '11:00 AM – 9:30 PM'
  },
  {
    id: 'peaceful-spa',
    name: 'Peaceful SPA',
    shopNumber: 'S-1',
    floor: 'Second Floor',
    floorCode: 'SF',
    category: 'Wellness & Spa',
    phone: '0181-4647632',
    secondaryPhone: '9056183619',
    description: 'Tranquil wellness sanctuary offering therapeutic body massages, deep tissue treatments, aroma therapy, and tension relief rituals.',
    tags: ['Swedish Massage', 'Aromatherapy', 'Deep Tissue', 'Relaxation'],
    timings: '11:00 AM – 9:00 PM'
  },
  {
    id: 'banyan-tree-spa',
    name: 'Banyan Tree SPA',
    shopNumber: 'S-3',
    floor: 'Second Floor',
    floorCode: 'SF',
    category: 'Wellness & Spa',
    phone: '0181-4150607',
    secondaryPhone: '8447393163',
    description: 'Holistic luxury spa inspired by ancient Asian healing traditions, herbal scrubs, restorative facials, and customized wellness therapies.',
    tags: ['Asian Therapies', 'Herbal Scrubs', 'Ayurvedic Rituals', 'Wellness'],
    timings: '11:00 AM – 9:00 PM'
  },
  {
    id: 'dominos',
    name: "Domino's Pizza",
    shopNumber: 'FCD-1',
    floor: 'Food Court / Top Floor',
    floorCode: 'TF',
    category: 'Food Court & Dining',
    phone: '0181-4631564',
    description: 'Freshly baked hand-tossed and cheese burst pizzas, pasta bowls, garlic breadsticks, and refreshing beverages served hot and quick.',
    tags: ['Pizzas', 'Garlic Bread', 'Fast Food', 'Beverages'],
    timings: '11:00 AM – 10:30 PM'
  },
  {
    id: 'speghetti-club',
    name: 'Speghetti Club',
    shopNumber: 'FCD-3',
    floor: 'Food Court / Top Floor',
    floorCode: 'TF',
    category: 'Food Court & Dining',
    phone: '9540443322',
    description: 'Authentic Italian pasta cuisine with creamy Alfredo, fiery Arrabbiata, wood-flavored lasagnas, and fresh garlic toasts.',
    tags: ['Italian Pasta', 'Lasagna', 'Gourmet Sauces', 'Quick Dining'],
    timings: '11:00 AM – 10:30 PM'
  },
  {
    id: 'juice-cafe',
    name: 'Juice Café',
    shopNumber: 'FCW-04',
    floor: 'Food Court / Top Floor',
    floorCode: 'TF',
    category: 'Food Court & Dining',
    phone: '9780306231',
    description: 'Refreshing wellness station serving freshly squeezed citrus juices, green detox blends, fruity thick shakes, and iced coolers.',
    tags: ['Cold Pressed Juice', 'Smoothies', 'Detox Shakes', 'Fruit Bowls'],
    timings: '11:00 AM – 10:30 PM'
  },
  {
    id: 'china-bowls',
    name: 'China Bowls',
    shopNumber: 'FCD-05',
    floor: 'Food Court / Top Floor',
    floorCode: 'TF',
    category: 'Food Court & Dining',
    phone: '9780306231',
    description: 'Flavorsome Pan-Asian specialties, sizzling wok noodles, Manchurian bowls, crispy dim sums, and fragrant fried rice combos.',
    tags: ['Pan-Asian', 'Wok Noodles', 'Dim Sums', 'Hakka Rice'],
    timings: '11:00 AM – 10:30 PM'
  },
  {
    id: 'blend-berry',
    name: 'Blend Berry',
    shopNumber: 'FCW-07',
    floor: 'Food Court / Top Floor',
    floorCode: 'TF',
    category: 'Food Court & Dining',
    phone: '9034827949',
    description: 'Specialty fruit & berry smoothies, Belgian waffles, dessert milkshakes, crushed ice coolers, and artisan mocktails.',
    tags: ['Berry Smoothies', 'Mocktails', 'Waffles', 'Dessert Shakes'],
    timings: '11:00 AM – 10:30 PM'
  },
  {
    id: 'plutuss-gaming-zone',
    name: 'Plutuss Gaming Zone',
    shopNumber: 'TF',
    floor: 'Food Court / Top Floor',
    floorCode: 'TF',
    category: 'Entertainment & Gaming',
    phone: '0181-4649238',
    secondaryPhone: '7889146376',
    description: 'Family entertainment powerhouse with latest arcade cabinets, VR simulations, air hockey, redemption prize games, and kiddie rides.',
    tags: ['Arcade Games', 'VR Simulation', 'Kiddie Rides', 'Family Entertainment'],
    featured: true,
    timings: '11:00 AM – 10:30 PM'
  }
];

export const MALL_EVENTS: MallEvent[] = [
  {
    id: 'teachers-day-2021',
    title: "Teacher's Day Celebration",
    year: '2021',
    category: 'Community & Culture',
    summary: 'Honoring regional educators and mentors with special tribute sessions, retail gift privileges, and interactive podium speeches.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'independence-75',
    title: '75th Independence Day Celebrations',
    year: 'Historical',
    category: 'Celebration',
    summary: 'Patriotic tricolor illumination across the atrium, ceremonial flag display, cultural musical performances, and freedom shopping discounts.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'valentines-day-2021',
    title: "Valentine's Day Extravaganza",
    year: '2021',
    category: 'Celebration',
    summary: 'Romantic photo installations, live acoustic violin duets in Gigabite food lounge, and couple dining promotions across retail brands.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'cycling-event-2020',
    title: 'Community Cycling Event & Fitness Rally',
    year: '2020',
    category: 'Sports & Fitness',
    summary: 'Morning bicycle rally starting from BMC Chowk along G.T. Road promoting eco-friendly mobility and healthy city lifestyles.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'makeover-activity-2020',
    title: 'Style & Makeover Activity',
    year: '2020',
    category: 'Community & Culture',
    summary: 'Complimentary professional beauty consultations, hair styling demos, and runway makeover displays in collaboration with Nykaa.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'valentines-day-2020',
    title: "Valentine's Day Special Fiesta",
    year: '2020',
    category: 'Celebration',
    summary: 'Interactive romantic stage games, chocolate tasting corners, and exclusive movie night packages with PVR Gold Class.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'ninth-anniversary',
    title: 'MBD Neopolis Mall 9th Anniversary Celebration',
    year: 'Historical',
    category: 'Celebration',
    summary: 'Grand multi-day celebration marking nine successful years of premier shopping with colossal birthday cake cutting and live band sets.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'she-ek-udaan',
    title: 'She Ek Udaan - Women Empowerment Conclave',
    year: 'Historical',
    category: 'Community & Culture',
    summary: 'Felicitation ceremony recognizing trailblazing women leaders, entrepreneurs, and artists from across the Doaba region.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'honda-car-display',
    title: 'Honda Premium Automobile Showcase',
    year: 'Historical',
    category: 'Automobile Display',
    summary: 'Central atrium showcase of the latest Honda sedans and SUVs with live booking kiosks and vehicle test-drive consultations.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'ucb-launch',
    title: 'Launch of United Colors of Benetton Showroom',
    year: 'Historical',
    category: 'Store Launch',
    summary: 'Inaugural ribbon-cutting and champagne reception introducing the brand new Italian fashion collection on the First Floor.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'walkathon',
    title: 'MBD Neopolis City Walkathon',
    year: 'Historical',
    category: 'Sports & Fitness',
    summary: 'Citizen fitness walking challenge encouraging regular exercise and active health across Jalandhar civil society.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'seventh-anniversary',
    title: 'MBD Neopolis Jalandhar 7th Anniversary',
    year: 'Historical',
    category: 'Celebration',
    summary: 'Milestone anniversary celebration featuring shopper lucky draws, live entertainment, and exclusive commemorative offers.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'decathlon-launch',
    title: 'Grand Opening of Decathlon Megastore',
    year: 'Historical',
    category: 'Store Launch',
    summary: 'High-energy launch of the Lower Ground sports anchor with sports gear demonstrations, archery stations, and opening specials.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'childrens-day-2019',
    title: "Children's Day Carnival",
    year: '2019',
    category: 'Community & Culture',
    summary: 'Magic show, face painting, drawing competitions, and Plutuss Gaming Zone arcade tokens for children and families.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'nissan-kicks-2019',
    title: 'Nissan Kicks Automobile Launch & Display',
    year: '2019',
    category: 'Automobile Display',
    summary: 'Exclusive atrium debut of the new Nissan Kicks crossover with interactive VR displays and vehicle walk-arounds.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'mirchi-movie-night-2019',
    title: 'Radio Mirchi Movie Premiere Night',
    year: '2019',
    category: 'Entertainment',
    summary: 'Red-carpet movie screening at PVR Gold Class with Radio Mirchi RJs, live contests, and celebrity interactions.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'kids-dance-2019',
    title: 'All-Punjab Kids Dance Championship',
    year: '2019',
    category: 'Entertainment',
    summary: 'Vibrant youth dance contest on the central atrium stage with dance academy trophies and audience voting.',
    publishedStatus: 'Historical Listing'
  },
  {
    id: 'shopping-festival-2018',
    title: 'Grand MBD Shopping Festival',
    year: '2018',
    category: 'Celebration',
    summary: 'Annual mega shopping carnival rewarding shoppers with hourly surprise vouchers and grand bumper prizes.',
    publishedStatus: 'Historical Listing'
  }
];

export const LOCATION_COMPARISON = [
  {
    feature: 'City & Primary Location',
    jalandhar: 'BMC Chowk, Main G.T. Road (Next to Radisson Hotel)',
    ludhiana: 'Main Ferozepur Road (Adjacent to PAU & Westend)',
    analysis: 'Both occupy prime arterial transit thoroughfares in Punjab’s two largest commercial centers.'
  },
  {
    feature: 'Total Development Footprint',
    jalandhar: 'Multi-level development with 4 levels of retail',
    ludhiana: '785,000 sq. ft. development across a 4-acre site',
    analysis: 'Ludhiana’s specific 785k sq. ft. figure is explicitly documented on their portal, whereas Jalandhar highlights retail level configuration.'
  },
  {
    feature: 'Multiplex Cinema & Screens',
    jalandhar: '4-Screen PVR Multiplex with luxury Gold Class recliners',
    ludhiana: '5-Screen Multiplex with digital projection',
    analysis: 'Both feature state-of-the-art cinema anchor destinations with dedicated screening lounges.'
  },
  {
    feature: 'Food & Culinary Flagship',
    jalandhar: 'Gigabite Food Lounge (> 20,000 sq. ft. double-height space + Bar + Express)',
    ludhiana: 'Gigabite Food Lounge & Bar concept',
    analysis: 'Owned and managed directly by MBD Group as their in-house signature hospitality dining brand.'
  },
  {
    feature: 'Parking Infrastructure',
    jalandhar: 'Multi-level dedicated vehicle parking',
    ludhiana: 'Multi-level parking facility accommodating over 600 vehicles',
    analysis: 'Ludhiana documents a 600+ vehicle capacity; Jalandhar specifies multi-level structured parking without audited stall numbers.'
  },
  {
    feature: 'Hospitality Integration',
    jalandhar: 'Adjacent to Radisson Hotel Jalandhar at BMC Chowk',
    ludhiana: 'Radisson Blu Hotel MBD Ludhiana integrated directly in development',
    analysis: 'Both leverage synergy with Radisson 5-star hospitality infrastructure to attract elite business travelers and tourists.'
  }
];

export const MBD_GROUP_FACTS = {
  origins: 'Founded by the late Shri Ashok Kumar Malhotra with deep roots in educational textbook and reference publishing (MBD Books).',
  verticals: [
    { title: 'Publishing & Educational Content', desc: 'Over six decades producing millions of educational books, curriculum materials, and reference guides across India.' },
    { title: 'E-Learning & Digital EdTech', desc: 'Interactive digital classroom software, multimedia educational modules, and LMS platforms.' },
    { title: 'Hospitality & Five-Star Hotels', desc: 'Prestige hotel developments including Radisson Blu Hotel MBD Ludhiana and hospitality management.' },
    { title: 'Commercial Real Estate & Malls', desc: 'Pioneering mixed-use developments under the MBD Neopolis brand in Jalandhar and Ludhiana.' },
    { title: 'Food & Beverage Concept Management', desc: 'Creator and operator of the Gigabite Food Lounge & Bar and Gigabite Express hospitality brands.' },
    { title: 'Eco-Friendly Paper & Stationery', desc: 'Eco-conscious notebook manufacturing, stationery distribution, and recycled paper products.' }
  ]
};

export const RESEARCH_METHODOLOGY_NOTES = [
  {
    title: 'Sole Information Source',
    detail: 'All information is transcribed directly from the published pages of mbdneopolis.com and its linked sections, preserving original business claims and shop codes.'
  },
  {
    title: 'Directory Status & Timeliness',
    detail: 'Store directories represent the published listings on the website. Store operations, brands, and contact numbers may evolve over time.'
  },
  {
    title: 'Data Separation Guardrail',
    detail: 'Ludhiana’s 785,000 sq. ft. area, 4-acre footprint, and 600+ parking numbers belong strictly to the Ludhiana development and are not conflated with Jalandhar.'
  },
  {
    title: 'Financial & Footfall Disclosures',
    detail: 'The website does not disclose audited revenue figures, daily visitor counts, commercial lease agreements, or occupancy percentages.'
  }
];
