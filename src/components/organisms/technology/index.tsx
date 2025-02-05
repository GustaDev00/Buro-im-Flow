import { TechnologyProps } from "./props";
import * as S from "./styles";
import useAnimation from "./animation"; // novo

export const Technology = ({ title, description, img, link, ...props }: TechnologyProps) => {
  const { sectionRef } = useAnimation(); // novo

  return (
    <S.Technology ref={sectionRef} {...props}>
      <S.Wrapper>
        <S.Container>
          <S.Group>
            <S.Title data-fs-animation="title">{title}</S.Title> {/* adicionado */}
            <S.Description data-fs-animation="description">{description}</S.Description>{" "}
            {/* adicionado */}
            <S.Shapes>
              <S.Line></S.Line>
              <S.Circle></S.Circle>
            </S.Shapes>
            <S.Link data-fs-animation="link" href={link}>
              Mehr erfahren
            </S.Link>{" "}
            {/* adicionado */}
          </S.Group>
          <S.Computer>
            <S.Img data-fs-animation="image" {...img} /> {/* adicionado */}
          </S.Computer>
        </S.Container>
      </S.Wrapper>
    </S.Technology>
  );
};
