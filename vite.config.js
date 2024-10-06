import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import yml from '@modyfi/vite-plugin-yaml';
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"

export default defineConfig({
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, "./components"),
        // Other namespaces maybe be added.
      },
    }),
    // Allows Storybook to read data from YAML files.
    vue(),
    yml(),
  ],
})
