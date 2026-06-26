// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/docker-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'Docker — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/docker-from-zero-to-hero/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/docker-from-zero-to-hero/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/docker-from-zero-to-hero/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/docker-from-zero-to-hero/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#2496ED' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Docker" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/docker-from-zero-to-hero/sw.js',{scope:'/docker-from-zero-to-hero/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/docker-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Concepts', items: [{ autogenerate: { directory: 'intro' } }] },
        { label: 'Images & the Dockerfile', items: [{ autogenerate: { directory: 'images-dockerfile' } }] },
        { label: 'Running Containers', items: [{ autogenerate: { directory: 'containers' } }] },
        { label: 'Data & Volumes', items: [{ autogenerate: { directory: 'data-volumes' } }] },
        { label: 'Networking', items: [{ autogenerate: { directory: 'networking' } }] },
        { label: 'Docker Compose', items: [{ autogenerate: { directory: 'compose' } }] },
        { label: 'Optimization & Best Practices', items: [{ autogenerate: { directory: 'optimization' } }] },
        { label: 'Registry, CI & Deploy', items: [{ autogenerate: { directory: 'registry-ci-deploy' } }] },
      ],
      }), preact()],
});