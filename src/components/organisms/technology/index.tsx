import { TechnologyProps } from "./props";
import * as S from "./styles";
import useAnimation from "./animation";

export const Technology = ({ title, description, img, link, ...props }: TechnologyProps) => {
  const { sectionRef } = useAnimation();

  return (
    <S.Technology ref={sectionRef} {...props}>
      <S.Wrapper>
        <S.Container>
          <S.Group>
            <S.Title data-fs-animation="title">{title}</S.Title>
            <S.Description data-fs-animation="description">{description}</S.Description>{" "}
            <S.Shapes>
              <S.Line></S.Line>
              <S.Circle></S.Circle>
            </S.Shapes>
            <S.Link data-fs-animation="link" href={link}>
              Jetzt Beratung buchen
            </S.Link>
          </S.Group>
          <S.Computer>
            <S.Img data-fs-animation="image" {...img} />
          </S.Computer>
        </S.Container>
      </S.Wrapper>
    </S.Technology>
  );
};
