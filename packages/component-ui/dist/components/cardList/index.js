import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from "../card";
export const CardList = ({ gap, num }) => {
    return (_jsx("div", { style: {
            display: "grid",
            gap,
            gridTemplateColumns: `repeat(${num}, 1fr)`,
        }, children: [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (_jsx(Card, {}, index))) }));
};
