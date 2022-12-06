import React from 'react';
import { themeType } from '../../styles/themes';
import { sizes } from '../../styles/sizes';
export interface SpinnerProps {
    type?: themeType;
    size?: sizes;
    className?: string;
}
declare const _default: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
