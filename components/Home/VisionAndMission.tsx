import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

import mission from "@/assets/images/Home/Our Mission.webp";
import vision from "@/assets/images/Home/Our Vision.webp";
import Image from "next/image";

const VisionAndMission = ({ data }: { data: HomePageType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} items-center flex-col`}>
      <HeadTitle className="text-center max-w-[900px]">
        {data.page.acf.sixthSection.title}
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        {data.page.acf.sixthSection.description}
      </HeadSubtitle>
      <div className="lg:mt-16 md:mt-14 mt-6  lg:gap-16 md:gap-12 gap-6 grid md:grid-cols-2 max-w-[1440px] ">
        {data.page.acf.sixthSection.boxSection.map((item, idx) => (
          <div
            key={idx}
            className="border border-black flex flex-col rounded-[10px] overflow-hidden"
          >
            <Image
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              src={item.image.sourceUrl}
              alt=""
              loading="lazy"
              width={item.image.mediaDetails.width}
              height={item.image.mediaDetails.height}
              className="aspect-[16/12] object-cover"
            />
            <div className="flex flex-col px-6 py-6">
              <h3
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="font-bold lg:text-3xl md:text-2xl text-xl"
              >
                {item.title}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 300}
                className="md:mt-3 mt-1 text-base leading-[150%]"
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default VisionAndMission;
