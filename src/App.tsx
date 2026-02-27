import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./pages/home";
import Frame from "./pages/frame";
import Day1 from "./pages/day1";

import NotFound from "./pages/notFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="days" element={<Frame />}>
          <Route index element={<Navigate to="1" />} />
          <Route path="1" element={<Day1 />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
