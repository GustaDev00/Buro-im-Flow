import { mediaMaxWidth } from "@/utils/media-query";
import Link from "next/link";
import styled, { css } from "styled-components";

const swipeStyles = css`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  width: fit-content;
  cursor: pointer;
  padding: 1.5rem 3rem;
  color: #242222;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.1rem;
  letter-spacing: -0.0002rem;
  border-radius: 6.7rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.4);
  background: #fff;
  transition: box-shadow 0.3s ease;

  svg {
    width: 3.1852rem;
    height: 3.1852rem;
    transform: translateX(-0.5rem);
    transition: transform 0.4s ease;
  }

  &:hover {
    box-shadow: 0rem 1.2rem 1.6rem 0rem ${({ theme }) => theme.black01};

    svg {
      transform: translateX(0);
    }
  }

  ${mediaMaxWidth("mobile")`
    padding: 1.7rem 3rem;
    gap: 1rem;
    font-size: 2rem;
  `}
`;

export const ButtonSwipe = styled.button`
  ${swipeStyles}
`;

export const LinkSwipe = styled(Link)`
  ${swipeStyles}
`;
