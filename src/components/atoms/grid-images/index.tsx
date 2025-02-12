import * as S from "./styles";
import { CustomBr } from "../custom-br";
import { ResponsiveElement } from "@/utils/responsive-element";

export const GridImages = ({ ...props }) => {
  return (
    <S.GridImages {...props}>
      <S.Wrapper>
        <S.ImgLarge
          src="/imgs/home/benefits/grid/large.png"
          alt="imagem 01"
          data-fs-image="large"
        />
      </S.Wrapper>
      <S.Wrapper>
        <S.Content data-fs-animation="content">
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
            mobile: (
              <S.ImgSmall
                src="/imgs/home/benefits/grid/mobile/small.png"
                alt="imagem 04"
                data-fs-animation="small"
              />
            ),
          }}
          content={
            <S.ImgSmall
              src="/imgs/home/benefits/grid/small.png"
              alt="imagem 04"
              data-fs-animation="small"
            />
          }
        />
      </S.Wrapper>
    </S.GridImages>
  );
};
