import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { dir } from "i18next";
import dynamic from "next/dynamic";
import { languages } from "@/i18n/settings";
import { Providers } from "./providers";

const Header = dynamic(() => import("@/components/layout/header"), { ssr: false });

export const metadata = {
  title: "kjxbyz",
  description: "科技小白英仔.",
  metadataBase: new URL("https://kjxbyz.com"),
  themeColor: "#FFF",
};

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
        <Providers>
          <div className="fixed h-screen w-full bg-cyan-50 dark:bg-black" />
          <Header lng={params.lng} />
          <main
            id="main"
            className="flex min-h-screen w-full flex-col items-center justify-center py-32"
          >
            {children}
          </main>
          <Footer lng={params.lng} />
        </Providers>
      </body>
    </html>
  );
}
