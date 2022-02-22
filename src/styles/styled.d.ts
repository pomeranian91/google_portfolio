import 'styled-components';
import { flattenDiagnosticMessageText } from 'typescript';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      googleRed: string | undefined;
      googleBlue: string | undefined;
      googleYellow: string | undefined;
      googleGreen: string | undefined;
      googleGray: string | undefined;
    };

    flexMinin: (direction?: string, justify?: string, align?: string) => string;
  }
}
