import React from 'react';
declare type BaseProps = React.ComponentPropsWithoutRef<'div'>;
export interface BoxProps extends BaseProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'start' | 'stretch';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    wrap?: 'wrap' | 'nowrap';
}
declare const Box: ({ alignItems, justifyContent, direction, gap, wrap, children, style, ...rest }: BoxProps) => JSX.Element;
export default Box;
//# sourceMappingURL=Box.d.ts.map