import HeaderNav from "@/components/elements/headerNav";

import { cn } from "@/lib/utils";

import style from './services.module.css';
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services: { title: string; content: string; link: string }[] = [
    {
      title: "Custom Software Development",
      content: "Innovate your business with tailor-made software solutions.",
      link: "/services/custom-software-development",
    },
    {
      title: "IT Infrastructure Management",
      content: "Optimize and manage your IT infrastructure efficiently.",
      link: "/services/it-infrastructure-management",
    },
    {
      title: "Cloud Services",
      content: "Leverage the power of the cloud for scalability and flexibility.",
      link: "/services/cloud-services",
    },
    {
      title: "Cybersecurity Solutions",
      content: "Protect your digital assets with robust cybersecurity measures.",
      link: "/services/cybersecurity-solutions",
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
              <div key={index} className={cn("border flex p-5 gap-4 rounded-md")}>
                <div className="w-11/12 h-100 relative border-2 rounded-md">
                  <Image src={`/feature/services/${content.title}.jpg`} fill alt={content.title} className="absolute object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl font-bold ">{content.title}</h4>
                  <p className="line-clamp-3">{content.content}</p>
                  <Link href={content.link} className="self-end">Check now</Link>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default Services;