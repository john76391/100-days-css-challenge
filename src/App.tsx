import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./pages/home";
import Frame from "./pages/frame";
import Day1 from "./pages/day1";
import Day2 from "./pages/day2";
import Day3 from "./pages/day3";
import Day4 from "./pages/day4";


import NotFound from "./pages/notFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="days" element={<Frame />}>
          <Route index element={<Navigate to="1" />} />
          <Route path="1" element={<Day1 />} />
          <Route path="2" element={<Day2 />} />
          <Route path="3" element={<Day3 />} />
          <Route path="4" element={<Day4 />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
