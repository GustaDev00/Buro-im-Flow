import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({ paused: true });
      const title = sectionRef.current.querySelector('[data-fs-animation="title"]');
      const text = sectionRef.current.querySelector('[data-fs-animation="text"]');
      const button = sectionRef.current.querySelector('[data-fs-animation="button"]');
      const circle = sectionRef.current.querySelector('[data-fs-animation="circle"]');
      const img = sectionRef.current.querySelector('[data-fs-animation="img"]');

      if (img) {
        tl.fromTo(
          img,
          { clipPath: "inset(0 100% 0 100%)" },
          {
            clipPath: "inset(0 0% 0 0%)",
            duration: 1.2,
          },
        );
        tl.add("<");
      }

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

      if (text) {
        const splitText = new SplitType(text as HTMLElement, { types: "lines" });
        gsap.set(splitText.lines, { clipPath: "inset(0 0 100% 0)", y: 50, opacity: 0 });

        tl.to(
          splitText.lines,
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

      const elements = [button, circle];
      elements.forEach((element, index) => {
        if (element) {
          tl.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, index * 0.2);
          tl.add("<");
        }
      });

      gsap.delayedCall(0.8, () => tl.play());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef };
};
