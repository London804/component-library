// Textfield.stories.tsx

import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from '../components/TextInput';
import Box from '../components/Box';

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
                    detail:
                        'The value displayed inside the Text field as well as the value that the Text field holds',
                },
            },
        },
        placeholder: {
            control: { type: 'text' },
            description: 'placeholder value of the Text field',
            table: {
                type: {
                    summary: 'string',
                    detail:
                        'The placeholder value displayed inside the Text field. Used to suggest what should be filled in the Text field',
                },
            },
        },
        disabled: {
            options: [true, false],
            control: { type: 'inline-radio' },
            description:
                'Optional prop to disable the button. Updates both the styles and aria-disabled property to indicate disabled state.',
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
            description:
                'The error message that is displayed below the Text field. When a boolean is passed in, it can show error state without the message',
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
            description:
                'The Id of the Text field. This is also what lets the label know which Text field it is associated with but there is mechanism to associate Text field with label without this being passed in specifically',
        },
        style: {
            control: { type: 'object' },
            description:
                'A CSSProperty object. Anything passed to the button within the style prop will override any default styles the button may use. E.g., if the button `color` prop is set to "#191919" but the `style` prop includes `{ backgroundColor: "#715C8E", color: "#42E6BB" }` then the button will be purple with green text, rather than black with white text.',
            table: {
                type: {
                    detail: 'Style override object',
                },
            },
        },
    },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    style: {},
};

export const TextFieldWithLabel = () => {
    const [state, setState] = useState(0);

    return (
        <Box gap={2} justifyContent="flex-start">
            <TextInput
                type="text"
                placeholder="i.e) david"
                label="First Name"
                onChange={() => {
                    setState(state + 1);
                }}
            />
            <TextInput
                type="text"
                placeholder="i.e) kim"
                label="Last Name"
                onChange={() => {
                    setState(state + 1);
                }}
            />
        </Box>
    );
};

TextFieldWithLabel.storyName = 'TextField with label';

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    style: {},
};

Disabled.storyName = 'Disabled TextField';

export const ErrorTextField = Template.bind({});
ErrorTextField.args = {
    disabled: false,
    style: {},
    label: 'Name',
    error: 'Name is required',
};

ErrorTextField.storyName = 'TextField with Error message';

export const TextFieldErrorState = Template.bind({});
TextFieldErrorState.args = {
    disabled: false,
    style: {},
    label: 'Name',
    value: 'Wrong Name',
    error: true,
};

TextFieldErrorState.storyName = 'TextField in Error State';

export const OptionalTextField = Template.bind({});
OptionalTextField.args = {
    disabled: false,
    style: {},
    label: 'Something',
    optional: true,
};

OptionalTextField.storyName = 'Optional TextField';

export const HelpTextField = Template.bind({});
HelpTextField.args = {
    disabled: false,
    style: {},
    label: 'Cool ID',
    helpText: "Your Cool ID can be found in the setting's page",
    optional: true,
};
HelpTextField.storyName = 'TextField with help text';

export const TextFieldWithEverything = () => {
    const [state, setState] = useState('');
    const [error, setError] = useState(false);
    const errorMessage = 'Age cannot consist of special characters';

    useEffect(() => {
        if (containsSpecialChars(state)) {
            error ? null : setError(true);
        } else {
            error ? setError(false) : null;
        }
    });

    const containsSpecialChars = (str: string) => {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // eslint-disable-line no-useless-escape
        return specialChars.test(str);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value); // eslint-disable-line no-console
        setState(e.target.value);
    };

    return (
        <Box gap={4} direction="column" alignItems="flex-start">
            <TextInput
                type="text"
                placeholder="24"
                label="Age"
                onChange={handleChange}
                error={error ? errorMessage : null}
                helpText="Type a special character to get error"
            />
            <Box gap={2}>
                <TextInput type="text" placeholder="i.e) david" label="First Name" helpText="Your name" />
                <TextInput type="text" placeholder="i.e) kim" label="Last Name" helpText="Your name" />
            </Box>
        </Box>
    );
};

TextFieldWithEverything.storyName = 'TextField with everything';

