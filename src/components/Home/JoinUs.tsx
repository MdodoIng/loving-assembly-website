import SectionWrapper from "../SectionWrapper";
import { HeadSubtitle, HeadTitle } from "@/ui/Typography";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import main_padding from "@/styles/padding";
import { NormalBtn } from "@/ui/buttons";

const JoinUs = ({ data }: { data: HomePageType }) => {
  return (
    <div className={`${main_padding.y} w-full flex items-center`}>
      <SectionWrapper
        classTop={`relative z-0 bg-black `}
        classBottom={` sm:py-28 py-16 flex-col items-center`}
      >
        <img
          src={data.page.acf.seventhSectionJoinus.backgroundImage.sourceUrl}
          loading="lazy"
          className="-z-10 object-cover absolute inset-0 w-full h-full top-0 left-0"
          alt={""}
        />

        <div className="flex flex-col items-center py-14 px-14 bg-black/15 backdrop-blur-xl rounded-lg ">
          <HeadTitle border className="border-white text-white">
            {data.page.acf.seventhSectionJoinus.title}
          </HeadTitle>
          <HeadSubtitle className="text-center text-off-white mt-8 leading-[200%]">
            {descriptionExtractor(
              data.page.acf.seventhSectionJoinus.description
            )}
          </HeadSubtitle>
          {data.page.acf.seventhSectionJoinus.button.title && (
            <a
              href={`${data.page.acf.seventhSectionJoinus.button.link}`}
              target="_blank"
              data-aos="fade-up"
              data-aos-duration="700"
              className="mt-4"
            >
              <NormalBtn mode="day" className="sm:text-[1rem]">
                {data.page.acf.seventhSectionJoinus.button.title}
              </NormalBtn>
            </a>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default JoinUs;
