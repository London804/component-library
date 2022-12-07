// TextField.style
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { keyframes } from 'styled-components';
import Box from '../Box';
// import { InputItemFocus } from '../../helpers/mixins/focus';
// import { Icon } from '../Icon';
export var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: var(--cl-space-7);\n  padding: 0 var(--cl-space-2);\n  background-color: white;\n  color: black;\n  border-radius: var(--cl-radius-2);\n  border: 1px solid black;\n  font-size: var(--cl-font-size-2);\n  line-height: var(--cl-line-height-2);\n  font-family: var(--cl-font-family-default);\n\n  ", "\n\n  ", "\n\n  ::placeholder {\n    color: var(--cl-text-muted);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    background-color: var(--cl-background-disabled);\n  }\n\n\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: var(--cl-space-7);\n  padding: 0 var(--cl-space-2);\n  background-color: white;\n  color: black;\n  border-radius: var(--cl-radius-2);\n  border: 1px solid black;\n  font-size: var(--cl-font-size-2);\n  line-height: var(--cl-line-height-2);\n  font-family: var(--cl-font-family-default);\n\n  ", "\n\n  ", "\n\n  ::placeholder {\n    color: var(--cl-text-muted);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    background-color: var(--cl-background-disabled);\n  }\n\n\n\n  ", "\n"])), function (p) {
    return p.leadingIcon
        ? "\n      padding-left: var(--cl-space-6);\n      "
        : null;
}, function (p) {
    return p.trailingIcon
        ? "\n      padding-right: var(--cl-space-6);\n      "
        : null;
}, function (p) {
    return p.error
        ? "\n      border: 1px solid var(--cl-border-error);\n  "
        : null;
});
// To-do: make this optional for users who don't have prefered reduced motion on.
var errorSlideOut = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nfrom {\n  transform: translate(0,  calc(var(--cl-space-5) * -1) );\n  opacity:0;\n  max-height: 0;\n}\n\nto {\n  transform: translate(0px);\n  opacity:1;\n  max-height: - var(--cl-space-5);\n}\n"], ["\nfrom {\n  transform: translate(0,  calc(var(--cl-space-5) * -1) );\n  opacity:0;\n  max-height: 0;\n}\n\nto {\n  transform: translate(0px);\n  opacity:1;\n  max-height: - var(--cl-space-5);\n}\n"])));
export var ErrorSlot = styled(Box)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: var(--cl-border-error);\n  font-size: var(--cl-font-size-2);\n  animation: ", " 150ms ease;\n"], ["\n  color: var(--cl-border-error);\n  font-size: var(--cl-font-size-2);\n  animation: ", " 150ms ease;\n"])), errorSlideOut);
export var HelpSlot = styled(Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: var(--cl-text-muted);\n  font-size: var(--cl-font-size-2);\n"], ["\n  color: var(--cl-text-muted);\n  font-size: var(--cl-font-size-2);\n"])));
export var OptionalSlot = styled(Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: var(--cl-text-muted);\n  font-size: var(--cl-font-size-2);\n  font-style: italic;\n"], ["\n  color: var(--cl-text-muted);\n  font-size: var(--cl-font-size-2);\n  font-style: italic;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
// export const StyledIcon = styled(Icon) <{ leading: boolean }>`
//   position: absolute;
//   top: 50%;
//   ${p =>
//         p.leading
//             ? `
//       left: var(--cl-space-2);
//   `
//             : `right: var(--cl-space-2);`}
//   transform: translateY(-50%);
//   z-index: 1;
// `;
//# sourceMappingURL=TextInput.styles.js.map