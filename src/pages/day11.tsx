import { motion } from 'motion/react';

export default function Component() {
    return (
        <div className="relative flex h-full items-center justify-center bg-radial from-[rgba(246,232,215,1)] to-[rgba(218,190,155,1)]">
            <motion.div
                animate={{
                    opacity: 1,
                }}
                initial={{
                    opacity: 0,
                }}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 1,
                }}
                className=""
            >
                {/* shoes */}
                {Array.from({ length: 2 }).map((_, i) => (
                    // leg
                    <motion.div
                        key={i}
                        animate={{
                            rotate: [-22, 40, -22],
                            transition: {
                                times: [0, 0.5, 1],
                                duration: 2,
                                ease: 'easeInOut',
                                repeat: Infinity,
                                delay: i,
                            },
                        }}
                        className="absolute top-0 left-36.75 h-61.25 w-37.75 origin-top"
                    >
                        {/* shoe */}
                        <motion.div
                            animate={{
                                rotate: [-10, 0, 10, 0, -10],
                                y: [-5, 0, -10, -30, -5],
                                x: [10, 0, 10, 0, 10],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    times: [0, 0.25, 0.5, 0.75, 1],
                                    delay: i,
                                },
                            }}
                            className="absolute bottom-0 left-0 h-32 w-37.75 origin-[0_95%] bg-[url('https://100dayscss.com/codepen/doc-martens.svg')] bg-center bg-no-repeat"
                        ></motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* floor */}
            <div className="absolute inset-x-0 bottom-0 h-39 bg-[#232323]"></div>
        </div>
    );
}
