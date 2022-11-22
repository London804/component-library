// Button
import React from 'react';
import { actions } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant } from './type';
import { IconName } from '../Icon';
import Box from '../Box';

// documentation
export default {
  title: 'Button', // title for the component in storybook sidebar & its docs page
  component: Button,
  parameters: {
    controls: { expanded: true }, // allows for controls at page bottom to be open by default
  },
  argTypes: {
    children: {
      control: { type: 'text' }, // specifies how the user will change the prop value in the control panel
      // for the control panel, and docs page
      description:
        'In this table, the `children` prop is only ever a string for control purposes. In-situ, the `children` prop can be any valid React Node.',
      table: {
        type: {
          summary: 'React.ReactNode', // displayed prop type
          detail: 'Children rendered inside button', // more details displayed when clicking on prop type
        },
      },
    },
    disabled: {
      options: [true, false], // a control with specific choices must specify options
      control: { type: 'inline-radio' },
      defaultValue: { summary: false },
      description:
        'Optional prop to disable the button. Updates both the styles and aria-disabled property to indicate disabled state.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: [
        ButtonVariant.primary,
        ButtonVariant.secondary,
        ButtonVariant.tertiary,
        ButtonVariant.outline,
      ],
      defaultValue: { summary: ButtonVariant.secondary },
      description: 'Prop that determines the usage and styling of the button.',
      table: {
        type: {
          summary: 'enum',
          detail: `${ButtonVariant.primary} | ${ButtonVariant.secondary} | ${ButtonVariant.tertiary} | ${ButtonVariant.outline}`,
        },
      },
    },
    size: {
      control: { type: 'select' },
      options: [ButtonSize.small, ButtonSize.medium, ButtonSize.large],
      defaultValue: { summary: ButtonSize.medium },
      description: 'Prop that determines the size of the button and the font.',
      table: {
        type: {
          summary: 'enum',
          detail: `${ButtonSize.small} | ${ButtonSize.medium} | ${ButtonSize.large}`,
        },
      },
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
} as ComponentMeta<typeof Button>;

const eventsFromActions = actions({
  // generates events to display in action panel at bottom of page so user can tell which events were triggered when
  onClick: 'click',
  onFocus: 'focus',
  onMouseEnter: 'hover',
});
const Template: ComponentStory<typeof Button> = args => <Button {...eventsFromActions} {...args} />; // feed event handlers and control props to each instance of the component

export const Default = Template.bind({}); // new instance of the component; variable name is the story's display name in sidebar
Default.args = {
  // props that can be edited in the control panel
  children: 'Submit',
  variant: ButtonVariant.secondary,
  size: ButtonSize.medium,
  disabled: false,
  style: {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  variant: ButtonVariant.secondary,
  size: ButtonSize.medium,
  disabled: true,
  style: {},
};

export const Styled = Template.bind({});
Styled.args = {
  children: 'STYLED',
  variant: '#821652',
  disabled: false,
  style: {
    height: 50,
    width: 200,
    borderRadius: 25,
    variant: ButtonVariant.primary,
    size: ButtonSize.medium,
    fontWeight: 'bold',
    boxShadow: '8px 5px 6px #AFAFAF',
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  size: ButtonSize.medium,
  icon: IconName.Action,
};

export const IconButtonWithText = () => (
  <Box>
    <Button icon={IconName.Action} size={ButtonSize.large} loading>
      Action
    </Button>
    <Button icon={IconName.Action} loading>
      Action
    </Button>
    <Button icon={IconName.Action} size={ButtonSize.small} loading>
      Action
    </Button>
  </Box>
);
