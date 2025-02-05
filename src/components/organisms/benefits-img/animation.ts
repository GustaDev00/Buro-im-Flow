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
          id: "benefits-img-animation",
        },
      });

      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const items = sectionRef.current.querySelectorAll("[data-fs-animation='item']");

      if (title) {
        tl.from(title, { y: 100, opacity: 0, duration: 0.8 });
      }
      tl.from(items, { opacity: 0, y: 50, duration: 0.8, stagger: 0.2 });
    }, sectionRef);

    return () => ctx.kill();
  }, []);

  return { sectionRef };
};
