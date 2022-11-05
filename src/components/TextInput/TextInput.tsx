

// textfield.tsx
import React from 'react';
// import { Type } from './type';
import {
    StyledInput,
    ErrorSlot,
    HelpSlot,
    OptionalSlot,
    // StyledIcon
} from './TextInput.styles';
// import { useUniqueId } from '../../helpers/uniqueId';

import Box from '../Box';
// import { Label } from '../Label';
// import { IconName } from '../Icon';

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
    // leadingIcon?: IconName;
    // trailingIcon?: IconName;
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
            // leadingIcon,
            // trailingIcon,
            ...rest
        },
        ref
    ) => {
        // const htmlId = useUniqueId('cl-input');

        // const labelSlot = label ? (
        //     optional ? (
        //         <Box justifyContent="flex-start">
        //             {' '}
        //             <Box
        //                 justifyContent="flex-start"
        //                 style={{
        //                     width: 'fit-content',
        //                 }}
        //             >
        //                 {' '}
        //                 <Label htmlFor={id || htmlId}>{label}</Label>
        //             </Box>{' '}
        //             <OptionalSlot
        //                 justifyContent="flex-start"
        //                 style={{
        //                     width: 'fit-content',
        //                 }}
        //             >
        //                 Optional
        //             </OptionalSlot>{' '}
        //         </Box>
        //     ) : (
        //         <Label htmlFor={id || htmlId}>{label}</Label>
        //     )
        // ) : null;
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
                    {/* {leadingIcon ? <StyledIcon leading icon={leadingIcon} /> : null} */}
                    <StyledInput
                        disabled={disabled}
                        type={type}
                        placeholder={placeholder}
                        error={!!error}
                        {...rest}
                        style={style}
                        ref={ref}
                        // id={id || htmlId}
                        // leadingIcon={!!leadingIcon}
                        // trailingIcon={!!trailingIcon}
                    />
                    {/* {trailingIcon ? <StyledIcon leading={false} icon={trailingIcon} /> : null} */}
                </Box>
                {helpSlot}
                {errorSlot}
            </Box>
        );
    }
);

export default TextInput;

