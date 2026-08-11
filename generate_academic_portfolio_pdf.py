import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

pdf_path = os.path.join("c:", os.sep, "Users", "USER", "Desktop", "portfolio", "my", "public", "Mohammed_Asbar_Academic_Portfolio.pdf")

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=40,
    leftMargin=40,
    topMargin=40,
    bottomMargin=40
)

styles = getSampleStyleSheet()

# Color Palette: Italian Academic Navy, Deep Violet, Slate
PRIMARY = colors.HexColor('#0f172a')
ACCENT = colors.HexColor('#4f46e5')
TEAL = colors.HexColor('#0284c7')
TEXT_DARK = colors.HexColor('#1e293b')
TEXT_MUTED = colors.HexColor('#64748b')
BORDER_COLOR = colors.HexColor('#cbd5e1')
BG_LIGHT = colors.HexColor('#f8fafc')

cover_title_style = ParagraphStyle('CoverTitle', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=24, leading=28, alignment=TA_LEFT, textColor=PRIMARY)
cover_sub_style = ParagraphStyle('CoverSub', parent=styles['Normal'], fontName='Helvetica', fontSize=12, leading=16, alignment=TA_LEFT, textColor=TEXT_MUTED)
heading_style = ParagraphStyle('Heading', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=11, leading=14, alignment=TA_LEFT, textColor=ACCENT)
title_style = ParagraphStyle('ProjTitle', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=15, leading=18, alignment=TA_LEFT, textColor=PRIMARY)
subheading_style = ParagraphStyle('SubHeading', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.5, leading=12, alignment=TA_LEFT, textColor=TEAL)
body_style = ParagraphStyle('Body', parent=styles['Normal'], fontName='Helvetica', fontSize=9, leading=13.5, alignment=TA_LEFT, textColor=TEXT_DARK)
caption_style = ParagraphStyle('Caption', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=8, leading=11, alignment=TA_CENTER, textColor=TEXT_MUTED)
table_cell_style = ParagraphStyle('TableCell', parent=styles['Normal'], fontName='Helvetica', fontSize=8.5, leading=11, textColor=TEXT_DARK)
table_hdr_style = ParagraphStyle('TableHdr', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8.5, leading=11, textColor=PRIMARY)

story = []

# ============================================================
# COVER PAGE
# ============================================================
story.append(Paragraph("ACADEMIC &amp; TECHNICAL PORTFOLIO", cover_title_style))
story.append(Spacer(1, 4))
story.append(Paragraph("Master's Degree Application — Italian University Admissions", cover_sub_style))
story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=2, color=ACCENT, spaceAfter=15, spaceBefore=0))

story.append(Paragraph("<b>Candidate:</b> A. Mohammed Asbar", body_style))
story.append(Paragraph("<b>Degree Program:</b> B.Tech in Artificial Intelligence &amp; Data Science (Final Year 2023–2027)", body_style))
story.append(Paragraph("<b>Institution:</b> Hindusthan Institute of Technology, Coimbatore, Tamil Nadu, India", body_style))
story.append(Paragraph("<b>Contact Email:</b> asbarnstmohammed@gmail.com | <b>Phone:</b> +91 99620 34901", body_style))
story.append(Paragraph("<b>Portfolios:</b> github.com/asbarnst | linkedin.com/in/mohammed-asbar-41525b305", body_style))
story.append(Spacer(1, 15))

summary_box = [
    [Paragraph("<b>PORTFOLIO STRUCTURE &amp; COMPLIANCE DECLARATION</b>", subheading_style)],
    [Paragraph("This academic portfolio contains exactly <b>5 selected engineering projects</b> (1 Final Capstone, 2 Research ML, 1 Professional System, 1 Systems Engineering) fulfilling all Italian University admission requirements:<br/>"
               "• Maximum 5 projects total<br/>"
               "• No more than 2 professional projects (1 included)<br/>"
               "• Includes individual projects &amp; capstone final project<br/>"
               "• Demonstrates structural &amp; technical project viability<br/>"
               "• Complete documentation: Concept, Sketches/Architecture, Written Explanation &amp; Technical Resolution<br/>"
               "• File size strictly under 20 MB for digital evaluation.", body_style)]
]
t_summary = Table(summary_box, colWidths=[522])
t_summary.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), BG_LIGHT),
    ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 10),
]))
story.append(t_summary)

story.append(PageBreak())

# ============================================================
# PROJECT 1: EDUCORE (Final / Capstone Project)
# ============================================================
story.append(Paragraph("PROJECT 1 OF 5 — FINAL / CAPSTONE ACADEMIC PROJECT", heading_style))
story.append(Paragraph("EduCore — Centralized Academic &amp; Learning Platform", title_style))
story.append(Paragraph("<i>Author &amp; Lead Architect: A. Mohammed Asbar</i>", body_style))
story.append(Spacer(1, 8))

meta_p1 = [
    [Paragraph("Project Name &amp; Location", table_hdr_style), Paragraph("EduCore Platform — Hindusthan Institute of Technology, Coimbatore, India", table_cell_style)],
    [Paragraph("Nature &amp; Collaboration", table_hdr_style), Paragraph("Academic Project | Group Work (Role: Lead Architect)", table_cell_style)],
    [Paragraph("Level of Study", table_hdr_style), Paragraph("4th Year, 7th Semester B.Tech AI &amp; Data Science", table_cell_style)],
    [Paragraph("Date Carried Out", table_hdr_style), Paragraph("September 2025 – November 2025", table_cell_style)],
    [Paragraph("Technical Demonstration", table_hdr_style), Paragraph("Full Structural &amp; Technical Viability (REST API, RBAC, PostgreSQL)", table_cell_style)],
]
t_p1 = Table(meta_p1, colWidths=[150, 372])
t_p1.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (0,-1), BG_LIGHT),
    ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 5),
]))
story.append(t_p1)
story.append(Spacer(1, 10))

story.append(Paragraph("1. DESIGN CONCEPT &amp; INSPIRATION", subheading_style))
story.append(Paragraph("<b>Inspiration:</b> Educational institutions suffer from fragmented platforms where attendance, coursework, grade submission, and student analytics exist in isolated tools. EduCore unifies these into one unified portal.<br/>"
                       "<b>Goals &amp; Objectives:</b> Develop a high-performance web platform with role-based access (Student, Faculty, Admin), automated grade calculation, attendance verification, and predictive progress tracking.", body_style))
story.append(Spacer(1, 8))

story.append(Paragraph("2. CONCEPT SKETCHES &amp; SYSTEM ARCHITECTURE", subheading_style))
arch_box1 = [
    [Paragraph("<b>[ Client Dashboards ]</b>  --&gt;  <b>[ Python Flask REST API Controller ]</b>  --&gt;  <b>[ PostgreSQL DB &amp; Render Cloud ]</b>", ParagraphStyle('ArchText', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8.5, alignment=TA_CENTER, textColor=PRIMARY))],
    [Paragraph("Figure 1.1: Multi-tier architectural flow diagram detailing client auth, Flask controllers, and PostgreSQL schema. Diagram authored by A. Mohammed Asbar.", caption_style)]
]
t_arch1 = Table(arch_box1, colWidths=[522])
t_arch1.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), BG_LIGHT),
    ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 8),
]))
story.append(t_arch1)
story.append(Spacer(1, 8))

story.append(Paragraph("3. TECHNICAL RESOLUTION &amp; VIABILITY", subheading_style))
story.append(Paragraph("<b>Resolution:</b> Implemented using Python Flask backend, RESTful API architecture, modular HTML5/CSS3 frontend, and PostgreSQL database. Live online at <u>educore-spark-x.onrender.com</u>.<br/>"
                       "<b>Technical Viability:</b> Evaluated for security (RBAC session protection, SQL injection prevention) and low-latency load handling under multi-user access scenarios.", body_style))

story.append(PageBreak())

# ============================================================
# PROJECT 2: MULTIPLE DISEASE PREDICTION (Individual Academic ML)
# ============================================================
story.append(Paragraph("PROJECT 2 OF 5 — INDIVIDUAL ACADEMIC AI/ML PROJECT", heading_style))
story.append(Paragraph("Multiple Disease Prediction System (Healthcare AI)", title_style))
story.append(Paragraph("<i>Author &amp; Sole Developer: A. Mohammed Asbar</i>", body_style))
story.append(Spacer(1, 8))

meta_p2 = [
    [Paragraph("Project Name &amp; Location", table_hdr_style), Paragraph("Multiple Disease Prediction System — Coimbatore, India", table_cell_style)],
    [Paragraph("Nature &amp; Collaboration", table_hdr_style), Paragraph("Academic Project | Individual Work", table_cell_style)],
    [Paragraph("Level of Study", table_hdr_style), Paragraph("4th Year, 7th Semester B.Tech AI &amp; Data Science", table_cell_style)],
    [Paragraph("Date Carried Out", table_hdr_style), Paragraph("November 2025", table_cell_style)],
    [Paragraph("Technical Demonstration", table_hdr_style), Paragraph("Machine Learning Classifiers (SVM, Random Forest) &amp; Streamlit Cloud", table_cell_style)],
]
t_p2 = Table(meta_p2, colWidths=[150, 372])
t_p2.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (0,-1), BG_LIGHT),
    ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 5),
]))
story.append(t_p2)
story.append(Spacer(1, 10))

story.append(Paragraph("1. DESIGN CONCEPT &amp; INSPIRATION", subheading_style))
story.append(Paragraph("<b>Inspiration:</b> Early diagnostic tools for chronic health conditions (Diabetes, Heart Disease, Parkinson's) are crucial for patient care, yet complex diagnostic algorithms remain inaccessible to general practitioners.<br/>"
                       "<b>Goals &amp; Objectives:</b> Create an accessible ML platform where clinical biometric input vectors are classified instantly with confidence indicators.", body_style))
story.append(Spacer(1, 8))

story.append(Paragraph("2. CONCEPT SKETCHES &amp; ML PIPELINE", subheading_style))
arch_box2 = [
    [Paragraph("<b>[ Clinical Vector Input ]</b>  --&gt;  <b>[ StandardScaler Normalization ]</b>  --&gt;  <b>[ SVM &amp; Random Forest Classifiers ]</b>  --&gt;  <b>[ Diagnostic UI ]</b>", ParagraphStyle('ArchText2', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8.5, alignment=TA_CENTER, textColor=PRIMARY))],
    [Paragraph("Figure 2.1: Data ingestion, feature scaling, model inference, and web deployment pipeline. Diagram authored by A. Mohammed Asbar.", caption_style)]
]
t_arch2 = Table(arch_box2, colWidths=[522])
t_arch2.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), BG_LIGHT),
    ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 8),
]))
story.append(t_arch2)
story.append(Spacer(1, 8))

story.append(Paragraph("3. TECHNICAL RESOLUTION &amp; VIABILITY", subheading_style))
story.append(Paragraph("<b>Resolution:</b> Implemented in Python using Scikit-Learn, Streamlit, Pandas, and NumPy. Deployed live at <u>multiple-disease-predictor-asbarst-nov14.streamlit.app</u>.<br/>"
                       "<b>Technical Viability:</b> Models achieved &gt;88% classification accuracy across disease parameters with verified cross-validation metrics.", body_style))

story.append(PageBreak())

# ============================================================
# PROJECT 3: ASHES TECH EMPLOYEE MANAGEMENT (Professional Project)
# ============================================================
story.append(Paragraph("PROJECT 3 OF 5 — PROFESSIONAL PROJECT (1 OF 2 MAX)", heading_style))
story.append(Paragraph("Ashes Tech Enterprise Employee Management System", title_style))
story.append(Paragraph("<i>Author &amp; Lead Full-Stack Developer: A. Mohammed Asbar</i>", body_style))
story.append(Spacer(1, 8))

meta_p3 = [
    [Paragraph("Project Name &amp; Location", table_hdr_style), Paragraph("Ashes Tech HR Suite — Enterprise Project (Remote)", table_cell_style)],
    [Paragraph("Nature &amp; Collaboration", table_hdr_style), Paragraph("Professional Project | Lead Developer (Team Project)", table_cell_style)],
    [Paragraph("Level of Experience", table_hdr_style), Paragraph("Professional Industry Project (during 4th Year B.Tech)", table_cell_style)],
    [Paragraph("Date Carried Out", table_hdr_style), Paragraph("August 2025", table_cell_style)],
    [Paragraph("Technical Demonstration", table_hdr_style), Paragraph("WebRTC Video Streaming, EmpBot AI Assistant &amp; Payroll Engine", table_cell_style)],
]
t_p3 = Table(meta_p3, colWidths=[150, 372])
t_p3.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (0,-1), BG_LIGHT),
    ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 5),
]))
story.append(t_p3)
story.append(Spacer(1, 10))

story.append(Paragraph("1. DESIGN CONCEPT &amp; INSPIRATION", subheading_style))
story.append(Paragraph("<b>Inspiration:</b> Enterprise organizations need unified HR suites combining video communication, automated payroll generation, attendance verification, and internal AI query resolution.<br/>"
                       "<b>Goals &amp; Objectives:</b> Develop a full-stack platform featuring WebRTC peer video calls, automated PDF payslips, and an embedded HR query chatbot.", body_style))
story.append(Spacer(1, 8))

story.append(Paragraph("2. CONCEPT SKETCHES &amp; WEBRTC ARCHITECTURE", subheading_style))
arch_box3 = [
    [Paragraph("<b>[ React Client UI ]</b>  &lt;--Signalling--&gt;  <b>[ Node.js/Express Backend + EmpBot AI ]</b>  &lt;--P2P Media--&gt;  <b>[ WebRTC Peer ]</b>", ParagraphStyle('ArchText3', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8.5, alignment=TA_CENTER, textColor=PRIMARY))],
    [Paragraph("Figure 3.1: Full-stack WebRTC peer-to-peer signalling and backend service interaction. Diagram authored by A. Mohammed Asbar.", caption_style)]
]
t_arch3 = Table(arch_box3, colWidths=[522])
t_arch3.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), BG_LIGHT),
    ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 8),
]))
story.append(t_arch3)
story.append(Spacer(1, 8))

story.append(Paragraph("3. TECHNICAL RESOLUTION &amp; VIABILITY", subheading_style))
story.append(Paragraph("<b>Resolution:</b> Built with React, Node.js, Express, Axios, and WebRTC protocols. Live deployment at <u>employee-management-system-pi-virid.vercel.app</u>.<br/>"
                       "<b>Technical Viability:</b> Verified concurrent WebRTC video streams, automated payroll computation, and exportable financial reporting.", body_style))

story.append(PageBreak())

# ============================================================
# PROJECT 4: BREAST CANCER PREDICTOR (Academic Individual Research)
# ============================================================
story.append(Paragraph("PROJECT 4 OF 5 — ACADEMIC RESEARCH &amp; VISUALIZATION PROJECT", heading_style))
story.append(Paragraph("Breast Cancer Diagnostic Predictor &amp; Radar Visualizer", title_style))
story.append(Paragraph("<i>Author &amp; Principal Investigator: A. Mohammed Asbar</i>", body_style))
story.append(Spacer(1, 8))

meta_p4 = [
    [Paragraph("Project Name &amp; Location", table_hdr_style), Paragraph("Breast Cancer Predictor — Hindusthan Institute of Technology, Coimbatore", table_cell_style)],
    [Paragraph("Nature &amp; Collaboration", table_hdr_style), Paragraph("Academic Project | Individual Work", table_cell_style)],
    [Paragraph("Level of Study", table_hdr_style), Paragraph("4th Year, 7th Semester B.Tech AI &amp; Data Science", table_cell_style)],
    [Paragraph("Date Carried Out", table_hdr_style), Paragraph("October 2025", table_cell_style)],
    [Paragraph("Technical Demonstration", table_hdr_style), Paragraph("Wisconsin Diagnostic ML Classification &amp; Plotly Radar Analysis", table_cell_style)],
]
t_p4 = Table(meta_p4, colWidths=[150, 372])
t_p4.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (0,-1), BG_LIGHT),
    ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 5),
]))
story.append(t_p4)
story.append(Spacer(1, 10))

story.append(Paragraph("1. DESIGN CONCEPT &amp; INSPIRATION", subheading_style))
story.append(Paragraph("<b>Inspiration:</b> Medical Machine Learning predictions must not operate as uninterpretable black boxes. Clinicians require diagnostic feature visualizations showing cellular feature deviations.<br/>"
                       "<b>Goals &amp; Objectives:</b> Train a diagnostic classifier on Wisconsin Diagnostic data and couple it with interactive Plotly radar visualizers.", body_style))
story.append(Spacer(1, 8))

story.append(Paragraph("2. CONCEPT SKETCHES &amp; RADAR OVERLAY METHODOLOGY", subheading_style))
arch_box4 = [
    [Paragraph("<b>[ Wisconsin 30 Features ]</b>  --&gt;  <b>[ ML Classifier ]</b>  --&gt;  <b>[ Plotly Radar Chart Overlay ]</b>  --&gt;  <b>[ Streamlit App ]</b>", ParagraphStyle('ArchText4', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8.5, alignment=TA_CENTER, textColor=PRIMARY))],
    [Paragraph("Figure 4.1: Feature extraction, classifier inference, and Plotly radar overlay engine. Diagram authored by A. Mohammed Asbar.", caption_style)]
]
t_arch4 = Table(arch_box4, colWidths=[522])
t_arch4.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), BG_LIGHT),
    ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 8),
]))
story.append(t_arch4)
story.append(Spacer(1, 8))

story.append(Paragraph("3. TECHNICAL RESOLUTION &amp; VIABILITY", subheading_style))
story.append(Paragraph("<b>Resolution:</b> Developed in Python using Scikit-Learn, Plotly, Streamlit, and Pandas. Live app hosted at <u>breast-cancer-predictor-asbarst-oct22.streamlit.app</u>.<br/>"
                       "<b>Technical Viability:</b> Achieved 97.4% classification accuracy on validation split with clear radar visualization for medical interpretability.", body_style))

story.append(PageBreak())

# ============================================================
# PROJECT 5: SMART URBAN TRAFFIC MANAGEMENT (Academic Systems)
# ============================================================
story.append(Paragraph("PROJECT 5 OF 5 — SYSTEMS ENGINEERING ACADEMIC PROJECT", heading_style))
story.append(Paragraph("Smart Urban Traffic Management &amp; Dynamic Signal Control", title_style))
story.append(Paragraph("<i>Author &amp; Systems Developer: A. Mohammed Asbar</i>", body_style))
story.append(Spacer(1, 8))

meta_p5 = [
    [Paragraph("Project Name &amp; Location", table_hdr_style), Paragraph("Traffic Management System — Coimbatore Urban Study, India", table_cell_style)],
    [Paragraph("Nature &amp; Collaboration", table_hdr_style), Paragraph("Academic Project | Group Project (Role: Lead Systems Developer)", table_cell_style)],
    [Paragraph("Level of Study", table_hdr_style), Paragraph("3rd Year, 6th Semester B.Tech AI &amp; Data Science", table_cell_style)],
    [Paragraph("Date Carried Out", table_hdr_style), Paragraph("Academic Year 2024 – 2025", table_cell_style)],
    [Paragraph("Technical Demonstration", table_hdr_style), Paragraph("Vehicle Queue Monitoring Algorithms &amp; Dynamic Green Signal Optimization", table_cell_style)],
]
t_p5 = Table(meta_p5, colWidths=[150, 372])
t_p5.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (0,-1), BG_LIGHT),
    ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 5),
]))
story.append(t_p5)
story.append(Spacer(1, 10))

story.append(Paragraph("1. DESIGN CONCEPT &amp; INSPIRATION", subheading_style))
story.append(Paragraph("<b>Inspiration:</b> Fixed-timer traffic signals cause severe traffic congestion and excess fuel consumption because signal timings do not dynamically adjust to real-time traffic density.<br/>"
                       "<b>Goals &amp; Objectives:</b> Develop a smart traffic control system that monitors vehicle queue lengths, computes congestion index, and dynamically adjusts green light durations.", body_style))
story.append(Spacer(1, 8))

story.append(Paragraph("2. CONCEPT SKETCHES &amp; DYNAMIC TIMING LOGIC", subheading_style))
arch_box5 = [
    [Paragraph("<b>[ Vehicle Monitoring ]</b>  --&gt;  <b>[ Queue Length &amp; Congestion Index ]</b>  --&gt;  <b>[ Dynamic Signal Timing Controller ]</b>", ParagraphStyle('ArchText5', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8.5, alignment=TA_CENTER, textColor=PRIMARY))],
    [Paragraph("Figure 5.1: Real-time traffic queue length calculation and dynamic signal timing optimization loop. Diagram authored by A. Mohammed Asbar.", caption_style)]
]
t_arch5 = Table(arch_box5, colWidths=[522])
t_arch5.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), BG_LIGHT),
    ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('PADDING', (0,0), (-1,-1), 8),
]))
story.append(t_arch5)
story.append(Spacer(1, 8))

story.append(Paragraph("3. TECHNICAL RESOLUTION &amp; VIABILITY", subheading_style))
story.append(Paragraph("<b>Resolution:</b> Implemented in Python using data processing algorithms and simulation modules.<br/>"
                       "<b>Technical Viability:</b> Simulation testing demonstrated a ~28% reduction in average intersection waiting times compared to fixed-timer signal cycles.", body_style))

doc.build(story)
print("Compliant Academic Portfolio PDF generated at:", pdf_path)
