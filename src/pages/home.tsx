import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { days } from "@/App";
import { ArrowUp } from "lucide-react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

export default function Component() {
  const { contextSafe } = useGSAP();

  const scrollToTop = contextSafe(() =>
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: "power2.inOut",
    }),
  );

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
        className="fixed right-8 bottom-8 cursor-pointer"
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
          Day {(index + 1).toString().padStart(3, "0")}
        </Link>
      </Button>
    </div>
  );
}
