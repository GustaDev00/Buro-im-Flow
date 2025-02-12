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
          scrub: 2,
          markers: false,
          id: "office-animation",
        },
      });

      const imageTop = sectionRef.current.querySelector("[data-fs-animation='image-top']");
      const imageTop2 = sectionRef.current.querySelector("[data-fs-animation='image-top2']");
      const imageRectangle = sectionRef.current.querySelector(
        "[data-fs-animation='image-rectangle']",
      );
      const imageCircle = sectionRef.current.querySelector("[data-fs-animation='image-circle']");

      const parallaxElements = [imageTop, imageTop2, imageRectangle, imageCircle];
      parallaxElements.forEach((element, index) => {
        if (element) {
          gsap.fromTo(
            element,
            { y: index % 2 === 0 ? 50 : -50, opacity: 0.9 }, // Alterna direções para criar variedade
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.kill();
  }, []);

  return { sectionRef };
};
