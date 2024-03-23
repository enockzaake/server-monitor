import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      className="flex items-center text-teal-600 text-2xl font-extrabold"
      href="/"
    >
      <Image src={"/icon.png"} width={50} height={50} alt="Logo" /> UpEngine
    </Link>
  );
};

export default Logo;
