import SelectionCard from "@/components/elements/card/selection";
import HeaderNav from "@/components/elements/headerNav";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { cn } from "@/lib/utils";
import Image from "next/image";

const Services = () => {
  const aboutUsSections: { title: string; content: string; img: string }[] = [
    {
      title: "Mission and Vision",
      content: "Discover our mission and vision driving TechSavvyy Solutions toward innovation and excellence.",
      img: ""
    },
    {
      title: "Company History",
      content: "Explore the journey and milestones of TechSavvyy Solutions from inception to present day.",
      img: ""
    },
    {
      title: "Our Team",
      content: "Meet the dedicated professionals behind TechSavvyy Solutions' success and innovation.",
      img: ""
    },
    {
      title: "Achievements",
      content: "Learn about the awards and recognitions TechSavvyy Solutions has proudly earned.",
      img: ""
    }
  ];

  return (
    <div className="w-screen h-screen">
      <HeaderNav />
      <section className="container">
        <div className="top flex p-4">
          <div className="w-9/12 px-16">
            <Carousel className="h-[40vh] flex items-center justify-center">
              <CarouselContent className="">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="">
                    <div className="p-1 flex justify-center">
                      <Card className="">
                        <CardContent className="h-[40vh] aspect-video flex relative">
                          <Image src="/about us/news.jpg" alt="news illustration" fill className="absolute object-cover" />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <SelectionCard
            img="/about us/news.jpg"
            title="News"
            content="Discover the latest updates and achievements of TechSavvyy Solutions in our news section."
          />
        </div>
        <div className="bottom flex gap-4 h-[40vh]">
          {aboutUsSections.map((content, index) => (
            <SelectionCard
              img={content.img}
              title={content.title}
              content={content.content}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;