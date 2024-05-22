import HeroSection from "@/components/contact-us/HeroSection";
import OurMinistries from "@/components/contact-us/OurMinistries";
import Layout from "@/components/layout";
import { getPageContent } from "@/libs/contents/wordpress/data";
import React from "react";
import Loading from "../loading";

const page = async () => {
  const data: ContactUsPageType = await getPageContent("contact-us");
  if (!data) return <Loading />;

  return (
    <>
      <Layout>
        <HeroSection data={data} />
        <OurMinistries data={data} />
      </Layout>
    </>
  );
};

export default page;
