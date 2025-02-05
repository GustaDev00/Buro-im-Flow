"use client";

import { type FC } from "react";
import C from "./constants";
import * as S from "./styles";

export const PrivatkundenTemplate: FC = () => {
  return (
    <>
      <S.Header {...C.header} />
      <S.Philosophie {...C.philosophie} />
      <S.Offer />
      <S.Benefits />
      <S.Cta />
    </>
  );
};
