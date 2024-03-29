"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRss } from "react-icons/fa";
import { host } from "@/constants";
import { LngProps } from "@/i18next-lng";
import { useTranslation } from "@/i18n/client";

export default function Footer(props: LngProps) {
  const { t } = useTranslation(props.lng, "footer");
  const { t: th } = useTranslation(props.lng, "header");
  const fullYear = new Date().getFullYear();

  return (
    <div className="absolute w-full py-5 text-center">
      {/*<p className="text-gray-500 dark:text-white/80">*/}
      {/*  {t("footer")}{" "}*/}
      {/*  <a*/}
      {/*    className="font-medium text-gray-800 underline transition-colors dark:text-white/90"*/}
      {/*    href="https://github.com/kjxbyz/kjxbyz-blog"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    GitHub*/}
      {/*  </a>*/}
      {/*</p>*/}
      <p className="mt-2 flex items-center justify-center">
        <Link
          className="font-medium text-gray-800 underline transition-colors dark:text-white/90"
          href={`/${props.lng}/legal/privacy`}
          rel="noopener noreferrer"
        >
          {t("privacy")}
        </Link>
        &nbsp;&nbsp;
        <Link
          className="font-medium text-gray-800 underline transition-colors dark:text-white/90"
          href={`/${props.lng}/legal/terms-of-use`}
          rel="noopener noreferrer"
        >
          {t("terms-of-use")}
        </Link>
      </p>
      <span className="mt-2 flex flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © {`2023${fullYear === 2023 ? "" : `-${fullYear}`}`}&nbsp;
        <a href="https://www.kjxbyz.com" className="hover:underline">
          {th("title")}
        </a>
        . {t("copyright")}&nbsp;
        <a href={`${host}/rss.xml`} rel="noreferrer" target="_blank">
          <FaRss color="#ee802f" size="20px" />
        </a>
        &nbsp;
        {process.env.VERCEL_GIT_COMMIT_SHA && (
          <p className="flex items-center justify-center">
            <a
              href={`https://github.com/kjxbyz/kjxbyz-blog/commit/${process.env.VERCEL_GIT_COMMIT_SHA}`}
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              {process.env.VERCEL_GIT_COMMIT_SHA.substring(0, 8)}
            </a>
          </p>
        )}
        &nbsp;
        <Image
          src="https://visitor-badge.laobi.icu/badge?page_id=kjxbyz.com"
          width={60}
          height={20}
          alt="visitor badge"
        />
      </span>
    </div>
  );
}
