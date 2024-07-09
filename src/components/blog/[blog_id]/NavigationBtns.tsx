import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";

const NavigationBtns = ({
  buttons,
}: {
  buttons: {
    title: string;
    link: string;
  }[];
}) => {
  return (
    <SectionWrapper
      classBottom={` ${main_padding.y} flex w-full justify-between gap-6 items-center`}
    >
      {buttons.map((item, idx) => (
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={idx * 300}
          key={idx}
        >
          {item.link && (
            <a
              href={item.link}
              className=" text-black text-sm px-8 py-2 hover:border-secondary hover:bg-secondary hover:text-white duration-300 border-black border rounded-lg"
            >
              {item.title}
            </a>
          )}
        </div>
      ))}
    </SectionWrapper>
  );
};

export default NavigationBtns;
