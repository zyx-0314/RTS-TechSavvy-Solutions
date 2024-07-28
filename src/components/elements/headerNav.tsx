
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeaderNav = () => {
  // V.2
  // base from contents
  const navigation: { label: string, link: string }[] = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Services",
      link: "/pages/services",
    },
    {
      label: "About Us",
      link: "/pages/aboutUs",
    }
  ]

  return (
    <header className="flex w-screen justify-between content-center py-8 container">
      <Image src={'/logo/company-logo.webp'} alt={'pokeball'} width="70" height="70" />
      <nav className="flex gap-2 items-center">
        {
          navigation.map((data, index) => (
            <Button key={index} className="bg-transparent hover:bg-transparent text-black hover:text-red-500 font-medium text-base duration-300 p-0">
              <Link href={data.link} className="p-3">{data.label}</Link>
            </Button>
          ))
        }
      </nav>
    </header>
  );

  // V.1
  // Hard Coded Data
  /*
    return (
      <header className="flex w-screen justify-between content-center py-2 px-5">
        <Image src={'/icon/pokeball.png'} alt={'pokeball'} width="50" height="50" />
        <div className="btnGroup">
          <Button>
            <Link href={''}>Home</Link>
          </Button>
          <Button>
            <Link href={''}>Services</Link>
          </Button>
          <Button>
            <Link href={''}>About Us</Link>
          </Button>
          <Button>
            <Link href={''}>Contact Us</Link>
          </Button>
        </div>
      </header>
    );
  */
}

export default HeaderNav;