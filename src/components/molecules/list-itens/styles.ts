import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const ListItens = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7.7rem;

  ${mediaMaxWidth("mobile")`
    gap: 2.4rem;
  `}
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 4.34rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 4rem;
  `}
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 12.1551rem;
  height: 12.1551rem;
  background: rgba(137, 158, 114, 0.15);
`;

export const Icon = styled.div`
  object-fit: contain;
`;

export const Content = styled.article``;

export const Title = styled.h3`
  color: #242222;
  text-align: left;
  font-size: 2.9rem;
  font-weight: 700;

  ${mediaMaxWidth("mobile")`
    font-size: 2.4rem;
  `}
`;

export const Text = styled.p`
  color: #6f6f6f;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.4rem;
  letter-spacing: -0.1214rem;
  margin-top: 1.4rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.8rem;
    line-height: 3.4rem;
  `}
`;
