import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import logo from './assets/bug-busters-logo.png';
import heroImage from './assets/blueimage.png';
import warehouseImage from './assets/warehouse.jpg';
import insideWarehouse from './assets/inside-warehouse.jpg';
import boxLift from './assets/box-lift.jpg';
import heightImage from './assets/hight.jpg';
import forkliftImage from './assets/forklift.jpg';
import loadingImage from './assets/loading.jpg';
import sakarPhoto from './assets/sakar.png';
import siddharthaPhoto from './assets/siddhartha.png';
import anishaPhoto from './assets/anisha.png';
import sujanPhoto from './assets/sujan.png';

const REPOSITORY_URL = 'https://github.com/siddarthasubedi1/Logistic_warehouse';

function Icon({ name, size = 20, stroke = 1.8, ...rest }) {
  const paths = {
    arrow: <><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></>,
    diagonal: <><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    code: <><path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m14 4-4 16"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    bolt: <path d="m13 2-9 11h7l-1 9 10-12h-7V2Z"/>,
    monitor: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8M12 18v4"/></>,
    compass: <><circle cx="12" cy="12" r="9"/><path d="m16.5 7.5-3 6-6 3 3-6 6-3Z"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    github: <><path d="M9 19c-4 1.5-4-2.5-6-3"/><path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22"/></>,
    copy: <><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></>,
    close: <><path d="M18 6 6 18M6 6l12 12"/></>,
    mouse: <><rect x="7" y="2" width="10" height="20" rx="5"/><path d="M12 6v4"/></>,
    award: <><circle cx="12" cy="8" r="5"/><path d="m8.5 12-2 10L12 19l5.5 3-2-10"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {paths[name] || paths.arrow}
    </svg>
  );
}

const disciplines = [
  { icon: 'layers', number: '01', title: 'UI / UX Design', description: 'Clear layouts, accessible interactions and interfaces that feel intuitive from the first click.', tags: ['Wireframing', 'Prototyping', 'Responsive UI'] },
  { icon: 'code', number: '02', title: 'Frontend Development', description: 'Responsive, interactive web experiences built with reusable components and thoughtful detail.', tags: ['React', 'JavaScript', 'CSS'] },
  { icon: 'monitor', number: '03', title: 'Backend & Data', description: 'APIs, access controls and application data that connect the experience behind the scenes.', tags: ['Node.js', 'Express', 'MongoDB'] },
  { icon: 'shield', number: '04', title: 'Testing & Delivery', description: 'Quality checks, documentation and iterative improvements that help make a project ready to present.', tags: ['QA', 'Agile Sprints', 'Documentation'] },
];

const experiences = [
  { title: 'Explore', subtitle: '360° warehouse tour', image: insideWarehouse, alt: 'Inside a warehouse used as inspiration for the virtual training environment', description: 'Move through warehouse environments and engage with interactive hotspots to recognise workplace risks.', highlights: ['Warehouse scene exploration', 'Contextual hazard hotspots', 'Visual safety learning'] },
  { title: 'Practise', subtitle: 'Safety scenarios & puzzles', image: forkliftImage, alt: 'Forklift in a warehouse storage aisle', description: 'Apply knowledge through safety simulations and level-based puzzles in Manual Handling, Working at Height and Cyber Awareness.', highlights: ['Scenario-based decisions', 'Interactive puzzles', 'Level-based challenges'] },
  { title: 'Progress', subtitle: 'Learning & assessment', image: boxLift, alt: 'Warehouse employee lifting a cardboard box', description: 'Follow lessons, complete quizzes and review training progress with different experiences for trainees, trainers and administrators.', highlights: ['Structured learning', 'Quizzes and scoring', 'Role-based dashboards'] },
];

const modules = [
  { num: '01', name: 'Manual Handling', image: boxLift, detail: 'Safer lifting, moving and handling', alt: 'Worker moving a box in a warehouse' },
  { num: '02', name: 'Working at Height', image: heightImage, detail: 'Recognising elevated-work hazards', alt: 'High warehouse racking and a worker elevated above ground' },
  { num: '03', name: 'Cyber Awareness', image: loadingImage, detail: 'Safer decisions in digital workplaces', alt: 'Logistics loading area with a delivery truck' },
];

const sprints = [
  { number: '01', name: 'The foundation', phase: 'SPRINT 01', detail: 'Authentication, role-based access and dashboards for administrators, trainers and trainees.' },
  { number: '02', name: 'The learning', phase: 'SPRINT 02', detail: 'Training programmes, learning sections, assignments and module content.' },
  { number: '03', name: 'The interaction', phase: 'SPRINT 03', detail: '360° warehouse exploration, interactive puzzles and safety simulations.' },
  { number: '04', name: 'The finish', phase: 'SPRINT 04', detail: 'Progress visibility, reporting, interface refinement, testing and final delivery.' },
];

const teammates = [
  { name: 'Sakar Gurung', role: 'Scrum Master', focus: 'Project coordination', image: sakarPhoto, bio: 'Sprint planning, team coordination and keeping project delivery on track.' },
  {
    name: 'Siddhartha Raj Subedi', role: 'Backend Developer & Frontend Developer', focus: 'APIs & database', image: siddharthaPhoto, bio: 'Backend services, responsive layouts and implementation of frontend experiences, data models, integration and application functionality.' },
  { name: 'Anisha KC', role: 'UI/UX & Frontend', focus: 'Design & interfaces', image: anishaPhoto, bio: 'Interface design' },
  { name: 'Sujan Shrestha', role: 'QA & Documentation', focus: 'Testing & quality', image: sujanPhoto, bio: 'Quality assurance, project documentation and presentation support.' },
];

function SectionLabel({ number, children, light = false }) {
  return <div className={`section-label ${light ? 'section-label-light' : ''}`}><span>{number}</span><i aria-hidden="true" />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const experience = experiences[activeExperience];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const copyRepository = async () => {
    try {
      await navigator.clipboard.writeText(REPOSITORY_URL);
      setCopied(true);
    } catch {
      window.prompt('Copy the repository link:', REPOSITORY_URL);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Bug Busters home">
            <img src={logo} alt="" />
            <span className="brand-type"><strong>BUG <em>BUSTERS</em></strong><small>DESIGN · DEVELOP · DELIVER</small></span>
          </a>
          <nav id="site-navigation" className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Our work</a>
            <a href="#expertise" onClick={closeMenu}>What we do</a>
            <a href="#team" onClick={closeMenu}>The team</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <Icon name="diagonal" size={16} /></a>
          </nav>
          <button type="button" className="mobile-menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'close' : 'menu'} size={25} />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-text">
              <div className="hero-eyebrow"><span className="pulse-dot" /> MEET THE MINDS BEHIND THE BUILD</div>
              <h1 id="hero-title">We don't just<br /><span>fix bugs.</span><br /><em>We build.</em></h1>
              <p className="hero-description">We’re <strong>Bug Busters</strong> — a four-person team turning ideas into purposeful digital experiences through design, development and teamwork.</p>
              <div className="hero-buttons">
                <a className="btn btn-lime" href="#work">Explore our work <Icon name="diagonal" size={19} /></a>
                <a className="btn btn-outline-light" href="#team">Meet the team <Icon name="arrow" size={18} /></a>
              </div>
              <div className="hero-metrics" aria-label="Team and project highlights">
                <div><strong>04<span>+</span></strong><small>Specialised roles</small></div>
                <div><strong>04</strong><small>Project sprints</small></div>
                <div><strong>01</strong><small>Featured product</small></div>
              </div>
            </div>
            <div className="hero-art" aria-label="UK LogiWare safety training, a Bug Busters project">
              <div className="orbit-line orbit-line-one" aria-hidden="true" />
              <div className="orbit-line orbit-line-two" aria-hidden="true" />
              <div className="hero-art-frame">
                <img src={heroImage} alt="Warehouse worker handling a parcel inside a logistics warehouse" />
                <div className="hero-art-tint" />
                <div className="hero-photo-top"><span className="live-square" /> OUR FEATURED BUILD <span>2026 / 01</span></div>
                <div className="hero-photo-bottom"><span className="project-overline">SAFETY TRAINING, REIMAGINED</span><strong>UK LogiWare<span className="period">.</span></strong><small>Interactive learning for a safer workplace.</small></div>
              </div>
              <div className="hero-floating hero-floating-left"><Icon name="shield" size={21} /><div><strong>Purpose-driven</strong><small>Practical learning</small></div></div>
              <div className="hero-floating hero-floating-right"><span className="floating-green-dot" /><div><strong>Built with care</strong><small>Design × Development</small></div></div>
              <span className="hero-art-index">BB / 001</span>
            </div>
          </div>
          <div className="container hero-bottom-line"><span><Icon name="mouse" size={18} /> SCROLL TO EXPLORE</span><span>CRAFTED BY BUG BUSTERS <span className="sparkle">✳</span> EST. 2026</span></div>
        </section>

        <div className="skills-ribbon" aria-label="Our disciplines"><div className="container ribbon-inner"><span>THINK</span><i /> <span>DESIGN</span><i /><span>DEVELOP</span><i /><span>TEST</span><i /><span>DELIVER</span><span className="ribbon-end">THE BUG BUSTERS WAY <Icon name="diagonal" size={17}/></span></div></div>

        <section className="about-section section-pad" id="about">
          <div className="container about-layout">
            <div className="about-left"><SectionLabel number="01">WHO WE ARE</SectionLabel><h2>A small team.<br />A <em>big-picture</em><br />mindset.</h2></div>
            <div className="about-right">
              <p className="about-lead">Great digital products are not built by a single skill. They're built by people who care about the whole experience.</p>
              <p>At Bug Busters, we bring together interface design, frontend development, backend engineering and quality assurance. We plan carefully, challenge assumptions and keep improving until the pieces work together.</p>
              <div className="about-values">
                <div><span className="value-icon"><Icon name="target" size={23}/></span><strong>Human-first design</strong><small>Clear, useful experiences</small></div>
                <div><span className="value-icon"><Icon name="bolt" size={23}/></span><strong>Built to function</strong><small>From idea to implementation</small></div>
                <div><span className="value-icon"><Icon name="check" size={23}/></span><strong>Tested & refined</strong><small>Thoughtful quality checks</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="container">
            <div className="work-heading"><div><SectionLabel light number="02">FEATURED PROJECT</SectionLabel><h2>Our work speaks<br /><em>for itself.</em></h2></div><p>One complete project that brings our team's design, development, problem-solving and testing together.</p></div>
            <div className="project-banner">
              <div className="project-banner-top"><div className="project-tag"><span className="tag-dot" /> FLAGSHIP CASE STUDY</div><span>01 / 01</span></div>
              <div className="project-banner-content"><span>WORKPLACE SAFETY TRAINING SYSTEM</span><h3>UK LogiWare<span>.</span></h3><p>An interactive training platform for warehouse and logistics teams — designed to make learning, practising and monitoring safety more engaging.</p><div className="stack-tags"><span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span></div></div>
              <div className="project-banner-img"><img src={warehouseImage} alt="A modern logistics warehouse with storage and loading facilities" /></div>
            </div>

            <div className="project-experience">
              <div className="experience-image-card">
                <div className="experience-image-top"><span className="eyebrow-pill"><Icon name="compass" size={14}/> EXPERIENCE PREVIEW</span><span>0{activeExperience + 1} / 03</span></div>
                <img key={experience.image} src={experience.image} alt={experience.alt} />
                <div className="experience-img-caption"><span>{experience.subtitle}</span><Icon name="diagonal" size={21}/></div>
              </div>
              <div className="experience-description">
                <div className="section-small-caption">INSIDE THE PLATFORM</div>
                <h3>More than a<br />training checklist.</h3>
                <div className="experience-tabs" role="tablist" aria-label="Explore UK LogiWare features">
                  {experiences.map((item, index) => <button key={item.title} id={`tab-${index}`} type="button" role="tab" aria-selected={activeExperience === index} aria-controls="feature-panel" tabIndex={activeExperience === index ? 0 : -1} className={activeExperience === index ? 'active' : ''} onClick={() => setActiveExperience(index)} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); const next = (index + (event.key === 'ArrowRight' ? 1 : experiences.length - 1)) % experiences.length; setActiveExperience(next); document.getElementById(`tab-${next}`)?.focus(); } }}>{item.title}</button>)}
                </div>
                <div className="tab-content" role="tabpanel" id="feature-panel" aria-labelledby={`tab-${activeExperience}`}>
                  <div className="tab-kicker">{experience.subtitle}</div>
                  <p>{experience.description}</p>
                  <ul>{experience.highlights.map(item => <li key={item}><Icon name="check" size={16}/>{item}</li>)}</ul>
                </div>
                <a className="text-link" href={REPOSITORY_URL} target="_blank" rel="noopener noreferrer">View project source <Icon name="diagonal" size={18}/></a>
              </div>
            </div>
            <div className="module-heading"><h3>Three learning modules.<br /><span>Different challenges, one purpose.</span></h3><div className="module-side-note">DESIGNED AROUND REAL WORKPLACE TOPICS <Icon name="diagonal" size={17}/></div></div>
            <div className="module-grid">{modules.map(module => <article className="module-card" key={module.name}><div className="module-img"><img src={module.image} alt={module.alt} loading="lazy"/><span>{module.num}</span></div><div className="module-copy"><h4>{module.name}</h4><p>{module.detail}</p><Icon name="diagonal" size={21}/></div></article>)}</div>
          </div>
        </section>

        <section className="expertise-section section-pad" id="expertise">
          <div className="container">
            <div className="expertise-heading"><div><SectionLabel number="03">WHAT WE BRING</SectionLabel><h2>Different strengths.<br /><em>One shared vision.</em></h2></div><p>We're a collaborative development team, bringing together the disciplines needed to shape, build and improve a web product.</p></div>
            <div className="expertise-grid">
              {disciplines.map(item => <article className="expertise-card" key={item.title}><div className="expertise-top"><span>{item.number} / 04</span><Icon name="diagonal" size={19}/></div><span className="expertise-icon"><Icon name={item.icon} size={31} stroke={1.5}/></span><h3>{item.title}</h3><p>{item.description}</p><div className="expertise-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}
            </div>
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="container"><div className="process-header"><div><SectionLabel number="04">THE PROCESS</SectionLabel><h2>Built step by step.<br /><em>Improved sprint by sprint.</em></h2></div><p>Our UK LogiWare project was delivered across four planned sprints, each building on the last.</p></div>
            <div className="timeline">{sprints.map(item => <article className="timeline-item" key={item.number}><div className="timeline-number">{item.number}<span /></div><span className="timeline-phase">{item.phase}</span><h3>{item.name}</h3><p>{item.detail}</p></article>)}</div>
            <div className="process-footer"><div className="process-glyph">✳</div><p>Plan thoughtfully. Build collaboratively.<br /><strong>Keep making it better.</strong></p><span>AGILE / COLLABORATION / DELIVERY</span></div>
          </div>
        </section>

        <section className="team-section section-pad" id="team">
          <div className="container"><div className="team-heading"><div><SectionLabel number="05">THE PEOPLE</SectionLabel><h2>Meet the <em>Bug Busters.</em></h2></div><p>Four people with complementary roles, working together on one shared goal: a better finished product.</p></div>
            <div className="team-grid">{teammates.map((person, index) => <article className="person-card" key={person.name}><div className="person-image"><img src={person.image} alt={`Portrait of ${person.name}`} loading="lazy"/><span className="person-index">BB / 0{index + 1}</span></div><div className="person-data"><span>{person.role}</span><h3>{person.name}</h3><p>{person.focus}</p><details className="person-details"><summary>What I work on <span><Icon name="arrow" size={16}/></span></summary><div>{person.bio}</div></details></div></article>)}</div>
            <div className="team-footnote"><div><img src={logo} alt=""/><span>ONE TEAM.<strong> FOUR PERSPECTIVES.</strong></span></div><span>TOGETHER, WE BUILD BETTER.</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-grid-decoration" aria-hidden="true"/><div className="container contact-inner"><div><SectionLabel light number="06">LET'S CONNECT</SectionLabel><h2>Have an idea?<br /><em>Let's make it real.</em></h2><p>Explore our featured project's source code, or get to know the team behind it.</p><div className="contact-buttons"><a className="btn btn-lime" href={REPOSITORY_URL} target="_blank" rel="noopener noreferrer"><Icon name="github" size={20}/> Explore our GitHub <Icon name="diagonal" size={18}/></a><a className="btn btn-outline-light" href="#team">Meet Bug Busters <Icon name="arrow" size={18}/></a></div><button className="copy-link" onClick={copyRepository} type="button"><Icon name={copied ? 'check' : 'copy'} size={16}/>{copied ? 'Repository link copied' : 'Copy project repository link'}</button></div><div className="contact-emblem"><div className="emblem-ring"><div className="emblem-inner"><img src={logo} alt="Bug Busters team logo" /></div></div><span>THE NEXT BIG IDEA STARTS HERE ↗</span></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><a className="brand" href="#top"><img src={logo} alt=""/><span className="brand-type"><strong>BUG <em>BUSTERS</em></strong><small>DESIGN · DEVELOP · DELIVER</small></span></a><p>A student development team creating thoughtful digital solutions through collaboration, design and code.</p></div><div className="footer-links"><strong>EXPLORE</strong><a href="#about">About us</a><a href="#work">Featured work</a><a href="#expertise">Our expertise</a><a href="#team">The team</a></div><div className="footer-links"><strong>PROJECT</strong><a href="#work">UK LogiWare</a><a href="#process">Our process</a><a href={REPOSITORY_URL} target="_blank" rel="noopener noreferrer">GitHub repository ↗</a></div><div className="footer-last"><span>LET'S KEEP BUILDING.</span><a href="#top" aria-label="Back to top">↑</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Bug Busters. Academic project team.</span><span>Designed with intent. Built with teamwork.</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
