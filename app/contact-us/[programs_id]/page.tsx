import About from "@/components/contact-us/[programs_id]/About";
import HeroSection from "@/components/contact-us/[programs_id]/HeroSection";
import Layout from "@/components/layout";

import {
  getPageContent
} from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import React from "react";

const page = async ({ params }: any) => {
  const data: MinistriesType = await getPageContent("ministries-by-slug",params.programs_id);

  return (
    <Layout>
      <HeroSection
        heroSectionImage={
          data.pages.nodes[0].acf.bannerSection.bannerImage.sourceUrl
        }
        subtitle={data.pages.nodes[0].acf.bannerSection.subtitle}
        title={data.pages.nodes[0].acf.bannerSection.title}
        statement={data.pages.nodes[0].acf.bannerSection.subtitle}
      />

      <About
        logo={data.pages.nodes[0].acf.firstSection.icon.sourceUrl}
        description={descriptionExtractor(
          data.pages.nodes[0].acf.firstSection.content
        )}
        button={{
          title: data.pages.nodes[0].acf.firstSection.buttonText,
          link: data.pages.nodes[0].acf.firstSection.buttonLink,
        }}
      />
    </Layout>
  );
};

export default page;
