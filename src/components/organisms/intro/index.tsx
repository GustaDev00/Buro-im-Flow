import { IntroProps } from "./props";
import * as S from "./styles";



export const Intro = ({text, img, ...props}: IntroProps) => {
 
  return <S.Intro {...props}>
    <S.Wrapper>
    <S.Container>
      <S.Img {...img} />
      <S.Content>
        <S.Text>{text}</S.Text>
      </S.Content>
    </S.Container>
    </S.Wrapper>
  </S.Intro>
};


