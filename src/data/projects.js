// ============================================================
// PROJECTS DATA — A. Mohammed Asbar
// Edit this file to add/update your projects!
// ============================================================
// Fields:
//   id       — unique identifier (string)
//   title    — project name
//   desc     — short description shown on card
//   tags     — technology tags array
//   category — "web" | "app" | "design" (used for filtering)
//   status   — "live" | "wip" | "archived"
//   url      — live URL shown in the iframe preview
//   github   — GitHub repo URL (set null to hide)
//   image    — thumbnail image path (set null to use gradient)
// ============================================================

export const projects = [
  {
    id: "proj-breast-cancer",
    title: "Breast Cancer Predictor",
    desc: "An interactive Machine Learning web app predicting cell cluster malignancy using Wisconsin Diagnostic measurements with custom radar charts and probability insights.",
    tags: ["Python", "Streamlit", "Scikit-Learn", "Plotly", "Pandas"],
    category: "app",
    status: "live",
    url: "https://breast-cancer-predictor.streamlit.app", // Replace with your live Streamlit URL
    github: "https://github.com/asbarnst/breast-cancer-predictor",
    image: null,
  },
  {
    id: "proj-educore",
    title: "EduCore - Smart Student Management System",
    desc: "A full-stack Smart Student Management System featuring role-based portals for Students, Faculty, and Administrators with course access, attendance tracking, grades, AI insights, live classes, and administrative analytics.",
    tags: ["Python", "Flask", "Render", "REST API", "AI Insights"],
    category: "web",
    status: "live",
    url: "https://educore-spark-x.onrender.com/",
    github: "https://github.com",
    image: "/educore.png",
  },
  {
    id: "proj-employee-management",
    title: "Ashes Tech Employee Management System",
    desc: "A full-stack enterprise Employee Management System with AI HR assistant (EmpBot), WebRTC video calling, automated payroll & payslips, attendance tracking, leave management, and Excel reporting.",
    tags: ["React", "Express", "Node.js", "WebRTC", "Axios"],
    category: "web",
    status: "live",
    url: "https://employee-management-system-pi-virid.vercel.app/",
    github: "https://github.com/asbarnst/EMPLOYEE-MANAGEMENT-SYSTEM",
    image: "/employee-management.png",
  },
  {
    id: "proj-ashes-catalog",
    title: "Ashes2.0catelog",
    desc: "A premium multi-page tech product catalog with category browsing, advanced filters (price, rating), wishlist, compare, light/dark mode, Google sign-in and an admin manage panel.",
    tags: ["React", "Vite", "React Router", "CSS"],
    category: "web",
    status: "live",
    url: "https://multi-catelog-web-page.vercel.app",
    github: "https://github.com",            // ← Replace with your GitHub repo
    image: "/ashes-catalog.png",
  },
  {
    id: "proj-2",
    title: "Student Performance Predictor",
    desc: "ML model that predicts student academic performance based on socio-economic and academic factors using Scikit-learn.",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    category: "app",
    status: "live",
    url: "https://streamlit.io",
    github: "https://github.com",
    image: null,
  },
  {
    id: "proj-3",
    title: "Automated Testing Dashboard",
    desc: "A Selenium-powered test automation suite with a real-time dashboard showing test results, pass rates and failure logs.",
    tags: ["Selenium", "Python", "JUnit", "HTML/CSS"],
    category: "web",
    status: "wip",
    url: "https://www.selenium.dev",
    github: "https://github.com",
    image: null,
  },
  {
    id: "proj-4",
    title: "Data Analysis Portfolio",
    desc: "A collection of data analysis projects covering EDA, data cleaning, visualization and statistical insights using real datasets.",
    tags: ["Python", "Pandas", "Seaborn", "Jupyter"],
    category: "design",
    status: "live",
    url: "https://jupyter.org",
    github: "https://github.com",
    image: null,
  },
  {
    id: "proj-5",
    title: "College Event Management System",
    desc: "Full-stack web application for managing college events — registrations, scheduling, notifications and admin dashboard.",
    tags: ["React", "Node.js", "MySQL", "REST API"],
    category: "web",
    status: "live",
    url: "https://reactjs.org",
    github: "https://github.com",
    image: null,
  },
  {
    id: "proj-6",
    title: "Image Classification with CNN",
    desc: "Deep learning project classifying images using a Convolutional Neural Network trained on a custom dataset with TensorFlow.",
    tags: ["TensorFlow", "Python", "CNN", "Deep Learning"],
    category: "app",
    status: "wip",
    url: "https://tensorflow.org",
    github: "https://github.com",
    image: null,
  },
];
