import styled from "styled-components";
import { Header as _Header } from "@/components/organisms/header";
import { Img, Title, Wrapper } from "@/components/organisms/header/styles";
import { Cta as _Cta } from "@/components/organisms/cta";
import { Benefits as _Benefits } from "@/components/organisms/benefits";
import { Form as _Form } from "@/components/atoms/form";
import { mediaMaxWidth } from "@/utils/media-query";

export const Header = styled(_Header)`
  ${Wrapper} {
    justify-content: center;
  }

  ${Img} {
    width: 71.5rem;
  }

  ${Title} {
    font-size: 6rem;
  }

  ${mediaMaxWidth("mobile")`
    ${Title} {
      font-size: 4rem;
    }
  `}
`;

export const Benefits = styled(_Benefits)``;

export const Form = styled(_Form)``;

export const Cta = styled(_Cta)``;
