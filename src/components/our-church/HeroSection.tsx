"use client";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import HeroSectionBottom from "@/ui/HeroSectionBottom";

const HeroSection = ({
  heroSectionImage,
  title,
  description,
  statement,
}: {
  title: string;
  heroSectionImage:  string;
  statement?: string;
  description?: string;
}) => {
  return (
    <section className="flex flex-col justify-end w-full">
      <img
        src={heroSectionImage}
        alt=""
        width={1440}
        height={1000}
        className="object-contain h-auto w-full -z-10"
      />

      {title && (
        <SectionWrapper classBottom={main_padding.y} classTop={``}>
          <HeroSectionBottom
            title={title}
            subtitle={statement}
            description={description}
          />
        </SectionWrapper>
      )}
    </section>
  );
};

export default HeroSection;
