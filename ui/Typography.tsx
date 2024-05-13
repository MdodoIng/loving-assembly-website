import React, { ReactNode } from "react";
import { twJoin, twMerge } from "tailwind-merge";

const HeadTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h1
    data-aos="fade-up"
    data-aos-duration="700"
    className={twJoin(
      "font-bold text-secondary lg:leading-[120%] md:leading-[120%] leading-[120%] lg:text-5xl md:text-4xl text-3xl",
      className
    )}
  >
    {" "}
    {children}
  </h1>
);
const HeadSubtitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    data-aos="fade-up"
    data-aos-duration="700"
    className={twMerge(
      "text-black md:text-lg text-base md:leading-[190%]  leading-[190%]",
      className
    )}
  >
    {" "}
    {children}
  </p>
);

export { HeadTitle, HeadSubtitle };
