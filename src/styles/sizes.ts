export namespace Sizes {
    export const small = 32;
    export const medium = 50;
    export const large = 100;
}

export type Sizes = typeof Sizes[keyof typeof Sizes]

// if you use type you need to use a string, but better IDE support
// export type ComponentSize = 'default' | 'small' | 'large';

// if you use enum you don't use string, e.g ComponentSize.default
export enum ComponentSize {
    small = "small",
    default = "default",
    large = "large"
}

export const sizes = {
    small: 'small',
    default: 'default',
    large: 'large'
} as const;

export const heights: {
    [key in ComponentSize]: number;
} = {
    default: 40,
    small: 33,
    large: 47
};

export const switchPaddingNumbers: {
    [key in ComponentSize]: number;
} = {
    small: 1,
    default: 2,
    large: 4
};

export const sidePaddings: {
    [key in ComponentSize]: number;
} = {
    default: 22,
    small: 19,
    large: 25
};

// export enum SpinnerSizes {
//     small: 32,
//     default: 50,
//     large: 100,
// }
// // export type ComponentSize = 'default' | 'small' | 'large';

// // export const sizes: {
// //     [key in ComponentSize]: number;
// // } = {
// //     default: 50,
// //     small: 32,
// //     large: 100
// // };