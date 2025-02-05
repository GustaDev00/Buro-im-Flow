import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Content = styled.div`
  padding: 11.8rem 0 10rem 12rem;
  display: flex;
  flex-direction: column;
  gap: 10.2rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 6rem 1.4rem;
    gap: 10rem;
  `}

  article {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5.2rem;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      width: 100%;
      gap: 3rem;
    `}
  }

  p,
  li {
    font-size: 3rem;
    font-weight: 400;
    line-height: 4.6rem;
    letter-spacing: -0.00001rem;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      font-size: 2.4rem;
    `}
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  li {
    position: relative;
    padding-left: 2.6rem;

    &::before {
      content: "";
      position: absolute;
      top: 1.5rem;
      left: 0;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: #000;
    }
  }

  a {
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.6rem;
    letter-spacing: -0.00001rem;
    text-decoration: underline;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      font-size: 2.4rem;
    `}
  }

  h1 {
    font-family: var(--manrope);
    font-size: 8.2rem;
    font-weight: 600;
    line-height: 10.7rem;
    letter-spacing: -0.00506rem;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      font-size: 3.3rem;
    `}
  }

  h2 {
    color: #292929;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.6rem;
    letter-spacing: -0.0003rem;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      font-size: 2.4rem;
    `}
  }
`;
