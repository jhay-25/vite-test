import React from "react";
import clsx from "clsx";

function Box({ className, content }) {
  return (
    <div
      className={clsx(
        "w-10 h-10 rounded-sm flex justify-center items-center",
        className
      )}
    >
      {content}
    </div>
  );
}

export default Box;
