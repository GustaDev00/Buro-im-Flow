import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

interface Props {
  setActive: (active: number) => void;
}

export default ({ setActive }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const isMobile = window.innerWidth <= 768;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top 75%" : "top 60%",
          end: isMobile ? "20% center" : "15% center",
          scrub: 1,
          markers: false,
          id: "offer-animation",
        },
      });

      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const items = sectionRef.current.querySelectorAll("[data-fs-animation='item']");
      const button = sectionRef.current.querySelector("[data-fs-animation='button']");

      // Animating the title
      if (title) {
        const splitTitle = new SplitType(title as HTMLElement, { types: "words" });
        gsap.set(splitTitle.words, { clipPath: "inset(0 0 100% 0)", y: 50, opacity: 0 });

        tl.to(
          splitTitle.words,
          {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: (index) => index * 0.1,
            ease: "power3.out",
          },
          "<",
        );
      }

      // Animating the individual service items
      if (!isMobile) {
        tl.from(
          items,
          {
            opacity: 0,
            x: (index) => `${index * -24}rem`,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.2,
            onComplete: () => {
              gsap.delayedCall(0.4, () => setActive(0));
            },
          },
          "<",
        );
      } else {
        tl.from(items, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.2,
          onComplete: () => setActive(0),
        });
      }

      // Animating the button
      tl.from(button, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
