import * as S from "./styles";
import { FC } from "react";
import { CtaProps } from "./props";

export const Cta: FC<CtaProps> = ({ title, href, ...props }) => {
  if (href.includes("whatsapp")) {
    return (
      <S.Cta href={href} title={title} {...props}>
        {title}
      </S.Cta>
    );
  }

  return (
    <S.Cta href={href} title={title} {...props}>
      {title}
    </S.Cta>
  );
};
