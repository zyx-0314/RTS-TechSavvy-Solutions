import Image from "next/image";

const SelectionCard = (
  { img, title, content }: { img: string, title: string, content: string }
) => {

  img = (img === '') ? '/placeholder.webp' : img;

  return (
    <div className="w-3/12 border-2 rounded-lg p-4 flex flex-col">
      <div className="w-100 aspect-video relative">
        <Image src={img} alt={title} fill className="absolute object-cover p-4" />
      </div>
      <div className="flex-grow flex justify-center flex-col gap-2">
        <h4 className="text-center text-2xl font-bold">{title}</h4>
        <p className="text-center content-center">{content}</p>
      </div>
    </div>
  );
}

export default SelectionCard;