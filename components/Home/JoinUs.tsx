import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import insta from "@/assets/icons/instagram.svg";
import fb from "@/assets/icons/facebook.svg";
import Link from "next/link";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import main_padding from "@/styles/padding";

const JoinUs = ({ data }: { data: HomePageType }) => {
  const socialMedia = [
    { link: data.page.acf.seventhSectionJoinus.facebookLink, icon: fb },
    { link: data.page.acf.seventhSectionJoinus.instaLink, icon: insta },
  ];
  return (
    <div className={`${main_padding.y} w-full flex items-center`}>
      <SectionWrapper
        classTop={`relative z-0 bg-black `}
        classBottom={` sm:py-24 py-14 flex-col items-center`}
      >
        <Image
          src={data.page.acf.seventhSectionJoinus.backgroundImage.sourceUrl}
          fill
          loading="lazy"
          className="-z-10 object-cover opacity-30"
          alt={""}
        />
        <HeadTitle border className="border-white">
          {data.page.acf.seventhSectionJoinus.title}
        </HeadTitle>
        <HeadSubtitle className="text-center text-off-white mt-6 leading-[200%]">
          {descriptionExtractor(data.page.acf.seventhSectionJoinus.description)}
        </HeadSubtitle>

        <div className="flex items-center justify-center gap-4 w-max max-w-full mt-6">
          {socialMedia.map((item, idx) => (
            <Link
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              key={idx}
              href={item.link}
              target="_blank"
              className="p-3  rounded-md bg-off-white aspect-square shrink-0 flex items-center justify-center "
            >
              <Image
                src={item.icon}
                alt=""
                className="h-4 w-auto object-contain aspect-square"
              />
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default JoinUs;
