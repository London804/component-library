import { Meta, ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';
import Spinner from './spinner';
import { sizes } from 'styles/sizes';

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
} as Meta;



const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'primary',
    size: sizes.default
};

export const All = () => {
    return (
        <>
            <Spinner type="primary" />
            <Spinner type="secondary" />
            <Spinner type="success" />
            <Spinner type="warning" />
            <Spinner type="danger" />
            <Spinner type="info" />
            <Spinner type="light" />
        </>
    );
};