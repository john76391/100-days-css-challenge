import { useState } from 'react';

import {
    Bell,
    CircleGauge,
    MessagesSquare,
    Search,
    Settings,
    UserRound,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Component() {
    const [showInput, setShowInput] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowInput = () => setShowInput(!showInput);
    const toggleShowMenu = () => setShowMenu(!showMenu);

    return (
        <div className="font-open-sans relative flex h-full items-center justify-center overflow-hidden bg-(--blue-dark) text-[#666666] shadow [--blue-dark:#264057] [--blue-light:#B2DAFF] [--blue:#5F98CD]">
            <div
                className={`relative z-2 size-75 overflow-hidden rounded-sm bg-white transition-all duration-500 ease-in-out ${showMenu ? 'translate-x-37.5' : 'translate-x-0'}`}
            >
                {/* header */}
                <div className="relative flex h-15 items-center justify-between bg-(--blue) px-5">
                    {/* icon */}
                    <div
                        onClick={toggleShowMenu}
                        className="group relative h-3.75 w-7.25 cursor-pointer"
                    >
                        <div className="absolute top-0 h-0.75 w-5 rounded-sm bg-(--blue-light) transition-all duration-200 ease-in-out group-hover:bg-white"></div>
                        <div className="absolute -top-0.5 right-0 size-1.75 rounded-full bg-(--blue-light) transition-all duration-200 ease-in-out group-hover:bg-white"></div>
                        <div className="absolute bottom-0 h-0.75 w-full rounded-sm bg-(--blue-light) transition-all duration-200 ease-in-out group-hover:bg-white"></div>
                    </div>

                    <span className="text-[15px] font-semibold text-white">
                        Notifications
                    </span>

                    <input
                        type="text"
                        className={`absolute right-13.75 h-8.5 w-57.5 rounded-2xl bg-white px-4.25 text-sm text-[#666] transition-all duration-200 ease-in-out focus:outline-none ${showInput ? 'pointer-events-auto translate-x-0 opacity-100' : 'pointer-events-none translate-x-3.75 opacity-0'}`}
                        placeholder="Search..."
                    />

                    <button
                        className="group cursor-pointer"
                        onClick={toggleShowInput}
                    >
                        <Search className="text-(--blue-light) transition-all duration-200 ease-in-out group-hover:text-white" />
                    </button>
                </div>

                {/* notifications */}
                <div className="relative h-full overflow-hidden">
                    <div className="absolute inset-y-0 left-6.75 w-0.75 bg-[#EBEBEB]"></div>

                    <motion.div
                        initial={{
                            y: 50,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 100,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.4,
                        }}
                        className="relative my-6.25 mr-5 ml-10.75 flex cursor-pointer flex-col hover:text-(--blue)"
                    >
                        <div className="absolute top-0 -left-5 size-2.75 rounded-full border-2 border-(--blue) bg-white shadow-[0_0_0_3px_#fff]"></div>
                        <span className="mb-0.5 text-[11px]/2.75">9:24 AM</span>
                        <p className="text-[15px]/5">
                            <b className="font-semibold">John Walker </b>
                            posted a photo on your wall.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{
                            y: 50,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 100,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.6,
                        }}
                        className="relative my-6.25 mr-5 ml-10.75 flex cursor-pointer flex-col hover:text-(--blue)"
                    >
                        <div className="absolute top-0 -left-5 size-2.75 rounded-full border-2 border-(--blue) bg-white shadow-[0_0_0_3px_#fff]"></div>
                        <span className="mb-0.5 text-[11px]/2.75">8:19 AM</span>
                        <p className="text-[15px]/5">
                            <b className="font-semibold">Alice Parker </b>
                            commented your last post.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{
                            y: 50,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 100,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.8,
                        }}
                        className="relative my-6.25 mr-5 ml-10.75 flex cursor-pointer flex-col hover:text-(--blue)"
                    >
                        <div className="absolute top-0 -left-5 size-2.75 rounded-full border-2 border-(--blue) bg-white shadow-[0_0_0_3px_#fff]"></div>
                        <span className="mb-0.5 text-[11px]/2.75">
                            Yesterday
                        </span>
                        <p className="text-[15px]/5">
                            <b className="font-semibold">Luke Wayne </b>
                            added you as friend.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* menu */}
            <div
                className={`absolute top-16.25 left-12.5 z-1 h-67.5 w-42.5 rounded-sm bg-[#43627D] shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-500 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-5'}`}
            >
                <ul className="py-2.5 text-[#93B2CD]">
                    <li className="hover:text-whit2 flex cursor-pointer items-center gap-3 px-4.25 py-4.5 text-sm/3.5 transition-all duration-300 ease-in-out hover:bg-[#385269]">
                        <CircleGauge className="size-4" /> Dashboard
                    </li>
                    <li className="hover:text-whit2 flex cursor-pointer items-center gap-3 px-4.25 py-4.5 text-sm/3.5 transition-all duration-300 ease-in-out hover:bg-[#385269]">
                        <UserRound className="size-4" /> Profile
                    </li>
                    <li className="hover:text-whit2 flex cursor-pointer items-center gap-3 px-4.25 py-4.5 text-sm/3.5 transition-all duration-300 ease-in-out hover:bg-[#385269]">
                        <Bell className="size-4" /> Notifications
                    </li>
                    <li className="hover:text-whit2 flex cursor-pointer items-center gap-3 px-4.25 py-4.5 text-sm/3.5 transition-all duration-300 ease-in-out hover:bg-[#385269]">
                        <MessagesSquare className="size-4" /> Messages
                    </li>
                    <li className="hover:text-whit2 flex cursor-pointer items-center gap-3 px-4.25 py-4.5 text-sm/3.5 transition-all duration-300 ease-in-out hover:bg-[#385269]">
                        <Settings className="size-4" /> Settings
                    </li>
                </ul>
            </div>
        </div>
    );
}
