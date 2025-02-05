"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "./constants";
import Nav from "@/shared/nav"; // import adicionado

export const UnternehmenTemplate: FC = () => {
  return (
    <>
      <Nav /> {/* Nav adicionado */}
      <S.Header {...C.header} />
      <S.Philosophie {...C.philosophie} />
      <S.Accounting {...C.accounting} />
      <S.Account />
      <S.Benefits />
      <S.Cta />
    </>
  );
};
