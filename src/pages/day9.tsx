import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Component() {
  const [dropBig] = useState(() =>
    Array.from({ length: 10 }, (_, index) => ({
      left: -20 + 38 * (index + 1),
      duration: 0.7 + Math.floor(Math.random() * 2 + 1) / 10,
      delay: Math.floor(Math.random() * 50 + 1) / 25,
    })),
  );

  const [dropMedium] = useState(() =>
    Array.from({ length: 10 }, (_, index) => ({
      left: -20 + 38 * (index + 1),
      duration: 1.3 + Math.floor(Math.random() * 2 + 1) / 10,
      delay: Math.floor(Math.random() * 50 + 1) / 25,
    })),
  );

  const [dropSmall] = useState(() =>
    Array.from({ length: 10 }, (_, index) => ({
      left: -20 + 38 * (index + 1),
      duration: 1.9 + Math.floor(Math.random() * 2 + 1) / 10,
      delay: Math.floor(Math.random() * 50 + 1) / 25,
    })),
  );

  const crater1 = "size-[11px]";
  const crater2 = "size-[6px]";
  const crater3 = "size-[4px]";

  const craters = [
    { id: 1, size: crater1, top: "top-[9px]", left: "left-[28px]" }, // 假設 crater-1 是基準
    { id: 2, size: crater1, top: "top-[12px]", left: "left-0" },
    { id: 3, size: crater1, top: "top-[56px]", left: "left-[10px]" },
    {
      id: 4,
      size: crater2,
      top: "top-[37px]",
      left: "left-[49px]",
    },
    {
      id: 5,
      size: crater2,
      top: "top-[24px]",
      left: "left-[61px]",
    },
    {
      id: 6,
      size: crater2,
      top: "top-[55px]",
      left: "left-[33px]",
    },
    {
      id: 7,
      size: crater2,
      top: "top-[17px]",
      left: "left-[46px]",
    },
    {
      id: 8,
      size: crater2,
      top: "top-[28px]",
      left: "left-[27px]",
    },
    {
      id: 9,
      size: crater2,
      top: "top-[39px]",
      left: "left-[17px]",
    },
    {
      id: 10,
      size: crater3,
      top: "top-[25px]",
      left: "left-[15px]",
    },
    {
      id: 11,
      size: crater3,
      top: "top-[37px]",
      left: "left-[37px]",
    },
  ];

  const hills = [
    {
      id: 1,
      width: "w-[337px]",
      height: "h-[281px]",
      top: "top-[201px]",
      left: "left-[-57px]",
      bg: "bg-[#26314F]",
    },
    {
      id: 2,
      width: "w-[337px]",
      height: "h-[281px]",
      top: "top-[197px]",
      left: "left-[177px]",
      bg: "bg-[#26314F]",
    },
    {
      id: 3,
      width: "w-[337px]",
      height: "h-[281px]",
      top: "top-[248px]",
      left: "left-[-137px]",
      bg: "bg-[#303C5D]",
    },
    {
      id: 4,
      width: "w-[337px]",
      height: "h-[281px]",
      top: "top-[221px]",
      left: "left-[63px]",
      bg: "bg-[#303C5D]",
    },
    {
      id: 5,
      width: "w-[337px]",
      height: "h-[281px]",
      top: "top-[248px]",
      left: "left-[292px]",
      bg: "bg-[#303C5D]",
    },
  ];

  return (
    <div className="font-open-sans relative flex h-full items-center justify-center overflow-hidden bg-[#1A2238] font-light text-[#394568] shadow-[1px_2px_10px_0_rgba(0,0,0,0.3)] [--drop-color:#7FC1F9]">
      {/* moon */}
      <motion.div
        animate={{
          x: 0,
          y: 0,
        }}
        initial={{
          x: -20,
          y: 200,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute top-11.25 left-13.75 size-16.75 overflow-hidden rounded-full bg-[#F6EDBD] shadow-[0_0_10px_0_#F6EDBD]"
      >
        {/* crater */}
        {craters.map((crater) => (
          <div
            key={crater.id}
            className={cn(
              "absolute rounded-[10px] bg-[#ECE1A8]",
              crater.left,
              crater.top,
              crater.size,
            )}
          ></div>
        ))}
      </motion.div>

      {/* hill */}
      {hills.map((hill) => (
        <div
          key={hill.id}
          className={cn(
            "absolute rounded-[50%]",
            hill.top,
            hill.left,
            hill.width,
            hill.height,
            hill.bg,
          )}
        ></div>
      ))}

      {/* data */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-22.5 bg-white">
        <span className="ml-5 text-[45px]/22.5">12°</span>
        <div className="mt-6.25 ml-5 flex flex-col text-[15px]/5">
          <span className="">Wind: E 7 km/h</span>
          <span className="">Humidity: 87%</span>
        </div>

        <div className="mt-6.25 mr-5 ml-auto text-end text-[15px]/5 uppercase">
          <div className="">
            <span className="">Tue</span>
            <span className="ml-5.5 font-normal">21° / 9°</span>
          </div>
          <div className="">
            <span className="">Wed</span>
            <span className="ml-3 font-normal">23° / 10°</span>
          </div>
        </div>
      </div>

      {/* drop */}
      {dropBig.map((drop, i) => (
        <motion.div
          key={i}
          animate={{
            x: [40, 0, 0],
            y: [-320, 0, 0],
            rotate: [17, 17, 0],
            scaleX: [1, 1, 3],
            scaleY: [1, 1, 0],
            transition: {
              duration: drop.duration,
              delay: drop.delay,
              times: [0, 0.85, 1],
              ease: "linear",
              repeat: Infinity,
            },
          }}
          style={{
            left: drop.left,
          }}
          className="absolute bottom-22.5 z-20 size-2 origin-bottom rounded-full bg-(--drop-color)"
        >
          <div className="absolute -top-0.5 left-px size-1.5 rounded-[3px] bg-(--drop-color)"></div>
          <div className="absolute -top-1.25 left-0.5 h-2.5 w-1 rounded-full bg-(--drop-color)"></div>
        </motion.div>
      ))}

      {dropMedium.map((drop, i) => (
        <motion.div
          key={i}
          animate={{
            x: [40, 0, 0],
            y: [-320, 0, 0],
            rotate: [17, 17, 0],
            scaleX: [1, 1, 3],
            scaleY: [1, 1, 0],
            transition: {
              duration: drop.duration,
              delay: drop.delay,
              times: [0, 0.85, 1],
              ease: "linear",
              repeat: Infinity,
            },
          }}
          style={{
            left: drop.left,
          }}
          className="absolute bottom-22.5 z-20 size-1.5 origin-bottom rounded-full bg-(--drop-color) opacity-60"
        >
          <div className="absolute -top-0.5 left-px size-1 rounded-[3px] bg-(--drop-color)"></div>
          <div className="absolute -top-1 left-0.5 h-1.5 w-0.5 rounded-full bg-(--drop-color)"></div>
        </motion.div>
      ))}

      {dropSmall.map((drop, i) => (
        <motion.div
          key={i}
          animate={{
            x: [40, 0, 0],
            y: [-320, 0, 0],
            rotate: [17, 17, 0],
            scaleX: [1, 1, 3],
            scaleY: [1, 1, 0],
            transition: {
              duration: drop.duration,
              delay: drop.delay,
              times: [0, 0.85, 1],
              ease: "linear",
              repeat: Infinity,
            },
          }}
          style={{
            left: drop.left,
          }}
          className="absolute bottom-22.5 z-20 size-1 origin-bottom rounded-full bg-(--drop-color) opacity-30"
        >
          <div className="absolute -top-0.5 left-px size-0.5 rounded-[3px] bg-(--drop-color)"></div>
          <div className="absolute -top-0.75 left-px h-1 w-0.5 rounded-full bg-(--drop-color)"></div>
        </motion.div>
      ))}
    </div>
  );
}
