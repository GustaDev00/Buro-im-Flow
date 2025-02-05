import * as S from "./styles";
import { FC } from "react";
import { CtaProps } from "./props";

export const Cta: FC<CtaProps> = ({ title, href, ...props }) => {
  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const chatButton = document.querySelector("#chatbase-bubble-button");
    if (chatButton) {
      (chatButton as HTMLButtonElement).click();
    }
  };

  if (href.includes("whatsapp")) {
    return (
      <S.Cta href={href} title={title} onClick={handleClick} {...props}>
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
