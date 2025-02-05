import { IntroProps } from "./props";
import * as S from "./styles";

export const Intro = ({ intro, ...props }: IntroProps) => {
  return (
    <S.Intro {...props}>
      <S.Wrapper>
        {intro.map(({ text, img }, index) => (
          <S.Card key={index}>
            <S.Container>
              <S.Img {...img} />
              <S.Content>
                <S.Text>{text}</S.Text>
              </S.Content>
            </S.Container>
          </S.Card>
        ))}
      </S.Wrapper>
    </S.Intro>
  );
};
