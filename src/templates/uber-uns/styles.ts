import styled from "styled-components";
import { Header as _Header } from "@/components/organisms/header";
import { Img as _Img } from "@/components/organisms/header/styles";
import { Philosophie as _Philosophie } from "@/components/organisms/philosophie";
import { Computer, Container, Img, Title } from "@/components/organisms/philosophie/styles";
import { Cta as _Cta } from "@/components/organisms/cta";
import { mediaMaxWidth } from "@/utils/media-query";
import { Office as _Office } from "@/components/organisms/office";
import { FaceBehind as _FaceBehind } from "@/components/organisms/face-behind";

export const Header = styled(_Header)`
  ${_Img} {
    width: 71.5rem;
  }
`;

export const Philosophie = styled(_Philosophie)`
  ${Computer} {
    picture:first-child {
      ${Img} {
        height: 66.3rem;
        border-radius: 10.1rem;

        ${mediaMaxWidth("mobile")`
          height: 46.5rem; 
          margin-top: 12rem;
        `}
      }
    }

    picture:last-child {
      ${Img} {
        margin-top: 2.1rem;
        border-radius: 18.35rem;
        height: 36rem;

        ${mediaMaxWidth("mobile")`
          height: 20.7rem;
        `}
      }
    }
  }

  ${mediaMaxWidth("mobile")`
    ${Container} {
      flex-direction: column;
    }
      
    ${Title} {
      padding: 0;
    }
    `}
`;

export const FaceBehind = styled(_FaceBehind)``;

export const Office = styled(_Office)``;

export const Cta = styled(_Cta)``;
