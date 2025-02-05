"use client";

import { type FC } from "react";
import C from "./constants";
import Nav from "@/shared/nav";
import { Header } from "@/components/organisms/header";
import { Intro } from "@/components/organisms/intro";
import { Technology } from "@/components/organisms/technology";
import { Solutions } from "@/components/organisms/solutions";
import { Benefits } from "@/components/organisms/benefits";
import { Office } from "@/components/organisms/office";
import { Cta } from "@/components/organisms/cta";

export const HomeTemplate: FC = () => {
  return (
    <>
      <Nav />
      <Header {...C.header} />
      <Intro intro={C.intro} />
      <Technology {...C.technology} />
      <Solutions {...C.solutions} />
      <Benefits />
      <Office />
      <Cta />
    </>
  );
};
