import React from "react";

export interface IntroProps {
  intro: {
    text: React.ReactNode;
    img: {
      alt: string;
      src: string;
    };
  }[];
}\
