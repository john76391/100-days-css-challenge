import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Day1 from './pages/day1';
import Day2 from './pages/day2';
import Day3 from './pages/day3';
import Day4 from './pages/day4';
import Day5 from './pages/day5';
import Day6 from './pages/day6';
import Day7 from './pages/day7';
import Day8 from './pages/day8';
import Day9 from './pages/day9';
import Day10 from './pages/day10';
import Day11 from './pages/day11';
import Day12 from './pages/day12';
import Day13 from './pages/day13';
import Frame from './pages/frame';
import Home from './pages/home';
import NotFound from './pages/notFound';

export const days = [
    Day1,
    Day2,
    Day3,
    Day4,
    Day5,
    Day6,
    Day7,
    Day8,
    Day9,
    Day10,
    Day11,
    Day12,
    Day13,
];

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />

                <Route path="days" element={<Frame />}>
                    <Route index element={<Navigate to="1" />} />
                    {days.map((Day, index) => (
                        <Route
                            key={index}
                            path={`${index + 1}`}
                            element={<Day />}
                        />
                    ))}
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
