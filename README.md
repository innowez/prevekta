# Prevekta Ayurveda

A modern, comprehensive web application for Prevekta Ayurveda - bringing authentic Ayurvedic healthcare to communities through innovative business models and holistic wellness solutions.

## About

Prevekta Ayurveda is a healthcare platform that combines traditional Ayurvedic wisdom with modern technology to deliver comprehensive wellness solutions. The platform serves multiple stakeholder groups including patients, physicians, investors, and strategic partners.

## Application Routes

**Base URL:** [https://www.prevektaayurveda.com](https://www.prevektaayurveda.com)

### Main Pages

- **[`/`](https://www.prevektaayurveda.com/)** - Home page featuring introduction to Prevekta Ayurveda and core services
- **[`/patients`](https://www.prevektaayurveda.com/patients)** - Patient portal with healing programs, testimonials, and appointment booking
- **[`/physician`](https://www.prevektaayurveda.com/physician)** - Information for senior doctors and junior practitioners interested in joining Prevekta
- **[`/for-people`](https://www.prevektaayurveda.com/for-people)** - Educational resources including blog series, research articles, case studies, and video content

### Investment & Partnership

- **[`/finance`](https://www.prevektaayurveda.com/finance)** - Overview of investment opportunities for active and passive investors, strategic partners, and Vaidya partners
- **[`/active-investment`](https://www.prevektaayurveda.com/active-investment)** - Detailed information about active investor opportunities with franchise models and territory leadership
- **[`/passive-investor`](https://www.prevektaayurveda.com/passive-investor)** - Passive investment model (FOCO - Franchise Owned, Company Operated) with ROI calculator

### Appointment & Support

- **[`/appointment`](https://www.prevektaayurveda.com/appointment)** - Book appointments for online or in-person consultations
- **[`/thank-you`](https://www.prevektaayurveda.com/thank-you)** - Confirmation page after form submissions

### Information

- **[`/previkta-vs-pain`](https://www.prevektaayurveda.com/previkta-vs-pain)** - Detailed information about Prevekta's approach to pain management
- **[`/products`](https://www.prevektaayurveda.com/products)** - Product catalog and offerings (under dashboard route group)

## Key Features

- Modern, responsive design optimized for all devices
- Interactive UI with smooth animations and transitions
- ROI calculator for passive investors
- Online appointment booking system
- Educational content and resources
- Multiple investment models (Active, Passive, Strategic Partnership)
- Multi-stakeholder platform (Patients, Physicians, Investors, Partners)

## Project Structure

```
prevekta/
├── src/
│   ├── app/                 # Next.js app directory with pages and routes
│   ├── components/          # Reusable React components
│   │   ├── layout/         # Layout-specific components
│   │   └── ui/             # UI components
│   ├── views/              # Page-level view components
│   └── assets/             # Images and static assets
├── public/                  # Public static files
└── package.json            # Project dependencies and scripts
```

## Development Notes

This application is built with:
- Next.js App Router for modern routing capabilities
- TypeScript for type safety and better developer experience
- Tailwind CSS with custom font configurations (Atyp, Duplet)
- Framer Motion and GSAP for complex animations
- Three.js for 3D visualizations
- Custom UI components with styled-components integration

The project emphasizes accessibility, performance, and user experience across all touchpoints from patient care to investor relations.

## Tech Stack

- **Framework:** Next.js 15.4.6
- **React:** 19.1.0
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, GSAP
- **3D Graphics:** Three.js
- **Language:** TypeScript 5

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Scripts

- `npm run dev` - Runs the development server with Turbopack
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## Learn More

To learn more about Next.js and the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Three.js](https://threejs.org/) - 3D graphics library

## License

Private project for Prevekta Ayurveda
