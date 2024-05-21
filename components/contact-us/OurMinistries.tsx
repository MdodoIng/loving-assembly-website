import React from "react";
import SectionWrapper from "../SectionWrapper";
import main_padding from "@/styles/padding";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import IntercessoryPrayerMinistry from "@/assets/icons/our programs/Intercessory Prayer Ministry.webp";
import MarriageMinistry from "@/assets/icons/our programs/Marriage Ministry.webp";
import MediaMinistry from "@/assets/icons/our programs/Media Ministry.webp";
import MenOfValor from "@/assets/icons/our programs/Men of Valor.webp";
import MusicMinistry from "@/assets/icons/our programs/Music Ministry.webp";
import Outreach from "@/assets/icons/our programs/Outreach.webp";
import SinglesMinistry from "@/assets/icons/our programs/Singles Ministry.webp";
// import second from '@/assets/icons/our programs/Women Of Destiny.webp'
import YouthMission from "@/assets/icons/our programs/Youth Mission.webp";
import Image from "next/image";
import { programsData } from "@/libs/contents";
import Link from "next/link";

const OurMinistries = ({ data }: { data: ContactUsPageType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
      <HeadTitle className="text-center max-w-[800px]">
        {data.page.acf.secondSection.title}
      </HeadTitle>
      <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
        {data.page.acf.secondSection.description}
      </HeadSubtitle>
      <div className="grid md:grid-cols-2  lg:gap-10 gap-6 lg:mt-16 md:mt-14 mt-6">
        {data.page.acf.secondSection.boxesLayout.map((item, idx) => (
          <div
            // href={`/contact-us/${item.slug}`}
            // shallow
            key={idx}
            suppressHydrationWarning
            className="flex items-center justify-start gap-4 bg-off-white rounded-[10px] sm:px-8 px-2 py-6 w-full"
          >
            <Image
              src={item.icon.sourceUrl}
              alt=""
              data-aos="fade-up"
              data-aos-duration="700"
              loading="lazy"
              width={150}
              height={150}
              className="h-24 w-auto aspect-square object-contain"
            />
            <div className="flex flex-col ">
              <h4
                data-aos="fade-up"
                data-aos-duration="700"
                className="text-xl text-primary font-bold"
              >
                {item.title}
              </h4>
              <a
                data-aos="fade-up"
                data-aos-duration="700"
                href={`mailto:${item.description}`}
                className="font-medium max-sm:text-sm"
              >
                {item.description}
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OurMinistries;
