import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ index, content }: { index: number, content: { title: string; content: string; link: string } }) => {
  return (
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
  );
}

export default ServiceCard;