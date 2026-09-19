# Developer Profile & Persistent Context

This repository is maintained for **Parham Taghikhani**, a modern web developer specializing in Front-End development, React, Redux Toolkit, modern JavaScript, WordPress, and expanding into full-stack Node.js/Express and MongoDB.

## Tech Stack & Core Background
- **Primary Front-End**: React (v18+), React Router, Redux Toolkit, `createAsyncThunk`, Axios, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Vite, Lucide icons, Framer Motion.
- **Back-End & APIs (Expanding & Active)**: Node.js, Express.js, MongoDB, Mongoose, JWT authentication, secure HTTP-only cookies, REST APIs, Postman.
- **WordPress & CMS Ecosystem**: WordPress, WooCommerce, Elementor / Elementor Pro, Astra, WoodMart, LearnDash, ACF (Advanced Custom Fields), Custom Post Types, Gravity Forms, Digits / OTP auth, Code Snippets, PHP hooks (`functions.php`), Custom CSS/JS.
- **Tooling & Engineering Practices**: Git, GitHub, Vite, Chrome & Redux DevTools, responsive mobile-first design, SEO optimization, Core Web Vitals, performance tuning.
- **Persian & RTL Specialization**: RTL layouts, Persian typography, logical CSS properties (`margin-inline`, `padding-inline`, `inset-inline`), WooCommerce RTL behavior.

## Core Rules for Code Generation
1. **Clean, Simple, Maintainable**: Prioritize readability, security, performance, accessibility (WCAG), and responsive UX.
2. **Respect Existing Code**: Inspect before editing. Never duplicate functionality, break existing routes, or introduce unnecessary libraries.
3. **Elementor Custom CSS Rules**: Whenever CSS starting with `selector { ... }` is provided, treat it as Elementor Custom CSS and scope styles accordingly (`selector .my-class`).
4. **WordPress Safety**: Never modify plugin core files (WooCommerce, LearnDash). Use WordPress hooks, filters, nonces, and sanitization (`esc_html`, `esc_attr`, `sanitize_text_field`).
5. **Security First**: Never expose secrets or tokens in frontend code. Validate authorization server-side.
