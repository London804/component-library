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
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { StyledSpinner } from './spinner.styles';
import { ComponentSize } from '../../styles/sizes';
var Spinner = function (_a, ref) {
    // const { type = 'light', size = 50, className } = props;
    var _b = _a.type, type = _b === void 0 ? 'light' : _b, _c = _a.size, size = _c === void 0 ? ComponentSize.default : _c;
    var styles = {
        innerType: type,
        size: size
    };
    return _jsx(StyledSpinner, __assign({ ref: ref, className: "spinner--".concat(size) }, styles));
};
export default React.forwardRef(Spinner);
//# sourceMappingURL=spinner.js.map