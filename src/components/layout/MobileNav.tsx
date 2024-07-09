import { useState } from "react";

const MobileNav = ({
  data,
}: {
  data: {
    title: string;
    link: string;
  }[];
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        className="w-[45px] h-[45px] sm:hidden"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setToggle(!toggle)}
      >
        <path
          d="M8 8H13C13.2652 8 13.5196 8.10536 13.7071 8.29289C13.8946 8.48043 14 8.73478 14 9C14 9.26522 13.8946 9.51957 13.7071 9.70711C13.5196 9.89464 13.2652 10 13 10H8C7.73478 10 7.48043 9.89464 7.29289 9.70711C7.10536 9.51957 7 9.26522 7 9C7 8.73478 7.10536 8.48043 7.29289 8.29289C7.48043 8.10536 7.73478 8 8 8Z"
          fill="white"
          className={`duration-300 ${toggle ? "translate-x-[-7px]" : ""}`}
        />
        <path
          d="M13 4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H13C13.2652 6 13.5196 5.89464 13.7071 5.70711C13.8946 5.51957 14 5.26522 14 5C14 4.73478 13.8946 4.48043 13.7071 4.29289C13.5196 4.10536 13.2652 4 13 4Z"
          fill="white"
        />
        <path
          d="M6 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H6C6.26522 2 6.51957 1.89464 6.70711 1.70711C6.89464 1.51957 7 1.26522 7 1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0Z"
          fill="white"
          className={`duration-300 ${toggle ? "translate-x-[7px]" : ""}`}
        />
      </svg>
      <menu
        className={`sm:hidden absolute px-3 py-4 rounded-lg shadow-lg gap-2 text-sm font-medium duration-300 z-50 flex flex-col bg-white  top-[70px] overflow-hidden ${
          toggle ? "right-[24px]" : "-right-[224px]"
        }`}
      >
        {data.map((item, idx) => (
          <a onClick={() => setToggle(false)} key={idx} href={item.link}>
            {item.title}
          </a>
        ))}
      </menu>
    </>
  );
};

export default MobileNav;
