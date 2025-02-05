import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useAnimation() {
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

      const wrapper = sectionRef.current.querySelector("[data-timeline='wrapper']");
      const intro = sectionRef.current.querySelector("[data-timeline='intro']");
      const line = sectionRef.current.querySelector("[data-timeline='line']");
      const container = sectionRef.current.querySelector("[data-timeline='container']");
      const listItems = sectionRef.current.querySelectorAll("[data-timeline='list-item']");
      const image = sectionRef.current.querySelector("[data-timeline='image']");

      timeline
        .from(wrapper, { opacity: 0, y: 50, duration: 0.5 })
        .from(intro, { opacity: 0, y: 20, duration: 0.25 }, "-=0.25")
        .from(line, { scaleX: 0, transformOrigin: "left", duration: 0.25 }, "-=0.25")
        .from(container, { opacity: 0, y: 50, duration: 0.5 }, "-=0.25")
        .from(listItems, { opacity: 0, x: -50, stagger: 0.15, duration: 0.25 }, "-=0.25")
        .from(image, { opacity: 0, scale: 1.2, duration: 0.5 }, "<");
    });

    return () => ctx.kill();
  }, []);

  return { sectionRef };
}
