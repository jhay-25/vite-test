import React from "react";
import clsx from "clsx";

function Layout({ children, className, style }) {
  return (
    <main className={clsx("min-h-screen w-full p-5", className)} style={style}>
      {children}
    </main>
  );
}

export default Layout;
