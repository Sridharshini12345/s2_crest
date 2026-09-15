# S2 CREST Portfolio

The official S2 CREST portfolio website presents the team's technology services, learning programs, selected projects, technical toolkit, and contact details in a responsive single-page experience. S2 CREST helps individuals, students, startups, and businesses move from concept to code through development, mentoring, deployment, and ongoing support.

## Features

- Responsive design for desktop, tablet, and mobile
- Freelancer-focused service presentation
- Technical skills and technology stack section
- Featured projects showcase
- Clean and modern user interface
- Contact section for potential clients
- Contact form submissions stored in Supabase
- Smooth navigation and polished visual design

## Portfolio Sections

- **About Us:** S2 CREST's mission, vision, values, and approach to practical technology.
- **Services:** Web development, AI and machine learning, deployment and support, and student project support.
- **Learning:** Guided tracks covering programming, web development, backend and databases, computer science, and modern technologies.
- **Tech Stack:** MERN, MEVN, MEAN, Spring Boot, Flutter, Firebase, UI/UX, and graphic design tools.
- **Projects:** Filterable examples covering web, AI/ML, mobile, UI/UX, and student projects.
- **Our Process:** A clear path from understanding requirements through planning, development, testing, deployment, and support.
- **Team:** An overview of the people and roles behind S2 CREST.
- **Contact:** A Supabase-backed form for project enquiries, learning goals, and support requests.

## Technologies Used

- React
- Vite
- TypeScript
- HTML5 and CSS3
- Supabase
- Lucide React

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

## Contact Form Database

The contact form stores the submitter's name, email, phone number, selected service, message, and submission timestamp in the Supabase `contact_submissions` table. Row Level Security allows visitors to create submissions without exposing existing submissions to the public. The SQL setup is provided in `supabase-contact-submissions.sql`.

## Deployment

Configure the following environment variables in the hosting provider before deploying:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-publishable-key
```

Only the publishable key belongs in this frontend. Never expose a Supabase service-role key in client-side code.

## License

This project is for personal and portfolio use.