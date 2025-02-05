import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { CardServices } from "@/components/atoms/card-services";
import { mediaMaxWidth } from "@/utils/media-query";

export const Solutions = styled.div`
  margin-top: 7rem;

  ${mediaMaxWidth("mobile")`
    margin: 0;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #242222;
  font-size: 7rem;
  font-weight: 700;
  line-height: 8.6rem;
  text-transform: capitalize;
  padding-left: 3.3rem;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.4rem;
  margin-top: 7.6rem;

  ${mediaMaxWidth("mobile")`
    gap: 3.6rem;
    margin: 0;
  `}
`;

export const Card = styled(CardServices)``;
