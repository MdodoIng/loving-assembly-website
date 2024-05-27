import React from "react";
import Layout from "../layout";
import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import main_padding from "@/styles/padding";
import Image from "next/image";

const Associated = ({ data }: { data: HomePageType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center  `}>
      <div className="w-full flex flex-col items-center bg-off-white rounded-xl md:py-16 py-8 md:px-14 px-6 ">
        <HeadTitle border className="capitalize text-center ">
          {data.page.acf.associated.title}
        </HeadTitle>
        <HeadSubtitle className="mt-2 text-center max-w-[900px] ">
          {data.page.acf.associated.subtitle}
        </HeadSubtitle>

        <div className="flex items-center justify-center gap-20 mt-16 flex-wrap">
          {data.page.acf.associated.contents.map((item, idx) => (
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 100}
              key={idx}
              className="flex flex-col ic
            "
            >
              <Image
                src={item.icon.sourceUrl}
                alt=""
                width={140}
                height={140}
                loading="lazy"
                className="h-[150px] w-auto object-contain"
              />
              <p className="mt-2 font-bold text-secondary text-lg capitalize text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Associated;
