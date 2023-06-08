import React from 'react';
import { StyledSpinner } from './spinner.styles';
import { themeType } from '../../styles/themes';
import { ComponentSize } from '../../styles/sizes';

export interface SpinnerProps {
    type?: themeType;
    size?: ComponentSize;
    className?: string;
}

const Spinner: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerProps> = (
   {
    type = 'light',
    size = ComponentSize.default,
   },
    ref
) => {

    const styles = {
        innerType: type,
        size
    };

    return <StyledSpinner ref={ref} className={`spinner--${size}`} {...styles} />;
};

export default React.forwardRef<HTMLDivElement, SpinnerProps>(Spinner);
