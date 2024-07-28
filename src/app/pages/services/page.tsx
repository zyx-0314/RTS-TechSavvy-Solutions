import ServiceCard from "@/components/elements/card/service";
import HeaderNav from "@/components/elements/headerNav";

import { cn } from "@/lib/utils";

const Services = () => {
  const services: { title: string; content: string; img: string; link: string }[] = [
    {
      title: "Custom Software Development",
      content: "Innovate your business with tailor-made software solutions.",
      img: "/feature/services/Custom Software Development.jpg",
      link: "/pages/services/softwareDevelopment",
    },
    {
      title: "IT Infrastructure Management",
      content: "Optimize and manage your IT infrastructure efficiently.",
      img: "/feature/services/IT Infrastructure Management.jpg",
      link: "/pages/services/itInfrastructureManagement",
    },
    {
      title: "Cloud Services",
      content: "Leverage the power of the cloud for scalability and flexibility.",
      img: "/feature/services/Cloud Services.jpg",
      link: "/pages/services/cloud",
    },
    {
      title: "CyberSecurity Solutions",
      content: "Protect your digital assets with robust cybersecurity measures.",
      img: "/feature/services/CyberSecurity Solutions.jpg",
      link: "/pages/services/cyberSecuritySolutions",
    }
  ];


  return (
    <div className="w-screen h-screen">
      <HeaderNav />
      <section className="container">
        <h2 className={cn("py-5 text-5xl font-semibold")}>Services We Provide</h2>
        <div className={cn("cardholder grid grid-cols-2 grid-rows-2 gap-4 py-6")}>
          {
            services.map((content, index) => (
              <ServiceCard
                index={index}
                content={content}
              />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default Services;