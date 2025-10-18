import {
  ArrowRight,
  Award,
  Trophy,
  Scroll,
  Medal,
  GraduationCap,
  FileCheck,
} from "lucide-react";
import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// --- MULAI DATA DEFINISI ---

interface ListItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  link: string;
}

interface List2Props {
  heading?: string;
  items?: ListItem[];
  extraItems?: ListItem[];
}

// 1. Pindahkan semua data default ke konstanta di luar komponen
const defaultHeading = "Achievements & Awards";

const defaultItems: ListItem[] = [
  {
    icon: <Trophy />,
    title: "Gold Medalist",
    category: "Achievement",
    description: "Gold Medal I2ASPO IoT by IYSA.",
    link: "https://drive.google.com/file/d/1ZdY_B172VGgaEuSvr1qA-XB9wSacXJ2s/view?usp=sharing",
  },
  {
    icon: <Award />,
    title: "Special Award",
    category: "Awarding",
    description: "Special Award I2ASPO 2021 by IYSA.",
    link: "https://drive.google.com/file/d/1T4ZinCBYKhPCmoMg12eR6tgooT9DIiFW/view?usp=sharing",
  },
  {
    icon: <Trophy />,
    title: "KMIPN IV Finalist",
    category: "Achievement",
    description: "Finalist KMIPN IV E-Gov by Bakorma.",
    link: "https://drive.google.com/file/d/1I6Zb1Yo6qsYUst-jnL0yGaGAk5dfXbx3/view?usp=sharing",
  },
  {
    icon: <Award />,
    title: "Best Capstone Project",
    category: "Awarding",
    description: "Best Capstone SIB Dicoding 6.",
    link: "https://drive.google.com/file/d/1rKykJFkdE7ZLirbVbIg4hZ6xd5-0041Y/view?usp=sharing",
  },
  {
    icon: <Scroll />,
    title: "React Backend Certification",
    category: "Certification",
    description:
      "React Backend Certification of MSIB 6 by Dicoding x Kampus Merdeka.",
    link: "https://drive.google.com/file/d/1HlA7dUWx-Z8-h5B_6MXgK5vk1NGCCpBY/view?usp=sharing",
  },
];

const defaultExtraItems: ListItem[] = [
  {
    icon: <FileCheck />,
    title: "Belajar Dasar Visualisasi Data",
    category: "Certification",
    description: "Data Visualization Basics by Dicoding",
    link: "https://www.dicoding.com/certificates/4EXG397LDZRL",
  },
  {
    icon: <Medal />,
    title: "Memulai Pemrograman dengan Python",
    category: "Certification",
    description: "Getting Started with Programming using Python by Dicoding",
    link: "https://www.dicoding.com/certificates/NVP7J9NROXR0",
  },
  {
    icon: <GraduationCap />,
    title: "Belajar Fundamental Front-End Web Development",
    category: "Certification",
    description: "Fundamental Front-End Web Development by Dicoding",
    link: "https://www.dicoding.com/certificates/NVP7JKGNOXR0",
  },
  {
    icon: <Award />,
    title: "Belajar Pengembangan Web Intermediate",
    category: "Certification",
    description: "Intermediate Web Development by Dicoding",
    link: "https://www.dicoding.com/certificates/07Z6JGK32XQR",
  },
  {
    icon: <Trophy />,
    title: "Sertifikat Kompetensi dari Badan Nasional Sertifikasi Profesi (BNSP) Web Developer",
    category: "Certification",
    description: "Web Developer Competency Certificate from BNSP",
    link: "https://drive.google.com/file/d/13TgLH3ZlFV3Q7rXzF5IrWglRp3qFsITq/view?usp=sharing",
  },
  {
    icon: <Award />,
    title: "Belajar Fundamental Back-End dengan JavaScript",
    category: "Certification",
    description: "Fundamental Back-End with JavaScript by Dicoding",
    link: "https://www.dicoding.com/certificates/EYX4G45E6ZDL",
  },
  {
    icon: <Award />,
    title: "Belajar Dasar AI",
    category: "Certification",
    description: "Basic AI by Dicoding",
    link: "https://www.dicoding.com/certificates/72ZD5LRMLZYW",
  },
  {
    icon: <Trophy />,
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    category: "Certification",
    description: "Cloud Practitioner Essentials by Dicoding x AWS Academy",
    link: "https://www.dicoding.com/certificates/6RPN1LGQ8X2M",
  },
  {
    icon: <Medal />,
    title: "Menjadi React Web Developer Expert",
    category: "Certification",
    description: "React Web Developer Expert by Dicoding",
    link: "https://www.dicoding.com/certificates/QLZ9731W2P5D",
  },
  {
    icon: <GraduationCap />,
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    category: "Certification",
    description: "Building Back-End Applications for Beginners by Dicoding",
    link: "https://www.dicoding.com/certificates/MEPJNYMJWX3V",
  },
  {
    icon: <GraduationCap />,
    title: "Belajar Fundamental Aplikasi Web dengan React",
    category: "Certification",
    description: "Fundamental Web Applications with React by Dicoding",
    link: "https://www.dicoding.com/certificates/NVP7QY6GOZR0",
  },
  {
    icon: <FileCheck />,
    title: "Meniti Karier sebagai Software Developer",
    category: "Certification",
    description: "Building a Career as a Software Developer by Dicoding",
    link: "https://www.dicoding.com/certificates/53XEOE85YZRN",
  },
  {
    icon: <FileCheck />,
    title: "Belajar Dasar Pemrograman JavaScript",
    category: "Certification",
    description: "JavaScript Programming Basics by Dicoding",
    link: "https://www.dicoding.com/certificates/L4PQQKW34PO1",
  },
  {
    icon: <Medal />,
    title: "Belajar Membuat Aplikasi Web dengan React",
    category: "Certification",
    description: "Building Web Applications with React by Dicoding",
    link: "https://www.dicoding.com/certificates/N9ZOOW608ZG5",
  },
  {
    icon: <Scroll />,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    category: "Certification",
    description: "Building Front-End Web Applications for Beginners by Dicoding",
    link: "https://www.dicoding.com/certificates/4EXGK06DEZRL",
  },
  {
    icon: <Scroll />,
    title: "Belajar Dasar Git dengan GitHub",
    category: "Certification",
    description: "Git Basics with GitHub by Dicoding",
    link: "https://www.dicoding.com/certificates/JMZVD8NYQZN9",
  },
  {
    icon: <Scroll />,
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    category: "Certification",
    description: "Getting Started with Programming to Become a Software Developer by Dicoding",
    link: "https://www.dicoding.com/certificates/81P2VK3M8POY",
  },
  {
    icon: <FileCheck />,
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    category: "Certification",
    description: "Introduction to Programming Logic by Dicoding",
    link: "https://www.dicoding.com/certificates/0LZ02Y380X65",
  },
  {
    icon: <FileCheck />,
    title: "Belajar Dasar-Dasar DevOps",
    category: "Certification",
    description: "Fundamentals of DevOps by Dicoding",
    link: "https://www.dicoding.com/certificates/4EXGKQV3DZRL",
  },
  {
    icon: <FileCheck />,
    title: "DevCoach 122 : Back-End | Mengimplementasikan Autentikasi dan Otorisasi pada REST API",
    category: "Certification",
    description: "DevCoach 122 : Back-End | Implementing Authentication and Authorization on REST API by Dicoding",
    link: "https://drive.google.com/file/d/1kb0NI2j3LNyeFqfR9kwbZtlemGUHc95X/view?usp=sharing",
  },
  {
    icon: <FileCheck />,
    title: "DevCoach 123 : Front-End | Memanipulasi Aplikasi Web",
    category: "Certification",
    description: "DevCoach 123 : Front-End | Manipulating Web Applications by Dicoding",
    link: "https://drive.google.com/file/d/1Lo3l---mjd2it1dXrEKu6J5pszvkziN8/view?usp=sharing",
  },
  {
    icon: <FileCheck />,
    title: "RevoU Fundamental Course Software Engineering",
    category: "Certification",
    description: "RevoU Fundamental Course Software Engineering by RevoU",
    link: "https://certificates.revou.co/fachry-prasetya-certificate-attendance-sefc.pdf",
  },
  {
    icon: <FileCheck />,
    title: "IT Career Preparation Program Batch 6",
    category: "Certification",
    description: "IT Career Preparation Program Batch 6 by Alterra Academy",
    link: "https://drive.google.com/file/d/1w_1z_SE_sohNQTQzp9MkLCm8hKxAqLhB/view?usp=sharing",
  },
  {
    icon: <FileCheck />,
    title: "IoT Careers 101 : Introduction to IoT Developer Career",
    category: "Certification",
    description: "IoT Careers 101 : Introduction to IoT Developer Career by Edspert.Id",
    link: "#",
  },
  {
    icon: <FileCheck />,
    title: "Menguasai Mikrokontroller dan Pemograman Dasar dengan Arduino",
    category: "Certification",
    description: "Mastering Microcontrollers and Basic Programming with Arduino by Creative Station",
    link: "https://creativestation.id/bb/certificate/C00116876802057665",
  },
  {
    icon: <FileCheck />,
    title: "Dicoding Developer Coaching #57: Flutter | Buat Aplikasi dengan Mengambil Data dari API",
    category: "Certification",
    description: "Dicoding Developer Coaching #57: Flutter | Build Applications by Fetching Data from API by Dicoding",
    link: "https://drive.google.com/file/d/1osY2D8vqIdMUcHpwDmtfOuMd7R3IGeH4/view?usp=sharing",
  }

];

// --- SELESAI DATA DEFINISI ---

// 2. Sekarang fungsi komponen Anda jauh lebih bersih
const List2 = ({
  heading = defaultHeading,
  items = defaultItems,
  extraItems = defaultExtraItems,
}: List2Props) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="mb-10 text-3xl font-semibold md:mb-14 md:text-4xl">
          {heading}
        </h1>
        <div className="flex flex-col">
          <Separator />
          {items.map((item) => (
            // 3. Gunakan key yang stabil (seperti title) daripada index
            <React.Fragment key={item.title}>
              <div className="grid items-center gap-4 px-4 py-6 sm:px-8 md:grid-cols-4 transition-colors hover:bg-muted/30">
                <div className="order-2 flex items-center gap-3 md:order-none group">
                  <span className="flex h-12 w-12 sm:h-14 sm:w-16 shrink-0 items-center justify-center rounded-md bg-muted shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105 group-hover:bg-primary/10">
                    <div className="scale-125 text-primary transition-transform group-hover:scale-150">
                      {item.icon}
                    </div>
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                </div>
                <p className="order-1 text-xl sm:text-2xl font-semibold md:order-none md:col-span-2">
                  {item.description}
                </p>
                <div className="order-3 md:order-none w-full md:w-auto flex justify-center md:justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="sm:size-default rounded-full transition-all hover:shadow-md hover:bg-primary/10 hover:border-primary/30"
                    asChild
                  >
                    <a
                      className="w-fit gap-1 sm:gap-2"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-sm sm:text-base">See Certificates</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>

        {/* Dialog for additional certificates */}
        <Dialog open={open} onOpenChange={setOpen}>
          <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center sm:justify-end">
            <DialogTrigger asChild>
              <InteractiveHoverButton className="rounded-full text-sm sm:text-base w-full sm:w-auto px-8 py-3 shadow-md hover:shadow-lg transition-shadow">
                Click To See More
              </InteractiveHoverButton>
            </DialogTrigger>
          </div>

          <DialogContent className="max-w-3xl sm:max-w-4xl lg:max-w-5xl w-[95%]">
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-center font-bold">More Certificates & Achievements</DialogTitle>
              <Separator className="mb-2" />
            </DialogHeader>

            <div className="relative overflow-hidden">
              <div className="flex flex-col max-h-[65vh] sm:max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 relative">
                {extraItems.map((item) => (
                  // 3. Gunakan key yang stabil (seperti title) daripada index
                  <React.Fragment key={item.title}>
                    <div className="py-6 px-8 border-b border-border last:border-b-0 transition-colors hover:bg-muted/30">
                      <div className="flex items-center gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-[72px] h-[72px] bg-muted rounded-md flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group-hover:bg-primary/10">
                            <div className="scale-[1.75] text-primary">
                              {item.icon}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                              <h3 className="font-medium text-base text-foreground">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {item.category}
                              </p>
                            </div>

                            <div className="shrink-0">
                              <Button variant="outline" className="rounded-full h-8 px-4" asChild>
                                <a
                                  className="flex items-center gap-1.5 text-sm"
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Certificates
                                  <ArrowRight className="h-3.5 w-3.L" />
                                </a>
                              </Button>
                            </div>
                          </div>

                          <p className="text-lg font-medium mt-2 text-foreground/90">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Progressive blur at top */}
              <div className="absolute inset-x-0 top-0 h-[50px] z-10 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none" />

              {/* Progressive blur at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-[50px] z-10 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export { List2 };