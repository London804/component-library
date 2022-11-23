export const spinnerWidth = (size: number): number => {
    switch (true) {
        case size < 15:
            return size / 3.5;
        case size < 50:
            return size / 5;
        case size < 100:
            return size / 7.5;
        case size >= 100:
            return size / 10;
        default:
            return size / 10;
    }
};

export type themeType =
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'light';

export interface ThemeValues {
    bgColor: string;
    hover: string;
    color: string;
}

export type Theme = Record<themeType, ThemeValues>;

export const theme: Theme = {
    primary: {
        bgColor: '#1F51FF',
        hover: '#1d47db',
        color: '#ffffff'
    },
    secondary: {
        bgColor: '#35212A',
        hover: '#2b1b22',
        color: '#ffffff'
    },
    danger: {
        bgColor: '#FF0075',
        hover: '#de0066',
        color: '#ffffff'
    },
    warning: {
        bgColor: '#f08e0a',
        hover: '#e08509',
        color: '#ffffff'
    },
    success: {
        bgColor: '#00bf87',
        hover: '#02a676',
        color: '#ffffff'
    },
    info: {
        bgColor: '#24c4e0',
        hover: '#22b9d4',
        color: '#ffffff'
    },
    light: {
        bgColor: '#f2f2f2',
        hover: '#ebebeb',
        color: '#000000'
    }
};