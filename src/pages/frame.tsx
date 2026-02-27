import { Outlet } from "react-router";

export default function Frame() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="size-100 rounded-sm shadow">
        <Outlet />
      </div>
    </div>
  );
}
