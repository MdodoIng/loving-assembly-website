import descriptionExtractor from "@/libs/hooks/descriptionExtractor";

const Content = ({ data }: { data: string }) => {
  return (
    <p
      data-aos="fade-up"
      data-aos-duration="700"
      className="text-lg leading-[190%] md:max-w-[70%]"
    >
      {descriptionExtractor(data)}
    </p>
  );
};

export default Content;
