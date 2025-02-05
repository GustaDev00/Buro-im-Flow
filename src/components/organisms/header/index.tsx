import { HeaderProps } from "./props";
import * as S from "./styles";
import useAnimation from "./animation"; // descomentado

export const Header = ({ title, description, img, link, ...props }: HeaderProps) => {
  const { sectionRef } = useAnimation();

  return (
    <S.Header ref={sectionRef} {...props}>
      <S.Wrapper>
        <S.Title data-fs-animation="title">{title}</S.Title>
        <S.Description data-fs-animation="text">{description}</S.Description>
        {link && (
          <S.Container>
            <S.Circles>
              <S.CircleG data-fs-animation="circle">
                <S.CircleM>
                  <S.CircleP>
                    <S.Chart />
                  </S.CircleP>
                </S.CircleM>
              </S.CircleG>
            </S.Circles>
            <S.Link data-fs-animation="button" href={link}>
              Jetzt Beratung buchen
            </S.Link>
          </S.Container>
        )}
      </S.Wrapper>
      <S.Img {...img} data-fs-animation="img" />
    </S.Header>
  );
};
