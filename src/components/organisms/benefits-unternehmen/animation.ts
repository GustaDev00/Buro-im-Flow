import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

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
          end: isMobile ? "bottom 20%" : "bottom 15%",
          scrub: 1,
          markers: false,
          id: "benefits-unternehmen-animation",
        },
      });
      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const items = sectionRef.current.querySelectorAll("[data-fs-animation='item']");

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
      tl.from(items, { opacity: 0, y: 50, duration: 0.8, ease: "power4.out", stagger: 0.2 });
    }, sectionRef);

    return () => ctx.kill();
  }, []);

  return { sectionRef };
};
