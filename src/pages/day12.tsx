import { Volume2 } from 'lucide-react';

export default function Component() {
    return (
        <div className="font-open-sans relative h-full bg-[#4CB6DE] text-white">
            <div className="relative px-7.5 pt-22.5">
                {/* quote */}
                <div
                    style={{
                        fontFamily: 'Arial',
                    }}
                    className="absolute top-2 left-1.75 z-0 text-[250px]/8.75 text-[#6AC2E3]"
                >
                    „
                </div>
                <p className="relative my-5 text-2xl/8.75">
                    I know quite certainly that I myself have no special talent;
                    curiosity, {/* tooltip */}
                    <span className="group relative -my-2.5 inline-block cursor-pointer bg-[#286F8A] px-2 pb-1.25">
                        obsession
                        {/* info */}
                        <span className="absolute bottom-13.25 -left-21.25 block w-75 -translate-y-5 cursor-text bg-[#286F8A] text-base opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 after:absolute after:-bottom-1.25 after:left-1/2 after:-ml-1.25 after:block after:size-2.5 after:rotate-45 after:bg-[#286F8A] after:content-['']">
                            <span className="block bg-white px-4.25 pt-2 pb-2.5 leading-4 text-[#286F8A]">
                                [əbˈseʃ(ə)n]{' '}
                                <Volume2 className="ml-2.5 inline-block size-5 cursor-pointer transition-all duration-200 ease-out hover:scale-115" />
                            </span>
                            <span className="block px-4.25 py-3.25">
                                <b>Obsession</b>, a persistent disturbing
                                preoccupation with an often unreasonable idea or
                                feeling.
                            </span>
                        </span>
                    </span>{' '}
                    and dogged endurance, combined with self-criticism have
                    brought me to my ideas.
                </p>

                {/* author */}
                <p className="text-xl/7 font-light italic">Albert Einstein</p>
            </div>
        </div>
    );
}
