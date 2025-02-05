import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function useIntroAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      const cards = sectionRef.current.querySelectorAll("[data-ts-card]");
      const texts = sectionRef.current.querySelectorAll("[data-ts-text]");
      const imgs = sectionRef.current.querySelectorAll("[data-ts-img]");

      timeline
        .fromTo(cards, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 })
        .fromTo(
          texts,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.3 },
          "-=0.5",
        )
        .fromTo(
          imgs,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, stagger: 0.3 },
          "-=0.7",
        );
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
}
