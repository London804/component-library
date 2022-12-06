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
// textfield.tsx
import React from 'react';
// import { Type } from './type';
import { StyledInput, ErrorSlot, HelpSlot,
// StyledIcon
 } from './TextInput.styles';
// import { useUniqueId } from '../../helpers/uniqueId';
import Box from '../Box';
const TextInput = React.forwardRef((_a, ref) => {
    // const htmlId = useUniqueId('cl-input');
    var { type = 'text', disabled = false, placeholder = '', style = {}, label, optional = false, error = false, helpText, id } = _a, 
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
    const errorSlot = typeof error !== 'boolean' ? (error ? (React.createElement(ErrorSlot, { justifyContent: "flex-start" }, error)) : (error)) : null;
    const helpSlot = helpText ? React.createElement(HelpSlot, { justifyContent: "flex-start" }, helpText) : null;
    return (React.createElement(Box, { gap: 2, direction: "column", alignItems: "start", justifyContent: "flex-start" },
        React.createElement(Box, { style: { position: 'relative' } },
            React.createElement(StyledInput, Object.assign({ disabled: disabled, type: type, placeholder: placeholder, error: !!error }, rest, { style: style, ref: ref }))),
        helpSlot,
        errorSlot));
});
export default TextInput;
//# sourceMappingURL=TextInput.js.map