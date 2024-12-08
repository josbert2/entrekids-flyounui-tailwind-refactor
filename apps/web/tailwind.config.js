
// tailwind.config.js

import defaultTheme from 'tailwindcss/defaultTheme';
import { borderRadius } from './src/sass/base/Rounded';
import { colors } from './src/sass/base/Colors';
import { texts } from './src/sass/base/Texts';
import { shadows } from './src/sass/base/Shadows';


module.exports = {
  darkMode: ['class'],
  safelist: ['.dark'],
  content: [
    "./src/view/**/*.{twig,html}",
    "./src/template/**/*.twig",
    "./src/js/**/*.js",
    "./src/sass/**/*.scss" // Ajusta según tu estructura
  ],
  theme: {
    fontSize: {
      ...texts,
      inherit: 'inherit',
    },
    boxShadow: {
      ...shadows,
      none: defaultTheme.boxShadow.none,
    },
    borderRadius: {
      ...borderRadius,
      none: 'none',
    },
    colors: {
      ...colors,
    },
  },
  plugins: [],
};
