import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { dir } from "i18next";
import { Suspense } from "react";
import { languages } from "@/i18n/settings";
import { Providers } from "./providers";

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
          <div className="fixed h-screen w-full dark:bg-gradient-to-br dark:from-indigo-50 dark:via-gray-900 dark:to-cyan-100 bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
          <Suspense fallback="...">
            {/* @ts-ignore */}
            <Nav lng={params.lng} />
          </Suspense>
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
