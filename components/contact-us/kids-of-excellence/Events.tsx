import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";
import React from "react";
import discoveringPurpose from "@/assets/images/events/Discovering Purpose in God's Plan.webp";
import FaithAsTheBedrock from "@/assets/images/events/Faith as the Bedrock.webp";
import FosteringACommunityOfBelievers from "@/assets/images/events/Fostering a Community of Believers.webp";
import TheEmbodimentOfVirtue from "@/assets/images/events/The Embodiment of Virtue.webp";
import LeftContentRightImg from "@/ui/LeftContentRightImg";



const Events = ({ data }: { data: KidsOfExcellenceType }) => {
  return (
    <SectionWrapper
      classBottom={`${main_padding.y} flex-col items-center gap-20`}
    >
      {data.page.acf.secondSection.programmes.map((item, idx) => (
        <LeftContentRightImg
          key={idx}
          image={item.image.sourceUrl}
          title={item.title}
          subtitle={item.description}
          direction={idx % 2 === 0 ? "opposite" : "normal"}
        />
      ))}
    </SectionWrapper>
  );
};

export default Events;
