import styled from "styled-components";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const Link = styled.a``;

export const Logo = styled(LazyImage)`
  height: 10.5rem;
  object-fit: contain;

  ${mediaMaxWidth("mobile")`
    height: 8.5rem;
  `}
`;
