import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme  {
    color: {
        white: string;
        yellow: string;
        purple: string;

        lightYellow: string;
        lightPurple: string;

        darkYellow:  string;
        darkPurple: string;

        background: string;

        baseTitle: string;
        baseSubtitle: string;
        baseText: string;
        baseLabel: string;
        baseHover: string;
        baseButton: string;
        baseInput: string;
        baseCard: string;
    },
    font: {
        baloo: string;
        roboto: string;
    }

}
}