import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { ListItens } from "@/components/molecules/list-itens";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { GridImages } from "@/components/atoms/grid-images";
import { Circle } from "@/components/molecules/list-itens/styles";
import { mediaMaxWidth } from "@/utils/media-query";
import { LazyImage } from "@/components/atoms/lazy-image";

export const Benefits = styled.div`
  background: rgba(137, 158, 114, 0.2);
  margin-top: 10rem;
`;

export const Wrapper = styled(_Wrapper)`
  justify-content: space-between;
  align-items: flex-end;
  padding: 12rem 14rem;

  ${mediaMaxWidth("mobile")`
    padding: 18rem 2.2rem;
    gap: 8.2rem;
  `}
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 9.5rem;
`;

export const Title = styled.h2`
  color: #262626;
  font-size: 4.8rem;
  font-weight: 600;
  line-height: 6.5rem;

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 5.8rem;
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
  position: absolute;
  bottom: 3.5rem;
  left: 4.1rem;
  border: none;

  ${mediaMaxWidth("mobile")`
    left: 2rem;
  `}
`;

export const Container = styled.div`
  position: relative;
  width: 49rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const ImageBig = styled(LazyImage)`
  border-radius: 5.5rem;
  width: 100%;
  height: 63.9rem;
  object-fit: cover;
`;

export const ImageSmall = styled(LazyImage)`
  border-radius: 5.5rem;
  width: 100%;
  height: 24.3rem;
  margin-bottom: 1.6rem;
`;
