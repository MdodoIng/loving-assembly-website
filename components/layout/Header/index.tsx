import Image from "next/image";
import React, { useEffect, useLayoutEffect, useState } from "react";
import arrowDown from "@/assets/icons/arrow down.svg";
import Link from "next/link";
import { NormalBtn } from "@/ui/buttons";
import NavMobile from "./NavMobile";
import { getPageContent } from "@/libs/contents/wordpress/data";
import SectionWrapper from "@/components/SectionWrapper";
import main_padding from "@/styles/padding";

const Header = ({ headerTransparent }: { headerTransparent?: boolean }) => {
  const [expand, setExpand] = useState<any>(null);
  const [menuLinks, setMenuLinks] = useState<{
    blogs: {
      title: string;
      link: string;
    }[];
    ministries: {
      title: string;
      link: string;
    }[];
    liveLink: string;
    logo: string;
  }>();

  useLayoutEffect(() => {
    async function getData() {
      const [blog, utilities]: [BlogsType, UtilitiesType] = await Promise.all([
        getPageContent("blogs"),
        getPageContent("utilities"),
      ]);

      const blogSubLinks = [...blog.blogs.edges].slice(0, 3).map((item) => {
        const d = {
          title: item.node.acf.title,
          link: `/blog/${item.node.slug}`,
        };
        return d;
      });
      const ministriesSubLinks = utilities.utility.acf.ministriesMenuLinks.map(
        (item) => {
          const d = {
            title: item.title,
            link: `/${item.link}`,
          };
          return d;
        }
      );
      setMenuLinks({
        blogs: blogSubLinks,
        ministries: ministriesSubLinks,
        liveLink: utilities.utility.acf.liveLink,
        logo: utilities.utility.acf.logo.sourceUrl,
      });
    }
    getData();
  }, []);

  if (
    !menuLinks?.blogs &&
    !menuLinks?.liveLink &&
    !menuLinks?.logo &&
    !menuLinks?.ministries
  )
    return;

  const links = [
    {
      title: "LGA",
      link: "",
      subLinks: [
        {
          title: "Our Team",
          link: "/our-team",
        },
        {
          title: "Our Church",
          link: "/our-church",
        },
      ],
    },
    {
      title: "Ministries",
      link: "",
      subLinks: menuLinks?.ministries!,
    },
    {
      title: "Blog",
      link: "",
      subLinks: menuLinks?.blogs,
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];

  

  return (
    <SectionWrapper classTop={`${!headerTransparent && "bg-white"} `}>
      <nav
        onMouseLeave={() => setExpand(null)}
        className="flex items-center  justify-between gap-28 py-2  z-50 w-full"
      >
        <Link href="/" shallow>
          <Image
            src={menuLinks.logo}
            alt=""
            width={220}
            height={160}
            className="lg:h-[90px] h-[62px] w-auto max-lg:!max-w-max object-contain"
          />
        </Link>

        <menu className="flex items-center justify-center gap-10  max-lg:hidden">
          {links.map((item, idx) => (
            <li
              onClick={() =>
                expand !== idx ? setExpand(idx) : setExpand(null)
              }
              onMouseOver={() => setExpand(idx)}
              key={idx}
              className="font-bold text-sm cursor-pointer"
            >
              {item.subLinks ? (
                <div className="relative z-0 flex flex-col items-center justify-center">
                  <span className="flex items-center justify-start gap-1">
                    {item.title}
                    <Image
                      src={arrowDown}
                      alt={""}
                      width={12}
                      height={7}
                      className={`h-[7px] w-auto object-contain duration-300 ${
                        expand === idx && "rotate-180"
                      }`}
                    />
                  </span>
                  {/*  */}
                  {expand === idx && (
                    <div className="absolute top-0 w-[230px] ">
                      <div className="flex flex-col items-start justify-center w-full  mt-[65px] bg-white/90 backdrop-blur-md  px-2 py-6 rounded-[10px] shadow-md gap-1">
                        {item.subLinks.map((subLink, subLinkIdx) => (
                          <Link
                            key={subLinkIdx}
                            onClick={() => setExpand(0)}
                            href={subLink.link}
                            shallow
                            className="text-start px-4 hover:bg-secondary hover:text-white duration-300 w-full  py-2 rounded-md"
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.link}>{item.title}</Link>
              )}
            </li>
          ))}
          <Link
            href={`${menuLinks.liveLink}`}
            shallow
            target="_blank"
            className="max-lg:hidden translate-x-20"
          >
            <NormalBtn
              mode="night"
              className="hover:bg-primary hover:border-primary hover:text-white"
            >
              Live
            </NormalBtn>
          </Link>
        </menu>
        <div className="max-lg:hidden"/>

        {/* mobile  */}

        <NavMobile
          links={links}
          liveLink={menuLinks.liveLink}
          expand={expand}
          setExpand={setExpand}
        />
      </nav>
    </SectionWrapper>
  );
};

export default Header;
