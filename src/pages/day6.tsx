export default function Component() {
    return (
        <div className="font-open-sans flex h-full items-center justify-center bg-linear-to-tr from-[#EEBE6C] to-[#CA7C4E] text-(--brown) [--brown:#786450]">
            <div className="flex h-74.75 w-80 overflow-hidden rounded-sm bg-white shadow-[10px_10px_15px_rgba(0,0,0,0.3)]">
                {/* profile */}
                <div className="flex h-full basis-50 flex-col items-center">
                    {/* image */}
                    <div className="group relative mt-9.5 cursor-pointer">
                        <div className="absolute -top-0.75 -left-0.75 size-19 rounded-full border border-(--brown) border-l-transparent transition-all duration-1500 ease-in-out group-hover:rotate-360"></div>
                        <div className="absolute -top-1.5 -left-1.5 size-20.5 rounded-full border border-(--brown) border-r-transparent transition-all duration-1500 ease-in-out group-hover:-rotate-360"></div>
                        <div className="relative size-17.5 overflow-hidden rounded-full">
                            <img
                                src="https://100dayscss.com/codepen/jessica-potter.jpg"
                                alt=""
                                className="size-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="mt-5 font-semibold">Jessica Potter</div>
                    <div className="text-xs">Visual Artist</div>

                    <div className="mt-8.25 flex flex-col gap-2.5">
                        <button className="h-7.5 w-30 rounded-full border border-(--brown) text-xs font-semibold transition-colors duration-300 ease-in-out hover:bg-(--brown) hover:text-white">
                            Follow
                        </button>
                        <button className="h-7.5 w-30 rounded-full border border-(--brown) text-xs font-semibold transition-colors duration-300 ease-in-out hover:bg-(--brown) hover:text-white">
                            Message
                        </button>
                    </div>
                </div>

                {/* stats */}
                <div className="grid h-full basis-30 grid-rows-3 gap-px text-[11px]/2">
                    <div className="cursor-pointer bg-[#F5E8DF] pt-7 text-center transition-colors duration-400 ease-in-out hover:bg-[#E1CFC2]">
                        <span className="block text-lg/6 font-semibold">
                            523
                        </span>
                        <span className="">Posts</span>
                    </div>
                    <div className="cursor-pointer bg-[#F5E8DF] pt-7 text-center transition-colors duration-400 ease-in-out hover:bg-[#E1CFC2]">
                        <span className="block text-lg/6 font-semibold">
                            1387
                        </span>
                        <span className="">Like</span>
                    </div>
                    <div className="cursor-pointer bg-[#F5E8DF] pt-7 text-center transition-colors duration-400 ease-in-out hover:bg-[#E1CFC2]">
                        <span className="block text-lg/6 font-semibold">
                            146
                        </span>
                        <span className="">Followers</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
