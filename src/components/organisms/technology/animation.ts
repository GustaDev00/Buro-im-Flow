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
          id: "technology-animation",
        },
      });

      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      const description = sectionRef.current.querySelector("[data-fs-animation='description']");
      const link = sectionRef.current.querySelector("[data-fs-animation='link']");
      const image = sectionRef.current.querySelector("[data-fs-animation='image']");

      if (title) {
        tl.from(title, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          rotate: 15,
        });
      }

      tl.from(description, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      tl.from(link, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      tl.from(image, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.kill();
  }, []);

  return { sectionRef };
};
