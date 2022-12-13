import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { ComponentSize } from '../../styles/sizes';
import { themeType } from '../../styles/themes';
interface BaseButtonProps {
    type?: themeType;
    icon?: ElementType;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    search?: boolean;
    typeBtn?: 'button' | 'submit' | 'reset';
}
declare type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;
declare type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;
declare type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;
export declare type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;
declare const _default: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & BaseButtonProps & {
    href?: string | undefined;
} & {
    as?: React.ElementType<any> | undefined;
    to?: string | undefined;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=button.d.ts.map