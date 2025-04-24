import { jsx as _jsx } from "react/jsx-runtime";
import { Card as Card2 } from 'antd';
import { Element } from "@craftjs/core";
import { CardTop } from "@/basic";
// const { Meta } = Card2;
export const Card = () => (_jsx(Card2, { hoverable: true, style: { width: '100%' }, cover: _jsx("img", { alt: "example", src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" }), children: _jsx(Element, { canvas: true, id: "text", is: CardTop, "data-cy": "card-top", children: _jsx("div", { children: "123123213" }) }) }));
