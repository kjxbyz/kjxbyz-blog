"use client";
import Balancer from "react-wrap-balancer";
import { RoughNotation } from "react-rough-notation";
import { Github } from "@/components/shared/icons";
import { SiViber, SiNextdotjs, SiNuxtdotjs } from "react-icons/si";
import { FiMusic, FiVideo } from "react-icons/fi";
import { AiOutlineAudio } from "react-icons/ai";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicCard = dynamic(() => import("@/components/home/card"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div className="mb-8 flex items-center justify-center space-x-20">
          <Image
            className="rounded-full"
            alt="logo"
            src="/logo.jpg"
            width={160}
            height={160}
          />
        </div>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>科技小白英仔</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-red-400 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            <RoughNotation
              animate
              type="highlight"
              show={true}
              color="rgb(36, 54, 110)"
              animationDelay={1000}
              animationDuration={2500}
            >
              人见人爱, 花见花开
            </RoughNotation>
            .
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/kjxbyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="sm:inline-block">Star on</span> GitHub{" "}
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, url, large }) => (
          <DynamicCard
            key={title}
            title={title}
            description={description}
            demo={demo}
            url={url}
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "YTMusic",
    description: "An unofficial YouTube music desktop client.",
    demo: <FiMusic className="h-24 w-24 text-gray-600 transition-all" />,
    url: "https://kjxbyz.com/ytmusic",
    large: false,
  },
  {
    title: "Viber",
    description: "A social application that supports web, desktop and mobile.",
    demo: <SiViber className="h-24 w-24 text-gray-600 transition-all" />,
    url: "https://kjxbyz.com/viber",
  },
  {
    title: "DS Audio",
    description: "A music application for managing music on Synology NAS.",
    demo: <AiOutlineAudio className="h-24 w-24 text-gray-600 transition-all" />,
    url: "https://kjxbyz.com/dsaudio",
  },
  {
    title: "DS Video",
    description: "A video application for managing videos on Synology NAS.",
    demo: <FiVideo className="h-24 w-24 text-gray-600 transition-all" />,
    url: "https://kjxbyz.com/dsvideo",
    large: false,
  },
  {
    title: "Next Starter",
    description: "Next Starter",
    demo: <SiNextdotjs className="h-24 w-24 text-gray-600 transition-all" />,
    url: "https://www.kjxbyz.com/starter/next",
    large: false,
  },
  {
    title: "Nuxt Starter",
    description: "Nuxt Starter",
    demo: <SiNuxtdotjs className="h-24 w-24 text-gray-600 transition-all" />,
    url: "https://www.kjxbyz.com/starter/nuxt",
    large: false,
  },
  {
    title: "Next Admin Starter",
    description: "Next Admin Starter",
    demo: <SiNextdotjs className="h-24 w-24 text-gray-600 transition-all" />,
    url: "https://www.kjxbyz.com/starter/next/admin",
    large: false,
  },
  {
    title: "Nuxt Admin Starter",
    description: "Nuxt Admin Starter",
    demo: <SiNuxtdotjs className="h-24 w-24 text-gray-600 transition-all" />,
    url: "https://www.kjxbyz.com/starter/nuxt/admin",
    large: false,
  },
  {
    title: "Nuxt Test",
    description: "Nuxt Test",
    demo: <SiNuxtdotjs className="h-24 w-24 text-gray-600 transition-all" />,
    url: "https://www.kjxbyz.com/nuxt-test",
    large: false,
  },
];
