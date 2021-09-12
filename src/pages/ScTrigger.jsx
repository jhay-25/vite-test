import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

function ScTrigger() {
  const links = [
    {
      name: "ScrollTrigger Boxes",
      link: "/scrolltriggerboxes",
    },
  ];

  return (
    <Layout>
      {links.map((link, i) => (
        <Link key={i} to={link.link} className="text-blue-600">
          {link.name}
        </Link>
      ))}
    </Layout>
  );
}

export default ScTrigger;
