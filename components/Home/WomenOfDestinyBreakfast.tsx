import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import mainImage from "@/assets/images/Home/Women Of Destiny Breakfast main.webp";

import Image from "next/image";

const WomenOfDestinyBreakfast = ({ data }: { data: HomePageType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} items-center flex-col`}>
      <HeadTitle border className="text-center max-w-[900px]">
        {data.page.acf.fifthSection.sectionTitle}
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
      {data.page.acf.fifthSection.sectionDescription}
      </HeadSubtitle>
      <Image
        src={data.page.acf.fifthSection.sectionImage.sourceUrl}
        alt=""
        data-aos="fade-up"
        data-aos-duration="700"
        loading="lazy"
        width={data.page.acf.fifthSection.sectionImage.mediaDetails.width}
        height={data.page.acf.fifthSection.sectionImage.mediaDetails.height}
        className="w-full rounded-[10px] ld:mt-16 md:mt-14 sm:mt-12 mt-6 lg:aspect-[16/7] aspect-video object-cover"
      />
    </SectionWrapper>
  );
};

export default WomenOfDestinyBreakfast;
