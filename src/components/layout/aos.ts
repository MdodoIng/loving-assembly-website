// @ts-ignore
import AOS from "aos";

import "aos/dist/aos.css";

function initAOS() {
  AOS.init({});
}

document.addEventListener("astro:page-load", initAOS);
initAOS();
