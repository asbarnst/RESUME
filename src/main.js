import './style.css';
import { projects } from './data/projects.js';
import { posts } from './data/posts.js';

// ============================================================
// ABOUT DATA — A. Mohammed Asbar's profile
// ============================================================
const skills = [
  // AI & Data Science
  "Python", "Machine Learning", "Deep Learning", "TensorFlow",
  "Scikit-learn", "Pandas", "NumPy", "Data Visualization",
  // Software Development
  "Java", "JavaScript", "HTML5", "CSS3",
  "React", "Node.js", "REST APIs", "Git",
  // Testing
  "Selenium", "JUnit", "Postman", "Manual Testing",
  // Tools
  "VS Code", "MySQL", "MongoDB", "Jupyter Notebook",
];

const experience = [
  {
    year: "2025",
    role: "Software Developer & Tester",
    company: "Domain Role — Final Year",
    desc: "Building and testing AI-driven applications, end-to-end test suites and full-stack projects as part of B.Tech curriculum and personal ventures.",
  },
  {
    year: "2024",
    role: "AI & Data Science Projects",
    company: "Hindusthan Institute of Technology",
    desc: "Developed ML models, data pipelines and intelligent systems — including predictive analytics and NLP-based tools.",
  },
  {
    year: "2022",
    role: "B.Tech — AI & Data Science",
    company: "Hindusthan Institute of Technology",
    desc: "Started B.Tech programme specialising in Artificial Intelligence and Data Science. Ranked among top students in core subjects.",
  },
];

// ============================================================
// CURSOR GLOW
// ============================================================
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

// ============================================================
// THEME TOGGLE
// ============================================================
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');
const themeLabel = document.getElementById('theme-label');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  if (theme === 'dark') {
    iconMoon.style.display = 'block';
    iconSun.style.display = 'none';
    themeLabel.textContent = 'Night mode';
  } else {
    iconMoon.style.display = 'none';
    iconSun.style.display = 'block';
    themeLabel.textContent = 'Day mode';
  }
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ============================================================
// MOBILE MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ============================================================
// ACTIVE NAV LINK (on scroll)
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// ============================================================
// ANIMATED COUNTER (hero stats)
// ============================================================
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  let current = 0;
  const step = Math.ceil(target / 30);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(interval);
  }, 40);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroText = document.getElementById('hero-text');
if (heroText) counterObserver.observe(heroText);

// ============================================================
// REVEAL ON SCROLL
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// ============================================================
// RENDER PROJECTS
// ============================================================
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
let activeFilter = 'all';

function getStatusClass(status) {
  const map = { live: 'status-live', wip: 'status-wip', archived: 'status-archived' };
  return map[status] || 'status-archived';
}

function getStatusLabel(status) {
  const map = { live: '● Live', wip: '⟳ In Progress', archived: '✕ Archived' };
  return map[status] || status;
}

function getProjectImage(project) {
  // Generate a gradient placeholder if no image is provided
  if (project.image) return `<img class="card-preview-img" src="${project.image}" alt="${project.title}" loading="lazy" />`;
  const colors = ['#a78bfa,#7c3aed', '#fb923c,#ea580c', '#34d399,#059669', '#60a5fa,#2563eb', '#f472b6,#db2777', '#facc15,#d97706'];
  const idx = projects.indexOf(project) % colors.length;
  return `<div class="card-preview-img" style="background: linear-gradient(135deg, ${colors[idx].split(',')[0]}, ${colors[idx].split(',')[1]}); display:flex; align-items:center; justify-content:center; font-size: 3rem; letter-spacing:-1px;">${project.title.slice(0, 2).toUpperCase()}</div>`;
}

function renderProjects(filter) {
  projectsGrid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.animationDelay = `${i * 0.08}s`;
    card.dataset.category = p.category;
    card.dataset.id = p.id;
    card.innerHTML = `
      <div class="card-preview">
        ${getProjectImage(p)}
        <div class="card-preview-overlay">
          <button class="card-preview-btn" data-url="${p.url}" data-title="${p.title}">Live Preview ↗</button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-tags">
          ${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">
          <div class="card-links">
            ${p.github ? `<a href="${p.github}" class="card-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">GitHub ↗</a>` : ''}
            ${p.url ? `<a href="${p.url}" class="card-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">Visit ↗</a>` : ''}
          </div>
          <span class="card-status ${getStatusClass(p.status)}">${getStatusLabel(p.status)}</span>
        </div>
      </div>
    `;

    // Open preview modal on preview button click
    card.querySelector('.card-preview-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      openPreview(p.url, p.title);
    });

    projectsGrid.appendChild(card);
    revealObserver.observe(card);
  });
}

// Filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderProjects(activeFilter);
  });
});

renderProjects('all');

// ============================================================
// LIVE PREVIEW MODAL
// ============================================================
const modal = document.getElementById('preview-modal');
const previewIframe = document.getElementById('preview-iframe');
const iframeLoading = document.getElementById('iframe-loading');
const modalTitle = document.getElementById('modal-title');
const modalLink = document.getElementById('modal-link');
const modalClose = document.getElementById('modal-close');

function openPreview(url, title) {
  if (!url) return;
  modalTitle.textContent = title;
  modalLink.href = url;
  iframeLoading.classList.remove('hidden');
  previewIframe.src = '';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Small delay to show loading state
  setTimeout(() => { previewIframe.src = url; }, 100);
}

function closePreview() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { previewIframe.src = ''; }, 300);
}

previewIframe.addEventListener('load', () => {
  iframeLoading.classList.add('hidden');
});

modalClose.addEventListener('click', closePreview);
modal.addEventListener('click', (e) => { if (e.target === modal) closePreview(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePreview(); });

// ============================================================
// RENDER POSTS
// ============================================================
const postsGrid = document.getElementById('posts-grid');

posts.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'post-card reveal';
  card.style.animationDelay = `${i * 0.1}s`;
  card.innerHTML = `
    <div class="post-meta">
      <span class="post-cat">${p.category}</span>
      <span class="post-date">${p.date}</span>
    </div>
    <h3 class="post-title">${p.title}</h3>
    <p class="post-excerpt">${p.excerpt}</p>
    <div class="post-footer">
      <span class="read-time">⏱ ${p.readTime} min read</span>
      <a href="${p.url}" class="read-link">Read more →</a>
    </div>
  `;
  card.addEventListener('click', () => {
    if (p.url && p.url !== '#') window.open(p.url, '_blank');
  });
  postsGrid.appendChild(card);
  revealObserver.observe(card);
});

// ============================================================
// RENDER SKILLS
// ============================================================
const skillsGrid = document.getElementById('skills-grid');
skills.forEach(skill => {
  const chip = document.createElement('span');
  chip.className = 'skill-chip';
  chip.textContent = skill;
  skillsGrid.appendChild(chip);
});

// ============================================================
// RENDER TIMELINE
// ============================================================
const timelineEl = document.getElementById('timeline');
experience.forEach(item => {
  const div = document.createElement('div');
  div.className = 'timeline-item';
  div.innerHTML = `
    <span class="timeline-year">${item.year}</span>
    <div class="timeline-content">
      <p class="timeline-role">${item.role}</p>
      <p class="timeline-company">${item.company}</p>
      <p class="timeline-desc">${item.desc}</p>
    </div>
  `;
  timelineEl.appendChild(div);
});

// ============================================================
// SECTION HEADER REVEAL
// ============================================================
document.querySelectorAll('.section-header, .about-left, .about-right, .timeline-item').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});
