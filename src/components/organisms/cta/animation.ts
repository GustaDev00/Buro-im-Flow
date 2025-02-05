import gsap from "gsap";
import { useEffect, useRef } from "react";

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
          id: "cta-animation",
        },
      });

      const chart = sectionRef.current.querySelector("[data-fs-animation='chart']");
      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const text = sectionRef.current.querySelector("[data-fs-animation='text']");
      const button1 = sectionRef.current.querySelector("[data-fs-animation='button1']");
      const button2 = sectionRef.current.querySelector("[data-fs-animation='button2']");

      if (chart) {
        tl.from(chart, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }

      if (title) {
        tl.from(
          title,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.6",
        );
      }

      if (text) {
        tl.from(
          text,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.6",
        );
      }

      tl.from(
        [button2],
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power4.out",
        },
        "-=0.6",
      );
    }, sectionRef);

    return () => ctx.kill();
  }, []);

  return { sectionRef };
};
