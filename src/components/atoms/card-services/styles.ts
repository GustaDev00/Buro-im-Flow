import styled, { css } from "styled-components";
import { mediaMaxWidth } from "@/utils/media-query";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "../lazy-image";

export const CardServices = styled.div`
  position: relative;
  border-radius: 2.2rem;
  overflow: hidden;

  ${mediaMaxWidth("mobile")`
    border-radius: 3.3rem;
  `}
`;

export const Image = styled(LazyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  scale: 1.05;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 5.5rem;
  padding: 6.7rem 5.4rem;
  z-index: 2;

  ${mediaMaxWidth("mobile")`
    padding: 7.3rem 3.3rem;
  `}
`;

export const Line = styled.div`
  background: #fff;
  opacity: 0.7;
  height: 0.2rem;
`;

export const Effects = styled.div`
  width: 23.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

const LinesStyles = css`
  &:nth-of-type(1) {
    width: 100%;
  }

  &:nth-of-type(2) {
    width: 65%;
  }

  &:nth-of-type(3) {
    width: 35%;
  }
`;
export const LinesUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${Line} {
    margin: 0 0 0 auto;
    ${LinesStyles}
  }
`;

export const LinesDown = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 3rem;

  ${Line} {
    ${LinesStyles}
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.1rem;
`;

export const Title = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 4.6rem;
  font-weight: 700;
  line-height: 5.7rem;
  text-transform: uppercase;

  ${mediaMaxWidth("mobile")`
    font-size: 3rem;
  `}
`;

export const Text = styled.p`
  overflow: hidden;
  color: #fff;
  text-align: center;

  font-size: 2.6rem;
  font-weight: 400;
  line-height: 5.1rem;
  letter-spacing: -0.1316rem;

  ${mediaMaxWidth("mobile")`
    color: #ececec;
    font-size: 1.8rem;
    line-height: 3.8rem;
    letter-spacing: -0.0911rem;
  `}
`;

export const Button = styled(ButtonSwipe)``;
