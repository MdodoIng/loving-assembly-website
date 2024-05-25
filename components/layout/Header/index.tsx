import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/icons/logo.webp";
import arrowDown from "@/assets/icons/arrow down.svg";
import Link from "next/link";
import { NormalBtn } from "@/ui/buttons";
import NavMobile from "./NavMobile";
import { getPageContent } from "@/libs/contents/wordpress/data";

const Header = () => {
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
  }>();

  useEffect(() => {
    async function getData() {
      const [blog, ministries, liveLink]: [
        BlogsType,
        MinistriesNavLinksType,
        LiveLinkType
      ] = await Promise.all([
        getPageContent("blogs"),
        getPageContent("ministries-nav-links"),
        getPageContent("live-link"),
      ]);

      const blogSubLinks = [...blog.blogs.edges].slice(0, 3).map((item) => {
        const d = {
          title: item.node.acf.title,
          link: `/blog/${item.node.slug}`,
        };
        return d;
      });
      const ministriesSubLinks = [...ministries.utility.acf.items].map(
        (item) => {
          const d = {
            title: item.link.title,
            link: `/contact-us/${item.link.url}`,
          };
          return d;
        }
      );
      setMenuLinks({
        blogs: blogSubLinks,
        ministries: ministriesSubLinks,
        liveLink: liveLink.utility.acf.link,
      });
    }
    getData();
  }, []);

  if (!menuLinks?.blogs && !menuLinks?.ministries) return;

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
    <nav
      onMouseLeave={() => setExpand(null)}
      className="flex items-center lg:justify-center justify-between gap-28 absolute top-5 bg-white/50 backdrop-blur-sm md:px-20 px-6 py-1 rounded-[10px] shadow-md z-50 max-lg:w-[90vw] overflow-x-clip"
    >
      <Link href="/" shallow>
        <Image
          src={logo}
          alt=""
          width={220}
          height={160}
          className="lg:h-[80px] h-[62px] w-auto object-contain"
        />
      </Link>

      <menu className="flex items-center justify-center gap-10  max-lg:hidden">
        {links.map((item, idx) => (
          <li
            onClick={() => (expand !== idx ? setExpand(idx) : setExpand(null))}
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
                  <div className="absolute top-0">
                    <div className="flex flex-col items-start justify-center gap-5 mt-[65px] bg-white/90 backdrop-blur-md w-max px-6 py-10 rounded-[10px] shadow-md ">
                      {item.subLinks.map((subLink, subLinkIdx) => (
                        <Link
                          key={subLinkIdx}
                          onClick={() => setExpand(0)}
                          href={subLink.link}
                          shallow
                          className="text-center "
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
      </menu>
      <Link href={`${menuLinks.liveLink}`} shallow target="_blank">
        <NormalBtn
          mode="night"
          className="max-lg:hidden hover:bg-primary hover:border-primary hover:text-white"
        >
          Live
        </NormalBtn>
      </Link>

      {/* mobile  */}

      <NavMobile links={links} liveLink={menuLinks.liveLink} expand={expand} setExpand={setExpand} />
    </nav>
  );
};

export default Header;
