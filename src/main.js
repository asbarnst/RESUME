import './style.css';
import { projects } from './data/projects.js';
import { posts } from './data/posts.js';

// ============================================================
// ABOUT DATA — A. Mohammed Asbar's profile
// ============================================================
const skills = [
  // Primary Resume Skills
  "Python", "JavaScript", "DBMS", "Testing Tools", "API Handling", "Prompting",
  // Full-Stack & Machine Learning
  "Machine Learning", "Deep Learning", "React", "Node.js", "Flask",
  "HTML5", "CSS3", "REST APIs", "Git", "MySQL", "Selenium", "Postman"
];

const experience = [
  {
    year: "2023 - 2027",
    role: "B.Tech — Artificial Intelligence & Data Science",
    company: "Hindusthan Institute of Technology",
    desc: "Pursuing Bachelor of Technology in AI & Data Science. Developed software platforms, intelligent models, and real-time management applications.",
  },
  {
    year: "Projects",
    role: "Full Stack Software Developer",
    company: "Edu Core — Centralized Learning Platform",
    desc: "Designed and implemented course management, study material sharing, assignment submission, progress tracking, and user-friendly interface.",
  },
  {
    year: "Projects",
    role: "Software Developer",
    company: "Traffic Management System",
    desc: "Built smart urban traffic system for vehicle monitoring, signal control, real-time traffic data processing, and signal timing optimization.",
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
// RESUME PREVIEW MODAL
// ============================================================
const resumeModal = document.getElementById('resume-modal');
const btnViewResume = document.getElementById('btn-view-resume');
const resumeModalClose = document.getElementById('resume-modal-close');

if (btnViewResume && resumeModal) {
  btnViewResume.addEventListener('click', () => {
    resumeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeResume = () => {
    resumeModal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (resumeModalClose) resumeModalClose.addEventListener('click', closeResume);
  resumeModal.addEventListener('click', (e) => { if (e.target === resumeModal) closeResume(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeResume(); });
}

// ============================================================
// RENDER POSTS (LinkedIn Activities)
// ============================================================
const postsGrid = document.getElementById('posts-grid');

function renderBanner(p) {
  const bg = p.placeholderBg || 'linear-gradient(135deg, #7c3aed, #a78bfa)';
  const emoji = p.imagePlaceholder || '📌';
  const typeLabel = p.type === 'certificate' ? '🏆 Certificate'
                  : p.type === 'event'       ? '☁️ Event'
                  : '🚀 Project';
  const typeCls = `type-${p.type || 'project'}`;

  if (p.image) {
    // Show real image with a graceful fallback to gradient if file is missing
    return `
      <div class="post-banner-img-wrap">
        <img
          class="post-banner-img"
          src="${p.image}"
          alt="${p.title}"
          loading="lazy"
          onerror="this.closest('.post-banner-img-wrap').innerHTML=\`<div class='post-banner-placeholder' style='background:${bg};'><span style='position:relative;z-index:1;font-size:4rem;'>${emoji}</span><span class='post-type-badge ${typeCls}' style='position:absolute;'>${typeLabel}</span></div>\`"
        />
        <span class="post-type-badge ${typeCls}">${typeLabel}</span>
      </div>
    `;
  }

  // Gradient placeholder (no image set)
  return `
    <div class="post-banner-placeholder" style="background:${bg};">
      <span style="position:relative;z-index:1;font-size:4rem;">${emoji}</span>
      <span class="post-type-badge ${typeCls}" style="position:absolute;">${typeLabel}</span>
    </div>
  `;
}

posts.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'post-card reveal';
  card.style.animationDelay = `${i * 0.1}s`;
  card.innerHTML = `
    ${renderBanner(p)}
    <div class="post-body">
      <div class="post-meta">
        <span class="post-cat">${p.category}</span>
        <span class="post-date">${p.date}</span>
      </div>
      <h3 class="post-title">${p.title}</h3>
      <p class="post-excerpt">${p.excerpt}</p>
      <div class="post-footer">
        <span class="read-time">⏱ ${p.readTime} min read</span>
        <div class="post-actions">
          ${p.linkedinUrl ? `<a href="${p.linkedinUrl}" target="_blank" rel="noopener" class="read-link" onclick="event.stopPropagation()">View ↗</a>` : ''}
          ${p.shareUrl ? `<a href="${p.shareUrl}" target="_blank" rel="noopener" class="read-link li-share" onclick="event.stopPropagation()">💼 Share on LinkedIn</a>` : ''}
        </div>
      </div>
    </div>
  `;
  card.addEventListener('click', () => {
    if (p.linkedinUrl) window.open(p.linkedinUrl, '_blank');
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
