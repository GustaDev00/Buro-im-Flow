"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "./constants";

export const UberUnsTemplate: FC = () => {
  return (
    <>
      <S.Header {...C.header} />
      <S.Philosophie {...C.philosophie} />
      <S.FaceBehind />
      <S.Office />
      <S.Cta />
    </>
  );
};
