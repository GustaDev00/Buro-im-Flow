"use client";

import { type FC } from "react";
import { HomeProps } from "./props";
import * as S from "./styles";
import { PostHighlight } from "@/components/organisms/post-highlight";
import { LatestArticles } from "@/components/organisms/latest-articles";
import Nav from "@/shared/nav"; // import adicionado

export const BlogTemplate: FC<HomeProps> = ({ values }) => {
  if (!values) return null;

  return (
    <>
      <Nav isBlog={true} />
      <S.Home>
        <PostHighlight posts={values} />
        <LatestArticles values={values} />
      </S.Home>
    </>
  );
};
