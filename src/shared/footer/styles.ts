import styled from "styled-components";
import { Logo as _Logo } from "@/components/atoms/logo";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { ArrowUpIcon } from "@/components/svgs/arrow-up";

export const ButtonUp = styled.button`
  bottom: 3.5rem;
  cursor: pointer;
  right: 8.5rem;
  position: absolute;
  border-radius: 6.7rem;
  background: #405e20;
  z-index: 20;
  display: flex;
  align-items: center;
  padding: 1.1rem 4.2rem;

  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ArrowUp = styled(ArrowUpIcon)``;

export const Footer = styled.footer`
  position: relative;
  overflow: hidden;
  padding-bottom: 22rem;

  ${mediaMaxWidth("mobile")`
    padding-bottom: 8rem;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  background: #f8f8f8;
  padding: 8rem 12rem;
  gap: 12rem;
  align-items: flex-start;
  padding-bottom: 4rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 6.4rem;
    padding: 5.2rem 2.2rem;
  `}
`;

export const Column = styled.div<{ $first?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  margin-right: ${({ $first }) => ($first ? "16.1rem" : "0")};

  ${mediaMaxWidth("mobile")`
    margin-right: 0;
  `}
`;

export const Line = styled.div``;

export const TitleLine = styled.h3`
  color: #000;
  font-family: var(--manrope);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.4rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Item = styled.li`
  color: #000;
  font-family: var(--manrope);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.8rem;
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #000000;
`;

export const Icon = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const WrapperInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.15);
  padding: 3rem 0;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 2.6rem;
  `}
`;

export const Info = styled.div`
  padding: 0rem 12rem;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 140%;
  border-radius: 0rem 0rem 2.2rem 2.2rem;

  ${mediaMaxWidth("mobile")`
    padding: 3.8rem 2.2rem;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.6rem;
    gap: 1.7rem;
  `}
`;

export const SocialShare = styled.div`
  display: flex;
  gap: 2.4rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: #fff;
  }
`;

export const Copy = styled.p``;

export const Agency = styled.p`
  span {
    font-weight: 700;
  }
`;

export const Logo = styled(_Logo)``;

export const Text = styled.p`
  position: absolute;
  color: #eeeeed;
  text-align: center;
  font-size: 31.8rem;
  font-weight: 800;
  bottom: -10rem;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;
