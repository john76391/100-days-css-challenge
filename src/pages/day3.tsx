import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Component() {
  useGSAP(() => {
    const duration = 4;
    // sun animation
    gsap.to("#sun", {
      keyframes: {
        "0%": { background: "#F57209", rotation: -70 },
        "30%": {
          background: "#FFEF00",
          rotation: -28,
        },
        "70%": {
          background: "#FFEF00",
        },
        "100%": {
          background: "#F57209",
          rotation: 70,
        },
      },
      duration: duration,
      repeat: -1,
    });

    // sky animation
    gsap.to("#sky", {
      keyframes: {
        "0%": { background: "#272C34" },
        "30%": { background: "#7DDFFC" },
        "70%": { background: "#7DDFFC" },
        "100%": { background: "#272C34" },
      },
      duration: duration,
      repeat: -1,
    });

    // pyramid animation
    gsap.to("#pyramid-left", {
      keyframes: {
        "0%": { background: "#272C34" },
        "30%": { background: "#F4F4F4" },
        "70%": { background: "#DDDADA" },
        "100%": { background: "#272C34" },
      },
      duration: duration,
      repeat: -1,
    });
    gsap.to("#pyramid-right", {
      keyframes: {
        "0%": { background: "#272C34" },
        "30%": { background: "#DDDADA" },
        "70%": { background: "#F4F4F4" },
        "100%": { background: "#272C34" },
      },
      duration: duration,
      repeat: -1,
    });

    // ground animation
    gsap.to("#ground", {
      keyframes: {
        "0%": { background: "#272C34" },
        "30%": { background: "#F0DE75" },
        "70%": { background: "#F0DE75" },
        "100%": { background: "#272C34" },
      },
      duration: duration,
      repeat: -1,
    });

    // shadow animation
    gsap.to("#shadow", {
      keyframes: {
        "0%": {
          scaleY: 0,
          clipPath: "polygon(115px 0%, 231px 0%, 100% 100%)",
        },
        "30%": {
          scaleY: 1,
          clipPath: "polygon(115px 0%, 231px 0%, 80% 100%)",
        },
        "55%": {
          scaleY: 0.4,
        },
        "75%": {
          scaleY: 1,
        },
        "100%": {
          scaleY: 0,
          clipPath: "polygon(115px 0%, 231px 0%, 0% 100%)",
        },
      },
      duration: duration,
      repeat: -1,
    });
  });

  return (
    <div className="flex h-full items-center justify-center bg-[#272C34]">
      <div className="size-45 overflow-hidden rounded-full">
        {/* sky */}
        <div id="sky" className="relative h-31 bg-[#7DDFFC]">
          {/* sun */}
          <div
            id="sun"
            className="absolute top-1.75 left-18.25 size-8.5 origin-[50%_400%] rounded-full bg-[#FFEF00]"
          ></div>
          {/* pyramid */}
          <div
            id="pyramid-left"
            className="absolute bottom-0 left-8.75 h-14.25 w-29 bg-[#F4F4F4] [clip-path:polygon(0%_100%,100%_100%,50%_0%)]"
          ></div>
          <div
            id="pyramid-right"
            className="absolute bottom-0 left-23.25 h-14.25 w-14.5 bg-[#DDDADA] [clip-path:polygon(30%_100%,100%_100%,0%_0%)]"
          ></div>
        </div>
        {/* ground */}
        <div id="ground" className="relative h-full bg-[#F0DE75]">
          {/* shadow */}
          <div
            id="shadow"
            className="absolute -left-20 h-7.5 w-90 origin-top bg-[rgba(0,0,0,0.2)] [clip-path:polygon(115px_0%,231px_0%,80%_100%)]"
          ></div>
        </div>
      </div>
    </div>
  );
}
