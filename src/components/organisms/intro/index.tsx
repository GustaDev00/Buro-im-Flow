import { IntroProps } from "./props";
import * as S from "./styles";
import useAnimations from "./animations";

export const Intro = ({ intro, ...props }: IntroProps) => {
  const { sectionRef } = useAnimations();

  return (
    <S.Intro {...props}>
      <S.Wrapper ref={sectionRef}>
        {intro.map(({ text, img }, index) => (
          <S.Card key={index} data-ts-card>
            <S.Container>
              <S.Img {...img} data-ts-img />
              <S.Content>
                <S.Text data-ts-text>{text}</S.Text>
              </S.Content>
            </S.Container>
          </S.Card>
        ))}
      </S.Wrapper>
    </S.Intro>
  );
};
