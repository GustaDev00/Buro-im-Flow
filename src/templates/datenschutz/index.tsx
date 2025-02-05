"use client";

import { type FC } from "react";
import * as S from "./styles";
import C from "./constants";
import Nav from "@/shared/nav";

export const DatenschutzTemplate: FC = () => {
  return (
    <>
      <Nav isBlog={true} />
      <S.Content>{C.content}</S.Content>
    </>
  );
};
