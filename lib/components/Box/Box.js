var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { jsx as _jsx } from "react/jsx-runtime";
import { StyledBox } from './Box.styles';
var Box = function (_a) {
    var alignItems = _a.alignItems, justifyContent = _a.justifyContent, direction = _a.direction, gap = _a.gap, _b = _a.wrap, wrap = _b === void 0 ? 'nowrap' : _b, children = _a.children, _c = _a.style, style = _c === void 0 ? {} : _c, rest = __rest(_a, ["alignItems", "justifyContent", "direction", "gap", "wrap", "children", "style"]);
    return (_jsx(StyledBox, __assign({ alignItems: alignItems, justifyContent: justifyContent, direction: direction, gap: gap, wrap: wrap, style: style }, rest, { children: children })));
};
export default Box;
//# sourceMappingURL=Box.js.map