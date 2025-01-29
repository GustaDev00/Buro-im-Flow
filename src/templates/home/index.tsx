"use client";

import { Header } from "@/components/organisms/header";
import { type FC } from "react";
import C from "./constants";
import { Intro } from "@/components/organisms/intro";
import { Technology } from "@/components/organisms/technology";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Header {...C.header} />
      <Intro {...C.intro} />
      <Technology {...C.technology}/>
    </>
  );
};
