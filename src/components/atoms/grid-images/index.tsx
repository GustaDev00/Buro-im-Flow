import * as S from "./styles";
import type { GridImagesProps } from "./props";
import { FC } from "react";
import { CustomBr } from "../custom-br";
import { ResponsiveElement } from "@/utils/responsive-element";

export const GridImages: FC<GridImagesProps> = ({}) => {
  return (
    <S.GridImages>
      <S.Wrapper>
        <S.ImgLarge src="/imgs/home/benefits/grid/large.png" alt="imagem 01" />
      </S.Wrapper>
      <S.Wrapper>
        <S.Content>
          <S.Container>
            <S.Imagelarge src="/imgs/home/benefits/grid/content-large.png" alt="imagem 02" />
            <S.ImageSmall src="/imgs/home/benefits/grid/content-small.png" alt="imagem 03" />
          </S.Container>
          <S.Title>Meine Philosophie</S.Title>
          <S.Text>
            Finanzen sollen kein Hindernis sein,
            <CustomBr byViewport="desktop" /> sondern eine klare Grundlage für
            <CustomBr byViewport="desktop" /> Erfolg und Sicherheit.
          </S.Text>
        </S.Content>
        <ResponsiveElement
          breakpoints={{
            mobile: <S.ImgSmall src="/imgs/home/benefits/grid/mobile/small.png" alt="imagem 04" />,
          }}
          content={<S.ImgSmall src="/imgs/home/benefits/grid/small.png" alt="imagem 04" />}
        />
      </S.Wrapper>
    </S.GridImages>
  );
};
