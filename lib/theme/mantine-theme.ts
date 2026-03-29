import { createTheme, MantineColorsTuple } from '@mantine/core';

const vixioBlue: MantineColorsTuple = [
  '#e8f7fc',
  '#d0eef8',
  '#a3dcf1',
  '#74c8ea',
  '#4fb8e2',
  '#3AAED8',
  '#2f9cc5',
  '#2589ad',
  '#1c7696',
  '#12637f',
];

export const theme = createTheme({
  primaryColor: 'vixioBlue',
  colors: {
    vixioBlue,
  },
  fontFamily: "'Manrope', sans-serif",
  headings: {
    fontFamily: "'Space Grotesk', sans-serif",
  },
  defaultRadius: 'md',
});
