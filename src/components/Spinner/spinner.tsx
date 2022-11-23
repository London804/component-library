import React from 'react';
import { StyledSpinner } from './spinner.styles';
import { themeType } from './spinner.constants';

export interface SpinnerProps {
    type?: themeType;
    size?: number;
    className?: string;
}

const Spinner: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerProps> = (
    props,
    ref
) => {
    const { type = 'light', size = 50, className } = props;

    const styles = {
        innerType: type,
        size
    };

    return <StyledSpinner ref={ref} className={className} {...styles} />;
};

export default React.forwardRef<HTMLDivElement, SpinnerProps>(Spinner);
