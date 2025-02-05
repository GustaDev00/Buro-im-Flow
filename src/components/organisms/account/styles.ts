import styled from "styled-components";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { mediaMaxWidth } from "@/utils/media-query";

export const Account = styled.div``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: column;
`;

export const Content = styled.article`
  border-top: 0.1rem solid rgba(0, 0, 0, 0.18);
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.18);
`;

export const Title = styled.h2`
  color: #1d1d1d;
  font-size: 6.3rem;
  font-weight: 700;
  line-height: 7.8rem;
  margin-top: 7.6rem;

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 4.8rem;
  `}
`;

export const Texts = styled.div`
  display: flex;
  margin: 6.6rem 0;
  gap: 5.3rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 3.8rem;
  `}
`;

export const Text = styled.p`
  color: #494949;
  font-family: Sora;
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 5rem;
  letter-spacing: -0.1316rem;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 6.6rem;
  gap: 9.2rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 3rem;
  `}
`;

export const Video = styled.div``;

export const Subtitle = styled.h3`
  color: #202020;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 5rem;
  letter-spacing: -0.1417rem;
  margin-bottom: 6.9rem;

  ${mediaMaxWidth("mobile")`
    margin-bottom: 3.8rem;
  `}
`;

export const Iframe = styled.iframe`
  width: 76.6637rem;
  height: 50.1rem;
  border-radius: 2.7rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 29.6rem;
  `}
`;

export const Card = styled.div`
  border-radius: 2.2rem;
  background: #fff;
  box-shadow: 0 0.4rem 2.2rem 0 rgba(0, 0, 0, 0.05);
  padding: 4.8rem 6.1rem;
  display: flex;
  flex-direction: column;
  gap: 4.7rem;

  ${mediaMaxWidth("mobile")`
    padding: 3.8rem 2.6rem;
  `}
`;

export const CardTitle = styled.h4`
  color: #242222;
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 4.4rem;

  ${mediaMaxWidth("mobile")`
  `}
`;

export const CardList = styled.ul`
  width: 53.1rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const CardItem = styled.li`
  position: relative;
  color: #3f3f3f;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 4.4rem;
  letter-spacing: -0.1113rem;
  padding-left: 3rem;

  &::before {
    position: absolute;
    top: 1.8rem;
    left: 0.6rem;
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    background: #3f3f3f;
  }
`;

export const Button = styled(ButtonSwipe)`
  background: #405e20;
  color: #fff;
`;
