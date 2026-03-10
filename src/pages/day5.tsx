export default function Component() {
    const redPoints = [
        { id: 1, value: 458, left: 'left-[7px]', top: 'top-[43px]' },
        { id: 2, value: 812, left: 'left-[48px]', top: 'top-[9px]' },
        { id: 3, value: 746, left: 'left-[88px]', top: 'top-[20px]' },
        { id: 4, value: 877, left: 'left-[128px]', top: 'top-[8px]' },
        { id: 5, value: 517, left: 'left-[169px]', top: 'top-[35px]' },
        { id: 6, value: 434, left: 'left-[209px]', top: 'top-[45px]' },
        { id: 7, value: 458, left: 'left-[249px]', top: 'top-[16px]' },
    ];

    const bluePoints = [
        { id: 1, value: 26, left: 'left-[7px]', top: 'top-[58px]' },
        { id: 2, value: 41, left: 'left-[48px]', top: 'top-[47px]' },
        { id: 3, value: 22, left: 'left-[88px]', top: 'top-[62px]' },
        { id: 4, value: 36, left: 'left-[128px]', top: 'top-[52px]' },
        { id: 5, value: 25, left: 'left-[169px]', top: 'top-[58px]' },
        { id: 6, value: 13, left: 'left-[209px]', top: 'top-[71px]' },
        { id: 7, value: 20, left: 'left-[249px]', top: 'top-[61px]' },
    ];

    return (
        <div className="flex h-full items-center justify-center bg-[#42A7A1]">
            <div className="h-55 w-70 overflow-hidden rounded-sm bg-white shadow-[10px_10px_15px_rgba(0,0,0,0.3)] [--blue:#7BA2FF] [--red:#FA7373]">
                {/* header */}
                <div className="h-15 bg-[#F1BA64] text-white">
                    <div className="px-3.75 pt-3">
                        <div className="flex justify-between">
                            <span className="text-sm font-semibold uppercase">
                                weekly report
                            </span>
                            <span className="text-xs">Revenue</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-xs">01. Feb - 07. Feb</span>
                            <span className="text-sm font-semibold">
                                $ 3621.79
                            </span>
                        </div>
                    </div>
                </div>

                {/* parameter */}
                <div className="pt-2.5 pb-3.5 text-end">
                    <span className="relative pr-2.5 pl-6.25 text-[9px] text-[#606060] before:absolute before:top-1.25 before:left-1.5 before:h-0.75 before:w-2.75 before:rounded-sm before:bg-(--red) before:content-['']">
                        Views
                    </span>
                    <span className="relative pr-2.5 pl-6.25 text-[9px] text-[#606060] before:absolute before:top-1.25 before:left-1.5 before:h-0.75 before:w-2.75 before:rounded-sm before:bg-(--blue) before:content-['']">
                        Purchases
                    </span>
                </div>

                {/* statistic */}
                <div className="relative mx-auto h-20.25 w-65 [--line:#F2F2F2]">
                    <div className="absolute inset-x-0 h-px bg-(--line)"></div>
                    <div className="absolute inset-x-0 top-10 h-px bg-(--line)"></div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-(--line)"></div>

                    {/* data - views */}
                    <div className="">
                        <svg className="absolute inset-0">
                            <polyline
                                className="fill-none stroke-(--red) stroke-2 [stroke-linecap:round]"
                                points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"
                            ></polyline>
                        </svg>

                        {/* points & tooltip */}
                        <div className="text-white">
                            {redPoints.map((point) => (
                                <div
                                    key={point.id}
                                    className={`group absolute ${point.top} ${point.left} z-10 size-1.5 cursor-pointer rounded-full bg-(--red)`}
                                >
                                    <div className="invisible absolute bottom-3.25 left-1/2 -translate-x-1/2 translate-y-2.5 rounded-sm bg-(--red) px-2 py-1.5 text-xs font-semibold opacity-0 transition-all duration-400 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 after:absolute after:-bottom-0.75 after:left-1/2 after:-ml-0.75 after:block after:size-1.5 after:rotate-45 after:bg-(--red) after:content-['']">
                                        {point.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* data - purchases */}
                    <div className="">
                        <svg className="absolute inset-0">
                            <polyline
                                className="fill-none stroke-(--blue) stroke-2 [stroke-linecap:round]"
                                points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"
                            ></polyline>
                        </svg>

                        {/* points & tooltip */}
                        <div className="text-white">
                            {bluePoints.map((point) => (
                                <div
                                    key={point.id}
                                    className={`group absolute ${point.top} ${point.left} z-10 size-1.5 cursor-pointer rounded-full bg-(--blue)`}
                                >
                                    <div className="invisible absolute bottom-3.25 left-1/2 -translate-x-1/2 translate-y-2.5 rounded-sm bg-(--blue) px-2 py-1.5 text-xs font-semibold opacity-0 transition-all duration-400 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 after:absolute after:-bottom-0.75 after:left-1/2 after:-ml-0.75 after:block after:size-1.5 after:rotate-45 after:bg-(--blue) after:content-['']">
                                        {point.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* days */}
                <div className="mx-auto flex w-70 text-center text-[#949494]">
                    <span className="w-1/7 text-[9px]/7.5 uppercase">Mon</span>
                    <span className="w-1/7 text-[9px]/7.5 uppercase">Tue</span>
                    <span className="w-1/7 text-[9px]/7.5 uppercase">Wed</span>
                    <span className="w-1/7 text-[9px]/7.5 uppercase">Thu</span>
                    <span className="w-1/7 text-[9px]/7.5 uppercase">Fri</span>
                    <span className="w-1/7 text-[9px]/7.5 uppercase">Sat</span>
                    <span className="w-1/7 text-[9px]/7.5 uppercase">Sun</span>
                </div>
            </div>
        </div>
    );
}
