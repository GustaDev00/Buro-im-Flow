import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";
import { LazyImage } from "../lazy-image";

export const GridImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.1rem;
`;

export const Wrapper = styled.div`
  width: 87.1rem;
  height: 42rem;
  display: flex;
  gap: 2.7rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    width: 100%;
    height: auto;
  `}
`;

export const ImgLarge = styled(LazyImage)`
  width: 100%;
  height: 100%;

  ${mediaMaxWidth("mobile")`
    height: 42rem;
    object-fit: cover;
    object-position: left;
    border-radius: 2.2rem;
  `}
`;

export const ImgSmall = styled(LazyImage)`
  width: 38.6rem;
  height: 41.5rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 28rem;
    border-radius: 2.2rem;
  `}
`;

export const Content = styled.div`
  padding: 5.2rem 3.5rem;
  border-radius: 2.2rem;
  background: #405e20;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 4.1rem;
`;

export const Imagelarge = styled(LazyImage)`
  width: 25rem;
  height: 11.4rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 18.1rem;
    height: 8.3rem;
  `}
`;

export const ImageSmall = styled(LazyImage)`
  width: 13.1rem;
  height: 11.4rem;

  ${mediaMaxWidth("mobile")`
    width: 9.5rem;
    height: 8.3rem;
  `}
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 3.4rem;
  letter-spacing: -0.1619rem;
`;

export const Text = styled.p`
  color: #d6ebc0;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 3.4rem;
  letter-spacing: -0.1113rem;
  margin-top: 1.9rem;
`;
