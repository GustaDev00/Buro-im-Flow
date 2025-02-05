import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
          markers: false,
        },
      });

      // Animação do título
      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      if (title) {
        tl.from(title, {
          opacity: 0,
          y: 50,
          duration: 1,
        });
      }

      // Animação do conteúdo
      const content = sectionRef.current.querySelector("[data-fs-animation='content']");
      if (content) {
        tl.from(content, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power4.out",
        });
      }

      // Animação das imagens
      const images = sectionRef.current.querySelectorAll("[data-fs-animation='image']");
      tl.from(images, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Animação do botão
      const button = sectionRef.current.querySelector("[data-fs-animation='button']");
      if (button) {
        tl.from(button, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power4.out",
        });
      }
    }, sectionRef);

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
