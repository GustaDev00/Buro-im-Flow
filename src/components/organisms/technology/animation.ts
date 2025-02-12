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
          id: "technology-animation",
        },
      });

      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const description = sectionRef.current.querySelector("[data-fs-animation='description']");
      const link = sectionRef.current.querySelector("[data-fs-animation='link']");
      const image = sectionRef.current.querySelector("[data-fs-animation='image']");
      const line = sectionRef.current.querySelector("[data-fs-animation='line']");
      const circle = sectionRef.current.querySelector("[data-fs-animation='circle']");

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

      if (description) {
        const splitDescription = new SplitType(description as HTMLElement, { types: "words" });
        gsap.set(splitDescription.words, { clipPath: "inset(0 0 100% 0)", y: 50, opacity: 0 });

        tl.to(
          splitDescription.words,
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

      tl.from(link, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      if (image) {
        tl.fromTo(
          image,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.6,
          },
        ),
          "<";
      }

      tl.from(line, {
        width: 0,
        duration: 0.5,
        ease: "power4.out",
      });

      tl.from(circle, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.kill();
  }, []);

  return { sectionRef };
};
