export declare namespace Sizes {
    const small = 32;
    const medium = 50;
    const large = 100;
}
export declare type Sizes = typeof Sizes[keyof typeof Sizes];
export declare enum ComponentSize {
    small = "small",
    default = "default",
    large = "large"
}
export declare const sizes: {
    readonly small: "small";
    readonly default: "default";
    readonly large: "large";
};
export declare const heights: {
    [key in ComponentSize]: number;
};
export declare const switchPaddingNumbers: {
    [key in ComponentSize]: number;
};
export declare const sidePaddings: {
    [key in ComponentSize]: number;
};
//# sourceMappingURL=sizes.d.ts.map