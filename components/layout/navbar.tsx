"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import LngDropdown from "./lng-dropdown";
import ThemeDropdown from "./theme-dropdown";
import { LngProps } from "@/i18next-lng";

export default function NavBar(props: LngProps) {
  const scrolled = useScroll(50);

  return (
    <div
      className={`fixed top-0 w-full ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        <Link
          href={`/${props.lng}`}
          className="flex items-center font-display text-2xl"
        >
          <Image
            src="/logo.jpg"
            alt="logo"
            width="30"
            height="30"
            className="mr-2 rounded-xl"
          ></Image>
          <p>KJXBYZ</p>
        </Link>
        <div>
          <LngDropdown lng={props.lng} />
          <ThemeDropdown lng={props.lng} />
        </div>
      </div>
    </div>
  );
}
