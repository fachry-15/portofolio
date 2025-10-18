"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";
import React from "react";

interface Service {
  icon: React.ReactNode; // Tipe yang lebih umum untuk ikon/komponen React
  title: string;
  description: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Web Development",
    description:
      "Building responsive and interactive user interfaces using the latest frontend technologies.",
    items: ["React", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "UI/UX Design",
    description:
      "Beautiful, user-centered designs that create engaging experiences across all platforms.",
    items: ["Figma", "Prototyping", "Interaction Design", "User Research"],
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Backend Web Development",
    description:
      "Modern, scalable web applications built with the latest technologies and best practices.",
    items: ["Node.js", "Express.js", "MySQL", "PHP"],
  },
  {
    icon: <Shrub className="h-6 w-6" />,
    title: "IoT Development and Integration",
    description:
      "End-to-end IoT solutions, device integration, and cloud connectivity for smart systems.",
    items: [
      "Embedded Systems",
      "Microcontrollers (Arduino, ESP32)",
      "IoT Protocols (MQTT, HTTP)",
      "Cloud Integration (AWS IoT, Azure IoT)",
      "Sensor Data Processing",
    ],
  },
];

// 4. (Opsional tapi disarankan) Beri tipe pada return value komponen
const Services: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Bagian Judul */}
          <div className="space-y-4 text-left">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Elevate Your Ideas with Our Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg tracking-tight md:text-xl">
              We craft digital experiences that captivate and convert, bringing
              your vision to life.
            </p>
          </div>

          {/* Grid Layanan */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => ( // Tidak perlu 'index' jika 'service.title' unik
              <div
                key={service.title} // 5. Lebih baik gunakan key yang unik dari data, misal title
                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item) => ( // Tidak perlu 'itemIndex' jika 'item' unik
                    <div key={item} className="flex items-center gap-2"> {/* 5. Gunakan 'item' sebagai key */}
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;