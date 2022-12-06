import React from 'react';
type BaseProps = React.ComponentPropsWithoutRef<'input'>;
export interface TextFieldProps extends BaseProps {
    disabled?: boolean;
    style?: React.CSSProperties;
    placeholder?: string;
    label?: React.ReactNode;
    id?: string;
    optional?: boolean;
    error?: React.ReactNode | boolean;
    helpText?: React.ReactNode;
}
declare const TextInput: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export default TextInput;
