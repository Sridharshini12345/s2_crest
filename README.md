# S2 Crest Freelancer Portfolio

A modern and responsive portfolio website created to showcase a freelancer’s services, technical skills, projects, and professional capabilities.

## Features

- Responsive design for desktop, tablet, and mobile
- Freelancer-focused service presentation
- Technical skills and technology stack section
- Featured projects showcase
- Clean and modern user interface
- Contact section for potential clients
- Contact form submissions stored in Supabase
- Smooth navigation and polished visual design

## Technologies Used

- React
- Vite
- JavaScript
- HTML5
- CSS3

## Getting Started

### Clone the repository

```bash
git clone <your-github-repository-url>
cd s2_crest_protfolio-main
```

### Install dependencies

```bash
npm install
```

### Configure Supabase

1. Create a Supabase project.
2. Open the Supabase SQL Editor and run `supabase-contact-submissions.sql`.
3. Copy `.env.local.example` to `.env.local` and add your Supabase project URL and publishable key.

For deployment, add the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` values to your hosting provider's environment variables. Never expose a Supabase service-role key in this frontend.

### Run the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Build for production

```bash
npm run build
```

## Project Purpose

This project is an attempt to create a professional online presence for a freelancer. It highlights their services, experience, technical expertise, and selected work in an engaging portfolio layout.

## License

This project is for personal and portfolio use.