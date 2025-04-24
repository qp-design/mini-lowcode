import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Container } from "@brushes/component-core";
import { Element } from "@craftjs/core";
export const ListCommon = ({ gap, num, data }) => {
    const result = useMemo(() => {
        if (Array.isArray(data)) {
            return data;
        }
        return data.split(',');
    }, [data]);
    return (_jsx("div", { style: {
            display: "grid",
            gap,
            gridTemplateColumns: `repeat(${num}, 1fr)`,
        }, children: result.map((item, index) => (_jsx(Element, { canvas: true, id: index + '', custom: {
                key: index,
            }, is: Container }, index))) }));
};
