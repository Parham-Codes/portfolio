export const projects = [
  {
    id: 'ventashop',
    name: 'VentaShop',
    title: 'VentaShop',

    category: 'E-Commerce / Full-Stack Platform / AI Integration',

    status: 'Team Project',

    shortLabel: 'Full-Stack E-Commerce & AI-Powered Admin Platform',
    shortTitle: 'VentaShop',
    subtitle: 'AI-Powered E-Commerce Management Platform',

    description:
      'A full-stack e-commerce platform combining a modern online store, comprehensive administration tools, and Venta AI — an intelligent, admin-only assistant that connects LLM capabilities to real store operations through MCP tools and human-approved actions.',

    fullDescription:
      'VentaShop is a full-stack e-commerce platform developed as a team project. It combines a customer-facing online store with a modular administration system designed to manage the complete lifecycle of an online business.\n\nThe platform includes product and category management, shopping cart and checkout workflows, payment and order management, shipping configuration, customer management, inventory control, discounts, content management, and sales analytics.\n\nA standout component of the platform is Venta AI, an intelligent assistant integrated directly into the administration panel. Unlike a conventional customer-facing chatbot, Venta AI is designed specifically to help store administrators interact with and manage their business operations through natural-language conversations.\n\nThe assistant supports persistent conversations, contextual requests, conversation history, and streamed AI responses. Each request carries the authenticated administrator identity, conversation ID, message content, and relevant section/topic context to help the assistant understand the current administrative task.\n\nVenta AI is connected to an external n8n workflow and an MCP (Model Context Protocol) server. The MCP integration exposes structured tools that allow the assistant to retrieve information from different store modules, including orders, products, inventory, customers, analytics, categories, discounts, shipping, and content management.\n\nBeyond reading information, the assistant can prepare structured administrative operations. However, write actions are protected by a human-in-the-loop approval system: every proposed change is first presented to the administrator with a summary and relevant details. The operation is executed only after explicit approval, while rejected actions are never performed.\n\nThe integration also incorporates privacy-conscious data handling, masking or excluding sensitive customer information before relevant data is passed to the AI workflow.\n\nVentaShop demonstrates the integration of full-stack e-commerce architecture, modular administration, AI orchestration, MCP-based tool calling, and controlled automation within a real business application.',

    accuracyNote:
      'Venta AI is an administrator-only operational assistant, not a customer-facing chatbot. Its write operations are protected by explicit administrator approval and are never executed automatically.',

    features: [
      'Full-stack e-commerce storefront with product catalog and category navigation',
      'Shopping cart, checkout, payment, and order management',
      'Administrative management of products, customers, and orders',
      'Inventory management, shipping configuration, and discount management',
      'Blog, content, comments, and store configuration management',
      'Dashboard analytics, sales reports, and business insights',
      'Venta AI: administrator-only conversational AI assistant with persistent conversation history and streaming responses',
      'Context-aware AI workflow connected through n8n and MCP tools',
      'Structured AI access to products, orders, customers, inventory, analytics, and other store modules',
      'Human-approved AI operations with review, approval, and rejection workflows',
      'Privacy-conscious AI context with sensitive customer information masked or excluded'
    ],

    keyWins: [
      'Integration of an administrative AI assistant into a full-stack e-commerce platform',
      'MCP-based tool integration for interacting with actual store management modules',
      'Human-in-the-loop architecture for safe AI-driven administrative operations',
      'Context-aware AI conversations with persisted history and streamed responses',
      'Privacy-conscious information handling during AI interactions',
      'Modular backend architecture supporting multiple e-commerce business domains'
    ],

    technicalFocus: [
      'Full-Stack React and Node.js Development',
      'Modular REST API Architecture',
      'Redux Toolkit State Management',
      'MongoDB and Mongoose Data Modeling',
      'JWT-Based Authentication',
      'E-Commerce Architecture',
      'Administrative Dashboard Development',
      'AI Integration and LLM Orchestration',
      'n8n Workflow Automation',
      'Model Context Protocol (MCP) Integration',
      'Structured AI Tool Calling',
      'Human-in-the-Loop Approval Workflows',
      'Server-Sent Events and Streaming Responses',
      'Privacy-Aware AI Context Processing'
    ],

    architecture: {
      frontend: 'React 19 + Vite + Redux Toolkit',
      backend: 'Node.js + Express 5',
      database: 'MongoDB + Mongoose',
      authentication: 'JWT-Based Authentication',
      api: 'REST API',
      aiAssistant: 'Admin-Only Venta AI',
      aiOrchestration: 'n8n + LLM Integration',
      aiTooling: 'Model Context Protocol (MCP)',
      actionExecution: 'Admin-Approved Write Operations',
      streaming: 'Server-Sent Events (SSE)'
    },

    technologies: [
      'React 19',
      'Vite',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'REST API',
      'n8n',
      'LiteLLM',
      'Model Context Protocol (MCP)',
      'LLM Integration'
    ],

    tags: [
      'React',
      'Full-Stack',
      'E-Commerce',
      'Node.js',
      'Express',
      'MongoDB',
      'Redux Toolkit',
      'AI Integration',
      'Venta AI',
      'LLM',
      'n8n',
      'MCP',
      'Tool Calling',
      'Admin Dashboard',
      'Inventory Management',
      'Human-in-the-Loop'
    ],

    githubUrl: null,
    apiRepoUrl: null,
    liveUrl: null,

    featured: true,

    windowFile: 'VentaShop // Full-Stack E-Commerce & Admin AI',

    image: `${import.meta.env.BASE_URL}images/ventashop/home.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/ventashop/home.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/ventashop/home.webp`,
      `${import.meta.env.BASE_URL}images/ventashop/shop.webp`,
      `${import.meta.env.BASE_URL}images/ventashop/panel.webp`,
      `${import.meta.env.BASE_URL}images/ventashop/panel2.webp`,
      `${import.meta.env.BASE_URL}images/ventashop/aiChatBot.webp`,
      `${import.meta.env.BASE_URL}images/ventashop/blog.webp`,
      `${import.meta.env.BASE_URL}images/ventashop/blog2.webp`,
      `${import.meta.env.BASE_URL}images/ventashop/about.webp`,
      `${import.meta.env.BASE_URL}images/ventashop/contact.webp`,
    ],

    accent: 'indigo',

    hudTitle: 'AI-Powered E-Commerce',
    hudSub: 'Venta AI · MCP · n8n',
    hudBadge: 'TEAM PROJECT'
  },
  {
    id: 'taskera',
    name: 'Taskera',
    title: 'Taskera',

    category: 'Task Management / Workspace Platform / AI Integration',

    status: 'Personal Project',

    shortLabel: 'AI-Powered Task & Workspace Management',
    shortTitle: 'Taskera',
    subtitle: 'Personal Productivity & Team Collaboration',

    description:
      'A full-stack task and workspace management platform for personal productivity and team collaboration, featuring multi-tenant workspaces, real-time synchronization, time tracking, and AI-powered Telegram Voice-to-Task automation.',

    fullDescription:
      'Taskera is a full-stack task and workspace management platform designed to bring individual productivity and collaborative team execution into one application.\n\nThe platform supports two workspace modes: Personal Space for individual task management and Organization/Team Space for multi-user collaboration. Organization workspaces include role-based access control with Owner, Manager, and Member roles, allowing tasks to be assigned and managed within a structured team environment.\n\nTaskera provides task management with priorities, due dates, statuses, categories, subtasks, multiple task views, threaded discussions, and integrated time tracking. Its interface supports Kanban/Board, Focused Stack, List, and Calendar views, while Socket.IO provides real-time workspace synchronization. Telegram notifications also help users stay informed about task assignments and workspace events.\n\nA major differentiating feature is its AI-powered Telegram Voice Assistant. Users can send voice notes to a dedicated Telegram bot, where an external n8n workflow coordinates Speech-to-Text transcription and LLM-based semantic extraction. The AI identifies task titles, descriptions, deadlines, priorities, and actionable subtasks, including relative date expressions such as today, tomorrow, and next week.\n\nBefore anything is created, Taskera sends an interactive task preview to Telegram. The user can review and explicitly confirm or cancel the request. Once approved, the structured task data is sent to a protected internal API, which verifies the Telegram identity and saves the task and subtasks directly in the user\'s Personal Space.\n\nTaskera also includes an AI-assisted Markdown Batch Import workflow. Users can copy a built-in prompt, ask an external AI to structure a project plan into tasks and subtasks, then import the generated Markdown. The application parses the content, displays a live preview, and supports bulk task creation. Existing tasks can also be exported to CSV and Markdown formats.\n\nAdditional capabilities include task-level and subtask-level time tracking, threaded collaboration, Telegram alerts, a universal command palette, and bilingual Persian/English support with RTL/LTR layouts and dark/light themes.\n\nTaskera combines full-stack application architecture, multi-tenant workspace management, real-time collaboration, and practical AI automation into a unified productivity platform.',

    accuracyNote:
      'The Telegram Voice Assistant uses an external n8n workflow and external Speech-to-Text and LLM services. The Markdown import feature uses a built-in prompt template and Taskera parser; it does not embed a generative AI model for this workflow.',

    features: [
      'Personal and multi-tenant organization workspaces',
      'Role-based access control with Owner, Manager, and Member roles',
      'Task management with priorities, statuses, due dates, categories, and subtasks',
      'Kanban, Focused Stack, List, and Calendar views',
      'Task assignment and threaded task discussions',
      'Real-time synchronization through Socket.IO',
      'Task and subtask time tracking with integrated stopwatch sessions',
      'Telegram notifications for assignments, status changes, and workspace events',
      'AI-powered Telegram Voice-to-Task assistant',
      'Speech-to-Text transcription and LLM-based task information extraction',
      'Natural-language relative deadline recognition',
      'Interactive Telegram confirmation before task creation',
      'Secure Telegram identity matching and Personal Space task injection',
      'AI-assisted Markdown import with live preview and batch task creation',
      'CSV/Excel-compatible and Markdown task export',
      'Universal command palette with Ctrl+K / Cmd+K',
      'Bilingual Persian/English interface with RTL/LTR support',
      'Dark and light theme support'
    ],

    keyWins: [
      'Dual workspace architecture for personal productivity and team collaboration',
      'Granular organization roles and secure task access control',
      'End-to-end Telegram Voice-to-Task automation using STT, LLM, and n8n',
      'Human confirmation workflow before AI-generated tasks are persisted',
      'Secure Telegram Chat ID association with individual Personal Spaces',
      'AI-assisted Markdown batch import with structured parsing and preview',
      'Integrated task and subtask time tracking',
      'Real-time collaboration and Telegram notifications'
    ],

    technicalFocus: [
      'Full-Stack React and Node.js Development',
      'Multi-Tenant Workspace Architecture',
      'Role-Based Access Control (RBAC)',
      'REST API Development',
      'MongoDB and Mongoose Data Modeling',
      'Secure JWT Authentication',
      'Real-Time Communication with Socket.IO',
      'Task and Subtask Management',
      'Time Tracking and Work Session Management',
      'Telegram Bot API Integration',
      'AI Voice-to-Task Automation',
      'Speech-to-Text and LLM Integration',
      'n8n Workflow Automation',
      'Protected Internal API Integration',
      'Markdown Parsing and Batch Import',
      'CSV and Markdown Export'
    ],

    architecture: {
      frontend: 'React 19 + Vite + Tailwind CSS',
      backend: 'Node.js + Express REST API',
      database: 'MongoDB + Mongoose',
      authentication: 'HTTP-Only JWT Sessions + Refresh Token Rotation',
      realtime: 'Socket.IO',
      workspaces: 'Personal + Multi-Tenant Organization Spaces',
      accessControl: 'RBAC (Owner / Manager / Member)',
      aiVoiceAssistant: 'Telegram Bot + n8n + STT / LLM',
      aiMarkdownImport: 'AI Prompt Template + Built-in Markdown Parser',
      notifications: 'Telegram Bot API',
      automationSecurity: 'Protected Internal API with Shared Secret'
    },

    technologies: [
      'React 19',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Socket.IO',
      'Telegram Bot API',
      'n8n',
      'LiteLLM',
      'Speech-to-Text Integration',
      'LLM Integration'
    ],

    tags: [
      'React',
      'Full-Stack',
      'Task Management',
      'Workspace Management',
      'Team Collaboration',
      'RBAC',
      'MongoDB',
      'Node.js',
      'Socket.IO',
      'AI Integration',
      'Voice-to-Task',
      'Telegram Bot',
      'Speech-to-Text',
      'LLM',
      'n8n',
      'Time Tracking',
      'Markdown Import',
      'CSV Export',
      'Bilingual Application'
    ],

    githubUrl: 'https://github.com/Parham-Codes/Taskera',
    apiRepoUrl: null,
    liveUrl: 'https://parham-codes.github.io/Taskera',

    featured: true,

    windowFile: 'Taskera // AI Workspace & Task Automation',

    image: `${import.meta.env.BASE_URL}images/taskera/home.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/taskera/home.webp`,
    gallery: [
      `${import.meta.env.BASE_URL}images/taskera/home.webp`,
      `${import.meta.env.BASE_URL}images/taskera/homeL2.webp`,
      `${import.meta.env.BASE_URL}images/taskera/task.webp`,
      `${import.meta.env.BASE_URL}images/taskera/newTask.webp`,
      `${import.meta.env.BASE_URL}images/taskera/newPersonalTask.webp`,
      `${import.meta.env.BASE_URL}images/taskera/team.webp`,
      `${import.meta.env.BASE_URL}images/taskera/newTeamTask.webp`,
      `${import.meta.env.BASE_URL}images/taskera/comments.webp`,
      `${import.meta.env.BASE_URL}images/taskera/importFromAiOrExcel.webp`,
      `${import.meta.env.BASE_URL}images/taskera/telSetting.webp`,
      `${import.meta.env.BASE_URL}images/taskera/export.webp`,
      `${import.meta.env.BASE_URL}images/taskera/loading.webp`,
    ],

    accent: 'cyan',

    hudTitle: 'AI Task Automation',
    hudSub: 'Telegram · n8n · STT/LLM',
    hudBadge: 'PERSONAL PROJECT'
  },
  {
    id: 'fortech',
    name: 'ForTech',
    title: 'ForTech',
    category: 'E-Commerce / Full-Stack React Application',
    shortLabel: 'Modern E-Commerce Web Application',
    shortTitle: 'Modern E-Commerce Web Application',
    subtitle: 'Modern E-Commerce Web Application',
    description:
      'A modern responsive e-commerce application built with React and Vite, featuring authentication, role-based access control, product browsing, search, pagination, shopping cart, checkout, user and admin dashboards, and a separate JSON Server API/data layer.',
    fullDescription:
      'ForTech is a modern responsive e-commerce web application built with React and Vite. The project was developed as a complete application experience rather than a simple static interface.\n\nThe Front-End handles the user experience, routing, authentication flows, role-based interfaces, product browsing, search, pagination, cart and checkout workflows, user account features, and admin management interfaces.\n\nThe project also includes a separate JSON Server based API/data layer in the ForTech-Backend repository. This companion backend provides the REST-style mock data used by the React application, including products, users, and orders.',
    accuracyNote:
      'The API/data layer currently uses JSON Server. It does NOT contain a Node.js / Express backend, MongoDB database, production API infrastructure, or real payment gateway. The backend repository is a JSON Server based API/data layer created as the backend companion for the ForTech React application.',
    features: [
      'Login, Register, and Logout authentication flows with Admin and User role separation.',
      'Role-Based Access Control (RBAC) with dedicated User and Admin dashboard spaces.',
      'Product browsing, search, pagination, category filtering, and product details.',
      'Shopping Cart and Checkout flow with toast notifications and product editing.',
      'Admin Dashboard for user, product, and order management (add, edit, and manage items).',
      'Loading skeletons, toast feedback (React Hot Toast & SweetAlert2), and responsive UI.',
    ],
    keyWins: [
      'Complete e-commerce application workflow: Auth, RBAC, Cart, Checkout, and Dashboards.',
      'Dedicated Admin Dashboard for managing products, users, and incoming orders.',
      'Separate JSON Server based API/data layer providing REST-style mock data.',
      'Modular Context API state architecture with clean Axios HTTP communication.',
    ],
    technicalFocus: [
      'Component-based React architecture',
      'Client-side routing with React Router DOM',
      'Context-based application state management',
      'REST-style API integration with Axios',
      'Authentication UI flows & Role-based interfaces',
      'E-commerce workflows & Separate Admin/User experiences',
      'Dedicated API/data companion repository (JSON Server)',
    ],
    architecture: {
      frontend: 'React 19 + Vite',
      routing: 'React Router DOM',
      stateManagement: 'Context API',
      http: 'Axios',
      ui: 'Bootstrap 5 + React Bootstrap + CSS',
      apiData: 'JSON Server (ForTech-Backend repository)',
    },
    technologies: ['React 19', 'Vite', 'Context API', 'Axios', 'Bootstrap 5', 'JSON Server'],
    tags: ['React', 'Vite', 'Context API', 'Axios', 'Bootstrap', 'JSON Server'],
    githubUrl: 'https://github.com/Parham-Codes/ForTech',
    apiRepoUrl: 'https://github.com/Parham-Codes/ForTech-Backend',
    liveUrl: 'https://parham-codes.github.io/ForTech/',
    featured: true,
    status: 'Completed / Portfolio Project (#1 Featured)',
    windowFile: 'ForTech // App.jsx & db.json',
    image: `${import.meta.env.BASE_URL}images/projects/code/fortech.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/code/fortech-card.webp`,
    accent: 'cyan',
    hudTitle: 'Unified E-Commerce App',
    hudSub: 'React + Vite · JSON Server API',
    hudBadge: 'REACT 19',
  },
  {
    id: 'articlehub',
    name: 'ArticleHub',
    title: 'ArticleHub',
    category: 'Blog Management / CRUD / React',
    shortLabel: 'React CRUD & API Application',
    shortTitle: 'React CRUD & API Application',
    subtitle: 'React CRUD & API Application',
    description:
      'A React and Vite based article management application focused on CRUD workflows, API integration, routing, form handling, and responsive UI.',
    fullDescription:
      'ArticleHub is a React-based blog management application built with Vite. It demonstrates a complete CRUD workflow for articles, including creating, reading, updating, and deleting content, together with client-side routing, API communication, validation, loading states, error handling, and reusable components.',
    accuracyNote:
      'ArticleHub currently uses JSON Server as a mock API/data source (does not contain a Node.js/Express/MongoDB production backend).',
    features: [
      'Full CRUD Workflow: article listing, detail pages, create, edit, and delete.',
      'REST API communication via Axios with loading states and error handling.',
      'Client-side routing with React Router DOM, custom 404 page, and scroll-to-top.',
      'Form handling, input validation, confirmation dialogs, and animated statistics.',
    ],
    keyWins: [
      'Complete CRUD workflow: article listing, detail pages, creation, editing, and deletion.',
      'REST API integration via Axios with loading states and error boundaries.',
      'Client-side routing, custom 404 page, confirmation dialogs, and form validation.',
    ],
    technicalFocus: [
      'React functional components & Reusable component architecture',
      'CRUD application flows',
      'REST API integration with Axios',
      'Routing, Forms, and Validation',
      'Loading and error states',
    ],
    technologies: ['React 19', 'Vite', 'React Router DOM', 'Axios', 'Bootstrap 5', 'JSON Server'],
    tags: ['React', 'Vite', 'React Router', 'Axios', 'Bootstrap', 'JSON Server'],
    githubUrl: 'https://github.com/Parham-Codes/ArticleHub',
    liveUrl: null,
    featured: true,
    status: 'Completed / Portfolio Project (#2 Featured)',
    windowFile: 'ArticleHub // api.js',
    image: `${import.meta.env.BASE_URL}images/projects/code/Parham-article.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/code/Parham-article-card.webp`,
    accent: 'emerald',
    hudTitle: 'Blog CRUD System',
    hudSub: 'Axios · Validation · JSON Server',
    hudBadge: 'CRUD APP',
  },
  {
    id: 'dore-bazar',
    name: 'DoreBazar',
    title: 'DoreBazar',
    category: 'Front-End / RTL / E-Learning Landing Page',
    shortLabel: 'RTL Course Marketplace Landing Page',
    shortTitle: 'RTL Course Marketplace Landing Page',
    subtitle: 'RTL Course Marketplace Landing Page',
    description:
      'A modern responsive RTL landing page for an online course marketplace, designed with Persian-friendly typography, structured course sections, subscription plans, smooth animations, and responsive layouts.',
    fullDescription:
      'DoreBazar is a modern Front-End landing page for an online learning platform. The project presents courses, categories, pricing plans, and FAQ content through a clean Persian-friendly RTL interface with responsive layouts, sticky navigation, interactive sections, smooth scrolling, and animation.',
    accuracyNote:
      'Front-End landing page showcasing responsive RTL/Persian interface engineering (does not currently contain backend or payment gateway functionality).',
    features: [
      'RTL layout architecture designed specifically for Persian web interfaces.',
      'Featured courses, course categories, and interactive subscription plans.',
      'Sticky navigation bar with smooth section navigation and FAQ accordion.',
      'Smooth scroll animations with AOS and responsive mobile-first design.',
    ],
    keyWins: [
      'RTL layout architecture designed specifically for Persian web interfaces.',
      'Featured courses, course categories, and interactive subscription plan cards.',
      'Sticky navigation bar with smooth section navigation and FAQ accordion.',
      'Smooth scroll animations via AOS and lightweight front-end structure.',
    ],
    technicalFocus: [
      'Responsive Web Design',
      'RTL development & Persian UI typography',
      'HTML5/CSS3 fundamentals',
      'Vanilla JavaScript & Bootstrap 5 RTL',
      'Scroll animations & interactive sections',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5 RTL', 'AOS'],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap RTL', 'AOS'],
    githubUrl: 'https://github.com/Parham-Codes/Dore-Bazar',
    liveUrl: null,
    featured: true,
    status: 'Completed Front-End Project (#3 Featured)',
    windowFile: 'DoreBazar // index.html',
    image: `${import.meta.env.BASE_URL}images/projects/code/dore-bazar.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/code/dore-bazar-card.webp`,
    accent: 'indigo',
    hudTitle: 'Persian RTL Layout',
    hudSub: 'Bootstrap RTL · AOS · Clean UI',
    hudBadge: 'RTL UI',
  },
  {
    id: 'portfolio-landing-page',
    name: 'Portfolio Website',
    title: 'Portfolio Website',
    category: 'React / Portfolio / Front-End',
    shortLabel: 'React Portfolio Landing Page',
    shortTitle: 'React Portfolio Landing Page',
    subtitle: 'React Portfolio Landing Page',
    description:
      'A modern responsive portfolio landing page built with React and Vite, demonstrating component-based architecture, reusable components, responsive layout, and structured personal-content sections.',
    fullDescription:
      'Portfolio-Landing-Page is a React and Vite based portfolio website created to practice building a clean component-based interface. It contains structured About, Services, Blog, Header, and Footer components with responsive layouts and straightforward navigation.',
    accuracyNote: 'Supporting React project showcasing component hierarchy and clean layout.',
    features: [
      'Responsive landing page across mobile, tablet, and desktop viewports.',
      'Structured About, Services, and Blog sections with section navigation.',
      'Reusable component architecture and clean UI development.',
      'Easy-to-extend structure built with React and modern JavaScript.',
    ],
    keyWins: [
      'Component-based architecture demonstrating React reusability and props.',
      'Clean section-based layout with responsive mobile and desktop styling.',
    ],
    technicalFocus: [
      'React Functional Components',
      'Component Reusability',
      'Props & Project Structure',
      'Responsive Layout',
      'Clean UI Development',
    ],
    technologies: ['React 19', 'Vite', 'JavaScript ES6+', 'CSS3'],
    tags: ['React', 'Vite', 'JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/Parham-Codes/Portfolio-Landing-Page',
    liveUrl: null,
    featured: false,
    status: 'Supporting React Project',
    windowFile: 'Portfolio // App.jsx',
    image: `${import.meta.env.BASE_URL}images/projects/code/portfolio-landing-page.webp`,
    cardImage: `${import.meta.env.BASE_URL}images/projects/code/portfolio-landing-page-card.webp`,
    accent: 'cyan',
    hudTitle: 'Component Architecture',
    hudSub: 'Modular Layout · Clean UI',
    hudBadge: 'PORTFOLIO',
  },
];
