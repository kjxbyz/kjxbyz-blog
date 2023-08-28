"use client";
import { ReactNode } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  description,
  demo,
  url,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  url: string;
  large?: boolean;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className={large ? "md:col-span-2" : ""}
    >
      <div className="relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white hover:shadow-md dark:hover:shadow-gray-700 dark:bg-gray-900">
        <div className="flex h-60 items-center justify-center">{demo}</div>
        <div className="mx-auto max-w-md text-center">
          <h2 className="bg-clip-text font-display text-xl font-bold text-black/80 dark:text-white/80 md:text-3xl md:font-normal">
            <Balancer>{title}</Balancer>
          </h2>
          <div className="prose-sm -mt-2 leading-normal text-gray-500 md:prose dark:text-white/80">
            <Balancer>
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                      className="font-medium text-gray-800 underline transition-colors"
                    />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      {...props}
                      // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                      inline="true"
                      className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                    />
                  ),
                }}
              >
                {description}
              </ReactMarkdown>
            </Balancer>
          </div>
        </div>
      </div>
    </Link>
  );
}
