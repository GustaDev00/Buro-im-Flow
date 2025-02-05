import gsap from "gsap";
import { useEffect, useRef } from "react";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      // Aqui você pode colocar sua animação
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
