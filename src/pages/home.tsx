import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ArrowUp } from 'lucide-react';

import { days } from '@/App';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP, ScrollToPlugin);

export default function Component() {
    const [showBtn, setShowBtn] = useState(false);
    const { contextSafe } = useGSAP();

    const scrollToTop = contextSafe(() =>
        gsap.to(window, {
            scrollTo: 0,
            duration: 1,
            ease: 'power2.inOut',
        }),
    );

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 300) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <div className="py-5">
            <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
                {days.map((Day, i) => (
                    <Frame key={i} index={i}>
                        <Day />
                    </Frame>
                ))}
            </div>

            <Button
                className={cn(
                    'fixed right-4 bottom-4 cursor-pointer transition-opacity duration-200',
                    !showBtn && 'pointer-events-none opacity-0',
                )}
                size="icon"
                onClick={scrollToTop}
            >
                <ArrowUp />
            </Button>
        </div>
    );
}

function Frame({
    children,
    index,
}: {
    children: React.ReactNode;
    index: number;
}) {
    return (
        <div className="">
            <div className="mx-auto size-100 overflow-hidden rounded-sm shadow">
                {children}
            </div>

            <Button
                asChild
                variant="link"
                className="mx-auto mt-2 block w-100 text-start"
            >
                <Link to={`/days/${index + 1}`} className="font-story-script">
                    Day {(index + 1).toString().padStart(3, '0')}
                </Link>
            </Button>
        </div>
    );
}
