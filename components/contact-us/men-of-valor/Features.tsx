import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import excellence from "@/assets/icons/excellence.webp";
import integrity from "@/assets/icons/integrity.webp";
import leadership from "@/assets/icons/leadership.webp";
import Image from "next/image";

const Features = ({ data }: { data: ManOfValourType }) => {
  return (
    <SectionWrapper classBottom={`${main_padding.y}`}>
      <div className="grid md:grid-cols-3 w-max max-w-full lg:gap-10 gap-6 lg:mt-16 md:mt-14 mt-6">
        {data.page.acf.thirdSection.boxes.map((item, idx) => (
          <div
            key={idx}
            className="bg-off-white px-6 py-4 rounded-[10px] flex flex-col w-full h-full items-center"
          >
            <Image
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              src={item.icon.sourceUrl}
              width={item.icon.mediaDetails.width}
              height={item.icon.mediaDetails.height}
              alt=""
              loading="lazy"
              className="h-[100px] w-auto aspect-square object-contain"
            />
            <h3
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              className="mt-3 text-primary font-semibold text-2xl"
            >
              {item.title}
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={idx * 300}
              className="mt-1 text-base text-center leading-[150%]"
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
