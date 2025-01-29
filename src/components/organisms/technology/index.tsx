import { TechnologyProps } from "./props";
import * as S from "./styles";



export const Technology = ({title, description, img, link,...props }: TechnologyProps) => {

  return <S.Technology {...props}>
    <S.Wrapper>
      <S.Container>
        <S.Group>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Shapes>
        <S.Line></S.Line>
        <S.Circle></S.Circle>
        </S.Shapes>
        <S.Link href={link}>Mehr erfahren</S.Link>
        </S.Group>       
      <S.Computer>
        <S.Img {...img} />
        </S.Computer>
        </S.Container> 
    </S.Wrapper>
  </S.Technology>;
};
