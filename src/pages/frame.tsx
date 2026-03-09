import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function Frame() {
  const { pathname } = useLocation();
  const currentDay = pathname.split("/")[2];

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="size-100 rounded-sm shadow">
        <Outlet />
      </div>

      <div className="fixed bottom-5">
        {+currentDay === 1 ? (
          <Button size="icon" disabled>
            <ArrowLeftIcon />
          </Button>
        ) : (
          <Button size="icon" asChild>
            <Link to={Math.max(+currentDay - 1, 1).toString()}>
              <ArrowLeftIcon />
            </Link>
          </Button>
        )}

        <span className="mx-2">Switch day</span>

        {+currentDay === 9 ? (
          <Button size="icon" disabled>
            <ArrowRightIcon />
          </Button>
        ) : (
          <Button size="icon" asChild>
            <Link to={Math.min(+currentDay + 1, 100).toString()}>
              <ArrowRightIcon />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
