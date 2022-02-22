import 'styled-components';
import { flattenDiagnosticMessageText } from 'typescript';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      border: string | undefined;
    };

    flexMinin: (direction?: string, justify?: string, align?: string) => string;
  }
}
