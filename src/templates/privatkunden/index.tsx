"use client";

import { type FC } from "react";
import C from "./constants";
import * as S from "./styles";
import Nav from "@/shared/nav"; // import adicionado

export const PrivatkundenTemplate: FC = () => {
  return (
    <>
      <Nav /> {/* Nav adicionado */}
      <S.Header {...C.header} />
      <S.Philosophie {...C.philosophie} />
      <S.Offer />
      <S.Benefits />
      <S.Cta />
    </>
  );
};
