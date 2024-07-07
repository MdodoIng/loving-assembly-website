import Loading from "@/app/loading";
import About from "@/components/[programs_id]/About";
import HeroSection from "@/components/[programs_id]/HeroSection";
import Layout from "@/components/layout";

import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import React from "react";

const page = async ({ params }: any) => {
  const data: MinistriesType = await getPageContent(
    "ministries-by-slug",
    params.programs_id
  );

  if (!data) return <Loading />;
  return (
    <>
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
    </>
  );
};

export default page;

export async function generateStaticParams() {
  const data: UtilitiesType = await getPageContent("utilities");
  const valuesToFilter = ["kids-of-excellence", "man-of-valour"];

  const filtered = data.utility.acf.ministriesMenuLinks.filter(
    (item) => !valuesToFilter.includes(item.link)
  );

  return filtered.map((post) => ({
    programs_id: post.link,
  }));
}
