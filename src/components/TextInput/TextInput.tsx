

// textfield.tsx
import React from 'react';
import {
    StyledInput,
    ErrorSlot,
    HelpSlot,
    OptionalSlot,
} from './TextInput.styles';

import Box from '../Box';

type BaseProps = React.ComponentPropsWithoutRef<'input'>;

export interface TextFieldProps extends BaseProps {
    // type: Type;
    disabled?: boolean;
    style?: React.CSSProperties;
    placeholder?: string;
    label?: React.ReactNode;
    id?: string;
    optional?: boolean;
    error?: React.ReactNode | boolean;
    helpText?: React.ReactNode;
}

const TextInput = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            type = 'text',
            disabled = false,
            placeholder = '',
            style = {},
            label,
            optional = false,
            error = false,
            helpText,
            id,
            ...rest
        },
        ref
    ) => {
       
        const errorSlot =
            typeof error !== 'boolean' ? (
                error ? (
                    <ErrorSlot justifyContent="flex-start">{error}</ErrorSlot>
                ) : (
                    error
                )
            ) : null;
        const helpSlot = helpText ? <HelpSlot justifyContent="flex-start">{helpText}</HelpSlot> : null;

        return (
            <Box gap={2} direction="column" alignItems="start" justifyContent="flex-start">
                {/* {labelSlot} */}
                <Box style={{ position: 'relative' }}>
                    <StyledInput
                        disabled={disabled}
                        type={type}
                        placeholder={placeholder}
                        error={!!error}
                        {...rest}
                        style={style}
                        ref={ref}
                       
                    />
                </Box>
                {helpSlot}
                {errorSlot}
            </Box>
        );
    }
);

export default TextInput;

