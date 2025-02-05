import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { LazyImage } from "@/components/atoms/lazy-image";
import styled from "styled-components";
import { mediaMaxWidth } from "@/utils/media-query";

export const Intro = styled.div``;

export const Wrapper = styled(_Wrapper)`
  background: #f8f8f8;
  padding-top: 5rem;
  gap: 3.2rem;
`;

export const Card = styled.div``;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 6.1rem 8.2rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 2.2rem;
  box-shadow: 0 0.4rem 2.2rem 0 rgba(0, 0, 0, 0.05);
  gap: 4rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 6.1rem 2.2rem;
    align-self: stretch;
`}
`;

export const Img = styled(LazyImage)`
  width: 24.7rem;
  height: 7.8rem;
`;

export const Content = styled.div``;

export const Text = styled.p`
  color: #5a5a5a;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 5.6rem;
  letter-spacing: -0.1214rem;

  strong {
    color: #000;
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 1.8rem;
    line-height: 4.2rem;
    letter-spacing: -0.0911rem;
`}
`;
