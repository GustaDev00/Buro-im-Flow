import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import * as S from "./styles";

interface CursorProps {
  children: ReactNode;
}

export const Cursor: FC<CursorProps> = ({ children }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [linkType, setLinkType] = useState<string | null>(null);

  const handleMouseEnter = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "A") {
      setLinkType("hover");
    } else if (target.tagName === "DIV") {
      setLinkType(target.getAttribute("data-fs-link"));
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setLinkType(null);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let posX = 0,
        posY = 0;
      let mouseX = 0,
        mouseY = 0;

      gsap.to(
        {},
        {
          duration: 0.016,
          repeat: -1,
          onRepeat: () => {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            gsap.set(cursorRef.current, {
              css: {
                left: posX,
                top: posY,
              },
            });
          },
        },
      );

      const interactiveElements = document.querySelectorAll<HTMLElement>("a, div");

      interactiveElements.forEach((element: Element) => {
        element.addEventListener("mouseenter", handleMouseEnter as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    });

    return () => {
      ctx.kill();
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <>
      {children}
      <S.Cursor ref={cursorRef} $type={linkType}>
        <S.Text>Mehr</S.Text>
      </S.Cursor>
    </>
  );
};
