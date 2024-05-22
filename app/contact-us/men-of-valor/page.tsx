import About from "@/components/contact-us/[programs_id]/About";
import HeroSection from "@/components/contact-us/men-of-valor/HeroSection";
import Layout from "@/components/layout";
import React from "react";
import logo from "@/assets/icons/our programs/Men of Valor.webp";
import Features from "@/components/contact-us/men-of-valor/Features";
import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import Loading from "@/app/loading";

const page = async () => {
  const data: ManOfValourType = await getPageContent("man-of-valour");
  
  if (!data) return <Loading />;
  return (
    <Layout>
      <HeroSection data={data} />
      <About
        description={descriptionExtractor(data.page.acf.secondSection.content)}
        logo={data.page.acf.secondSection.logo.sourceUrl}
        button={{
          title: data.page.acf.secondSection.buttonText,
          link: data.page.acf.secondSection.buttonLink
        }}
      />
      <Features data={data} />
    </Layout>
  );
};

export default page;
