import gsap from "gsap";
import { useRef, useEffect } from "react";
import SplitType from "split-type";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const isMobile = window.innerWidth <= 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top 80%" : "top 70%",
          end: isMobile ? "center center" : "bottom 30%",
          scrub: 1,
          markers: false,
          id: "benefits-img-animation",
        },
      });

      // Animação do título
      const title = sectionRef.current.querySelector("[data-fs-animation='title']");
      if (title) {
        const splitTitle = new SplitType(title as HTMLElement, { types: "words" });
        gsap.set(splitTitle.words, { clipPath: "inset(0 0 100% 0)", y: 50, opacity: 0 });

        tl.to(
          splitTitle.words,
          {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.5 : 0.8,
            stagger: isMobile ? 0.05 : (index) => index * 0.1,
            ease: "power3.out",
          },
          "<",
        );
      }

      const images = sectionRef.current.querySelectorAll("[data-fs-animation='image']");
      tl.from(
        images,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power4.out",
        },
        "<",
      );

      // Animação dos itens da lista
      const items = sectionRef.current.querySelectorAll("[data-fs-animation='item']");
      tl.from(
        items,
        {
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.2,
        },
        "<",
      );

      // Animação das imagens (agora sem o delay e com a mesma duração do texto)
    }, sectionRef);

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
