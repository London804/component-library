import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { StyledButton, StyledIcon } from './button.styles';
import { ComponentSize } from '../../styles/sizes';
import { themeType } from '../../styles/themes';
import Spinner from '../Spinner';

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

type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

// If href is added, button becomes an anchor link
type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;

// If `as` is added, button becomes a custom html node specified in `as`
type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
    props,
    ref
) => {
    const {
        type = 'primary',
        icon,
        size = ComponentSize.small,
        className,
        children,
        disabled = false,
        loading = false,
        onClick,
        href,
        as,
        to,
        search = false,
        typeBtn = 'button'
    } = props;

    const styles = {
        innerType: type,
        size,
        disabled,
        withText: children != null,
        isSearch: search
    };

    const spinnerStyles = {
        size: ComponentSize.small,
        innerType: 'default'
    };

    const childrenWithIcon = !icon ? (
        children
    ) : (
        <>
            {children}
            <StyledIcon as={icon} />
        </>
    );

    if (as && !disabled) {
        return (
            <StyledButton as={as} to={to} ref={ref} className={className} {...styles}>
                {loading ? (
                    <>
                        Loading
                        <Spinner {...spinnerStyles} />
                    </>
                ) : (
                    childrenWithIcon
                )}
            </StyledButton>
        );
    }

    if (href && !disabled) {
        return (
            <StyledButton
                as="a"
                href={href}
                ref={ref as React.MutableRefObject<HTMLAnchorElement>}
                className={className}
                {...styles}
            >
                {loading ? (
                    <>
                        Loading
                        <Spinner {...spinnerStyles} />
                    </>
                ) : (
                    childrenWithIcon
                )}
            </StyledButton>
        );
    }

    return (
        <StyledButton
            as="button"
            type={typeBtn}
            onClick={onClick}
            ref={ref as React.MutableRefObject<HTMLButtonElement>}
            className={className}
            {...styles}
        >
            {loading ? (
                <>
                    Loading
                    <Spinner {...spinnerStyles} />
                </>
            ) : (
                childrenWithIcon
            )}
        </StyledButton>
    );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
