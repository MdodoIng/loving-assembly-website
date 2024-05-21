import HeroSection from "@/components/contact-us/HeroSection";
import OurMinistries from "@/components/contact-us/OurMinistries";
import Layout from "@/components/layout";
import { getPageContent } from "@/libs/contents/wordpress/data";
import React from "react";

const page = async () => {
  const data: ContactUsPageType = await getPageContent("contact-us");
  return (
    <Layout>
      <HeroSection data={data} />
      <OurMinistries data={data}/>
    </Layout>
  );
};

export default page;
