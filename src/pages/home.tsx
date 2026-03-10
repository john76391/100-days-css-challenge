import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { days } from "@/App";

export default function Component() {
  return (
    <div className="py-5">
      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
        {days.map((Day, i) => (
          <Frame key={i} index={i}>
            <Day />
          </Frame>
        ))}
      </div>
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
