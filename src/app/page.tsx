'use client'

import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex w-screen justify-center content-center">
        <Image src={'/icon/pokeball.png'} alt={'pokeball'} width="50" height="50" />
      </header>
    </>
  );
}
