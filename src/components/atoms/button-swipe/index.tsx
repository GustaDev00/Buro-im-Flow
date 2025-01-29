import * as S from "./styles";
import { ButtonSwipeProps } from "./props";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { GoArrowUpRight } from "react-icons/go";


type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSwipe = ({ href, className, children, ...props }: ButtonSwipeProps) => {


  return href ? (
    <S.LinkSwipe
      className={className}
      {...(props as LinkProps)}
      href={href}
    >
      {children} <GoArrowUpRight />
    </S.LinkSwipe>
  ) : (
    <S.ButtonSwipe
      className={className}
      {...(props as ButtonProps)}
    >
      {children} <GoArrowUpRight />
    </S.ButtonSwipe>
  );
};
