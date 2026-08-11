import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

pdf_path = os.path.join("c:", os.sep, "Users", "USER", "Desktop", "portfolio", "my", "public", "Mohammed_Asbar_Resume.pdf")
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=45,
    leftMargin=45,
    topMargin=40,
    bottomMargin=40
)

styles = getSampleStyleSheet()

# Color Palette: Deep Slate, Vivid Purple Accent, Teal
PRIMARY = colors.HexColor('#0f172a')   # Deep Slate
ACCENT = colors.HexColor('#6d28d9')    # Vibrant Violet
TEAL = colors.HexColor('#0284c7')      # Slate Blue / Cyan
TEXT_DARK = colors.HexColor('#1e293b')
TEXT_MUTED = colors.HexColor('#475569')
BORDER_COLOR = colors.HexColor('#cbd5e1')

name_style = ParagraphStyle(
    'NameStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=24,
    leading=28,
    alignment=TA_LEFT,
    textColor=PRIMARY
)

title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=15,
    alignment=TA_LEFT,
    textColor=TEAL
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=13,
    alignment=TA_LEFT,
    textColor=TEXT_MUTED
)

heading_style = ParagraphStyle(
    'HeadingStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11.5,
    leading=14,
    alignment=TA_LEFT,
    textColor=ACCENT
)

subheading_style = ParagraphStyle(
    'SubheadingStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10.5,
    leading=14,
    alignment=TA_LEFT,
    textColor=PRIMARY
)

role_style = ParagraphStyle(
    'RoleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=13,
    alignment=TA_LEFT,
    textColor=TEAL
)

body_style = ParagraphStyle(
    'BodyStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=14,
    alignment=TA_LEFT,
    textColor=TEXT_DARK
)

bullet_style = ParagraphStyle(
    'BulletStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=13.5,
    leftIndent=12,
    alignment=TA_LEFT,
    textColor=TEXT_DARK
)

skill_badge_style = ParagraphStyle(
    'SkillBadge',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9,
    leading=12,
    alignment=TA_CENTER,
    textColor=PRIMARY
)

story = []

# Top Header Block
header_data = [
    [
        Paragraph("MOHAMMED ASBAR.A", name_style),
    ],
    [
        Paragraph("SOFTWARE DEVELOPER", title_style),
    ],
    [
        Paragraph("📍 Ukkadam, Coimbatore &nbsp;|&nbsp; 📞 +91 9962034901 &nbsp;|&nbsp; ✉️ asbarnstmohammed@gmail.com", contact_style),
    ]
]

header_table = Table(header_data, colWidths=[522])
header_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
]))
story.append(header_table)
story.append(Spacer(1, 8))
story.append(HRFlowable(width="100%", thickness=2, color=ACCENT, spaceAfter=12, spaceBefore=4))

# Profile Summary Section
story.append(Paragraph("PROFILE SUMMARY", heading_style))
story.append(Spacer(1, 4))
story.append(Paragraph(
    "I’m an enthusiastic and curious aspiring Software Developer who enjoys learning new technologies and solving real-world problems through coding. I like building simple, practical solutions and continuously improving my skills in programming and software development.",
    body_style
))
story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER_COLOR, spaceAfter=10, spaceBefore=2))

# Key Projects Section
story.append(Paragraph("KEY PROJECTS", heading_style))
story.append(Spacer(1, 6))

# Edu Core
p1_header = [
    [Paragraph("Edu core — Centralized Learning Platform", subheading_style), Paragraph("Software Developer / Full Stack", role_style)]
]
t1 = Table(p1_header, colWidths=[340, 182])
t1.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('ALIGN', (1,0), (1,0), 'RIGHT'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
]))
story.append(t1)
story.append(Spacer(1, 3))
story.append(Paragraph("• Developed a centralized learning platform to streamline academic activities for students and educators.", bullet_style))
story.append(Paragraph("• Designed and implemented features such as course management, study material sharing, assignment submission, and progress tracking.", bullet_style))
story.append(Paragraph("• Built a user-friendly interface to improve accessibility and enhance the learning experience.", bullet_style))
story.append(Spacer(1, 10))

# Traffic Management System
p2_header = [
    [Paragraph("Traffic Management System", subheading_style), Paragraph("Software Developer", role_style)]
]
t2 = Table(p2_header, colWidths=[340, 182])
t2.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('ALIGN', (1,0), (1,0), 'RIGHT'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
]))
story.append(t2)
story.append(Spacer(1, 3))
story.append(Paragraph("• Developed a smart traffic management system to improve traffic flow and reduce congestion in urban areas.", bullet_style))
story.append(Paragraph("• Designed features for vehicle monitoring, traffic signal control, and real-time traffic data management.", bullet_style))
story.append(Paragraph("• Implemented data processing and monitoring modules to analyze traffic patterns and optimize signal timing.", bullet_style))
story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER_COLOR, spaceAfter=10, spaceBefore=2))

# Education Section
story.append(Paragraph("EDUCATION", heading_style))
story.append(Spacer(1, 6))
edu_header = [
    [Paragraph("Bachelor of Technology in Artificial Intelligence and Data Science", subheading_style), Paragraph("2023 – 2027", role_style)]
]
t_edu = Table(edu_header, colWidths=[400, 122])
t_edu.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('ALIGN', (1,0), (1,0), 'RIGHT'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
]))
story.append(t_edu)
story.append(Paragraph("Hindusthan Institute of Technology", contact_style))
story.append(Spacer(1, 10))
story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER_COLOR, spaceAfter=10, spaceBefore=2))

# Skills Section
story.append(Paragraph("SKILLS & TECHNOLOGIES", heading_style))
story.append(Spacer(1, 8))

skills_list = [
    ["PYTHON", "JAVA SCRIPT", "DBMS"],
    ["TESTING TOOLS", "API HANDLING", "PROMPTING"],
    ["MACHINE LEARNING", "REST APIs", "GIT"]
]

skill_table_data = []
for row in skills_list:
    r = []
    for s in row:
        r.append(Paragraph(f"<b>{s}</b>", skill_badge_style))
    skill_table_data.append(r)

t_skills = Table(skill_table_data, colWidths=[174, 174, 174])
t_skills.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f1f5f9')),
    ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('INNERGRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('ALIGN', (0,0), (-1,-1), 'CENTER'),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
]))
story.append(t_skills)

doc.build(story)
print("Updated PDF generated successfully at:", pdf_path)
