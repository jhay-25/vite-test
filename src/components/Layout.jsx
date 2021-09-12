import React from "react";
import clsx from "clsx";

function Layout({ children, className }) {
  return (
    <main className={clsx("min-h-screen w-full p-5", className)}>
      {children}
    </main>
  );
}

export default Layout;
