/**
 * WordPress Projects Dataset
 *
 * Dedicated collection for WordPress websites, client solutions, and customized web builds.
 * Kept completely separate from the coding projects dataset (src/data/projects.js).
 *
 * Schema follows the repository's project data conventions:
 * - id: unique string identifier
 * - name: project display name
 * - title: full title of the project
 * - category: concise domain categorization (e.g. 'WordPress / E-Commerce / Education')
 * - status: completion / development status
 * - shortLabel: concise secondary label
 * - shortTitle: short name used for compact UI cards
 * - description: concise overview of the project and its context
 * - fullDescription: detailed description of requirements, user experience, and deliverables
 * - accuracyNote: factual scope and context notes without marketing hype (or null)
 * - features: specific deliverables, frontend customizations, and functionality built
 * - keyWins: notable project deliverables and technical solutions
 * - technicalFocus: core implementation areas and WordPress/WooCommerce competencies
 * - technologies: specific CMS tools, themes, plugins, and styling approaches used
 * - tags: searchable keywords matching technologies and project aspects
 * - githubUrl: optional public GitHub URL (null if not applicable)
 * - apiRepoUrl: optional companion API repository (null if not applicable)
 * - liveUrl: confirmed live website URL (or null if unavailable)
 * - featured: boolean flag
 * - windowFile: display label for the mock window header
 * - image: primary project cover image / screenshot
 * - gallery: array of screenshot paths for gallery presentation (empty array if pending)
 * - accent: color theme accent for UI highlights ('emerald', 'cyan', 'blue', 'amber', etc.)
 * - hudTitle: concise technical domain badge
 * - hudSub: secondary tools summary
 * - hudBadge: compact upper badge label
 */

export const wordpressProjects = [
  {
    id: 'vip-car-service',
    name: 'VIP Car Service',
    title: 'VIP Car Service',
    category: 'WordPress / Automotive / E-Commerce / Business Management',
    status: 'In Development',

    shortLabel: 'Automotive Service Management & E-Commerce Platform',
    shortTitle: 'VIP Car Service',

    description:
      'A comprehensive automotive platform combining an online store with custom business management software for service reception, vehicle records, inventory, invoicing, installment payments, SMS automation, and appointment booking.',

    fullDescription:
      'VIP Car Service is a large-scale software project being developed for a VIP automotive service center. Rather than functioning as a conventional business website, the platform combines an online store with a custom operational management system designed to handle the business workflows of an automotive service center.\n\nThe platform is designed to connect online product sales with in-store service operations through a shared inventory system. Staff will be able to register customers and their vehicles, record license plates, create service orders, add consumed products and services, calculate costs, and automatically deduct used materials from inventory.\n\nThe financial management module is designed to support manual invoices, custom invoice items, credit-based sales, consignment transactions, installment payment schedules, due-date tracking, and customer invoice delivery through SMS.\n\nAn automated messaging system is also part of the planned platform. It is intended to send upcoming vehicle maintenance reminders, payment and installment reminders, appointment confirmations, and appointment notifications.\n\nOn the customer-facing side, the system will provide an online appointment booking workflow. Customers will be able to select their vehicle, choose the required service, and request an appointment for a preferred date and time.\n\nCustomer accounts are designed to be synchronized using mobile phone numbers, allowing in-store transactions and vehicle service records to be associated with existing customer accounts whenever possible.\n\nThe platform will also provide reporting for sales, financial activity, and inventory movements, helping the business manage its operations through one integrated solution.\n\nThe project is currently under active development. Its scope includes both the online store and the custom operational management system; the planned modules must not be presented as fully completed or already available in production.',

    accuracyNote: null,

    features: [
      'Online WooCommerce store for automotive consumables and accessories',
      'In-store customer reception and vehicle registration',
      'Vehicle records with license plate and customer information',
      'Service order creation and management',
      'Automatic service cost calculations and consumed-item recording',
      'Shared inventory between online sales and in-store services',
      'Manual invoices with custom line items',
      'Credit-based sales, consignment transactions, and installment payments',
      'Payment due-date tracking and outstanding balance management',
      'SMS invoice delivery and automated payment reminders',
      'Vehicle maintenance reminders based on service dates and mileage',
      'Online automotive service appointment booking',
      'Customer account synchronization using mobile phone numbers',
      'Financial, sales, and inventory reporting'
    ],

    keyWins: [
      'Combines an online automotive store with custom in-store operational management',
      'Connects vehicle service orders and online purchases to one shared inventory',
      'Integrates invoice management, credit sales, installments, and payment tracking',
      'Automates customer communication through SMS reminders',
      'Brings customer records, vehicle history, and appointment workflows into one platform',
      'Designed to reduce reliance on separate business management and accounting tools'
    ],

    technicalFocus: [
      'Custom WordPress development',
      'WooCommerce integration',
      'Custom business management workflows',
      'In-store service reception and work-order management',
      'Vehicle and customer record management',
      'Shared inventory synchronization',
      'Manual invoice and installment management',
      'SMS API integration and automated notifications',
      'Online appointment booking workflows',
      'Customer account synchronization',
      'Financial and inventory reporting',
      'Custom PHP and plugin development'
    ],

    technologies: [
      'WordPress',
      'WooCommerce',
      'PHP',
      'Custom Plugin Development',
      'SMS API Integration'
    ],

    tags: [
      'WordPress',
      'WooCommerce',
      'Automotive',
      'Custom Development',
      'CRM',
      'ERP',
      'Inventory Management',
      'Service Management',
      'Vehicle Management',
      'Invoice Management',
      'Installment Payments',
      'SMS Automation',
      'Appointment Booking',
      'In Development'
    ],

    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: null,

    featured: false,

    windowFile: 'VIP Car Service // Automotive Management Platform',

    image: null,
    cardImage: null,
    gallery: [],

    accent: 'amber',

    hudTitle: 'Automotive Operations Platform',
    hudSub: 'E-Commerce · CRM/ERP Workflows',
    hudBadge: 'IN DEVELOPMENT'
  },
  {
    id: 'boorkas',
    name: 'Boorkas',
    title: 'Boorkas',
    category: 'WordPress / Fashion / E-Commerce',
    status: 'Completed / Client Project',

    shortLabel: 'Boutique Clothing Online Store',
    shortTitle: 'Boorkas',

    description:
      'A completed boutique e-commerce website developed for a clothing business, featuring a customized WooCommerce storefront with particular attention to product-card design, product presentation, and refined product archive layouts.',

    fullDescription:
      'Boorkas is a completed e-commerce project developed for a boutique clothing business.\n\nThe website provides an online shopping experience built with WordPress and WooCommerce, with a focus on presenting clothing products through a carefully customized storefront.\n\nA key aspect of the project is the visual customization of product cards and product archive layouts. Dedicated styling adjustments were implemented to create a distinctive and consistent presentation of product images, information, pricing, and shopping elements.\n\nThe project also involved Woodmart customization and custom CSS development to refine the overall storefront experience and product catalog presentation.\n\nThe website has been completed and delivered as a client project.',

    accuracyNote: null,

    features: [
      'Boutique-style online clothing store',
      'WordPress and WooCommerce e-commerce implementation',
      'Customized product-card design and styling',
      'Custom product archive and grid layouts',
      'Refined product information presentation',
      'Woodmart storefront customization',
      'Custom CSS adjustments for the product catalog'
    ],

    keyWins: [
      'Customized product-card presentation for a boutique clothing store',
      'Dedicated visual refinement of product archive and catalog layouts',
      'Woodmart-based storefront customization',
      'Completed boutique e-commerce implementation'
    ],

    technicalFocus: [
      'WordPress development',
      'WooCommerce product catalog customization',
      'Woodmart theme customization',
      'Custom product-card UI design',
      'Product archive and grid styling',
      'Custom CSS',
      'Responsive storefront refinement'
    ],

    technologies: [
      'WordPress',
      'WooCommerce',
      'Woodmart',
      'Custom CSS'
    ],

    tags: [
      'WordPress',
      'WooCommerce',
      'Woodmart',
      'E-Commerce',
      'Fashion',
      'Boutique',
      'Product Cards',
      'Product Grid',
      'Custom CSS'
    ],

    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: 'https://boorkas.com/',

    featured: false,

    windowFile: 'Boorkas // Woodmart & WooCommerce',

    image: `${import.meta.env.BASE_URL}images/boorkas/home.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/boorkas/home.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/boorkas/home.webp`,
      `${import.meta.env.BASE_URL}images/boorkas/shop.webp`,
      `${import.meta.env.BASE_URL}images/boorkas/about.webp`,
      `${import.meta.env.BASE_URL}images/boorkas/contact.webp`,
    ],

    accent: 'emerald',

    hudTitle: 'Boutique E-Commerce Store',
    hudSub: 'Woodmart · WooCommerce · Custom UI',
    hudBadge: 'COMPLETED'
  },
  {
    id: 'poshak-eliza',
    name: 'Poshak Eliza',
    title: 'Poshak Eliza',
    category: "WordPress / Women's Fashion / E-Commerce",
    status: 'Completed / Client Project',

    shortLabel: "Women's Fashion Online Store",
    shortTitle: 'Poshak Eliza',

    description:
      "A completed women's fashion e-commerce store built with WordPress and WooCommerce, featuring a custom-developed order-tracking extension for customers.",

    fullDescription:
      "Poshak Eliza is a completed e-commerce website developed for a women's clothing business.\n\nThe website provides an online shopping experience focused on women's fashion, with a dedicated product catalog and WooCommerce-powered shopping functionality.\n\nA particularly important part of the project is its custom-developed order-tracking extension. This functionality provides customers with a dedicated way to follow their purchases and check their order progress.\n\nThe project combines WordPress and WooCommerce development with custom functionality designed around the store's business requirements.\n\nThe website has been completed and delivered as a client project.",

    accuracyNote: null,

    features: [
      "Online store dedicated to women's clothing and fashion",
      'WooCommerce product catalog and shopping functionality',
      'Dedicated product presentation and store pages',
      'Custom-developed order-tracking extension',
      'Customer order-tracking functionality',
      'E-commerce frontend customization'
    ],

    keyWins: [
      "Completed e-commerce website for a women's fashion business",
      'Custom order-tracking functionality integrated with the store',
      'WooCommerce implementation tailored to the business requirements'
    ],

    technicalFocus: [
      'WordPress development',
      'WooCommerce e-commerce implementation',
      'Custom plugin development',
      'PHP and custom WordPress functionality',
      'Order-tracking workflows',
      'E-commerce frontend customization'
    ],

    technologies: [
      'WordPress',
      'WooCommerce',
      'PHP',
      'Custom Plugin Development'
    ],

    tags: [
      'WordPress',
      'WooCommerce',
      "Women's Fashion",
      'E-Commerce',
      'PHP',
      'Custom Development',
      'Order Tracking'
    ],

    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: 'https://poshakeliza.com/',

    featured: false,

    windowFile: 'Poshak Eliza // WordPress & WooCommerce',

    image: `${import.meta.env.BASE_URL}images/poshakeliza/home.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/poshakeliza/home.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/poshakeliza/home.webp`,
      `${import.meta.env.BASE_URL}images/poshakeliza/home2.webp`,
      `${import.meta.env.BASE_URL}images/poshakeliza/shop.webp`,
      `${import.meta.env.BASE_URL}images/poshakeliza/about.webp`,
      `${import.meta.env.BASE_URL}images/poshakeliza/contact.webp`,
    ],

    accent: 'emerald',

    hudTitle: "Women's Fashion Store",
    hudSub: 'WooCommerce · Custom Order Tracking',
    hudBadge: 'COMPLETED'
  },
  {
    id: 'alipournut',
    name: 'AlipourNut',
    title: 'AlipourNut',
    category: 'WordPress / E-Commerce / Custom Development',
    status: 'Completed / Client Project',

    shortLabel: 'Nuts & Dried Fruits Online Store',
    shortTitle: 'AlipourNut',

    description:
      'A completed WordPress and WooCommerce online store specializing in nuts, dried fruits, and related products, featuring a custom-developed order-tracking extension that allows customers to follow their purchases.',

    fullDescription:
      'AlipourNut is a completed e-commerce project developed for a business specializing in nuts, dried fruits, and related products.\n\nThe website provides a complete online shopping experience, including product presentation, product catalog navigation, and WooCommerce-powered shopping functionality.\n\nA key part of the project is a custom-developed order-tracking extension, built specifically for the store to provide customers with a dedicated way to track their orders.\n\nThe project combines WordPress and WooCommerce implementation with custom functionality tailored to the business requirements.',

    accuracyNote: null,

    features: [
      'Online store specializing in nuts and dried fruits',
      'WooCommerce-powered product catalog and shopping experience',
      'Custom-developed order-tracking extension',
      'Dedicated customer order-tracking functionality',
      'E-commerce storefront customization',
      'Product presentation and store navigation'
    ],

    keyWins: [
      'Completed e-commerce implementation for a nuts and dried fruits business',
      'Custom-developed order-tracking extension beyond standard store functionality',
      'Integration of custom order-tracking functionality into the WooCommerce store'
    ],

    technicalFocus: [
      'WordPress development',
      'WooCommerce e-commerce implementation',
      'Custom order-tracking extension development',
      'PHP and custom WordPress functionality',
      'E-commerce frontend customization'
    ],

    technologies: [
      'WordPress',
      'WooCommerce',
      'Woodmart',
      'PHP',
      'Custom Plugin Development'
    ],

    tags: [
      'WordPress',
      'WooCommerce',
      'Woodmart',
      'PHP',
      'E-Commerce',
      'Custom Development',
      'Order Tracking',
      'Nuts & Dried Fruits'
    ],

    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: 'https://alipournut.com/',

    featured: false,

    windowFile: 'AlipourNut // WordPress & WooCommerce',

    image: `${import.meta.env.BASE_URL}images/alipournuts/home.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/alipournuts/home.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/alipournuts/home.webp`,
      `${import.meta.env.BASE_URL}images/alipournuts/shop.webp`,
      `${import.meta.env.BASE_URL}images/alipournuts/about.webp`,
      `${import.meta.env.BASE_URL}images/alipournuts/contact.webp`,
    ],

    accent: 'amber',

    hudTitle: 'Custom Order Tracking',
    hudSub: 'WooCommerce · Custom Extension',
    hudBadge: 'COMPLETED'
  },
  {
    id: 'mahour-gallery',
    name: 'Mahour Gallery',
    title: 'Mahour Gallery',
    category: 'WordPress / E-Commerce / Education',
    status: 'Completed / Client Project',
    shortLabel: 'WordPress Website & Custom Development',
    shortTitle: 'Mahour Gallery',
    description:
      'A WordPress website combining an online business/store presence for products and accessories with an educational section for courses, customized using Elementor, WooCommerce, and LearnDash.',
    fullDescription:
      'Mahour Gallery is a WordPress website combining an online business/store presence with an educational section.\n\nThe website works with products and accessories and also provides educational courses. Customization and development work included Elementor-based page design, WooCommerce setup, LearnDash course section implementation, and user registration and authentication using Digits.\n\nCustom frontend features were developed including dynamic mobile navigation, a custom user dropdown, bottom navigation with glass-style UI, course-related customizations with a card-to-card payment workflow and transaction status handling, and custom shortcodes including a bento-style latest articles layout.',
    accuracyNote:
      'Approximate site response measured under 0.8 seconds with cache and around 2.5 seconds without cache under typical test conditions.',
    features: [
      'WordPress website design and customization',
      'Elementor-based page design and customization',
      'WooCommerce-related website and product functionality',
      'LearnDash course section implementation',
      'User registration and authentication work using Digits',
      'Custom mobile navigation',
      'Custom user dropdown',
      'Custom bottom navigation with glass-style UI',
      'Course-related customization',
      'Card-to-card payment workflow for courses and transaction/payment status handling',
      'Custom shortcode for dynamic mobile menu: [mahour_dynamic_mobile_menu]',
      'Custom shortcode for user dropdown: [mahour_user_dropdown]',
      'Custom shortcode for latest articles: [mahour_latest_articles]',
      'Bento-style latest articles layout',
      'Custom CSS and frontend customization',
    ],
    keyWins: [
      'Dual-purpose platform supporting both product sales and educational courses',
      'Custom mobile navigation, user dropdown, and glass-style bottom navigation',
      'Custom shortcodes for dynamic mobile menu, user dropdown, and bento article layout',
      'Card-to-card payment workflow and transaction status handling for courses',
    ],
    technicalFocus: [
      'WordPress & Astra theme foundation',
      'Elementor & UAEL page design and customization',
      'WooCommerce store and product functionality',
      'LearnDash course structure & content',
      'Digits user registration and authentication',
      'Custom shortcodes & Code Snippets',
      'ACF & CPT integration',
      'Custom CSS & frontend customization',
    ],
    technologies: [
      'WordPress',
      'Astra',
      'Elementor',
      'WooCommerce',
      'LearnDash',
      'Gravity Forms',
      'Digits',
      'UAEL',
      'ACF',
      'CPT',
      'Code Snippets',
      'Custom CSS',
    ],
    tags: [
      'WordPress',
      'Astra',
      'Elementor',
      'WooCommerce',
      'LearnDash',
      'Gravity Forms',
      'Digits',
      'ACF',
      'CPT',
      'Custom CSS',
    ],
    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: 'https://mahourgallery.ir',
    featured: true,
    windowFile: 'Mahour Gallery // WordPress',
    image: `${import.meta.env.BASE_URL}images/projects/wordpress/mahour-gallery/Home.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/wordpress/mahour-gallery/Home-card.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/wordpress/mahour-gallery/Home.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mahour-gallery/shop.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mahour-gallery/courses.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mahour-gallery/single-course.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mahour-gallery/single-course2.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mahour-gallery/blog.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mahour-gallery/about-us.webp`,
    ],
    accent: 'emerald',
    hudTitle: 'WordPress Development',
    hudSub: 'Elementor · WooCommerce · LearnDash',
    hudBadge: 'WORDPRESS',
  },
  {
    id: 'sardarkesht',
    name: 'SardarKesht',
    title: 'SardarKesht',
    category: 'WordPress / Agriculture',
    status: 'Completed / Client Project',
    shortLabel: 'Nursery & Agriculture Website',
    shortTitle: 'SardarKesht',
    description:
      'A WordPress website in the nursery and agriculture space, featuring Woodmart-based UI customization, LearnDash-related customization, and frontend layout work.',
    fullDescription:
      'SardarKesht is a WordPress website developed for the nursery and agriculture space.\n\nThe project focused on WordPress website design and customization, Woodmart-based UI customization, LearnDash-related customization, page and frontend customization, and website content/layout work for agricultural presentation.',
    accuracyNote: null,
    features: [
      'WordPress website design and customization',
      'Woodmart-based UI customization',
      'LearnDash-related customization',
      'Page and frontend customization',
      'Website content and layout work',
    ],
    keyWins: [
      'Structured presentation for nursery and agricultural content',
      'Woodmart UI and LearnDash customizations tailored to project requirements',
    ],
    technicalFocus: [
      'WordPress website design & customization',
      'Woodmart theme UI customization',
      'LearnDash-related customization',
      'Page layout & content styling',
    ],
    technologies: [
      'WordPress',
      'Woodmart',
      'LearnDash',
    ],
    tags: [
      'WordPress',
      'Woodmart',
      'LearnDash',
      'Agriculture',
      'Nursery',
    ],
    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: 'http://sardarkesht.ir/',
    featured: false,
    windowFile: 'SardarKesht // Woodmart & LearnDash',
    image: `${import.meta.env.BASE_URL}images/projects/wordpress/sardarkesht/home.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/wordpress/sardarkesht/home-card.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/wordpress/sardarkesht/home.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/sardarkesht/shop.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/sardarkesht/courses.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/sardarkesht/blog.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/sardarkesht/about-us.webp`,
    ],
    accent: 'emerald',
    hudTitle: 'Agriculture Website',
    hudSub: 'Woodmart · LearnDash',
    hudBadge: 'WORDPRESS',
  },
  {
    id: 'shokoofeh-ship',
    name: 'Shokoofeh Ship',
    title: 'Shokoofeh Ship',
    category: 'WordPress / Booking',
    status: 'Completed / Client Project',
    shortLabel: 'Recreational Ship Ticket Booking Website',
    shortTitle: 'Shokoofeh Ship',
    description:
      'A modern responsive website for a recreational ship service with online ticket booking, program schedules, reservation management, and inquiry forms.',
    fullDescription:
      'Shokoofeh Ship is a client project developed as a modern responsive website for a recreational ship service with online ticket booking.\n\nThe website features a homepage presenting recreational services and schedules, online recreational ship ticket booking, dedicated pages for programs and events, reservation and user management, customer communication and contact forms, reservation request forms, and responsive design for mobile, tablet, and desktop.',
    accuracyNote: null,
    features: [
      'Homepage presenting recreational services and schedules',
      'Online recreational ship ticket booking',
      'Dedicated pages for programs and events',
      'Management of reservations and users',
      'Customer communication and contact forms',
      'Reservation request forms',
      'Responsive design for mobile, tablet, and desktop',
    ],
    keyWins: [
      'Online ticket booking and reservation request system for recreational voyages',
      'Event schedule presentation and customer inquiry workflows',
    ],
    technicalFocus: [
      'WordPress CMS deployment',
      'Elementor page & event presentation',
      'WooCommerce booking & ticketing integration',
      'Reservation forms & customer communication',
      'Responsive design across all devices',
    ],
    technologies: [
      'WordPress',
      'Elementor',
      'WooCommerce',
    ],
    tags: [
      'WordPress',
      'Elementor',
      'WooCommerce',
      'Booking',
      'Recreation',
    ],
    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: 'https://shokoofehship.com',
    featured: false,
    windowFile: 'Shokoofeh Ship // WordPress & Booking',
    image: `${import.meta.env.BASE_URL}images/projects/wordpress/shokoofeh-ship/main.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/wordpress/shokoofeh-ship/main-card.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/wordpress/shokoofeh-ship/main.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/shokoofeh-ship/product.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/shokoofeh-ship/panel.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/shokoofeh-ship/panel2.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/shokoofeh-ship/mobile.webp`,
    ],
    accent: 'cyan',
    hudTitle: 'Ticket Booking',
    hudSub: 'Elementor · WooCommerce',
    hudBadge: 'BOOKING',
  },
  {
    id: 'choob-yaran',
    name: 'Choob Yaran',
    title: 'Choob Yaran',
    category: 'WordPress / E-Commerce',
    status: 'Completed / Personal Project',
    shortLabel: 'Wooden Products Online Store',
    shortTitle: 'Choob Yaran',
    description:
      'A modern responsive e-commerce website created as a personal/family project for my father to showcase and sell wood and wooden products online.',
    fullDescription:
      'Choob Yaran is a personal and family project created for my father to establish an online store for wood products and wooden items.\n\nThe project was designed as a modern responsive e-commerce website featuring a homepage with slider and product presentation, a product store with filters and categories, dedicated product pages with image galleries, a shopping cart, order process, user account area, and order management.',
    accuracyNote:
      'Personal/family project created for my father to showcase and sell wooden products.',
    features: [
      'Homepage with slider and product presentation',
      'Product store with filters and categories',
      'Dedicated product pages and product image galleries',
      'Shopping cart and order process workflows',
      'User account area and order management',
      'Responsive design for mobile, tablet, and desktop',
    ],
    keyWins: [
      'Complete e-commerce experience created for a family wooden products business',
      'Product catalog with filtering, categories, dedicated galleries, and cart/checkout',
      'Responsive design across mobile, tablet, and desktop devices',
    ],
    technicalFocus: [
      'WordPress CMS implementation',
      'Elementor Pro page design & theme building',
      'WooCommerce product store & cart/checkout workflows',
      'User account & order management',
      'Responsive e-commerce layouts',
    ],
    technologies: [
      'WordPress',
      'Elementor Pro',
      'WooCommerce',
    ],
    tags: [
      'WordPress',
      'Elementor Pro',
      'WooCommerce',
      'E-Commerce',
      'Personal Project',
    ],
    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: null,
    featured: false,
    windowFile: 'Choob Yaran // WordPress & WooCommerce',
    image: `${import.meta.env.BASE_URL}images/projects/wordpress/choob-yaran/main.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/wordpress/choob-yaran/main-card.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/wordpress/choob-yaran/main.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/choob-yaran/shop.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/choob-yaran/product.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/choob-yaran/panel.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/choob-yaran/mobile.webp`,
    ],
    accent: 'emerald',
    hudTitle: 'Personal Project',
    hudSub: 'Elementor Pro · WooCommerce',
    hudBadge: 'PERSONAL',
  },
  {
    id: 'kanoon-raja',
    name: 'Kanoon Raja',
    title: 'Kanoon Raja',
    category: 'WordPress / Education',
    status: 'Completed / Client Project',
    shortLabel: 'Psychology Course Sales Website',
    shortTitle: 'Kanoon Raja',
    description:
      'An educational website developed for presenting and selling psychology courses, with dedicated course pages, search and category filtering, and student user accounts.',
    fullDescription:
      'Kanoon Raja is an educational client project built on WordPress for selling psychology courses.\n\nThe website features a homepage introducing available courses, a dedicated slider, a course store with category and search functionality, dedicated course pages with comprehensive course descriptions, a student user panel, order management, admin management for courses, users, and content, and a fully responsive layout.',
    accuracyNote: null,
    features: [
      'Homepage introducing courses with a dedicated slider',
      'Course store with category and search functionality',
      'Dedicated course pages with comprehensive course descriptions',
      'Student user panel and order management',
      'Admin management for courses, users, and content',
      'Fully responsive design across devices',
    ],
    keyWins: [
      'Dedicated course store layout with search, category filtering, and student portal',
      'Structured educational course presentation powered by WooCommerce and Elementor Pro',
    ],
    technicalFocus: [
      'WordPress website configuration',
      'Elementor Pro design & course presentation',
      'WooCommerce course sales & ordering',
      'Student user panel & order management',
      'Responsive design across devices',
    ],
    technologies: [
      'WordPress',
      'Elementor Pro',
      'WooCommerce',
    ],
    tags: [
      'WordPress',
      'Elementor Pro',
      'WooCommerce',
      'Education',
      'Courses',
    ],
    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: null,
    featured: false,
    windowFile: 'Kanoon Raja // WordPress & Elementor Pro',
    image: `${import.meta.env.BASE_URL}images/projects/wordpress/kanoon-raja/home.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/wordpress/kanoon-raja/home-card.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/wordpress/kanoon-raja/home.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/kanoon-raja/shop.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/kanoon-raja/product.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/kanoon-raja/panel.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/kanoon-raja/mobile.webp`,
    ],
    accent: 'blue',
    hudTitle: 'Education Website',
    hudSub: 'Elementor Pro · WooCommerce',
    hudBadge: 'EDUCATION',
  },
  {
    id: 'mob-part',
    name: 'Mob Part',
    title: 'Mob Part',
    category: 'WordPress / E-Commerce',
    status: 'Completed / Client Project',
    shortLabel: 'Mobile Phone Parts & Accessories Store',
    shortTitle: 'Mob Part',
    description:
      'A modern responsive online store for mobile phone parts, accessories, and equipment, built with WordPress, Elementor Pro, and WooCommerce.',
    fullDescription:
      'Mob Part is a client project designed as a modern responsive online store for mobile phone parts, accessories, and equipment.\n\nThe website features a homepage with slider, product categories, a product store with filtering and search, dedicated product pages with image galleries, shopping cart and order process workflows, admin management of products, orders, and customers, and responsive design for mobile, tablet, and desktop.',
    accuracyNote: null,
    features: [
      'Homepage with slider and product categories',
      'Product store with filtering and search capabilities',
      'Dedicated product pages with product image galleries',
      'Shopping cart and order process workflow',
      'Admin management of products, orders, and customers',
      'Responsive mobile, tablet, and desktop design',
    ],
    keyWins: [
      'Comprehensive catalog layout for mobile phone parts and technical accessories',
      'Integrated search, category filtering, product galleries, and cart/order system',
    ],
    technicalFocus: [
      'WordPress website architecture',
      'Elementor Pro page and catalog design',
      'WooCommerce e-commerce store & order management',
      'Product galleries & filtering',
      'Responsive mobile-first layout',
    ],
    technologies: [
      'WordPress',
      'Elementor Pro',
      'WooCommerce',
    ],
    tags: [
      'WordPress',
      'Elementor Pro',
      'WooCommerce',
      'E-Commerce',
      'Mobile Parts',
    ],
    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: null,
    featured: false,
    windowFile: 'Mob Part // WordPress & WooCommerce',
    image: `${import.meta.env.BASE_URL}images/projects/wordpress/mob-part/home.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/wordpress/mob-part/home-card.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/wordpress/mob-part/home.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mob-part/shop.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mob-part/product.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mob-part/panel.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/mob-part/mobile.webp`,
    ],
    accent: 'cyan',
    hudTitle: 'E-Commerce Store',
    hudSub: 'Elementor Pro · WooCommerce',
    hudBadge: 'WORDPRESS',
  },
  {
    id: 'card-to-card-payment-plugin',
    name: 'Card-to-Card Payment Plugin',
    title: 'Card-to-Card Payment Plugin',
    category: 'WordPress / Plugin Development / Payments',
    status: 'Completed / Custom Plugin',
    shortLabel: 'Custom WordPress Payment Plugin',
    shortTitle: 'Card-to-Card Payment Plugin',
    description:
      'A custom WordPress payment plugin implementing a manual card-to-card payment workflow with administrative transaction verification, approval and rejection handling, WooCommerce order integration, and LearnDash compatibility.',
    fullDescription:
      'Card-to-Card Payment Plugin is a custom WordPress plugin developed to handle manual card-to-card payment workflows for WordPress websites.\n\nRather than functioning as an automatic bank gateway or processor, the plugin facilitates an end-to-end manual payment flow: customers select card-to-card payment at checkout, execute the required manual transfer, and submit their transaction details. Administrators can then review submitted transactions directly from the WordPress administration panel, approving or rejecting them based on verification results.\n\nThe plugin integrates alongside WooCommerce to link payment records with the corresponding WooCommerce order context, updates transaction and order statuses accordingly, and supports dedicated rejection handling while recording processing administrator metadata. Additionally, the payment workflow is fully compatible with LearnDash course purchase workflows.',
    accuracyNote:
      'Custom plugin implementing a manual card-to-card verification workflow alongside WooCommerce and LearnDash; does not process automated bank transactions.',
    features: [
      'Manual card-to-card payment submission workflow',
      'Administrator-side transaction verification and approval/rejection handling',
      'Association of payment records with relevant WooCommerce orders',
      'Compatibility with LearnDash course purchasing workflows',
      'Transaction status management (Pending, Approved, Rejected)',
      'Admin processing audit trail recording the reviewing administrator',
      'Context-aware payment rejection workflow',
    ],
    keyWins: [
      'End-to-end manual payment verification flow bridging customer transfer submissions and admin reviews',
      'Seamless integration alongside WooCommerce order management and LearnDash course enrollment',
      'Structured transaction status tracking with clear approval and rejection processing',
    ],
    technicalFocus: [
      'Custom WordPress Plugin Development',
      'WooCommerce Integration',
      'LearnDash Compatibility',
      'Manual Payment Verification',
      'Transaction Status Management',
      'Admin-Side Payment Processing',
      'Custom WordPress Logic',
    ],
    technologies: [
      'WordPress',
      'PHP',
      'WooCommerce',
      'LearnDash',
      'Custom Plugin Development',
    ],
    tags: [
      'WordPress',
      'PHP',
      'WooCommerce',
      'LearnDash',
      'Plugin Development',
      'Payments',
    ],
    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: null,
    featured: false,
    windowFile: 'Card-to-Card Payment Plugin // PHP & WordPress Plugin',
    image: `${import.meta.env.BASE_URL}images/projects/wordpress/card-to-card-payment-plugin/woocomerce-admin-panel.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/wordpress/card-to-card-payment-plugin/woocomerce-admin-panel-card.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/projects/wordpress/card-to-card-payment-plugin/woocomerce-admin-panel.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/card-to-card-payment-plugin/woocomerce-modal-paymethod.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/card-to-card-payment-plugin/learndash-admin-panel.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/card-to-card-payment-plugin/learndash-and-woocomerce-page-paymentmethod.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/card-to-card-payment-plugin/pending.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/card-to-card-payment-plugin/user-panel.webp`,
      `${import.meta.env.BASE_URL}images/projects/wordpress/card-to-card-payment-plugin/user-panel2.webp`,
    ],
    accent: 'indigo',
    hudTitle: 'Manual Payment Workflow',
    hudSub: 'WooCommerce · LearnDash · Custom Plugin',
    hudBadge: 'WP PLUGIN',
  },
];
