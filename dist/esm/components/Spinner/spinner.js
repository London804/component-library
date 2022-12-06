import React from 'react';
import { StyledSpinner } from './spinner.styles';
import { sizes } from '../../styles/sizes';
const Spinner = ({ type = 'light', size = sizes.default, className }, ref) => {
    // const { type = 'light', size = 50, className } = props;
    const styles = {
        innerType: type,
        size
    };
    return React.createElement(StyledSpinner, Object.assign({ ref: ref, className: className }, styles));
};
export default React.forwardRef(Spinner);
//# sourceMappingURL=spinner.js.map