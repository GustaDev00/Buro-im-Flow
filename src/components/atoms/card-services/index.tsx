import { FC } from "react";
import type { CardServicesProps } from "./props";
import * as S from "./styles";

export const CardServices: FC<CardServicesProps> = ({ subtitle, text, link, bg, ...props }) => {
  return (
    <S.CardServices {...props}>
      <S.Image {...bg} />
      <S.Wrapper>
        <S.Effects>
          <S.LinesUp>
            <S.Line />
            <S.Line />
            <S.Line />
          </S.LinesUp>
          <S.LinesDown>
            <S.Line />
            <S.Line />
            <S.Line />
          </S.LinesDown>
        </S.Effects>
        <S.Content>
          <S.Title>{subtitle}</S.Title>
          <S.Text>{text}</S.Text>
          <S.Button href={link.href}>{link.title}</S.Button>
        </S.Content>
        <S.Effects>
          <S.LinesUp>
            <S.Line />
            <S.Line />
            <S.Line />
          </S.LinesUp>
          <S.LinesDown>
            <S.Line />
            <S.Line />
            <S.Line />
          </S.LinesDown>
        </S.Effects>
      </S.Wrapper>
    </S.CardServices>
  );
};
