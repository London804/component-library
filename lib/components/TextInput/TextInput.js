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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// textfield.tsx
import React from 'react';
// import { Type } from './type';
import { StyledInput, ErrorSlot, HelpSlot,
// StyledIcon
 } from './TextInput.styles';
// import { useUniqueId } from '../../helpers/uniqueId';
import Box from '../Box';
var TextInput = React.forwardRef(function (_a, ref) {
    // const htmlId = useUniqueId('cl-input');
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.placeholder, placeholder = _d === void 0 ? '' : _d, _e = _a.style, style = _e === void 0 ? {} : _e, label = _a.label, _f = _a.optional, optional = _f === void 0 ? false : _f, _g = _a.error, error = _g === void 0 ? false : _g, helpText = _a.helpText, id = _a.id, 
    // leadingIcon,
    // trailingIcon,
    rest = __rest(_a, ["type", "disabled", "placeholder", "style", "label", "optional", "error", "helpText", "id"]);
    // const labelSlot = label ? (
    //     optional ? (
    //         <Box justifyContent="flex-start">
    //             {' '}
    //             <Box
    //                 justifyContent="flex-start"
    //                 style={{
    //                     width: 'fit-content',
    //                 }}
    //             >
    //                 {' '}
    //                 <Label htmlFor={id || htmlId}>{label}</Label>
    //             </Box>{' '}
    //             <OptionalSlot
    //                 justifyContent="flex-start"
    //                 style={{
    //                     width: 'fit-content',
    //                 }}
    //             >
    //                 Optional
    //             </OptionalSlot>{' '}
    //         </Box>
    //     ) : (
    //         <Label htmlFor={id || htmlId}>{label}</Label>
    //     )
    // ) : null;
    var errorSlot = typeof error !== 'boolean' ? (error ? (_jsx(ErrorSlot, __assign({ justifyContent: "flex-start" }, { children: error }))) : (error)) : null;
    var helpSlot = helpText ? _jsx(HelpSlot, __assign({ justifyContent: "flex-start" }, { children: helpText })) : null;
    return (_jsxs(Box, __assign({ gap: 2, direction: "column", alignItems: "start", justifyContent: "flex-start" }, { children: [_jsx(Box, __assign({ style: { position: 'relative' } }, { children: _jsx(StyledInput, __assign({ disabled: disabled, type: type, placeholder: placeholder, error: !!error }, rest, { style: style, ref: ref })) })), helpSlot, errorSlot] })));
});
export default TextInput;
//# sourceMappingURL=TextInput.js.map