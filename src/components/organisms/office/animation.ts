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
          id: "office-animation",
        },
      });

      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const text = sectionRef.current.querySelector("[data-fs-animation='text']");
      const button = sectionRef.current.querySelector("[data-fs-animation='button']");
      const imageTop = sectionRef.current.querySelector("[data-fs-animation='image-top']");
      const imageTop2 = sectionRef.current.querySelector("[data-fs-animation='image-top2']");
      const imageRectangle = sectionRef.current.querySelector(
        "[data-fs-animation='image-rectangle']",
      );
      const imageCircle = sectionRef.current.querySelector("[data-fs-animation='image-circle']");

      if (title) {
        tl.from(title, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        });
      }

      tl.from(text, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      tl.from(button, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      // Parallax effect for images, all moving together but at different speeds
      tl.to(imageTop, {
        y: -60,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageTop,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.to(imageTop2, {
        y: -40,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageTop2,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.to(imageRectangle, {
        y: -80,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRectangle,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        },
      });

      tl.to(imageCircle, {
        y: -20,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageCircle,
          start: "top center",
          end: "bottom center",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.kill();
  }, []);

  return { sectionRef };
};
