import { HeadSubtitle, HeadTitle } from "./Typography";
import { NormalBtn } from "./buttons";
import PlayBtnIcon from "@/assets/icons/PlayBtnIcon";

type Props = {
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  btn1?: { title?: string; link?: string };
  btn2?: { title?: string; link?: string };
  direction?: "opposite" | "normal";
  image: string;
  videoLink?: string;
  playBtn?: boolean;
  border?: boolean;
};

const LeftContentRightImg = ({
  btn1,
  btn2,
  subtitle,
  title,
  direction = "normal",
  image,
  playBtn,
  videoLink,
  border,
}: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:gap-20 md:gap-14 gap-6 items-center">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className={`flex flex-col justify-start ${
          direction === "opposite" && "md:order-1"
        } `}
      >
        <HeadTitle border={border}>{title}</HeadTitle>
        <HeadSubtitle className="sm:mt-10 mt-2">{subtitle}</HeadSubtitle>
        <div>
          {(btn1?.title || btn2?.title) && (
            <div className="flex items-center justify-start md:gap-6 gap-3 md:mt-14 mt-3">
              {btn1?.title && (
                <a href={`${btn1?.link}`} className="max-md:w-full">
                  <NormalBtn className="max-md:w-full sm:text-[1rem]">
                    {btn1?.title}
                  </NormalBtn>
                </a>
              )}
              {btn2?.title && (
                <a href={`${btn2?.link}`} className="max-md:w-full">
                  <NormalBtn
                    mode="day"
                    className="max-md:w-full sm:text-[1rem]"
                  >
                    {btn2?.title}
                  </NormalBtn>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {videoLink ? (
        <a
          href={videoLink}
          target="_blank"
          data-aos="fade-up"
          data-aos-duration="700"
          className="bg-red-400 aspect-square rounded-[10px] overflow-hidden flex items-center justify-center relative z-0"
        >
          <img
            src={image}
            alt=""
            className="object-cover -z-10 absolute inset-0 w-full h-full top-0 left-0"
            loading="lazy"
          />
          <PlayBtnIcon className="" />
        </a>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="bg-red-400 aspect-square rounded-[10px] overflow-hidden flex items-center justify-center relative z-0"
        >
          <img
            src={image}
            alt=""
            className="object-cover -z-10 absolute inset-0 w-full h-full top-0 left-0"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default LeftContentRightImg;
