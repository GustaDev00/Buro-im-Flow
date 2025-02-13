import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import styled from "styled-components";
import { FiBarChart2 } from "react-icons/fi";
import { mediaMaxWidth } from "@/utils/media-query";

export const Header = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  @supports (-webkit-touch-callout: none) {
    height: 100svh;
  }
`;

export const Wrapper = styled(_Wrapper)`
  background-color: #405e20;
  flex-direction: column;
  height: 100%;
  justify-content: end;

  ${mediaMaxWidth(`mobile`)`
    padding-top: 22.1rem;
    justify-content: center;
    gap: 2.4rem;
  `}
`;

export const Img = styled(LazyImage)`
  position: absolute;
  top: 0;
  right: 0;
  height: 102%;
  z-index: 3;
  width: 92rem;
  object-fit: cover;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
      display: none;
  `}
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 7.2rem;
  font-weight: 600;
  line-height: 10.4rem;

  ${mediaMaxWidth(`mobile`)`
    font-size: 3.4rem;
    line-height: 5.2rem;
    `}
`;

export const Description = styled.p`
  color: #ececec;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 5.6rem;
  letter-spacing: -0.1417rem;
  margin: 5rem 0 9.3rem 0;

  ${mediaMaxWidth(`mobile`)`
    font-size: 1.6rem;
    line-height: 2.8rem;
    letter-spacing: -0.081rem;
    margin: 0;
  `}
`;

export const Link = styled(ButtonSwipe)`
  transition: color 0.4s ease, background 0.4s ease;
  &:hover {
    box-shadow: 0 1.2rem 2rem 0 rgba(46, 84, 6, 0.15);
    background: #405d20;
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2.1rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    gap: 3.4rem;
    flex-direction: column;
    align-items: unset;
`}
`;

export const Circles = styled.div`
  position: relative;
  width: 9.3rem;
  height: 9.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleG = styled.div`
  position: absolute;
  background-color: #ffffff26;
  border-radius: 100px;
  width: 9.3rem;
  height: 9.3rem;
  align-items: center;
  display: flex;
  justify-content: center;
  animation: growShrinkG 4s infinite ease;

  @keyframes growShrinkG {
    0%,
    100% {
      width: 6.5rem;
      height: 6.5rem;
    }
    50% {
      width: 9.3rem;
      height: 9.3rem;
    }
  }
`;

export const CircleM = styled.div`
  position: absolute;
  background-color: #ffffff0d;
  border-radius: 100px;
  width: 6.5rem;
  height: 6.5rem;
  align-items: center;
  display: flex;
  justify-content: center;
  animation: growShrinkM 4s infinite ease;

  @keyframes growShrinkM {
    0%,
    100% {
      width: 4.5818rem;
      height: 4.5818rem;
    }
    50% {
      width: 6.5rem;
      height: 6.5rem;
    }
  }
`;

export const CircleP = styled.div`
  background-color: #405e20;
  border-radius: 100px;
  width: 4.5818rem;
  height: 4.5818rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Chart = styled(FiBarChart2)`
  color: white;
  width: 2.7611rem;
  height: 2.7611rem;
`;
