import gsap from "gsap";
import { useEffect, useRef } from "react";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

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
            { y: index % 2 === 0 ? 50 : -50, opacity: 0.9 },
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
