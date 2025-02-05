"use client";

import { type FC } from "react";
import { HomeProps } from "./props";
import * as S from "./styles";
import { PostHighlight } from "@/components/organisms/post-highlight";
import { LatestArticles } from "@/components/organisms/latest-articles";
import Nav from "@/shared/nav"; // import adicionado

export const BlogTemplate: FC<HomeProps> = ({ values }) => {
  console.log(values);

  if (!values) return null;

  return (
    <>
      <Nav isBlog={true} /> {/* Nav adicionado */}
      <S.Home>
        <PostHighlight posts={values} />
        <LatestArticles values={values} />
      </S.Home>
    </>
  );
};
