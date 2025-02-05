"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "./constants";
import Nav from "@/shared/nav"; // import adicionado

export const UberUnsTemplate: FC = () => {
  return (
    <>
      <Nav /> {/* Nav adicionado */}
      <S.Header {...C.header} />
      <S.Philosophie {...C.philosophie} />
      <S.FaceBehind />
      <S.Office />
      <S.Cta />
    </>
  );
};
