interface ExperienceItem {
  title: string;
  details: string;
  period: string;
  company: string;
  logo: string;
  description: string;
}

interface ExperiencesSectionsProps {
  title?: string;
  experience?: ExperienceItem[];
}

const ExperiencesSections = ({
  title = "Work Experience",
  experience = [
    {
      title: "Mentor Class Of React Backend AI",
      details: "Contract • Remote • Bandung, Indonesia",
      period: "Aug 2025 - Present",
      company: "Asah 2025 By Dicoding Indonesia x Accenture",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvwooWbazQP4T-2wOxQgoT8CGTDlL-u8RcA&s",
      description:
        "As a mentor for the React and Backend AI classes in the Asah program by Dicoding Indonesia, I guide and support mentees throughout their learning journey. My responsibilities include assisting mentees in understanding complex concepts, providing feedback on their projects, and helping them overcome technical challenges. I am dedicated to ensuring that each mentee successfully completes the program and gains practical skills in both frontend and backend development. This role allows me to share my expertise, foster growth, and inspire future developers.",
    },
    {
      title: "Fullstack Web Developer",
      details: "Contract Project Base • Hybrid • Surabaya, Indonesia",
      period: "Jul 2024 - Apr 2025",
      company: "Assya Vet Clinic and Pet Care",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
      description:
        "As a full-stack web developer and quality assurance professional, I was responsible for developing and optimizing a web-based work management system using the Laravel framework. In this role, I not only handled full-stack development but also ensured the system's quality through rigorous testing and continuous maintenance. I focused on creating a seamless development workflow, implementing best practices for both backend and frontend development, and maintaining high standards for code quality and system performance.",
    },
    {
      title: "Technical Staff IT Intern",
      details: "Internship • Onsite • Surabaya, Indonesia",
      period: "Aug 2024 - Dec 2024",
      company: "LPP RRI Surabaya",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/RRI_Surabaya_logo_2023.svg",
      description:
        "During my internship, I contributed to the development of a web-based Inventory and Network Management System designed to streamline asset management and provide centralized network monitoring. I implemented barcode detection features within the inventory system, significantly improving real-time tracking, data accuracy, and operational efficiency. Additionally, I was involved in configuring network settings, including IP configurations and the installation of networking devices, to ensure seamless connectivity. As part of the IT support team, I handled software and hardware troubleshooting, ensuring smooth system performance and assisting with network and IT infrastructure maintenance.",
    },
    {
      title: "Frontend Web Developer",
      details: "Contract Project Base • Onsite • Jember, Indonesia",
      period: "Dec 2022 - Aug 2023",
      company: "P3M Politeknik Negeri Jember",
      logo: "https://polije.ac.id/wp-content/uploads/2024/06/LOGO-POLITEKNIK-NEGERI-JEMBER-200x200-1.png",
      description:
        "As a Frontend Web Developer at P3M Politeknik Negeri Jember, I was responsible for developing the frontend of a website used for research activities by lecturers and students. I utilized Bootstrap and CodeIgniter to create responsive and user-friendly interfaces, collaborating closely with the team to ensure the web application met the institution's requirements. My work focused on delivering a seamless user experience and supporting academic research processes.",
    },  
  ],
}: ExperiencesSectionsProps) => {
  return (
    // Gunakan padding yang sama dengan Education (py-32)
    <section className="py-32">
      <div className="container">

        {/* --- PERUBAHAN 1 --- */}
        {/* Ubah dari max-w-7xl menjadi max-w-4xl agar lebarnya sama */}
        <div className="mx-auto max-w-6xl">
          
          <h2 className="text-foreground mb-10 text-center text-3xl font-bold tracking-tighter sm:text-6xl">
            {title}
          </h2>

          <div className="space-y-8">
            {experience.map(
              ({ title, details, period, company, logo, description }, idx) => (
                <div
                  key={idx}
                  className="border-border border-b pb-6 last:border-b-0"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="md:w-2/3">
                      <div className="mb-2 flex items-center gap-3">
                        <img
                          src={logo}
                          alt={`${company} logo`}
                          className="h-5 object-contain"
                        />
                        <h3 className="text-xl">{title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3 text-sm">
                        {details}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                    <div className="text-right md:w-1/3 md:text-right">
                      <p className="mb-1 text-sm font-medium">{period}</p>
                      <p className="text-muted-foreground text-sm">{company}</p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ExperiencesSections };
