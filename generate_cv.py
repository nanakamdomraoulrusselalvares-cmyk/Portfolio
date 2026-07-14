from pathlib import Path

out = Path("c:/Users/HP/Desktop/portfolio/my-portfolio/public/Nana_Kamdom_Raoul_CV.pdf")
texts = [
    (24, 72, 760, "Nana Kamdom Raoul"),
    (12, 72, 730, "Software Engineering Student"),
    (12, 72, 710, "Mobile & Web Developer"),
    (12, 72, 680, ""),
    (12, 72, 660, "Contact:"),
    (12, 72, 642, "Email: nanakamdomraoulrusselalvares@gmail.com"),
    (12, 72, 624, "Phone: +237 675-99-33-78"),
    (12, 72, 606, "Location: Ngousso, Cameroon"),
    (12, 72, 580, ""),
    (14, 72, 560, "Profile"),
    (12, 72, 542, "Software engineering student building mobile and web applications with Flutter, PHP, MySQL, and modern web technologies."),
    (14, 72, 512, "Skills"),
    (12, 72, 494, "Flutter, Next.js, TypeScript, PHP, MySQL, Framer Motion, UI/UX Design"),
    (14, 72, 464, "Projects"),
    (12, 72, 446, "TerraMark: land sale mobile marketplace; E-voting System; E-commerce platform."),
    (14, 72, 416, "Experience"),
    (12, 72, 398, "BlackTech Internship - Built OcAli online library; DIJITAL Freelance - Built TerraMark; Community volunteer work."),
    (14, 72, 368, "Education"),
    (12, 72, 350, "African Institute of Computer Science (AICS) - Software Engineering, Year 2"),
]

stream_lines = ["BT"]
for font_size, x, y, text in texts:
    text = text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
    stream_lines.append(f"/{'F1'} {font_size} Tf")
    stream_lines.append(f"{x} {y} Td")
    stream_lines.append(f"({text}) Tj")
stream_lines.append("ET")
stream = "\n".join(stream_lines).encode("latin-1")

objects = []
objects.append(b"1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj")
objects.append(b"2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj")
objects.append(b"3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj")
objects.append(b"4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj")
objects.append(b"5 0 obj << /Length %d >> stream\n" % len(stream) + stream + b"\nendstream endobj")

xref = []
offset = 0
pdf = [b"%PDF-1.4\n"]
for obj in objects:
    xref.append(offset)
    pdf.append(obj + b"\n")
    offset += len(obj) + 1
xref_offset = offset
pdf.append(b"xref\n0 %d\n0000000000 65535 f \n" % (len(objects) + 1))
for off in xref:
    pdf.append(f"{off:010d} 00000 n \n".encode("latin-1"))
pdf.append(b"trailer << /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%EOF\n" % (len(objects) + 1, xref_offset))

out.parent.mkdir(parents=True, exist_ok=True)
with out.open("wb") as f:
    for chunk in pdf:
        f.write(chunk)
print(f"Generated {out}")
