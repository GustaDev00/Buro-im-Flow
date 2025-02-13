import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { ListItens } from "@/components/molecules/list-itens";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { GridImages } from "@/components/atoms/grid-images";
import { Circle } from "@/components/molecules/list-itens/styles";
import { mediaMaxWidth } from "@/utils/media-query";

export const Benefits = styled.div`
  background: rgba(137, 158, 114, 0.2);
  margin-top: 10rem;
`;

export const Wrapper = styled(_Wrapper)`
  justify-content: space-between;
  align-items: flex-end;
  padding: 12rem 14rem;

  ${mediaMaxWidth("mobile")`
    padding: 5.4rem 2.2rem;
    gap: 8.2rem;
  `}
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 9.5rem;

  ${mediaMaxWidth("mobile")`
    gap: 4.2rem;
  `}
`;

export const Title = styled.h2`
  color: #262626;
  font-size: 4.8rem;
  font-weight: 600;
  line-height: 6.5rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.8rem;
    line-height: 4rem;
  `}
`;

export const List = styled(ListItens)`
  ${Circle} {
    width: 9.8487rem;
    height: 9.8487rem;
  }
`;

export const Button = styled(ButtonSwipe)`
  background: #405e20;
  color: #fff;
`;

export const Container = styled.div``;

export const Grid = styled(GridImages)``;
