import { useState } from 'react';

import { Heart, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

export default function Component() {
    const [selected, setSelected] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const images = [
        'https://100dayscss.com/codepen/13-1.jpg',
        'https://100dayscss.com/codepen/13-2.jpg',
        'https://100dayscss.com/codepen/13-3.jpg',
        'https://100dayscss.com/codepen/13-4.jpg',
    ];
    const buttons = [Phone, MessageSquare, Heart];

    const handleSelect = (i: number) => {
        setSelected(i);
        setIsOpen(true);
    };
    const removeSelect = () => setIsOpen(false);

    return (
        <div className="font-open-sans relative h-full bg-white text-white shadow-[1px_2px_10px_rgba(0,0,0,0.3)] [--red:#EC6565]">
            <div className="grid grid-cols-2">
                {images.map((image, i) => (
                    <div
                        onClick={() => handleSelect(i)}
                        key={i}
                        className="group relative mt-1 ml-1 size-48.5 cursor-pointer"
                    >
                        <img src={image} alt="" className="" />
                        {/* overlay */}
                        <div className="absolute inset-0 bg-black opacity-0 transition-all duration-600 ease-in-out group-hover:opacity-40"></div>
                        {/* plus */}
                        <div className="pointer-events-none absolute top-1/2 left-1/2 size-12.5 -translate-1/2 scale-200 rounded-full bg-(--red) opacity-0 shadow-[2px_4px_10px_rgba(0,0,0,0.5)] transition-all duration-400 ease-in-out group-hover:scale-100 group-hover:opacity-100">
                            {Array.from({ length: 2 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        'absolute top-1/2 left-1/2 h-0.5 w-3.5 -translate-1/2 bg-white',
                                        i && 'rotate-90',
                                    )}
                                ></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* detail */}
            <div
                className={cn(
                    'absolute inset-0 z-2 overflow-hidden',
                    !isOpen ? 'pointer-events-none' : 'pointer-events-auto',
                )}
            >
                {/* close */}
                <motion.div
                    onClick={removeSelect}
                    animate={{
                        y: !isOpen ? '-145%' : 0,
                    }}
                    initial={{
                        y: '-145%',
                    }}
                    transition={{
                        y: {
                            duration: !isOpen ? 0.5 : 0.6,
                            ease: !isOpen ? 'easeIn' : 'easeOut',
                            delay: !isOpen ? 0 : 0.6,
                        },
                    }}
                    className={cn(
                        'group absolute top-2.5 right-2.5 z-2 size-12.5 cursor-pointer rounded-full bg-(--red) transition-colors duration-300 ease-in-out hover:bg-white',
                    )}
                >
                    {Array.from({ length: 2 }).map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                'absolute top-1/2 left-1/2 h-0.5 w-3.5 -translate-1/2 bg-white transition-all duration-300 ease-in-out group-hover:bg-(--red)',
                                i ? 'rotate-45' : 'rotate-135',
                            )}
                        ></div>
                    ))}
                </motion.div>

                {/* header */}
                <div
                    className={cn(
                        'transition-all duration-600',
                        !isOpen
                            ? '-translate-y-[105%] delay-400 ease-in'
                            : 'translate-y-0 ease-out',
                    )}
                >
                    <img
                        src="https://100dayscss.com/codepen/13-1-header.jpg"
                        alt=""
                        className=""
                    />
                </div>
                {/* image */}
                <div
                    className={cn(
                        'absolute top-32.5 left-37.5 z-1 size-25 overflow-hidden rounded-full border-2 shadow-[4px_6px_15px_rgba(0,0,0,0.2)] transition-all duration-600',
                        !isOpen
                            ? '-translate-y-62.5 delay-200 ease-in'
                            : 'translate-0 delay-300 ease-out',
                    )}
                >
                    <img
                        src={selected ? images[selected] : images[0]}
                        alt=""
                        className=""
                    />
                </div>
                {/* infos */}
                <div
                    className={cn(
                        'h-55 bg-(--red) pt-16.75 transition-all duration-600',
                        !isOpen
                            ? 'translate-y-[105%] delay-400 ease-in'
                            : 'translate-y-0 ease-out',
                    )}
                >
                    {/* name */}
                    <div className="text-center font-semibold">Julia Toth</div>
                    {/* action */}
                    <div className="mt-8.75 text-center">
                        {buttons.map((Button) => (
                            <button className="mx-5 size-11.25 cursor-pointer rounded-full border shadow-[2px_3px_6px_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out hover:bg-white hover:text-(--red)">
                                <Button className="mx-auto size-5 fill-white" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
