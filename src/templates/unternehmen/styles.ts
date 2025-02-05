import styled from "styled-components";
import { Header as _Header } from "@/components/organisms/header";
import { Img as _Img } from "@/components/organisms/header/styles";
import { Philosophie as _Philosophie } from "@/components/organisms/philosophie";
import { Computer, Container, Img, Title } from "@/components/organisms/philosophie/styles";
import { Offer as _Offer } from "@/components/organisms/offer";
import { Cta as _Cta } from "@/components/organisms/cta";
import { mediaMaxWidth } from "@/utils/media-query";
import { Benefits as _Benefits } from "@/components/organisms/benefits-unternehmen";
import { Accounting as _Accounting } from "@/components/atoms/accounting";
import { Account as _Account } from "@/components/organisms/account";

export const Header = styled(_Header)`
  ${_Img} {
    width: 71.5rem;
  }
`;

export const Philosophie = styled(_Philosophie)`
  ${Computer} {
    picture:first-child {
      ${Img} {
        height: 56.3rem;

        ${mediaMaxWidth("mobile")`
          height: 36.5rem; 
          margin-top: 12rem;
        `}
      }
    }

    picture:last-child {
      ${Img} {
        margin-top: 2.1rem;
        border-radius: 15.35rem;
        height: 26rem;

        ${mediaMaxWidth("mobile")`
          height: 15.7rem;
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

export const Accounting = styled(_Accounting)``;

export const Account = styled(_Account)``;

export const Offer = styled(_Offer)``;

export const Benefits = styled(_Benefits)``;

export const Cta = styled(_Cta)``;
