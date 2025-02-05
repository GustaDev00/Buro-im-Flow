import * as S from "./styles";
import C from "./constants";
import { FC, useState } from "react";
import { AccountingProps } from "./props";
import useAnimation from "./animation";

export const Accounting: FC<AccountingProps> = ({ img, list, ...props }) => {
  const [active, setActive] = useState(0);
  const { sectionRef } = useAnimation();

  return (
    <S.Accounting ref={sectionRef} {...props}>
      <S.Wrapper data-timeline="wrapper">
        <S.Container data-timeline="container">
          <S.Content>
            <S.List>
              {list.map(({ title, content }, index) => (
                <S.Item
                  key={index}
                  $active={index === active}
                  onClick={() => setActive(index)}
                  data-timeline="list-item"
                >
                  <S.Article>
                    <S.SubTitle>{title}</S.SubTitle>
                    <S.Arrow />
                  </S.Article>
                  <S.Text>
                    <p>{content}</p>
                  </S.Text>
                </S.Item>
              ))}
            </S.List>
          </S.Content>
          <S.Intro>
            <S.Title>{C.title}</S.Title>
            <S.Button {...C.button}>{C.button.title}</S.Button>
            <S.Image {...img} data-timeline="image" />
          </S.Intro>
        </S.Container>
      </S.Wrapper>
    </S.Accounting>
  );
};
