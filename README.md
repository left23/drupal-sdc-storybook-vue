# Drupal Theme with SDC and Storybook - Vue and Vite

See vite.config.js for plugins used.
`import twig from 'vite-plugin-twig-drupal'`
"A Vite plugin based on Twig JS for compiling Twig-based components into a
JavaScript function so that they can be used as components with Storybook. It
allows you to import Twig files into your story as though they are JavaScript
files."
See https://github.com/larowlan/vite-plugin-twig-drupal
and
https://www.previousnext.com.au/blog/drupal-front-end-nirvana-vite-twig-and-storybook

Also see https://mariohernandez.io/tag/storybook/

Optional: Use Drupal Storybook module for `stories` and `story` twig tags.
Run `drush storybook:generate-all-stories` to generate json files for the
components. See https://www.lullabot.com/articles/new-storybook-module-drupal

## Vue 3 + TypeScript + Vite
This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
