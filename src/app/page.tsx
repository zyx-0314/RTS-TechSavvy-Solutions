'use client'

import { Card, CardContent } from "@/components/ui/card";
import HeaderNav from "@/components/elements/headerNav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [bottomTagLineIndex, setBottomTagLineIndex] = useState(1)

  const services: { title: string; content: string }[] = [
    {
      title: "Custom Software Development",
      content: "Innovate your business with tailor-made software solutions."
    },
    {
      title: "IT Infrastructure Management",
      content: "Optimize and manage your IT infrastructure efficiently."
    },
    {
      title: "Cloud Services",
      content: "Leverage the power of the cloud for scalability and flexibility."
    },
    {
      title: "Cybersecurity Solutions",
      content: "Protect your digital assets with robust cybersecurity measures."
    }
  ];

  const bottomTagLine: string[] = ["Innovation", "Expertise", "Cloud Solution", "Management"]

  useEffect(() => {
    const interval = setInterval(() => {
      setBottomTagLineIndex((prevIndex) => (prevIndex + 1) % bottomTagLine.length);
    }, 10000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col relative w-screen h-screen">
      <div className="self-end w-screen h-screen m-auto absolute z-[-1] object-cover flex">
        <Image src={'/hero/white.jpg'} alt="" width={1000} height={1000} className="object-cover w-[50%]" />
        <Image src={'/hero/hero.jpg'} alt="" width={5000} height={5000} className="object-cover w-[50%]" />
      </div>
      <HeaderNav />
      <section className="container max-w-[90%] h-[85dvh] flex flex-col justify-center">
        <div className="top grid grid-cols-3 grid-rows-1 w-100 items-center h-[75%]">
          <div className="left text-6xl py-16 font-semibold">Your partner in digital innovation.</div>
          <Image src={'/logo/company-logo.webp'} alt="" width={1000} height={100} className="mid flex justify-center text-[30rem] font-normal" />
          <div className="right"></div>
        </div>
        <div className="bottom grid grid-cols-2 grid-rows-1 w-100 items-center">
          <div className="left w-100 flex justify-center">
            <Carousel className="w-[80%]">
              <CarouselContent>
                {services.map((content, index) => (
                  <CarouselItem key={index}>
                    <div className="p-0">
                      <Card className=" bg-transparent border-none">
                        <CardContent className="flex flex-col gap-2 items-center justify-center p-3 ">
                          <>
                            <span className="text-2xl font-semibold">{content.title}</span>
                            <span className="text-md font-semibold">{content.content}</span>
                          </>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className=" bg-transparent border-none" />
              <CarouselNext className=" bg-transparent border-none" />
            </Carousel>
          </div>
          <div className="right flex flex-col gap-3 p-3">
            <h4 className=" font-bold text-3xl">Empower Your Business</h4>
            <div className="flex gap-2 text-lg">
              <div className="">With</div>
              <div className=" font-semibold">{bottomTagLine[bottomTagLineIndex]}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
