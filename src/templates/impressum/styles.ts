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

  p {
    font-size: 3rem;
    font-weight: 400;
    line-height: 4.6rem;
    letter-spacing: -0.00001rem;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      font-size: 2.4rem;
    `}
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
      font-size: 5.8rem;
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
