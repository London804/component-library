import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { sizes, ComponentSize } from '../../styles/sizes';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        type: {
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'default', 'large'],
            control: {
                type: 'radio',
            },
        }
    }
} as Meta;

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  & > * {
    margin-right: 0.75rem;
  }
`;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Default</Button>;

export const Primary = Template.bind({});
Primary.args = {
    typeBtn: 'Button',
    type: 'Primary',
    size: 'default'
};

export const All = () => {
    return (
        <>
            <ButtonRow>
                <Button size={ComponentSize.small}>Small</Button>
                <Button size={ComponentSize.large}>Large</Button>
            </ButtonRow>
            <ButtonRow>
                <Button>Primary</Button>
                <Button type="secondary">Secondary</Button>
                <Button type="warning">Warning</Button>
                <Button type="success">Success</Button>
                <Button type="danger">Danger</Button>
                <Button type="info">Info</Button>
                <Button type="light">Light</Button>
            </ButtonRow>
            <ButtonRow>
                {/* "Note: The default color of spinner is Light" */}
                <Button loading type="secondary" />
                <Button disabled>Disabled</Button>
            </ButtonRow>
        </>
    );
};
