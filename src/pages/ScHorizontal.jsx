import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Layout from "../components/Layout";

function ScHorizontal() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horContainer",
        pin: true,
        scrub: 1,
        markers: true,

        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () =>
          "+=" + document.querySelector(".horContainer").offsetWidth / 4,
      },
    });
  }, []);

  return (
    <Layout
      className="flex flex-nowrap h-full horContainer"
      style={{ width: "600vw", padding: "0" }}
    >
      <section className="w-screen h-screen flex justify-center items-center text-4xl text-white uppercase font-bold bg-blue-600 panel">
        one
      </section>
      <section className="w-screen h-screen flex justify-center items-center text-4xl text-white uppercase font-bold bg-red-600 panel">
        two
      </section>

      <section className="w-screen flex justify-center items-center text-4xl text-white uppercase font-bold bg-yellow-600 panel">
        three
      </section>
      <section className="w-screen flex justify-center items-center text-4xl text-white uppercase font-bold bg-green-600 panel">
        four
      </section>
      <section className="w-screen flex justify-center items-center text-4xl text-white uppercase font-bold bg-purple-600 panel">
        five
      </section>
      <section className="w-screen flex justify-center items-center text-4xl text-white uppercase font-bold bg-indigo-600 panel">
        six
      </section>
    </Layout>
  );
}

export default ScHorizontal;
