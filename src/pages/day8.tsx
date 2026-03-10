import { useState } from 'react';

import { motion } from 'motion/react';

export default function Component() {
    const [blubbs] = useState(() =>
        Array.from({ length: 8 }, (_, i) => ({
            id: i,
            rotate: Math.floor(Math.random() * 300),
            origin: 40 - (i + 1) * 3,
            duration: 2.5 + (i + 1) / 5,
            delay: (i + 1) / 5,
        })),
    );
    const [sparkles] = useState(() =>
        Array.from({ length: 8 }, (_, i) => ({
            id: i,
            rotate: Math.floor(Math.random() * 300),
            origin: 60 - (i + 1) * 2,
            duration: 3.5 + (i + 1) / 5,
            delay: (i + 1) / 5,
            size: 7 + (i + 1),
        })),
    );

    return (
        <div className="flex h-full items-center justify-center bg-black contrast-2500">
            {/* center */}
            <div className="relative">
                {/* ball */}
                <div className="relative size-22.5 rounded-full bg-white blur-lg"></div>
                {/* blubb */}
                {blubbs.map((blubb) => (
                    <div
                        key={blubb.id}
                        style={{
                            rotate: blubb.rotate + 'deg',
                        }}
                        className="absolute top-5 left-5 size-12.5"
                    >
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: blubb.duration,
                                ease: 'easeInOut',
                                delay: blubb.delay,
                                repeat: Infinity,
                            }}
                            style={{
                                transformOrigin: `${blubb.origin}px ${blubb.origin}px`,
                            }}
                            className="absolute size-12.5 rounded-full bg-white blur-[5px]"
                        ></motion.div>
                    </div>
                ))}

                {/* sparkle */}
                {sparkles.map((sparkle) => (
                    <div
                        key={sparkle.id}
                        style={{
                            rotate: sparkle.rotate + 'deg',
                            width: sparkle.size + 'px',
                            height: sparkle.size + 'px',
                        }}
                        className="absolute top-9.5 left-9.5"
                    >
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: sparkle.duration,
                                ease: 'easeInOut',
                                delay: sparkle.delay,
                                repeat: Infinity,
                            }}
                            style={{
                                transformOrigin: `${sparkle.origin}px ${sparkle.origin}px`,
                                width: sparkle.size + 'px',
                                height: sparkle.size + 'px',
                            }}
                            className="absolute rounded-full bg-white blur-[3px]"
                        ></motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
