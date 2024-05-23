import Loading from "@/app/loading";
import About from "@/components/contact-us/[programs_id]/About";
import HeroSection from "@/components/contact-us/[programs_id]/HeroSection";
import Layout from "@/components/layout";

import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import React from "react";

export async function generateStaticParams() {
  const data: MinistriesNavLinksType = await getPageContent(
    "ministries-nav-links"
  );
  const valuesToFilter = ["kids-of-excellence", "man-of-valour"];

  const filtered = data.utility.acf.items.filter(
    (item) => !valuesToFilter.includes(item.link.url)
  );

  return filtered.map((post) => ({
    programs_id: post.link.url,
  }));
}

const page = async ({ params }: any) => {
  const data: MinistriesType = await getPageContent(
    "ministries-by-slug",
    params.programs_id
  );

  if (!data) return <Loading />;
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
