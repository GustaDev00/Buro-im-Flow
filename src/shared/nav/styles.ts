import { Logo as _Logo } from "@/components/atoms/logo";
import { mediaMaxWidth } from "@/utils/media-query";
import styled, { css } from "styled-components";
import { FaPhone } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

export const Logo = styled(_Logo)`
  ${mediaMaxWidth("mobile")``}
`;

export const Header = styled.header<{ $isBlog?: boolean }>`
  position: absolute;
  padding-top: 6.4rem;
  width: 100%;
  z-index: 10;

  ${({ $isBlog }) =>
    $isBlog &&
    css`
      position: relative;
      padding-top: 2.4rem;
      padding-bottom: 2.4rem;
      background: #405e20;

      ${Logo} {
        width: fit-content;
        height: 8rem;
      }

      ${mediaMaxWidth("mobile")`
        padding-top: 1.8rem;
        padding-bottom: 1.8rem;

        ${Logo} {
          height: 6rem;
      `}
    `}

  ${mediaMaxWidth("mobile")`
    padding-top: 0rem;
  `}
`;

export const Wrapper = styled.div`
  padding: 0 11.7rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 23.8rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 0 1.8rem;
    gap: 0;
    justify-content: space-between;
  `}

  ${mediaMaxWidth("mobile")`
  padding-top: 1.8rem;
`}
`;

export const Nav = styled.ul`
  display: flex;
  gap: 5.6rem;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Items = styled.li`
  color: white;
`;

export const Phone = styled(FaPhone)`
  height: 3.4rem;
`;

export const Externa = styled(FiExternalLink)``;

export const Link = styled.a`
  text-decoration: underline;
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.4rem;
  letter-spacing: -0.1012rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Line = styled.div`
  height: 0.3rem;
  background: #405e20;
  transition: transform 0.4s ease;

  &:nth-of-type(1) {
    width: 1.1rem;
  }

  &:nth-of-type(2) {
    width: 1.65rem;
  }

  &:nth-of-type(3) {
    width: 2.15rem;
  }

  ${mediaMaxWidth("mobile")`
    width: 2rem;
  `}
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; // Alinha na vertical se flex direction column for ROW - horizontal
  justify-content: center; // Alinha na horizontal - vertical
  gap: 0.55rem; // espaco dos itens
`;

export const Text = styled.p`
  color: #405e20;
  font-family: var(--syne);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Menu = styled.button`
  cursor: pointer;
  border-radius: 3.7rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: background 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease;
  padding: 1.15rem 2.75rem;
  margin: 0 0 0 auto;

  &:hover {
    opacity: 0.4;
    box-shadow: 0 0 1.8rem 0 rgba(255, 255, 255, 0.15);

    ${Line} {
      &:first-child {
        transform: translateX(0.3rem);
      }

      &:last-child {
        transform: translateX(-0.3rem);
      }
    }
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    margin:  0;
`}

  ${mediaMaxWidth("mobile")`
    display: flex;
    width: 14.8rem;
    height: 4.5rem;
    padding: 0rem 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `}
`;

export const Modal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0rem 2.4rem 1.6rem 0rem rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(1rem);
  transition: right 0.4s ease;

  ${mediaMaxWidth("mobile")`
    backdrop-filter: blur(6rem);
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 0;
  `}
`;

export const WrapperModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 6rem 15rem 3rem 15rem;
  background: url("/imgs/menu.jpg");
  font-family: Syne;
  font-size: 3.6rem;
  font-weight: 700;

  ${mediaMaxWidth("mobile")`
    padding: 5.4rem 2.2rem 2rem;
    justify-content: flex-start;
    gap: 7.4rem;
  `}
`;

export const HeaderModal = styled.header`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 2.4rem;

  ${mediaMaxWidth("mobile")`
    padding-bottom: 0;
  `}
`;

export const TextMenu = styled.p`
  color: #fff;
  text-align: right;
  font-family: var(--jakarta);
  font-size: 6.8rem;
  font-weight: 700;
  line-height: 9.2rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2.8rem;
    line-height: 3.8rem;
  `}
`;

export const ButtonClose = styled(Menu)`
  position: relative;
  color: #405e20;
  text-align: center;
  font-family: Syne;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1rem 6rem 1rem 2.2rem;

  margin-bottom: 8rem;
  &:before,
  &:after {
    position: absolute;
    content: "";
    right: 3rem;
    display: block;
    width: 2rem;
    height: 0.2rem;
    background: #405e20;
    border-radius: 10rem;

    ${mediaMaxWidth("mobile")`
      width: 2rem;
    `}
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  ${mediaMaxWidth("mobile")`
    margin-bottom: 4rem;
  `}
`;

export const MainModal = styled.main`
  margin-top: 8.4rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0rem;
    display: block;
    width: 100%;
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.1);
  }

  ${mediaMaxWidth("mobile")`
    margin-top: 0rem;
  `}
`;

export const List = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.5rem;

  ${mediaMaxWidth("mobile")`
    gap: 1rem;
  `}
`;

export const Item = styled.a`
  width: fit-content;
  position: relative;

  color: #ececec;
  text-align: right;
  font-family: var(--jakarta);
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 5.4rem;
  letter-spacing: -0.1417rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    width: 0%;
    height: 0.3rem;
    background-color: #fff;
    transition: width 0.4s ease;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 3.4rem;
  `}
`;

export const FooterModal = styled.footer`
  position: relative;
  padding: 1rem 3.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.2rem;

  &::after {
    content: "";
    position: absolute;
    top: -2rem;
    display: block;
    width: 100%;
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.1);
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    &::after {
      left: 0;
    }
  `}
`;

export const Social = styled.p`
  color: #fff;
  font-family: var(--jakarta);
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: 3.6rem;
  letter-spacing: -0.1113rem;

  span {
    font-weight: 500;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 1.6rem;
    line-height: 2.8rem;
  `}
`;

export const Black = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black03};
`;

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: opacity 0.4s ease, visibility 0.4s ease;

  ${Modal} {
    right: ${({ $open }) => ($open ? "11.5rem" : "-100%")};

    ${({ $open }) => mediaMaxWidth("mobile")`
      right: ${$open ? "0" : "-100%"};
    `}
  }

  @supports (-webkit-touch-callout: none) {
    height: 100svh; /* Ajusta para Safari */
  }
`;
