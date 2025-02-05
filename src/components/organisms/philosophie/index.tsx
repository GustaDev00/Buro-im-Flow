import { TechnologyProps } from "./props";
import * as S from "./styles";

export const Philosophie = ({ title, description, imgs, link, ...props }: TechnologyProps) => {
  return (
    <S.Philosophie {...props}>
      <S.Wrapper>
        <S.Container>
          <S.Group>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Shapes>
              <S.Line></S.Line>
              <S.Circle></S.Circle>
            </S.Shapes>
            {link && <S.Link {...link}>{link?.title}</S.Link>}
          </S.Group>
          <S.Computer>
            {imgs.map((img, index) => (
              <S.Img {...img} key={index} />
            ))}
          </S.Computer>
        </S.Container>
      </S.Wrapper>
    </S.Philosophie>
  );
};
