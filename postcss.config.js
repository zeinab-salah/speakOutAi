import tailwindcss from '@tailwindcss/postcss'; // ✅ correct import
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
};
