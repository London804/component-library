import { Meta, ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import Spinner from './spinner';
import { sizes, ComponentSize} from '../../styles/sizes';

export default {
    title: 'Components/Spinner',
    component: Spinner,
    controls: { expanded: true },
    argTypes: {
        type: {
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light'],
            control: { type: 'radio'},
        },
        size: {
            options: ['small', 'default', 'large'],
            control: {
                type: 'radio',
            },
        }
    }
} as Meta;


const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'primary',
    size: ComponentSize.default
};
