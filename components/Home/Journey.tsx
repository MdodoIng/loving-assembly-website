import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";

import Image from "next/image";

const Journey = ({ data }: { data: HomePageType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} items-center flex-col`}>
      <HeadTitle className="text-center max-w-[900px]">
        {data.page.acf.fifthSection.sectionTitleTwo}
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        {data.page.acf.fifthSection.sectionDescriptionTwo}
      </HeadSubtitle>
      <div className="lg:mt-16 md:mt-14 mt-6 flex flex-col w-full justify-center items-center sm:gap-24 gap-16">
        {data.page.acf.fifthSection.posts.map((item, idx) => (
          <div
            key={idx}
            className={`md:max-w-[70%]  ${
              idx % 2 === 0 ? "mr-auto" : "ml-auto"
            }`}
          >
            <Image
              src={item.image.sourceUrl}
              alt=""
              data-aos="fade-up"
              data-aos-duration="700"
              width={item.image.mediaDetails.width}
              height={item.image.mediaDetails.height}
              className="w-full object-cover rounded-[10px] overflow-hidden"
            />
            <h2
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-2xl leading-[190%] font-bold mt-6 text-secondary"
            >
              {item.title}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-base leading-[150%]"
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Journey;
