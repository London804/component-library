import {
    Colors,
    teal,
    sky,
} from 'styles/colors';

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
        bgColor: Colors.juicyBlue,
        hover: Colors.juicyBlue,
        color: Colors.white
    },
    secondary: {
        bgColor: Colors.softBlack,
        hover: Colors.softBlack,
        color: Colors.white
    },
    danger: {
        bgColor: Colors.red,
        hover: Colors.red,
        color: Colors.white
    },
    warning: {
        bgColor: Colors.orange,
        hover: Colors.orange,
        color: Colors.white
    },
    success: {
        bgColor: teal['teal-400'],
        hover: teal['teal-600'],
        color: Colors.white
    },
    info: {
        bgColor: sky['sky-400'],
        hover: sky['sky-400'],
        color: Colors.white
    },
    light: {
        bgColor: Colors.softGray,
        hover: Colors.paleGray,
        color: Colors.white,
    }
};
