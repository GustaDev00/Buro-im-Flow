import { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({ paused: true });
      const title = sectionRef.current.querySelector('[data-fs-animation="title"]');
      const text = sectionRef.current.querySelector('[data-fs-animation="text"]');
      const button = sectionRef.current.querySelector('[data-fs-animation="button"]');
      const circle = sectionRef.current.querySelector('[data-fs-animation="circle"]');
      const img = sectionRef.current.querySelector('[data-fs-animation="img"]');

      const elements = [title, text, button, circle, img];

      elements.forEach((element, index) => {
        if (element) {
          tl.fromTo(
            element,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8 },
            index * 0.2,
          );
        }
      });

      gsap.delayedCall(0.8, () => tl.play());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef };
};
