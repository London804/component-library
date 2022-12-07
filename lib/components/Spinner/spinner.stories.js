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
import Spinner from './spinner';
import { sizes } from 'styles/sizes';
export default {
    title: 'Components/Spinner',
    component: Spinner,
    controls: { expanded: true },
    argTypes: {
        type: {
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light'],
            control: { type: 'radio' },
        },
        size: {
            options: [32, 50, 100],
            control: {
                type: 'radio',
                labels: {
                    32: 'small',
                    50: 'default',
                    100: 'large',
                },
            },
        }
    }
};
var Template = function (args) { return _jsx(Spinner, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    type: 'primary',
    size: sizes.default
};
//# sourceMappingURL=spinner.stories.js.map