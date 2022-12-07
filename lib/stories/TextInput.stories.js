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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Textfield.stories.tsx
import { useState, useEffect } from 'react';
import { TextInput } from '../components/TextInput';
import Box from '../components/Box';
// import { IconName } from '../Icon';
// documentation
export default {
    title: 'Form Elements/TextInput',
    component: TextInput,
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        value: {
            control: { type: 'text' },
            description: 'Value of the Text field',
            table: {
                type: {
                    summary: 'string',
                    detail: 'The value displayed inside the Text field as well as the value that the Text field holds',
                },
            },
        },
        placeholder: {
            control: { type: 'text' },
            description: 'placeholder value of the Text field',
            table: {
                type: {
                    summary: 'string',
                    detail: 'The placeholder value displayed inside the Text field. Used to suggest what should be filled in the Text field',
                },
            },
        },
        // leadingIcon: {
        //     control: { type: 'select' },
        //     options: [...(Object.keys(IconName) as (keyof typeof IconName)[])],
        //     description: 'Icon in the far left',
        // },
        // trailingIcon: {
        //     control: { type: 'select' },
        //     options: [...(Object.keys(IconName) as (keyof typeof IconName)[])],
        //     description: 'Icon in the far right',
        // },
        disabled: {
            options: [true, false],
            control: { type: 'inline-radio' },
            description: 'Optional prop to disable the button. Updates both the styles and aria-disabled property to indicate disabled state.',
            table: {
                type: {
                    detail: 'Disables and grays out the button',
                },
            },
        },
        label: {
            control: { type: 'text' },
            description: 'The label for the Text field that is displayed above the Text field',
        },
        error: {
            control: { type: 'text' },
            description: 'The error message that is displayed below the Text field. When a boolean is passed in, it can show error state without the message',
        },
        optional: {
            control: { type: 'boolean' },
            description: 'Displays optional label above the Text field',
        },
        helpText: {
            control: { type: 'text' },
            description: 'Displays the help text below the Text field',
        },
        id: {
            control: { type: 'text' },
            description: 'The Id of the Text field. This is also what lets the label know which Text field it is associated with but there is mechanism to associate Text field with label without this being passed in specifically',
        },
        style: {
            control: { type: 'object' },
            description: 'A CSSProperty object. Anything passed to the button within the style prop will override any default styles the button may use. E.g., if the button `color` prop is set to "#191919" but the `style` prop includes `{ backgroundColor: "#715C8E", color: "#42E6BB" }` then the button will be purple with green text, rather than black with white text.',
            table: {
                type: {
                    detail: 'Style override object',
                },
            },
        },
    },
};
var Template = function (args) { return _jsx(TextInput, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    disabled: false,
    style: {},
};
// export const IconInput = Template.bind({});
// IconInput.args = {
//     disabled: false,
//     style: {},
//     // leadingIcon: IconName.AddDocument,
//     // trailingIcon: IconName.Approved,
// };
export var TextFieldWithLabel = function () {
    var _a = useState(0), state = _a[0], setState = _a[1];
    return (_jsxs(Box, __assign({ gap: 2, justifyContent: "flex-start" }, { children: [_jsx(TextInput, { type: "text", placeholder: "i.e) david", label: "First Name", onChange: function () {
                    setState(state + 1);
                } }), _jsx(TextInput, { type: "text", placeholder: "i.e) kim", label: "Last Name", onChange: function () {
                    setState(state + 1);
                } })] })));
};
TextFieldWithLabel.storyName = 'TextField with label';
export var Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    style: {},
};
Disabled.storyName = 'Disabled TextField';
export var ErrorTextField = Template.bind({});
ErrorTextField.args = {
    disabled: false,
    style: {},
    label: 'Name',
    error: 'Name is required',
};
ErrorTextField.storyName = 'TextField with Error message';
export var TextFieldErrorState = Template.bind({});
TextFieldErrorState.args = {
    disabled: false,
    style: {},
    label: 'Name',
    value: '123nameWrong',
    error: true,
};
TextFieldErrorState.storyName = 'TextField in Error State';
export var OptionalTextField = Template.bind({});
OptionalTextField.args = {
    disabled: false,
    style: {},
    label: 'Something',
    optional: true,
};
OptionalTextField.storyName = 'Optional TextField';
export var HelpTextField = Template.bind({});
HelpTextField.args = {
    disabled: false,
    style: {},
    label: 'Cool ID',
    helpText: "Your Cool ID can be found in the setting's page",
    optional: true,
};
HelpTextField.storyName = 'TextField with help text';
export var TextFieldWithEverything = function () {
    var _a = useState(''), state = _a[0], setState = _a[1];
    var _b = useState(false), error = _b[0], setError = _b[1];
    var errorMessage = 'Age cannot consist of special characters';
    useEffect(function () {
        if (containsSpecialChars(state)) {
            error ? null : setError(true);
        }
        else {
            error ? setError(false) : null;
        }
    });
    var containsSpecialChars = function (str) {
        var specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // eslint-disable-line no-useless-escape
        return specialChars.test(str);
    };
    var handleChange = function (e) {
        console.log(e.target.value); // eslint-disable-line no-console
        setState(e.target.value);
    };
    return (_jsxs(Box, __assign({ gap: 4, direction: "column", alignItems: "flex-start" }, { children: [_jsx(TextInput, { type: "text", placeholder: "24", label: "Age", onChange: handleChange, error: error ? errorMessage : null, helpText: "Type a special character to get error" }), _jsxs(Box, __assign({ gap: 2 }, { children: [_jsx(TextInput, { type: "text", placeholder: "i.e) david", label: "First Name", helpText: "Your name" }), _jsx(TextInput, { type: "text", placeholder: "i.e) kim", label: "Last Name", helpText: "Your name" })] }))] })));
};
TextFieldWithEverything.storyName = 'TextField with everything';
//# sourceMappingURL=TextInput.stories.js.map