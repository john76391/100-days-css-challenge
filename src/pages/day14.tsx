import { useState } from 'react';

import { motion } from 'motion/react';

export default function Component() {
    const [streets] = useState(() =>
        Array.from({ length: 9 }).map((_, i) => ({
            width: 2 + (i + 1) * 2,
            duration: 0.8 + Math.floor(Math.random() * 2 + 1) / 10,
            delay: Math.floor(Math.random() * 10 + 1) / 10,
        })),
    );
    const [clouds] = useState(() =>
        Array.from({ length: 9 }).map((_, i) => ({
            top: 20 + (i + 1) * 14,
            width: 10 + Math.floor(Math.random() * 150 + 1) / 10,
            duration: 0.6 + Math.floor(Math.random() * 2 + 1) / 10,
            delay: Math.floor(Math.random() * 10 + 1) / 10,
        })),
    );

    return (
        <div className="flex h-full items-center justify-center bg-[#4B4841]">
            {/* camera */}
            <div className="group h-45 w-80 perspective-midrange">
                {/* space */}
                {/* perspective-[1000px] */}
                <div className="relative size-full shadow-[8px_10px_15px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-in-out transform-3d group-hover:rotate-x-180 group-hover:shadow-[8px_-10px_15px_rgba(0,0,0,0.5)]">
                    {/* front */}
                    <div className="absolute inset-0 flex items-center justify-center rounded bg-[#FFCE4E] backface-hidden">
                        <motion.img
                            animate={{
                                scaleY: [1, 1.03, 1],
                                transition: {
                                    times: [0, 0.5, 1],
                                    repeat: Infinity,
                                    duration: 0.6,
                                    ease: 'easeInOut',
                                },
                            }}
                            src="https://100dayscss.com/codepen/bycicle.svg"
                            alt=""
                            className="origin-bottom"
                        />
                        {/* street */}
                        <div className="absolute top-31.75 h-0.75 w-40 overflow-hidden">
                            {streets.map((street, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        x: -210,
                                        scaleX: 0.8,
                                    }}
                                    transition={{
                                        duration: street.duration,
                                        ease: 'linear',
                                        delay: street.delay,
                                        repeat: Infinity,
                                    }}
                                    style={{
                                        width: street.width,
                                    }}
                                    className="absolute top-0 -right-6.25 h-0.75 rounded bg-[#4B4841] transform-3d"
                                ></motion.div>
                            ))}
                        </div>
                    </div>
                    {/* back */}
                    <div className="absolute inset-0 flex rotate-x-180 items-center justify-center rounded bg-[#FFCE4E] backface-hidden">
                        <motion.img
                            animate={{
                                y: [-5, 5, -5],
                                transition: {
                                    times: [0, 0.5, 1],
                                    duration: 1.5,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                },
                            }}
                            src="https://100dayscss.com/codepen/helicopter.svg"
                            alt=""
                            className="relative z-1"
                        />
                        {/* cloud */}
                        <div className="absolute inset-y-0 w-40 overflow-hidden">
                            {clouds.map((cloud, i) => (
                                <motion.div
                                    animate={{
                                        scaleX: 0.8,
                                        x: -210,
                                    }}
                                    transition={{
                                        duration: cloud.duration,
                                        ease: 'linear',
                                        delay: cloud.delay,
                                        repeat: Infinity,
                                    }}
                                    key={i}
                                    style={{
                                        width: cloud.width,
                                        top: cloud.top,
                                    }}
                                    className="absolute -right-6.25 h-0.75 rounded bg-[#4B4841] transform-3d"
                                ></motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
