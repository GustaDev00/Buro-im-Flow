import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const Philosophie = styled.div``;

export const Wrapper = styled(_Wrapper)``;

export const Group = styled.div``;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 12.4rem 8.4rem;
  gap: 1rem;
  border-radius: 5.2rem;
  background: #fff;
  box-shadow: 0 1rem 2.2rem 0 rgba(0, 0, 0, 0.03);
  justify-content: space-between;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
  flex-direction: column-reverse;
  padding: 5.8rem 2.2rem;
  `}
`;

export const Title = styled.h2`
  color: #262626;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 7.5rem;

  ${mediaMaxWidth("mobile")`
  padding-top: 8.4rem;
  font-size: 3.4rem;
  line-height: 5.8rem;
  `}
`;

export const Description = styled.p`
  color: #494949;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 5rem;
  letter-spacing: -0.1214rem;
  padding: 5.9rem 0;

  ${mediaMaxWidth("mobile")`
  padding: 4.2rem 0;
  font-size: 1.48rem;
  line-height: 4rem;
  `}
`;

export const Line = styled.div`
  width: 74.4rem;
  height: 0.1rem;
  background-color: rgba(0, 0, 0, 0.45);
`;

export const Circle = styled.div`
  width: 5px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 100%;
`;

export const Link = styled(ButtonSwipe)`
  background-color: #405e20;
  color: #fff;
  color: #fff;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 400;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
  `}
`;

export const Img = styled(LazyImage)`
  width: 66rem;
  height: 65.6rem;
  object-fit: cover;
  border-radius: 6.5rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 40.7rem;
    object-fit: cover;
  `}
`;

export const Computer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Shapes = styled.div`
  display: flex;
  padding-bottom: 5.9rem;
  align-items: center;

  ${mediaMaxWidth("mobile")`
  padding-bottom: 4.2rem 0;
  `}
`;
