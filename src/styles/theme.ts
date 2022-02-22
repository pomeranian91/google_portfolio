import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    border: "#d0d7de",
  },
  flexMinin: (direction = "row", justify = "center", align = "center") => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};
