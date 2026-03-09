import React, { useMemo } from "react";

const MetaballsChallenge = () => {
  // 1. 鎖定 8 個 Blubbs 的隨機旋轉與參數
  const blubbs = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        initialRotate: Math.floor(Math.random() * 360),
        duration: 2.5 + (i + 1) / 5,
        delay: (i + 1) / 5,
        origin: 40 - (i + 1) * 3,
      })),
    [],
  );

  // 2. 鎖定 10 個 Sparkles 的隨機旋轉與參數
  const sparkles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        initialRotate: Math.floor(Math.random() * 360),
        duration: 3.5 + (i + 1) / 5,
        delay: (i + 1) / 5,
        origin: 60 - (i + 1) * 2,
        size: 7 + (i + 1),
      })),
    [],
  );

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-gray-900">
      {/* .frame - 核心控制層 */}
      <div className="relative h-[400px] w-[400px] overflow-hidden rounded-[2px] bg-black shadow-lg [filter:contrast(25)]">
        {/* .center - 置中容器 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* .ball - 中心大球 */}
          <div className="h-[90px] w-[90px] rounded-full bg-white blur-[15px]"></div>

          {/* Blubbs (中球) */}
          {blubbs.map((b) => (
            <div
              key={`blubb-${b.id}`}
              className="absolute top-[20px] left-[20px] h-[50px] w-[50px]"
              style={{ transform: `rotate(${b.initialRotate}deg)` }}
            >
              <div
                className="animate-spin-slow h-[50px] w-[50px] rounded-full bg-white blur-[5px]"
                style={{
                  transformOrigin: `${b.origin}px ${b.origin}px`,
                  animation: `rotate ${b.duration}s ease-in-out ${b.delay}s infinite`,
                }}
              />
            </div>
          ))}

          {/* Sparkles (小碎球) */}
          {sparkles.map((s) => (
            <div
              key={`sparkle-${s.id}`}
              className="absolute top-[38px] left-[38px]"
              style={{
                transform: `rotate(${s.initialRotate}deg)`,
                width: `${s.size}px`,
                height: `${s.size}px`,
              }}
            >
              <div
                className="rounded-full bg-white blur-[3px]"
                style={{
                  width: `${s.size}px`,
                  height: `${s.size}px`,
                  transformOrigin: `${s.origin}px ${s.origin}px`,
                  animation: `rotate ${s.duration}s ease-in-out ${s.delay}s infinite`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 注入全域 CSS Animation (如果不想寫在外部 CSS 檔) */}
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg) translate3d(0, 0, 0); }
          to { transform: rotate(360deg) translate3d(0, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default MetaballsChallenge;
