import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

import Image from "next/image";


const OurPrograms = ({ data }: { data: HomePageType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
      <HeadTitle className="max-w-[900px] text-center">
        {data.page.acf.fourthSection.sectionTitle}
      </HeadTitle>
      <HeadSubtitle className="text-center text-black sm:mt-4 mt-2 max-w-[900px]">
        {data.page.acf.fourthSection.sectionDescription}
      </HeadSubtitle>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-10 gap-6 lg:mt-16 md:mt-14 mt-6">
        {data.page.acf.fourthSection.offerings.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay={idx * 300}
            className="bg-off-white rounded-[10px] overflow-hidden flex flex-col items-center justify-between pt-4"
          >
            <div />
            <Image
              src={item.icon.sourceUrl}
              alt=""
              width={160}
              height={160}
              loading="lazy"
              className="h-[120px] w-auto aspect-square object-contain px-3"
            />
            <p className="bg-secondary sm:px-6 px-4 py-2  w-full text-center text-white font-semibold sm:text-sm text-xs">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurPrograms;
