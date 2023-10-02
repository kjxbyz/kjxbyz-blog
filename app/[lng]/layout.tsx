import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { dir } from "i18next";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import NextTopLoader from "nextjs-toploader";
import { BiArrowToTop } from "react-icons/bi";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "@/components/layout/scroll-to-top";
import Footer from "@/components/layout/footer";
import { languages } from "@/i18n/settings";
import { Providers } from "./providers";

const Header = dynamic(() => import("@/components/layout/header"), {
  ssr: false,
});

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}): Promise<Metadata | undefined> {
  return {
    title: params.lng === "en" ? "kjxbyz" : "科技小白英仔",
    description: params.lng === "en" ? "KJXBYZ" : "科技小白英仔.",
    metadataBase: new URL("https://kjxbyz.com"),
    themeColor: "#FFF",
    icons: {
      icon: "/portal/logo.jpg",
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={params.lng} dir={dir(params.lng)} suppressHydrationWarning>
      <body className={cx(sfPro.variable, inter.variable)}>
        <NextTopLoader height={1} />
        <Providers>
          <div className="fixed h-full w-full bg-cyan-50 dark:bg-black" />
          <Header lng={params.lng} />
          <main
            id="main"
            className="flex min-h-screen w-full flex-col items-center justify-center py-32"
          >
            {children}
            <Analytics />
          </main>
          <Footer lng={params.lng} />
        </Providers>
        <ScrollToTop
          smooth
          component={
            <BiArrowToTop className="mx-auto my-0 h-5 w-5 text-gray-700" />
          }
        />
      </body>
    </html>
  );
}
