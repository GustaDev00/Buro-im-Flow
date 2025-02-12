import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled, { css } from "styled-components";

export const Offer = styled.div`
  font-family: var(--jakarta);
  padding: 8rem 0;

  ${mediaMaxWidth("mobile")`
    padding: 2rem 0;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
  gap: 7.8rem;

  ${mediaMaxWidth("mobile")`
    gap: 3.4rem;
  `}
`;

export const Title = styled.h2`
  color: #242222;
  font-size: 7.6rem;
  font-weight: 700;
  line-height: 8.6rem;

  ${mediaMaxWidth("mobile")`
    font-size: 3.4rem;
    line-height: 5.2rem;
  `}
`;

export const Container = styled.div`
  display: flex;
  gap: 2.8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
  `}
`;

export const Info = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5.9rem;
  position: relative;
  padding: 6rem 7rem;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1.6s ease;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 6rem 2.2rem;
  `}
`;

export const Subtitle = styled.h3`
  color: #fff;
  font-family: "Plus Jakarta Sans";
  font-size: 4.8rem;
  font-weight: 600;
  line-height: 3.4rem;
  letter-spacing: -0.2429rem;

  ${mediaMaxWidth("mobile")`
    font-size: 3rem;
    line-height: 3.4rem;
    letter-spacing: -0.172rem;
  `}
`;

export const Text = styled.p`
  color: #dedede;
  font-family: "Plus Jakarta Sans";
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4rem; /* 153.846% */
  letter-spacing: -0.1316rem;

  ${mediaMaxWidth("mobile")`
    width: 98%;
    font-size: 2.2rem;
    line-height: 2.8rem;
    letter-spacing: -0.1113rem;
  `}
`;

export const button = styled(ButtonSwipe)`
  background: transparent;
  color: #fff;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const Content = styled.div<{ $active?: boolean }>`
  cursor: pointer;
  display: flex;
  position: relative;
  width: ${({ $active }) => ($active ? "93.1rem" : "21rem")};
  height: 75.5rem;
  border-radius: 5.4rem;
  overflow: hidden;
  transition: width 0.3s ease, opacity 0.3s ease;
  background: #000;

  &:hover {
    opacity: 0.9 !important;
  }

  ${({ $active }) =>
    $active &&
    css`
      ${Info} {
        opacity: 1;
        visibility: visible;
      }
    `}

  ${({ $active }) => mediaMaxWidth("isMobileOrTabletVertical")`
    width: 100%;
    height: ${$active ? "81rem" : "16.4rem"};
    border-radius: 3.2rem;
    overflow: hidden;
    transition: height 0.3s ease;
  `}

${({ $active }) => mediaMaxWidth("mobile")`
    width: 100%;
    height: ${$active ? "71rem" : "16.4rem"};
    border-radius: 3.2rem;
    overflow: hidden;
    transition: height 0.3s ease;
  `}
`;

export const Bg = styled(LazyImage)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Image = styled(LazyImage)`
  width: 21rem;
  height: 75.5rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    border-radius: 3.2rem;
    width: 100%;
    height: 16.4rem;
    object-fit: cover;
  `}
`;
