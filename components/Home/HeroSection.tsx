import React from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import bg from "@/assets/images/Home/hero section bg.webp";
import HeroSectionBottom from "@/ui/HeroSectionBottom";
import main_padding from "@/styles/padding";

const HeroSection = ({ data }: { data: HomePageType }) => {
  return (
    <section className="flex flex-col justify-end w-full">
      <Image
        src={data.page.acf.bannerSection.bannerImage.sourceUrl}
        alt=""
        priority
        width={data.page.acf.bannerSection.bannerImage.mediaDetails.width}
        height={data.page.acf.bannerSection.bannerImage.mediaDetails.height}
        className="object-cover h-full w-full -z-10 sm:max-h-[80vh] max-sm:h-[80vh] object-top "
      />

      <SectionWrapper classBottom={main_padding.y}>
        <HeroSectionBottom
          title={data.page.acf.firstSectionWelcome.title}
          description={data.page.acf.firstSectionWelcome.description}
          btn1={{
            title: data.page.acf.firstSectionWelcome.buttion1Text,
            link: data.page.acf.firstSectionWelcome.button1Link,
          }}
          btn2={{
            title: data.page.acf.firstSectionWelcome.button2Text,
            link: data.page.acf.firstSectionWelcome.button2Link,
          }}
        />
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
