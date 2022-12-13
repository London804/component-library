export var Sizes;
(function (Sizes) {
    Sizes.small = 32;
    Sizes.medium = 50;
    Sizes.large = 100;
})(Sizes || (Sizes = {}));
// if you use type you need to use a string, but better IDE support
// export type ComponentSize = 'default' | 'small' | 'large';
// if you use enum you don't use string, e.g ComponentSize.default
export var ComponentSize;
(function (ComponentSize) {
    ComponentSize["small"] = "small";
    ComponentSize["default"] = "default";
    ComponentSize["large"] = "large";
})(ComponentSize || (ComponentSize = {}));
export var sizes = {
    small: 'small',
    default: 'default',
    large: 'large'
};
export var heights = {
    default: 40,
    small: 33,
    large: 47
};
export var switchPaddingNumbers = {
    small: 1,
    default: 2,
    large: 4
};
export var sidePaddings = {
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
//# sourceMappingURL=sizes.js.map