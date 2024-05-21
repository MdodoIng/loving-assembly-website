import HeroSection from "@/components/Home/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Layout from "@/components/layout";
import main_padding from "@/styles/padding";
import LeftContentRightImg from "@/ui/LeftContentRightImg";
import our_churchImg from "@/assets/images/Home/Our church.webp";
import OurPrograms from "@/components/Home/OurPrograms";
import WomenOfDestinyBreakfast from "@/components/Home/WomenOfDestinyBreakfast";
import Journey from "@/components/Home/Journey";
import VisionAndMission from "@/components/Home/VisionAndMission";
import JoinUs from "@/components/Home/JoinUs";
import Ministering from "@/components/Home/Ministering";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";

export default async function Home() {
  const [data, teams]: [HomePageType, TeamsType] = await Promise.all([
    getPageContent("home"),
    getPageContent("teams"),
  ]);

  return (
    <Layout>
      <HeroSection data={data} />
      <SectionWrapper classBottom={main_padding.y}>
        <LeftContentRightImg
          title={data.page.acf.secondSectionChurch.title}
          subtitle={data.page.acf.secondSectionChurch.description}
          btn1={{
            title: data.page.acf.secondSectionChurch.button1Text,
            link: data.page.acf.secondSectionChurch.button1Text,
          }}
          btn2={{
            title: data.page.acf.secondSectionChurch.button2Text,
            link: data.page.acf.secondSectionChurch.button2Link,
          }}
          image={data.page.acf.secondSectionChurch.sectionImage.sourceUrl}
          playBtn={true}
          imageLink="ddsaf"
        />
      </SectionWrapper>
      <SectionWrapper classBottom={main_padding.y}>
        <LeftContentRightImg
          title={data.page.acf.thirdSectionWho.title}
          subtitle={descriptionExtractor(
            data.page.acf.thirdSectionWho.description
          )}
          direction="opposite"
          btn1={{
            title: data.page.acf.thirdSectionWho.buttonText,
            link: data.page.acf.thirdSectionWho.buttonLink,
          }}
          image={data.page.acf.thirdSectionWho.sectionImage.sourceUrl}
        />
      </SectionWrapper>
      <OurPrograms data={data} />
      <WomenOfDestinyBreakfast data={data} />
      <Journey data={data} />
      <VisionAndMission data={data} />
      <JoinUs data={data} />
      <Ministering data={data} teams={teams} />
    </Layout>
  );
}
