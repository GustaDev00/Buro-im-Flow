import { HeaderProps } from "./props";
import * as S from "./styles";
//import useAnimation from "./animation";


export const Header = ({title, description, img, link, ...props }: HeaderProps) => {

  return <S.Header {...props}>
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Container>
        <S.CircleG>
          <S.CircleM>
            <S.CircleP>
              <S.Chart />
            </S.CircleP>
          </S.CircleM>
        </S.CircleG>
        <S.Link href={link}>Jetzt Beratung buchen</S.Link>
      </S.Container>
    </S.Wrapper>
    <S.Img {...img} />
  </S.Header>;                            
};
