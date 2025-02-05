import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Home = styled.section`
  padding: 8.9rem 12rem 0;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 8rem 6.4rem 0;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 8rem 2.6rem 0;
  `}
`;
