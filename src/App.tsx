import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { supabase } from './lib/supabase';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  Code2,
  Database,
  ExternalLink,
  Eye,
  Facebook,
  Github,
  Globe2,
  GraduationCap,
  Headphones,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  Palette,
  Phone,
  Rocket,
  Send,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react';

type IconType = typeof Code2;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const serviceData: { icon: IconType; title: string; description: string; features: string[]; tone: string }[] = [
  { icon: Code2, title: 'Web Development', description: 'Responsive digital experiences designed to perform beautifully.', features: ['Responsive Websites', 'Full Stack Web Apps', 'Web Applications', 'Scalable Solutions'], tone: 'cyan' },
  { icon: BrainCircuit, title: 'AI & Machine Learning', description: 'Practical intelligence that turns complex data into clear decisions.', features: ['AI Model Solutions', 'Computer Vision', 'NLP & Chatbots', 'Predictive Analytics'], tone: 'violet' },
  { icon: Server, title: 'Deployment & Support', description: 'Confident launches and dependable support for the long run.', features: ['Cloud Deployment', 'Database Management', 'SOP Writing', 'Code Maintenance'], tone: 'blue' },
  { icon: GraduationCap, title: 'Student Project Support', description: 'Friendly, hands-on guidance from first idea to final demo.', features: ['Project Guidance & Mentoring', 'Technology Learning Support', 'Development Assistance', 'Documentation Guidance'], tone: 'orange' },
];

const courses: { icon: IconType; title: string; description: string; level: string; duration: string }[] = [
  { icon: Code2, title: 'Programming', description: 'Build a strong foundation with C, C++, Java and Python.', level: 'Foundation', duration: 'Self-paced' },
  { icon: Globe2, title: 'Web Development', description: 'Create polished interfaces and full-stack web products.', level: 'Beginner → Pro', duration: 'Project-based' },
  { icon: Database, title: 'Backend & Database', description: 'Understand APIs, data models and dependable server systems.', level: 'Intermediate', duration: 'Guided track' },
  { icon: Layers3, title: 'Computer Science', description: 'Master the concepts behind great software engineering.', level: 'Core concepts', duration: 'Structured' },
  { icon: Bot, title: 'Modern Technologies', description: 'Explore AI, cloud, Git, computer vision and NLP.', level: 'Future-ready', duration: 'Hands-on' },
];

const techLogoSources: Record<string, string> = {
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  Express: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  Vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  Spring: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
  Figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
};

const projects = [
  { title: 'E-Commerce Platform', category: 'Web', description: 'A clean shopping experience built for everyday scale.', tech: ['React', 'Node.js'], visual: 'commerce' },
  { title: 'AI Image Classifier', category: 'AI/ML', description: 'A focused computer vision tool that makes recognition simple.', tech: ['Python', 'TensorFlow'], visual: 'ai' },
  { title: 'Student Management System', category: 'Student Projects', description: 'A clear, connected workspace for academic administration.', tech: ['Spring Boot', 'MySQL'], visual: 'student' },
  { title: 'Mobile App Concept', category: 'Mobile', description: 'A thoughtful mobile product designed around real user needs.', tech: ['Flutter', 'Firebase'], visual: 'mobile' },
  { title: 'Brand Experience', category: 'UI/UX', description: 'A visual system that gives a growing brand a confident voice.', tech: ['Figma', 'UI/UX'], visual: 'brand' },
  { title: 'Analytics Dashboard', category: 'Web', description: 'Actionable signals surfaced through a calm, responsive interface.', tech: ['Vue', 'Charts'], visual: 'analytics' },
];

const process = [
  ['01', 'Understand', 'Your requirements'],
  ['02', 'Plan', 'The solution'],
  ['03', 'Design', 'The experience'],
  ['04', 'Develop', 'The product'],
  ['05', 'Test & Deploy', 'The solution'],
  ['06', 'Support', 'For the long term'],
];

function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const [visible, setVisible] = useState(false);
  const refCallback = (node: HTMLElement | null) => {
    if (!node || visible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
  };
  return <div ref={refCallback} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>;
}

function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return <a href="#home" className={`brand ${light ? 'brand-light' : ''} ${compact ? 'brand-compact' : ''}`} aria-label="S² CREST home">
    <img src="/s_square_crest_logo.png" alt="S² CREST — From concept to code, together" className="brand-image" />
  </a>;
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'on-dark' : ''}`}>
    <span className="eyebrow"><span />{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const filters = ['All', 'Web', 'AI/ML', 'Mobile', 'UI/UX', 'Student Projects'];
  const visibleProjects = projectFilter === 'All' ? projects : projects.filter((project) => project.category === projectFilter);

  useEffect(() => {
    const onScroll = () => document.documentElement.style.setProperty('--scroll', `${(window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)) * 100}%`);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');

    if (!supabase) {
      setFormError('The contact form is not configured yet. Please email us directly.');
      return;
    }

    setIsSubmitting(true);
    const form = new FormData(event.currentTarget);
    const { error } = await supabase.from('contact_submissions').insert({
      name: String(form.get('name') ?? '').trim(),
      email: String(form.get('email') ?? '').trim(),
      phone: String(form.get('phone') ?? '').trim() || null,
      service: String(form.get('service') ?? '').trim() || null,
      message: String(form.get('message') ?? '').trim(),
    });
    setIsSubmitting(false);

    if (error) {
      setFormError('We could not send your message. Please try again or email us directly.');
      return;
    }

    setSubmitted(true);
  };

  return <div className="site-shell">
    <div className="scroll-progress" />
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo light />
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {['About Us', 'Services', 'Learning', 'Tech Stack', 'Projects', 'Our Process', 'Team', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-mobile-cta" href="#contact" onClick={closeMenu}>Get in Touch <ArrowUpRight size={15} /></a>
        </nav>
        <a className="button button-small button-cyan nav-cta" href="#contact">Get in Touch <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section id="home" className="hero dark-panel">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="hero-grid" />
        <div className="container hero-inner">
          <Reveal className="hero-art">
            <img src="/s_square_crest_logo.png" alt="S² CREST logo" className="hero-logo-image" />
          </Reveal>
          <Reveal className="hero-copy" delay={140}>
            <span className="eyebrow"><span />Innovation · Development · Success</span>
            <h1>S<sup>2</sup> CREST</h1>
            <p className="hero-tagline">FROM CONCEPT TO CODE, TOGETHER.</p>
            <p className="hero-description">We build modern digital solutions, help students learn industry-relevant technologies, and provide practical guidance from concept to completion.</p>
            <div className="hero-actions"><a className="button button-cyan" href="#services">Explore Our Services <ArrowRight size={17} /></a><a className="button button-outline" href="#contact">Get in Touch <ArrowUpRight size={16} /></a></div>
          </Reveal>
        </div>
        <div className="container pillars">
          {[{ icon: Rocket, title: 'Build', text: 'Transform ideas into reliable digital solutions.' }, { icon: BrainCircuit, title: 'Learn', text: 'Learn technologies through practical, guided education.' }, { icon: Headphones, title: 'Support', text: 'Get technical guidance from development to deployment.' }].map((pillar, index) => <Reveal key={pillar.title} delay={index * 80} className="pillar"><div className="pillar-icon"><pillar.icon size={21} /></div><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div><ArrowUpRight className="pillar-arrow" size={17} /></Reveal>)}
        </div>
        <a className="scroll-cue" href="#about-us"><span>Scroll to explore</span><ArrowDown size={17} /></a>
      </section>

      <section id="about-us" className="about-section section-pad">
        <div className="container">
          <Reveal><SectionHeading eyebrow="About us" title="Turning Ideas Into Real Solutions" description="S² CREST brings development, learning and support into one thoughtful technology partner." /></Reveal>
          <div className="about-layout">
            <Reveal className="about-story"><span className="story-number">01</span><h3>We make technology feel possible.</h3><p>We are a team focused on creating useful digital products, sharing practical knowledge and standing beside the people building their next idea.</p><a className="text-link" href="#contact">Meet us where you are <ArrowRight size={16} /></a><div className="story-lines"><span /><span /><span /></div></Reveal>
            <div className="values-grid">{[{ icon: Sparkles, title: 'Innovation', text: 'We explore better ways to make technology useful.' }, { icon: Users, title: 'Collaboration', text: 'We work closely with clients and learners.' }, { icon: ShieldCheck, title: 'Quality', text: 'We create clean, secure and dependable work.' }, { icon: Target, title: 'Client Focus', text: 'Your success is our priority.' }].map((value, index) => <Reveal key={value.title} delay={index * 70} className="value-card"><div className="soft-icon"><value.icon size={20} /></div><h3>{value.title}</h3><p>{value.text}</p></Reveal>)}</div>
          </div>
        </div>
        <div className="container mission-band"><Reveal><div className="mission-item"><div className="mission-icon"><Target size={22} /></div><div><span>Our mission</span><p>Empower individuals and businesses with technology, create value through innovation, and build long-term relationships.</p></div></div><div className="mission-divider" /><div className="mission-item"><div className="mission-icon"><Eye size={22} /></div><div><span>Our vision</span><p>To be a trusted technology partner for individuals, startups, students and businesses.</p></div></div></Reveal></div>
      </section>

      <section id="services" className="section-pad services-section light-blue-section"><div className="container"><div className="heading-row"><Reveal><SectionHeading eyebrow="What we do" title="Our Services" description="End-to-end technology solutions for your ideas." /></Reveal><a href="#contact" className="pill-link">View all services <ArrowRight size={15} /></a></div><div className="service-grid">{serviceData.map((service, index) => <Reveal key={service.title} delay={index * 70} className="service-card"><div className={`service-icon ${service.tone}`}><service.icon size={23} /></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.features.map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}</ul><a href="#contact" className="card-arrow" aria-label={`Learn about ${service.title}`}><ArrowUpRight size={17} /></a></Reveal>)}</div><Reveal className="gradient-callout"><div className="callout-icon"><Rocket size={23} /></div><div><h3>Need a different technology?</h3><p>Tell us your requirements — we’ll build the right solution for your project.</p></div><a href="#contact" className="round-arrow"><ArrowRight size={18} /></a></Reveal></div></section>

      <section id="learning" className="section-pad learning-section dark-panel"><div className="container"><div className="heading-row"><Reveal><SectionHeading light eyebrow="S² CREST Learning" title="Learn. Build. Grow." description="Learn industry-relevant technologies through structured lessons, practical exercises, projects and personalized guidance." /></Reveal><a href="#contact" className="button button-outline button-light">Start learning <ArrowUpRight size={16} /></a></div><div className="learning-layout"><div className="course-list">{courses.map((course, index) => <Reveal key={course.title} delay={index * 70} className="course-card"><div className="course-icon"><course.icon size={21} /></div><div className="course-copy"><div className="course-top"><h3>{course.title}</h3><span>{course.level}</span></div><p>{course.description}</p><small>{course.duration} <span>·</span> Learn more <ArrowRight size={13} /></small></div><ArrowUpRight className="course-arrow" size={18} /></Reveal>)}</div><Reveal className="journey-card" delay={160}><span className="eyebrow"><span />Your journey</span><h3>Progress with purpose.</h3><div className="journey-steps">{['Learn', 'Practice', 'Build', 'Review', 'Improve'].map((step, index) => <div key={step} className="journey-step"><span>0{index + 1}</span><strong>{step}</strong>{index < 4 && <div className="journey-line" />}</div>)}</div><p>Every lesson is a step toward becoming a more confident builder.</p></Reveal></div></div></section>

      <section id="tech-stack" className="section-pad stack-section"><div className="container"><Reveal><SectionHeading eyebrow="Our toolkit" title="Our Tech Stack" description="Modern technologies for powerful solutions." /></Reveal><div className="stack-grid">{[{ name: 'MERN Stack', tech: ['MongoDB', 'Express', 'React', 'Node.js'], icon: Code2 }, { name: 'MEVN Stack', tech: ['MongoDB', 'Express', 'Vue', 'Node.js'], icon: Layers3 }, { name: 'MEAN Stack', tech: ['MongoDB', 'Express', 'Angular', 'Node.js'], icon: Globe2 }, { name: 'Spring Boot', tech: ['Java', 'Spring', 'MySQL'], icon: Server }, { name: 'App Development', tech: ['Flutter', 'Firebase'], icon: MonitorSmartphone }, { name: 'UI/UX Design', tech: ['Figma', 'Research'], icon: Palette }, { name: 'Graphic Design', tech: ['Branding', 'Visuals'], icon: Sparkles }].map((stack, index) => <Reveal key={stack.name} delay={index * 55} className="stack-card"><div className="stack-card-head"><div className="stack-logo"><stack.icon size={19} /></div><span>{stack.name}</span></div><div className="tech-chips stack-tech-chips">{stack.tech.map((tech) => <span key={tech}>{techLogoSources[tech] ? <img src={techLogoSources[tech]} alt="" /> : <i className="chip-dot" />}{tech}</span>)}</div></Reveal>)}</div></div></section>

      <section id="projects" className="section-pad projects-section light-blue-section"><div className="container"><div className="heading-row project-heading"><Reveal><SectionHeading eyebrow="Selected work" title="Our Projects" description="Ideas. Code. Impact." /></Reveal><div className="filter-tabs" role="tablist">{filters.map((filter) => <button key={filter} className={projectFilter === filter ? 'active' : ''} onClick={() => setProjectFilter(filter)}>{filter}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project, index) => <Reveal key={project.title} delay={index * 60} className="project-card"><div className={`project-visual ${project.visual}`}><div className="visual-window"><span /><span /><span /><div className="visual-content"><b /><i /><em /></div></div><div className="visual-orb" /></div><div className="project-info"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-foot"><div className="tech-chips">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><a href="#contact" aria-label={`View ${project.title}`}><ExternalLink size={16} /></a></div></div></Reveal>)}</div></div></section>

      <section id="our-process" className="section-pad process-section"><div className="container"><Reveal><SectionHeading eyebrow="How we work" title="Our Process" description="From idea to delivery — in simple steps." /></Reveal><div className="process-track">{process.map((step, index) => <Reveal key={step[0]} delay={index * 80} className="process-step"><div className="process-number">{step[0]}</div><div className="process-dot"><span /></div><h3>{step[1]}</h3><p>{step[2]}</p></Reveal>)}</div><Reveal className="process-banner"><div className="banner-spark"><Sparkles size={22} /></div><div><strong>Your idea + Our expertise = Great results</strong><span>Let’s move from a blank page to something people can use.</span></div><a href="#contact" className="round-arrow"><ArrowRight size={18} /></a></Reveal></div></section>

      <section className="advantages-section dark-panel"><div className="container"><Reveal><SectionHeading light eyebrow="Why S² CREST" title="A partner for the whole journey." /></Reveal><div className="advantage-grid">{[{ icon: Zap, title: 'Fast delivery', text: 'On time, every time.' }, { icon: Target, title: 'Custom solutions', text: 'Tailored to your requirements.' }, { icon: Settings2, title: 'Quality assured', text: 'Reliable, secure and efficient.' }, { icon: Layers3, title: 'Scalable & reliable', text: 'Built for growth and performance.' }, { icon: Headphones, title: 'Ongoing support', text: 'We’re with you every step.' }].map((item, index) => <Reveal key={item.title} delay={index * 60} className="advantage-card"><item.icon size={23} /><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div></div></section>

      <section id="team" className="section-pad team-section"><div className="container"><Reveal><SectionHeading eyebrow="The people behind the work" title="Our Team" description="Passionate minds. Powerful collaboration." /></Reveal><div className="team-grid">{[{ initials: 'SC', name: 'S² CREST Team', role: 'Technology & Learning', color: 'team-blue' }, { initials: 'BU', name: 'Builders', role: 'Development', color: 'team-violet' }, { initials: 'LE', name: 'Learning Crew', role: 'Mentoring', color: 'team-cyan' }, { initials: 'SU', name: 'Support Crew', role: 'Client Support', color: 'team-orange' }].map((member, index) => <Reveal key={member.name} delay={index * 75} className="team-card"><div className={`avatar ${member.color}`}>{member.initials}</div><h3>{member.name}</h3><span>{member.role}</span><p>Curious, practical and committed to making technology easier to use.</p><div className="social-row"><a href="#contact" aria-label="LinkedIn"><Linkedin size={15} /></a><a href="#contact" aria-label="GitHub"><Github size={15} /></a></div></Reveal>)}</div><Reveal className="team-banner"><Users size={24} /><div><strong>Together, we build better.</strong><span>A team that works, learns and grows together.</span></div></Reveal></div></section>

      <section id="contact" className="contact-section dark-panel section-pad"><div className="container contact-layout"><Reveal className="contact-copy"><SectionHeading light eyebrow="Let’s connect" title="Get In Touch" description="Let’s build something great together." /><p>Have a project, a learning goal or a question? Tell us where you are and we’ll take the next step with you.</p><div className="contact-details"><a href="tel:9842610223"><span><Phone size={17} /></span><div><small>Call / WhatsApp</small><strong>9842610223 · 7904061068</strong></div></a><a href="mailto:ssquarecrest@gmail.com"><span><Mail size={17} /></span><div><small>Email</small><strong>ssquarecrest@gmail.com</strong></div></a><a href="#contact"><span><Instagram size={17} /></span><div><small>Instagram</small><strong>@s2_crest</strong></div></a></div></Reveal><Reveal className="contact-form-wrap" delay={140}>{submitted ? <div className="success-state"><div className="success-icon"><Check /></div><h3>Message received.</h3><p>Thanks for reaching out. The S² CREST team will be in touch soon.</p><button className="button button-outline button-light" onClick={() => setSubmitted(false)}>Send another message</button></div> : <form onSubmit={handleContactSubmit}><div className="form-heading"><span className="eyebrow"><span />Start a conversation</span><h3>Tell us about your idea.</h3></div><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" required type="email" placeholder="you@email.com" /></label></div><div className="form-row"><label>Phone<input name="phone" placeholder="Your phone number" /></label><label>Service / Requirement<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Web Development</option><option>AI & Machine Learning</option><option>Learning</option><option>Project Support</option></select></label></div><label>Message<textarea name="message" required rows={4} placeholder="Tell us a little about what you’re building..." /></label>{formError && <p role="alert" className="form-error">{formError}</p>}<button className="button button-cyan" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={16} />}</button></form>}</Reveal></div></section>
    </main>

    <footer className="site-footer dark-panel"><div className="container footer-grid"><div className="footer-brand"><Logo light compact /><p>Building modern digital solutions, empowering learners, and supporting ideas from concept to completion.</p><div className="footer-socials"><a href="#contact" aria-label="Instagram"><Instagram size={16} /></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="#contact" aria-label="GitHub"><Github size={16} /></a><a href="#contact" aria-label="Facebook"><Facebook size={16} /></a></div></div><div className="footer-column"><h4>Quick links</h4>{['Home', 'About Us', 'Services', 'Learning', 'Tech Stack', 'Projects', 'Our Process', 'Team', 'Contact'].map((link) => <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`}>{link}</a>)}</div><div className="footer-column"><h4>Our services</h4>{['Web Development', 'AI & Machine Learning', 'Deployment & Support', 'Student Project Support'].map((link) => <a key={link} href="#services">{link}</a>)}</div><div className="footer-column footer-contact"><h4>Contact us</h4><a href="tel:9842610223">9842610223 · 7904061068</a><a href="mailto:ssquarecrest@gmail.com">ssquarecrest@gmail.com</a><a href="#contact">Instagram: s2_crest</a><div className="footer-wave" /></div></div><div className="container footer-bottom"><span>© 2026 S² CREST. All rights reserved.</span><span>From concept to code, together.</span></div></footer>
  </div>;
}

export default App;
