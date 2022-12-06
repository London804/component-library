// Box
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { StyledBox } from './Box.styles';
const Box = (_a) => {
    var { alignItems, justifyContent, direction, gap, wrap = 'nowrap', children, style = {} } = _a, rest = __rest(_a, ["alignItems", "justifyContent", "direction", "gap", "wrap", "children", "style"]);
    return (React.createElement(StyledBox, Object.assign({ alignItems: alignItems, justifyContent: justifyContent, direction: direction, gap: gap, wrap: wrap, style: style }, rest), children));
};
export default Box;
//# sourceMappingURL=Box.js.map