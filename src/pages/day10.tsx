import { useRef, useState } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Heart } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Component() {
    const heartRef = useRef<SVGSVGElement | null>(null);
    const circleRef = useRef<SVGCircleElement | null>(null);
    const [pointsets] = useState(() =>
        Array.from({ length: 15 }, (_, i) => ({
            rotate: i * 6,
        })),
    );

    useGSAP(() => {
        gsap.to(heartRef.current, {
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            keyframes: {
                '0%': {
                    scale: 1,
                },
                '100%': {
                    scale: 1.2,
                },
            },
        });

        // const tl = gsap.timeline({
        //   repeat: -1,
        //   defaults: {
        //     ease: "linear",
        //   },
        // });

        // 方法一 (官方解法)
        // 重點在 scaleY: -1，且一定要設定 transformOrigin 是中間，不然 svg 會整個跑掉
        // tl.to(circleRef.current, {
        //   strokeDashoffset: 0,
        //   duration: 2.5,
        // })
        //   .to(circleRef.current, {
        //     scaleY: -1,
        //     duration: 0,
        //     transformOrigin: "50% 50%",
        //   })
        //   .to(circleRef.current, {
        //     strokeDashoffset: 625,
        //     duration: 2.5,
        //   });

        //  方法二
        // offset 正數或負數決定了 stroke 看起來是縮回去或長出來
        // tl.to(circleRef.current, {
        //   strokeDashoffset: 0,
        //   duration: 2.5,
        // }).to(circleRef.current, {
        //   strokeDashoffset: -625,
        //   duration: 2.5,
        // });

        // 方法三
        // 用 keyframes 的其中一種，官方文件有更多 keyframes 寫法
        // 優點在於可以指定同一個元素設定多個動畫，不需要在每個動畫都重新指定元素
        gsap.to(circleRef.current, {
            keyframes: {
                '0%': {
                    strokeDashoffset: 625,
                },
                '50%': {
                    strokeDashoffset: 0,
                },
                '100%': {
                    strokeDashoffset: -625,
                },
                easeEach: 'linear',
            },
            duration: 5,
            repeat: -1,
        });
    });

    return (
        <div className="flex h-full items-center justify-center rounded-sm bg-[#4C4C4C] text-white">
            <div className="font-open-sans relative box-content flex size-53 items-center justify-center rounded-full border-[7px] border-[#3A3A3A] bg-[#242424] text-xs uppercase">
                {/* point set */}
                {pointsets.map((pointset, i) => (
                    <div
                        key={i}
                        style={{
                            rotate: `${pointset.rotate}deg`,
                        }}
                        className="absolute size-47"
                    >
                        <div className="absolute left-1/2 size-0.5 rounded-full bg-[#D3D3D3]"></div>
                        <div className="absolute top-1/2 right-0 size-0.5 rounded-full bg-[#D3D3D3]"></div>
                        <div className="absolute bottom-0 left-1/2 size-0.5 rounded-full bg-[#D3D3D3]"></div>
                        <div className="absolute top-1/2 size-0.5 rounded-full bg-[#D3D3D3]"></div>
                    </div>
                ))}

                <svg
                    viewBox="0 0 202 202"
                    className="absolute top-1.25 left-1.25 size-50.5 -rotate-90 rounded-full"
                >
                    <circle
                        ref={circleRef}
                        cx="101"
                        cy="101"
                        r="99.5"
                        strokeDashoffset="625"
                        className="fill-none stroke-[#F85B5B] stroke-3 [stroke-dasharray:625]"
                    ></circle>
                </svg>

                <div className="">
                    <span className="">Mon 15 Jan 2015</span>
                    <span className="my-1 block text-[40px] font-bold">
                        11:42
                    </span>

                    <div className="flex">
                        <div className="flex items-center">
                            <Heart
                                ref={heartRef}
                                className="mr-1 size-3 fill-red-500 stroke-red-500"
                            />
                            <span className="">81</span>
                        </div>
                        <span className="ml-auto">1248 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
