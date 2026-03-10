import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(useGSAP, CustomEase);

export default function Component() {
    useGSAP(() => {
        const initialShadow = '2px 2px 3px 2px rgba(0, 0, 0, 0.2)';
        const finalShadow = '10px 10px 15px 0 rgba(0, 0, 0, 0.3)';

        // keyframes
        // dot-3
        gsap.to('#dot-3', {
            keyframes: {
                '0%': {
                    boxShadow: initialShadow,
                    scale: 0,
                },
                '10%': {
                    boxShadow: finalShadow,
                    scale: 0,
                    ease: CustomEase.create(
                        'custom',
                        'M0,0 C0.21,0.98 0.6,0.99 1,1 ',
                    ),
                },
                '100%': {
                    boxShadow: finalShadow,
                    scale: 1,
                    ease: CustomEase.create(
                        'custom',
                        'M0,0 C0.21,0.98 0.6,0.99 1,1 ',
                    ),
                },
            },
            duration: 2,
            repeat: -1,
            yoyo: true,
        });

        // dot-2
        gsap.to('#dot-2', {
            keyframes: {
                '0%': {
                    boxShadow: initialShadow,
                    scale: 0,
                },
                '40%': {
                    boxShadow: finalShadow,
                    scale: 0,
                    ease: CustomEase.create(
                        'custom',
                        'M0,0 C0.21,0.98 0.6,0.99 1,1 ',
                    ),
                },
                '100%': {
                    boxShadow: finalShadow,
                    scale: 1,
                    ease: CustomEase.create(
                        'custom',
                        'M0,0 C0.21,0.98 0.6,0.99 1,1 ',
                    ),
                },
            },
            duration: 2,
            repeat: -1,
            yoyo: true,
        });

        // dot-1
        gsap.to('#dot-1', {
            keyframes: {
                '0%': {
                    boxShadow: initialShadow,
                    scale: 0,
                },
                '70%': {
                    boxShadow: finalShadow,
                    scale: 0,
                    ease: CustomEase.create(
                        'custom',
                        'M0,0 C0.21,0.98 0.6,0.99 1,1 ',
                    ),
                },
                '100%': {
                    boxShadow: finalShadow,
                    scale: 1,
                    ease: CustomEase.create(
                        'custom',
                        'M0,0 C0.21,0.98 0.6,0.99 1,1 ',
                    ),
                },
            },
            duration: 2,
            repeat: -1,
            yoyo: true,
        });

        // // timeline
        // const tl = gsap.timeline({
        //   repeat: -1,
        //   yoyo: true,
        // });

        // tl.to("#dot-3", {
        //   boxShadow: initialShadow,
        //   scale: 0,
        //   duration: 0,
        // })
        //   .to("#dot-3", {
        //     boxShadow: finalShadow,
        //     scale: 0,
        //     duration: 0.2,
        //   })
        //   .to("#dot-3", {
        //     boxShadow: finalShadow,
        //     scale: 1,
        //     duration: 1.8,
        //   })
        //   .to(
        //     "#dot-2",
        //     {
        //       boxShadow: initialShadow,
        //       scale: 0,
        //       duration: 0,
        //     },
        //     0,
        //   )
        //   .to(
        //     "#dot-2",
        //     {
        //       boxShadow: finalShadow,
        //       scale: 0,
        //       duration: 0.8,
        //     },
        //     ">",
        //   )
        //   .to(
        //     "#dot-2",
        //     {
        //       boxShadow: finalShadow,
        //       scale: 1,
        //       duration: 1.2,
        //     },
        //     ">",
        //   )
        //   .to(
        //     "#dot-1",
        //     {
        //       boxShadow: initialShadow,
        //       scale: 0,
        //       duration: 0,
        //     },
        //     0,
        //   )
        //   .to(
        //     "#dot-1",
        //     {
        //       boxShadow: finalShadow,
        //       scale: 0,
        //       duration: 1.4,
        //     },
        //     ">",
        //   )
        //   .to(
        //     "#dot-1",
        //     {
        //       boxShadow: finalShadow,
        //       scale: 1,
        //       duration: 0.6,
        //     },
        //     ">",
        //   );
    });

    return (
        <div className="flex h-full items-center justify-center bg-[#E56262]">
            <div className="relative size-55">
                <div
                    id="dot-1"
                    className="dots absolute top-1/2 left-1/2 z-3 size-7.5 -translate-1/2 rounded-full bg-white"
                ></div>
                <div
                    id="dot-2"
                    className="dots absolute top-1/2 left-1/2 z-2 size-15 -translate-1/2 rounded-full bg-white"
                ></div>
                <div
                    id="dot-3"
                    className="dots absolute top-1/2 left-1/2 z-1 size-22.5 -translate-1/2 rounded-full bg-white"
                ></div>
            </div>
        </div>
    );
}
