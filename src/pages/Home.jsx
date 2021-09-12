import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

function Home() {
  const links = [
    {
      name: "ScrollTrigger",
      link: "/scrolltrigger",
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

export default Home;
