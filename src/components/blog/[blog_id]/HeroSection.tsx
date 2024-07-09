import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import HeroSectionBottom from "@/ui/HeroSectionBottom";

const HeroSection = ({
  heroSectionImage,
  title,
  author,
  imageContain,
}: {
  title: string;
  heroSectionImage: string;
  author?: string | JSX.Element;
  imageContain?: boolean | undefined;
}) => {
  return (
    <section className="flex flex-col justify-end w-full">
      {imageContain ? (
        <SectionWrapper>
          <div className=" mt-20" data-aos="fade-up" data-aos-duration="700">
            <img
              src={heroSectionImage}
              alt=""
              width={640}
              height={800}
              className="object-contain object-left h-full sm:min-w-[300px] w-max -z-10 sm:max-h-[80vh] rounded-[10px] overflow-hidden"
            />
          </div>
        </SectionWrapper>
      ) : (
        <img
          src={heroSectionImage}
          alt=""
          width={1440}
          height={900}
          className="object-contain h-auto w-full -z-10"
        />
      )}

      <SectionWrapper classBottom={main_padding.y}>
        <HeroSectionBottom title={title} subtitle={author} />
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
