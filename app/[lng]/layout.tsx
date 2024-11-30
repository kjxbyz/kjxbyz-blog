import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { dir } from "i18next";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { GoogleAnalytics } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import { BiArrowToTop } from "react-icons/bi";
import CookieBanner from "@/components/shared/cookie-banner";
import ScrollToTop from "@/components/layout/scroll-to-top";
import Footer from "@/components/layout/footer";
import { languages } from "@/i18n/settings";
import { basePath } from "@/constants";
import { Providers } from "./providers";
import Particles from "./particles";

// 是否显示背景特效
const NEXT_PUBLIC_SHOW_PARTICLES = process.env.NEXT_PUBLIC_SHOW_PARTICLES;
// 是否全站置灰
const NEXT_PUBLIC_WEBSITE_GLOBAL_GRAY =
  process.env.NEXT_PUBLIC_WEBSITE_GLOBAL_GRAY;
// Google tag (gtag.js)
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

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
    icons: {
      icon: `${basePath}/logo.jpg`,
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
    <html
      lang={params.lng}
      dir={dir(params.lng)}
      className={NEXT_PUBLIC_WEBSITE_GLOBAL_GRAY ? "grayscale" : ""}
      suppressHydrationWarning
    >
      <body className={cx(sfPro.variable, inter.variable)}>
        <NextTopLoader height={1} />
        <Providers>
          {NEXT_PUBLIC_SHOW_PARTICLES && <Particles />}
          <Header lng={params.lng} />
          <main
            id="main"
            className="flex min-h-screen w-full flex-col items-center justify-center py-32"
          >
            {children}
          </main>
          <Footer lng={params.lng} />
          <CookieBanner lng={params.lng} />
        </Providers>
        <ScrollToTop
          smooth
          component={
            <BiArrowToTop className="mx-auto my-0 h-5 w-5 text-gray-700" />
          }
        />
      </body>
      {GA_TRACKING_ID && <GoogleAnalytics gaId={GA_TRACKING_ID} />}
    </html>
  );
}
