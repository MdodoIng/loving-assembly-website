import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import main_padding from "@/styles/padding";

const JoinUs = ({ data }: { data: HomePageType }) => {

  return (
    <div className={`${main_padding.y} w-full flex items-center`}>
      <SectionWrapper
        classTop={`relative z-0 bg-black `}
        classBottom={` sm:py-28 py-16 flex-col items-center`}
      >
        <Image
          src={data.page.acf.seventhSectionJoinus.backgroundImage.sourceUrl}
          fill
          loading="lazy"
          className="-z-10 object-cover "
          alt={""}
        />
        <div className="flex flex-col items-center py-14 px-14 bg-black/15 backdrop-blur-xl rounded-lg ">
          <HeadTitle border className="border-white text-white">
            {data.page.acf.seventhSectionJoinus.title}
          </HeadTitle>
          <HeadSubtitle className="text-center text-off-white mt-8 leading-[200%]">
            {descriptionExtractor(
              data.page.acf.seventhSectionJoinus.description
              
            )}
          </HeadSubtitle>
        </div>
      </SectionWrapper>
    </div>
  ); 
};

export default JoinUs;
