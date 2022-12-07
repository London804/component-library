var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StyledBox = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  width: 100%;\n  ", "\n\n  ::-webkit-scrollbar {\n    width: var(--cl-space-5);\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: var(--cl-background-secondary);\n    border-radius: 40px;\n    border: var(--cl-space-2) solid white;\n  }\n"], ["\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  width: 100%;\n  ", "\n\n  ::-webkit-scrollbar {\n    width: var(--cl-space-5);\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: var(--cl-background-secondary);\n    border-radius: 40px;\n    border: var(--cl-space-2) solid white;\n  }\n"])), function (p) { return (p.alignItems ? p.alignItems : 'center'); }, function (p) { return (p.justifyContent ? p.justifyContent : 'center'); }, function (p) { return (p.direction ? p.direction : 'row'); }, function (p) { return (p.wrap ? p.wrap : 'wrap'); }, function (p) {
    switch (p.gap) {
        case 2:
            return "\n                gap: var(--cl-space-2);\n                ";
        case 3:
            return "\n                gap: var(--cl-space-3);\n                ";
        case 4:
            return "\n                gap: var(--cl-space-4);\n                ";
        case 5:
            return "\n                gap: var(--cl-space-5);\n                ";
        case 6:
            return "\n                gap: var(--cl-space-6);\n                ";
        case 7:
            return "\n                gap: var(--cl-space-7);\n                ";
        case 8:
            return "\n                gap: var(--cl-space-8);\n                ";
        case 9:
            return "\n                gap: var(--cl-space-9);\n                ";
        default:
            return "\n                gap: var(--cl-space-1);\n                ";
    }
});
var templateObject_1;
//# sourceMappingURL=Box.styles.js.map