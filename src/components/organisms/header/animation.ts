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
      const circle = sectionRef.current.querySelector('[data-fs-animation="circle"]'); // novo
      const img = sectionRef.current.querySelector('[data-fs-animation="img"]');

      if (title) {
        tl.from(title, { opacity: 0, y: 50, duration: 0.8 });
      }
      if (text) {
        tl.from(text, { opacity: 0, y: 50, duration: 0.8 });
      }
      if (button) {
        tl.from(button, { opacity: 0, y: 50, duration: 0.8 });
      }
      if (circle) {
        tl.from(circle, { opacity: 0, y: 50, duration: 0.8 }); // animação para CircleG
      }
      if (img) {
        tl.from(img, { opacity: 0, scale: 0.5, duration: 0.8 });
      }

      gsap.delayedCall(0.8, () => tl.play());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef };
};
