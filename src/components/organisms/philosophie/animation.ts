import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          end: isMobile ? "20% center" : "15% center",
          scrub: 1,
          markers: false,
          id: "philosophie-animation",
        },
      });
      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const items = sectionRef.current.querySelectorAll("[data-fs-animation='item']");

      if (title) {
        tl.from(title, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          rotate: 15,
        });
      }
      tl.from(items, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
