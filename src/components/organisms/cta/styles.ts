import styled from "styled-components";
import { FiBarChart2 } from "react-icons/fi";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { mediaMaxWidth } from "@/utils/media-query";

export const Cta = styled.div`
  background: #2a3f14;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.1rem;
  padding: 8.6rem 0;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 16rem 0;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 5.9rem 2.2rem;
    gap: 3.6rem;
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

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 6.2rem;
  font-weight: 700;
  line-height: 7rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 5.2rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 2.8rem;
    line-height: 3.7rem;
  `}
`;

export const Text = styled.p`
  width: 60%;
  color: #fafafa;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 4.6rem;
  letter-spacing: -0.1417rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 80%;
  `}

  ${mediaMaxWidth("mobile")`
    width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 3.2rem;
    letter-spacing: -0.081rem;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.4rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Button2 = styled(ButtonSwipe)`
  background: transparent;
  color: #fff;
  font-size: 2rem;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #fff;
    color: #000;
  }

  ${mediaMaxWidth("mobile")`
    width: 100%;
    justify-content: center;
  `}
`;
