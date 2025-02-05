import * as S from "./styles";
import useAnimation from "./animation";
import { TechnologyProps } from "./props";

export const Philosophie = ({ title, description, imgs, link, ...props }: TechnologyProps) => {
  const { sectionRef } = useAnimation();

  return (
    <S.Philosophie {...props} ref={sectionRef}>
      <S.Wrapper>
        <S.Container>
          <S.Group>
            <S.Title data-fs-animation="title">{title}</S.Title>
            <S.Description data-fs-animation="description">{description}</S.Description>
            <S.Shapes>
              <S.Line></S.Line>
              <S.Circle></S.Circle>
            </S.Shapes>
            {link && (
              <S.Link data-fs-animation="link" {...link}>
                {link?.title}
              </S.Link>
            )}
          </S.Group>
          <S.Computer>
            {imgs.map((img, index) => (
              <S.Img key={index} data-fs-animation="item" {...img} />
            ))}
          </S.Computer>
        </S.Container>
      </S.Wrapper>
    </S.Philosophie>
  );
};
