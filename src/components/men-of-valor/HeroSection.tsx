import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";

import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";

const HeroSection = ({ data }: { data: ManOfValourType }) => {
  return (
    <section className="flex flex-col justify-end w-full">
      <img
        src={data.page.acf.bannerImage.sourceUrl}
        alt=""
        width={data.page.acf.bannerImage.mediaDetails.width}
        height={data.page.acf.bannerImage.mediaDetails.height}
        className="object-contain h-auto w-full -z-10  object-top "
      />

      <SectionWrapper classBottom={`${main_padding.y} flex-col items-center`}>
        <HeadTitle border className="text-center max-w-[800px]">
          {data.page.acf.firstSection.title}
        </HeadTitle>
        <HeadSubtitle className="sm:mt-4 mt-2 text-center max-w-[900px] text-black">
          {data.page.acf.firstSection.description}
        </HeadSubtitle>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className={` lg:mt-16 md:mt-14 mt-6 w-full sm:bg-off-white sm:px-8 sm:py-10 rounded-[10px] sm:text-lg text-sm sm:leading-[190%] leading-[170%] [column-count:2] [column-gap:40px]`}
        >
          {descriptionExtractor(data.page.acf.firstSection.content)}
        </p>
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
