import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    googleRed: 'rgb(234,067,053)',
    googleBlue: 'rgb(066,133,244)',
    googleYellow: 'rgb(251,188,005)',
    googleGreen: 'rgb(052,168,083)',
    googleGray: 'rgb(138,141,146)',
  },
  flexMinin: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};
