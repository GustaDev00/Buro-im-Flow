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

      // Animação do título
      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      if (title) {
        tl.from(title, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: "power4.out",
        });
      }

      // Animação dos itens da lista
      const items = sectionRef.current.querySelectorAll("[data-fs-animation='item']");
      tl.from(items, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.2,
      });

      // Animação das imagens (agora sem o delay e com a mesma duração do texto)
      const images = sectionRef.current.querySelectorAll("[data-fs-animation='image']");
      tl.from(images, {
        opacity: 0,
        y: 50,
        duration: 0.8, // Reduziu o tempo para sincronizar com o texto
        stagger: 0.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
