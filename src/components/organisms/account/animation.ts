import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
          markers: false,
          id: "account-animation",
        },
      });

      // Animação geral do container
      tl.from(sectionRef.current, { opacity: 0, duration: 0.5 });

      // Anima elementos com data-fs-animation
      tl.from(sectionRef.current.querySelectorAll("[data-fs-animation]"), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.kill();
  }, []);

  return { sectionRef };
};
