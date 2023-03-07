"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import { TopIcon } from "@/public/icons";

function ScrollToTop() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    });
  }, []);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {toggle && (
        <button
          className="fixed bottom-6 right-6 h-10 w-10 flex items-center justify-center bg-brand rounded-lg z-[5]"
          onClick={scrollToTopHandler}
        >
          <Image src={TopIcon} alt="top" className="w-5" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
