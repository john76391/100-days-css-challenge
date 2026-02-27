import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Component() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  useGSAP(() => {
    const yMove = 22;

    if (!tl.current) {
      tl.current = gsap.timeline({ paused: true, defaults: { duration: 0.3 } });
    }

    tl.current
      .to("#line1", { y: yMove })
      .to("#line2", { autoAlpha: 0, scale: 0 }, "<")
      .to("#line3", { y: -yMove }, "<")
      .to("#line1", {
        rotation: 135,
      })
      .to(
        "#line3",
        {
          rotation: 45,
        },
        "<",
      );
  });

  useEffect(() => {
    if (!tl.current) return;

    if (isOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-full items-center justify-center bg-[#3FAF82]">
      <div
        ref={containerRef}
        onClick={toggleMenu}
        className="flex h-13 w-20 cursor-pointer flex-col justify-between [--shadow-line:0_2px_10px_0_rgba(0,0,0,0.3)]"
      >
        <div
          id="line1"
          className="h-2 rounded-sm bg-white shadow-(--shadow-line)"
        ></div>
        <div
          id="line2"
          className="h-2 rounded-sm bg-white shadow-(--shadow-line)"
        ></div>
        <div
          id="line3"
          className="h-2 rounded-sm bg-white shadow-(--shadow-line)"
        ></div>
      </div>
    </div>
  );
}
