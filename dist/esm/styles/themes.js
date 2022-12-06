import { Colors, teal, sky, } from './colors';
export const theme = {
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
//# sourceMappingURL=themes.js.map