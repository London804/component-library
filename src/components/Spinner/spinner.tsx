import React from 'react';
import { StyledSpinner } from './spinner.styles';
import { themeType } from '../../styles/themes';
import { sizes } from '../../styles/sizes';

export interface SpinnerProps {
    type?: themeType;
    size?: sizes;
    className?: string;
}

const Spinner: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerProps> = (
   {
    type = 'light',
    size = sizes.default,
    className
   },
    ref
) => {
    // const { type = 'light', size = 50, className } = props;

    const styles = {
        innerType: type,
        size
    };

    return <StyledSpinner ref={ref} className={className} {...styles} />;
};

export default React.forwardRef<HTMLDivElement, SpinnerProps>(Spinner);
