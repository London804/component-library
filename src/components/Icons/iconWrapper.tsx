import React from 'react';
import PropTypes from 'prop-types';
// import {
//     colorPalletOptions,
//     colorPalletDefault,
//     colorThemeOptions,
//     colorThemeDefault,
//     greyOptions,
//     greyDefault,
//     formStatusOptions,
//     formStatusDefault,
//     iconSizeOptions,
//     spaceOptions,
//     spaceDefault,
//     iconHtmlTagOptions,
//     iconHtmlTagDefault,
//     rotateSizeOptions,
//     rotateSizeDefault,
// } from '../../shared/constants';
import CheckBold from './CheckBold';
import { IconBase } from './IconBase.styles';

const maxDisplayed = 99;

// Icon size
const enum iconSizeOptions {
    xxs = 'xxs',
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
};

// Icon HTML tags
const iconHtmlTagOptions = {
    span: 'span',
    button: 'button',
};

export interface IconWrapper {
    children: SX.Element | JSX.Element[];
    className: string;
    htmlTag: iconSizeOptions;
    number: number;
    hasHover: Boolean;
}

const IconWrapper = ({
    children,
    className,
    htmlTag,
    number,
    hasHover,
    ...rest
}: IconWrapper) => {
    const hasNumber =
        number > 0 &&
        ![iconSizeOptions.xs, iconSizeOptions.xxs].includes(rest.iconSize);

    return (
        <IconBase
            as={htmlTag}
            type={htmlTag === iconHtmlTagOptions.button ? 'button' : null}
            hasHover={hasHover && !rest.disabled}
            hasNumber={hasNumber}
            {...rest}
            className={className ? 'icon ' + className : 'icon'}
        >
            {React.Children.map(children, child => {
                if (typeof child == 'object') {
                    return React.cloneElement(child);
                }
            })}

            {hasNumber ? (
                <span className="badge-number">
                    {number <= maxDisplayed ? number : maxDisplayed + '+'}
                </span>
            ) : null}
        </IconBase>
    );
};


export const CheckBoldIcon = (props) => <IconWrapper {...props}><CheckBold /></IconWrapper>

// IconWrapper.propTypes = {
//     htmlTag: PropTypes.oneOf(Object.values(iconHtmlTagOptions)),
//     number: PropTypes.number,
//     colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
//     colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
//     colorWab: PropTypes.oneOf(Object.values(greyOptions)),
//     colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
//     iconSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
//     hasBackground: PropTypes.bool,
//     hasHover: PropTypes.bool,
//     isActive: PropTypes.bool,
//     isCentered: PropTypes.bool,
//     marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
//     marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
//     marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
//     marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
//     rotateSize: PropTypes.oneOf(Object.values(rotateSizeOptions)),
// };

// IconWrapper.defaultProps = {
//     htmlTag: iconHtmlTagDefault,
//     number: 0,
//     colorPallet: colorPalletDefault,
//     colorTheme: colorThemeDefault,
//     colorWab: greyDefault,
//     colorStatus: formStatusDefault,
//     iconSize: iconSizeOptions.sm,
//     hasBackground: false,
//     hasHover: false,
//     isActive: false,
//     isCentered: false,
//     marginTop: spaceDefault,
//     marginBottom: spaceDefault,
//     marginLeft: spaceDefault,
//     marginRight: spaceDefault,
//     rotateSize: rotateSizeDefault,
// };

export default IconWrapper;
