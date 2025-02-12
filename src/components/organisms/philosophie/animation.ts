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
          scrub: 1,
          markers: false,
          id: "philosophie-animation",
        },
      });

      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const description = sectionRef.current.querySelector("[data-fs-animation='description']");
      const link = sectionRef.current.querySelector("[data-fs-animation='link']");
      const imgs = sectionRef.current.querySelectorAll("[data-fs-animation='item']");

      // Title animation
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

      // Link animation
      if (link) {
        tl.from(link, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        });
      }

      // Item (images) animation
      if (imgs) {
        tl.fromTo(
          imgs,
          { clipPath: "inset(100% 100% 0 100%)" },
          {
            clipPath: "inset(0% 0% 0 0%)",
            duration: 1.6,
          },
        ),
          "<";
      }
    }, sectionRef);

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
