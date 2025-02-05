import * as S from "./styles";
import useAnimation from "./animation";
import type { SolutionsProps } from "./props";
import { FC } from "react";

export const Solutions: FC<SolutionsProps> = ({ title, card }) => {
  const { sectionRef } = useAnimation();

  return (
    <S.Solutions ref={sectionRef}>
      <S.Wrapper>
        <S.Title data-fs-animation="title">{title}</S.Title>
        <S.Container>
          {card.map((card, index) => (
            <S.Card key={index} data-fs-animation="card" {...card} />
          ))}
        </S.Container>
      </S.Wrapper>
    </S.Solutions>
  );
};
