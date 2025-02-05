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
        tl.from(title, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          rotate: 15,
        });
      }

      // Description animation
      if (description) {
        tl.from(description, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        });
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
      tl.from(imgs, {
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
