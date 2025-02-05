"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "./constants";

export const UnternehmenTemplate: FC = () => {
  return (
    <>
      <S.Header {...C.header} />
      <S.Philosophie {...C.philosophie} />
      <S.Accounting {...C.accounting} />
      <S.Account />
      <S.Benefits />
      <S.Cta />
    </>
  );
};
