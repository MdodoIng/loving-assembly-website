import About from "@/components/contact-us/[programs_id]/About";
import HeroSection from "@/components/contact-us/[programs_id]/HeroSection";
import Layout from "@/components/layout";
import { programsData } from "@/libs/contents";
import { getPageContentBySlug } from "@/libs/contents/wordpress/data";
import React from "react";


const page = async ({ params }: any) => {
  const data: MinistriesType = getPageContentBySlug(params.programs_id);

  // console.log(data)
  return (
    <Layout>
      <HeroSection
        heroSectionImage={
          data.data.pages.nodes[0].acf.bannerSection.bannerImage.sourceUrl
        }
        subtitle={data.data.pages.nodes[0].acf.bannerSection.subtitle}
        title={data.data.pages.nodes[0].acf.bannerSection.title}

      />
      iii
      {/* <About {...data} /> */}
    </Layout>
  );
};

export default page;
