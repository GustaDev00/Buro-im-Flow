import * as S from "./styles";
import type { ListItensProps } from "./props";
import { FC } from "react";

export const ListItens: FC<ListItensProps> = ({ items, ...props }) => {
  return (
    <S.ListItens {...props}>
      {items.map(({ title, description, icon }, index) => (
        <S.Item key={index}>
          <S.Circle>
            <S.Icon>{icon}</S.Icon>
          </S.Circle>
          <S.Content>
            <S.Title>{title}</S.Title>
            <S.Text>{description}</S.Text>
          </S.Content>
        </S.Item>
      ))}
    </S.ListItens>
  );
};
