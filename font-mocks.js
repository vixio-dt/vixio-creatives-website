// Mock Google Fonts responses for offline builds
module.exports = {
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap": `
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: local('Space Grotesk'), local('sans-serif');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`,
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap": `
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400 600;
  font-display: swap;
  src: local('Manrope'), local('sans-serif');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`,
};
