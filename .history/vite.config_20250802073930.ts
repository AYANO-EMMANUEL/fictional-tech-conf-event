import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or your framework's plugin
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // Or your framework's plugin
    tailwindcss(),
  ],
});