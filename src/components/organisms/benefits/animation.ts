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
          id: "benefits-animation",
        },
      });

      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const listItems = sectionRef.current.querySelectorAll("[data-fs-animation='list-item']");
      const button = sectionRef.current.querySelector("[data-fs-animation='button']");
      const grid = sectionRef.current.querySelector("[data-fs-animation='grid']");

      if (title) {
        tl.from(title, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        });
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

      tl.from(grid, {
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
