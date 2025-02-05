import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const FaceBehind = styled.div`
  margin-top: 12rem;
`;

export const Bg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 38rem;
`;

export const Image = styled(LazyImage)`
  position: absolute;
  left: 0;
  top: 0;
`;

export const Title = styled.h2`
  position: relative;
  color: #fff;
  text-align: center;
  font-size: 8.2rem;
  font-weight: 700;
  line-height: 9.9rem;
  margin-top: 4rem;
  z-index: 2;

  ${mediaMaxWidth("mobile")`
    font-size: 4.9rem;
    line-height: 6.4rem;
  `}
`;

export const Wrapper = styled(_Wrapper)``;

export const Container = styled.div`
  border-radius: 4.2rem;
  background: #fff;
  box-shadow: 0 1.2rem 3.4rem 0 rgba(0, 0, 0, 0.04);
  padding: 8rem 7.3rem;

  ${mediaMaxWidth("mobile")`
    padding: 8rem 2.2rem;
  `}
`;

export const Content = styled.article`
  margin-bottom: 6.6rem;
  color: #494949;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 5rem;
  letter-spacing: -0.1316rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 3.8rem;
    letter-spacing: -0.1012rem;
  `}
`;

export const User = styled.div`
  display: flex;
  gap: 4.9rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 4rem;
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.8rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.15);
  background: #fff;
  padding: 3.6rem 6.3rem;
  margin-bottom: 1.3rem;

  ${mediaMaxWidth("mobile")`
    padding: 3.6rem 1.2rem;
  `}
`;

export const BusinessOwner = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.3rem;
`;

export const BusinessIcon = styled.div`
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const BusinnessTitle = styled.h3`
  color: #405e20;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
`;

export const Name = styled.h4`
  margin-top: 1.4rem;
  color: #343434;
  font-size: 3.8rem;
  font-weight: 600;
  line-height: 3.8rem;

  ${mediaMaxWidth("mobile")`  
  font-size: 2.6rem;
  line-height: 3.8rem;
`}
`;

export const Data = styled.div``;

export const ImageUser = styled(LazyImage)`
  padding: 3.1rem 2.4rem;
  border-radius: 2.9rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.15);
  background: #fff;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 2.9rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.15);
  background: #fff;
  padding: 5.5rem 7rem;

  ${mediaMaxWidth("mobile")`
    padding: 5.5rem 2.2rem;
  `}
`;

export const Qualifications = styled.div``;

export const QualificationsTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const QualificationsIcons = styled.div`
  svg {
    width: 5rem;
    height: 5.5rem;
  }
`;

export const QualificationsText = styled.p`
  color: #405e20;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 5rem;
  letter-spacing: -0.1822rem;
`;

export const List = styled.div`
  margin-top: 6.2rem;
`;

export const Item = styled.p`
  position: relative;
  color: #494949;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 5rem;
  letter-spacing: -0.1316rem;
  padding-left: 3rem;

  &::before {
    position: absolute;
    top: 1.8rem;
    left: 0.6rem;
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    background: #494949;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 4rem;
    letter-spacing: -0.1012rem;
  `}
`;

export const ListOrder = styled.ol`
  padding-left: 3rem;
`;

export const StrongItem = styled.p`
  margin-top: 4rem;
  position: relative;
  color: #000;
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 5rem;
  letter-spacing: -0.1316rem;
  padding-left: 3rem;

  &::before {
    position: absolute;
    top: 1.8rem;
    left: 0.6rem;
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    background: #000;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 4rem;
    letter-spacing: -0.1012rem;
  `}
`;

export const SubItem = styled.li`
  position: relative;
  color: #494949;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 5rem;
  letter-spacing: -0.1316rem;
  padding-left: 3rem;

  &::before {
    position: absolute;
    top: 1.8rem;
    left: 0.6rem;
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    background: #494949;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 4rem;
    letter-spacing: -0.1012rem;
  `}
`;

export const Text = styled.p`
  position: relative;
  color: #494949;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 5rem;
  letter-spacing: -0.1316rem;
  margin-top: 5rem;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
    line-height: 4rem;
    letter-spacing: -0.1012rem;
  `}
`;
