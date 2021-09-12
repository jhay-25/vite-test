import React, { useEffect } from "react";
import Box from "../components/Box";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from "../components/Layout";

function ScTriggerBoxes() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".a", {
      scrollTrigger: {
        trigger: ".a",
        start: "top center",
        end: "top 100px",
        toggleActions: "play pause resume reverse",
        scrub: 1,
      },
      x: 400,
      rotation: 360,
      ease: "none",
      duration: 2,
    });
  }, []);

  return (
    <Layout>
      <section className="h-screen flex justify-start items-center">
        <Box className="bg-yellow-400 a" content="a" />
      </section>
      <section className="h-screen"></section>
    </Layout>
  );
}

export default ScTriggerBoxes;
