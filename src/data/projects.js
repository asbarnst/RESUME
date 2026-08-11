// ============================================================
// PROJECTS DATA — A. Mohammed Asbar
// ============================================================
// Fields:
//   id       — unique identifier (string)
//   title    — project name
//   desc     — short description shown on card
//   tags     — technology tags array
//   category — "web" | "app" | "ml" | "design" (used for filtering)
//   status   — "live" | "wip" | "archived"
//   url      — live URL shown in the iframe preview
//   github   — GitHub repo URL (set null to hide)
//   image    — thumbnail image path (set null to use gradient)
// ============================================================

export const projects = [
  {
    id: "proj-multiple-disease",
    title: "Multiple Disease Prediction System",
    desc: "An interactive AI healthcare web application predicting Diabetes, Heart Disease, and Parkinson's disease using Machine Learning classifiers.",
    tags: ["Python", "Streamlit", "Scikit-Learn", "Machine Learning", "Healthcare AI"],
    category: "ml",
    status: "live",
    url: "https://multiple-disease-predictor-asbarst-nov14.streamlit.app/",
    github: "https://github.com/asbarnst",
    image: "/multiple-disease.png",
  },
  {
    id: "proj-breast-cancer",
    title: "Breast Cancer Predictor",
    desc: "An interactive Machine Learning web app predicting cell cluster malignancy using Wisconsin Diagnostic measurements with custom radar charts and probability insights.",
    tags: ["Python", "Streamlit", "Scikit-Learn", "Plotly", "Pandas"],
    category: "ml",
    status: "live",
    url: "https://breast-cancer-predictor-asbarst-oct22.streamlit.app/",
    github: "https://github.com/asbarnst/breast-cancer-predictor",
    image: "/breast-cancer.png",
  },
  {
    id: "proj-educore",
    title: "Edu Core — Centralized Learning Platform",
    desc: "A centralized learning platform designed to streamline academic activities for students and educators featuring course management, study material sharing, assignment submission, attendance, and progress tracking.",
    tags: ["Python", "Flask", "Render", "REST API", "Full Stack"],
    category: "web",
    status: "live",
    url: "https://educore-spark-x.onrender.com/",
    github: "https://github.com/asbarnst",
    image: "/educore.png",
  },
  {
    id: "proj-traffic-management",
    title: "Traffic Management System",
    desc: "A smart traffic management system designed to improve traffic flow and reduce congestion in urban areas with vehicle monitoring, traffic signal control, real-time data processing, and signal timing optimization.",
    tags: ["Python", "Signal Control", "Vehicle Monitoring", "Data Analytics"],
    category: "app",
    status: "live",
    url: null,
    github: "https://github.com/asbarnst",
    image: null,
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
    github: "https://github.com/asbarnst",
    image: "/ashes-catalog.png",
  },
];
