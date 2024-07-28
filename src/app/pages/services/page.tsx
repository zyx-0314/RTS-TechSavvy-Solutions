import ServiceCard from "@/components/elements/card/service";
import HeaderNav from "@/components/elements/headerNav";

import { cn } from "@/lib/utils";

const Services = () => {
  const services: { title: string; content: string; link: string }[] = [
    {
      title: "Custom Software Development",
      content: "Innovate your business with tailor-made software solutions.",
      link: "/pages/services/softwareDevelopment",
    },
    {
      title: "IT Infrastructure Management",
      content: "Optimize and manage your IT infrastructure efficiently.",
      link: "/pages/services/itInfrastructureManagement",
    },
    {
      title: "Cloud Services",
      content: "Leverage the power of the cloud for scalability and flexibility.",
      link: "/pages/services/cloud",
    },
    {
      title: "Cybersecurity Solutions",
      content: "Protect your digital assets with robust cybersecurity measures.",
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