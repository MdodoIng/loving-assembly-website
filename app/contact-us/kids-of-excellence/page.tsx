import HeroSection from "@/components/contact-us/[programs_id]/HeroSection";
import Layout from "@/components/layout";
import React from "react";
import bg from "@/assets/images/our programmes/Kids Of Excellence bg.webp";
import Events from "@/components/contact-us/kids-of-excellence/Events";
import Guiding from "@/components/contact-us/kids-of-excellence/Guiding";
import { getPageContent } from "@/libs/contents/wordpress/data";

const page = async () => {
  const data: KidsOfExcellenceType = await getPageContent("kids-of-excellence");
  return (
    <Layout>
      <HeroSection
        heroSectionImage={data.page.acf.bannerImage.sourceUrl}
        title="Kids Of Excellence"
        subtitle=""
      />
      <Guiding data={data} />
      <Events  data={data}/>
    </Layout>
  );
};

export default page;
