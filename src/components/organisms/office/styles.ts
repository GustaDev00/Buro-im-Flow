import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Office = styled.div`
  padding: 21rem 0;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 6rem 0;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  justify-content: space-between;
  height: 93rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    height: auto;
    gap: 10rem;
  `}

  ${mediaMaxWidth("mobile")`
    gap: 6rem;
  `}
`;

export const Columns = styled.div`
  width: 31.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 100%;
    align-items: center;
  `}
`;

export const ImageTop = styled(LazyImage)`
  width: 100%;
  height: 13.7rem;
`;

export const ImageTop2 = styled(LazyImage)`
  width: 100%;
  height: 13.7rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    display: none;
  `}
`;

export const ImageRectangle = styled(LazyImage)`
  width: 28.2rem;
  height: 48.9rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    display: none;
  `}
`;

export const ImageCircle = styled(LazyImage)`
  width: 30.1rem;
  height: 30.1rem;
`;

export const Content = styled.article`
  width: 45%;
  margin: auto;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 70%;
  `}

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const Title = styled.h2`
  color: #262626;
  text-align: center;
  font-size: 7.2rem;
  font-weight: 700;
  line-height: 7.8rem;

  ${mediaMaxWidth("mobile")`
    font-size: 5.8rem;
    line-height: 6.2rem;
  `}
`;

export const Text = styled.p`
  color: #494949;
  text-align: center;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 5rem;
  letter-spacing: -0.1316rem;
  margin: 6.2rem 0;

  ${mediaMaxWidth("mobile")`
    margin: 3.1rem 0;
  `}
`;

export const Button = styled(ButtonSwipe)`
  margin: auto;
  background: #405e20;
  color: #fff;
`;
