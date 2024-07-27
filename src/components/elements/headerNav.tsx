
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeaderNav = () => {
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
}

export default HeaderNav;