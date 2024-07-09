import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import HeroSectionBottom from "@/ui/HeroSectionBottom";

const HeroSection = ({
  heroSectionImage,
  subtitle,
  title,
  statement,
}: {
  title: string;
  subtitle?: string;
  heroSectionImage: string;
  statement?: string;
}) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const kids_of_excellence = pathname.includes("kids-of-excellence");
  return (
    <section className="flex flex-col justify-end w-full">
      <img
        src={heroSectionImage}
        alt=""
        width={1440}
        height={1000}
        className="object-contain h-auto w-full -z-10"
      />

      <SectionWrapper
        classBottom={main_padding.y}
        classTop={`${kids_of_excellence && "bg-off-white"}`}
      >
        <HeroSectionBottom title={title} subtitle={statement} />
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
