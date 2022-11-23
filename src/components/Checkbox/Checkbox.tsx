// import React, { useRef } from 'react';
// import { CheckboxBase } from './Checkbox.styles';
// import { CheckBoldIcon } from '../Icons/iconWrapper';


// // Button sizes
// type buttonSizeOptions = 'sm' | 'md' | 'lg';
// const buttonSizeDefault: buttonSizeOptions = 'md';

// type BaseProps = React.ComponentPropsWithoutRef<'input'>;

// export interface Checkbox extends BaseProps {
//     fieldSize: buttonSizeOptions;
//     label: string;
//     inputRef: any;
//     ref: React.Ref<HTMLElement> | null;

// }

// const Checkbox = React.forwardRef<HTMLElement, Checkbox>(
//     (
//         { 
//             fieldSize,
//             label,
//             inputRef,
//             ...rest 
//         },
//         ref 
//     ) => {
//     return (
//         <CheckboxBase
//             fieldSize={fieldSize}
//             isDisabled={rest.disabled}
//             hasLabel={label && label.length > 0}
//             ref={ref}
//         >
//             <input {...rest} ref={inputRef} type="checkbox" />

//             <label htmlFor={rest.id}>
//                 <CheckBoldIcon/>

//                 {label}
//             </label>
//         </CheckboxBase>
//     );
// });



// export default Checkbox;

export { }