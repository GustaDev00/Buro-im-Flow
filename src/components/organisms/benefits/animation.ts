import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default () => {
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
          scrub: 2,
          markers: false,
          id: "benefits-animation",
        },
      });

      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const listItems = sectionRef.current.querySelectorAll("[data-fs-animation='list-item']");
      const button = sectionRef.current.querySelector("[data-fs-animation='button']");
      const grid = sectionRef.current.querySelector("[data-fs-animation='grid']");
      if (!grid) return;

      const gridElements = grid.querySelectorAll("[data-fs-image], [data-fs-animation]");

      // if (gridElements.length) {
      //   tl.from(gridElements, {
      //     opacity: 0,
      //     y: 50,
      //     duration: 0.8,
      //     stagger: 0.2,
      //     ease: "power4.out",
      //     scrollTrigger: {
      //       trigger: sectionRef.current,
      //       start: "top bottom",
      //       end: "bottom top",
      //       scrub: true,
      //     },
      //   });
      // }

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

      tl.from(listItems, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
      });

      tl.from(button, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power4.out",
      });

      tl.from(gridElements, {
        opacity: 0,
        y: 50,
        stagger: (index) => index * 0.3,
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
