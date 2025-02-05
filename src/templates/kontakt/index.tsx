"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "./constants";

export const KontaktTemplate: FC = () => {
  return (
    <>
      <S.Header {...C.header} />
      <S.Form />
      <S.Benefits />
      <S.Cta />
    </>
  );
};
