import * as React from "react";
// Pastikan Anda sudah install lucide-react (npm install lucide-react)
import { School } from "lucide-react"; 

// Impor komponen shadcn/ui yang diperlukan
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"; 

// 1. Tipe data untuk entri Edukasi
type EducationEntry = {
  title: string;
  institution: string;
  period: string;
  degree: string;
  gpa?: string; // GPA dibuat opsional
  description: string;
  specializations?: string[];
  icon: React.ElementType; // Tipe untuk komponen icon (seperti 'School')
  type: string;
};

// 2. Data Edukasi Anda
const educationData: EducationEntry[] = [
  {
    title: "Information Technology",
    institution: "Politeknik Negeri Jember",
    period: "2021 - 2025",
    degree: "Bachelor's Degree (D4)",
    gpa: "3.97",
    description:
      "Pursuing a comprehensive education in Information Technology with focus on software development, database management, network administration, and system analysis.",
    specializations: [
      "Web Development",
      "Internet of Things",
      "Artificial Intelligence",
      "Software Engineering",
    ],
    icon: School, // Menggunakan icon School dari lucide-react
    type: "university",
  },
  {
    title: "SIB Dicoding cycle 6",
    institution: "Dicoding",
    period: "2024",
    degree: "Informal Education - Bootcamp",
    description: "Completed the Independent Study Program (MSIB) by Dicoding, enhancing skills in software development and technology through practical projects and mentorship.",
    specializations: [
      "Web Development",
      "React JS",
      "Backend JavaScript",
    ],
    icon: School,
    type: "informal",
  },
];

// 3. Komponen EducationTimeline
const EducationTimeline = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
      
        <h1 className="text-foreground mb-10 text-center text-3xl font-bold tracking-tighter sm:text-6xl">
          Education
        </h1>

        {/* --- PEMBUNGKUS LINIMASA --- */}
        <div className="relative mx-auto max-w-4xl">
          
          {/* Garis Vertikal */}
          <Separator
            orientation="vertical"
            className="bg-muted absolute left-4 top-4 h-full"
          />

          {/* Mapping data edukasi */}
          {educationData.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-12">
              
              {/* Icon di garis */}
              <span className="bg-primary text-primary-foreground absolute left-0 top-2.5 flex size-8 items-center justify-center rounded-full">
                <entry.icon className="size-4" />
              </span>

              {/* Tanggal (di kiri untuk layar besar) */}
              <h5 className="text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute">
                {entry.period}
              </h5>

              {/* Nama Institusi (Judul Utama Entri) */}
              <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight">
                {entry.institution}
              </h4>
              
              {/* Jurusan dan Gelar (Subjudul) */}
              <h5 className="text-md font-medium text-muted-foreground">
                {entry.title} - {entry.degree}
              </h5>

              {/* Deskripsi (langsung di bawah, tanpa Card) */}
              <p className="prose dark:prose-invert text-foreground mt-4">
                {entry.description}
              </p>

              {/* GPA */}
              {entry.gpa && (
                <p className="text-muted-foreground mt-2 font-medium">
                  GPA: {entry.gpa}
                </p>
              )}

              {/* Spesialisasi (Badges) */}
              {entry.specializations &&
                entry.specializations.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.specializations.map((spec) => (
                      <Badge key={spec} variant="secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                )}
                
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Ekspor komponen
export { EducationTimeline };