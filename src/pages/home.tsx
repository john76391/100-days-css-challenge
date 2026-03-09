import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="">
      <Button asChild variant="link">
        <Link to="/days/1">Go to day 1</Link>
      </Button>
    </div>
  );
}
