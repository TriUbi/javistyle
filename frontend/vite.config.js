import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const base = process.env.SITE_BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [{
    name: 'github-pages-paths',
    transform(code, id) {
      if (base === '/' || !id.includes('/src/') || !/\.[jt]sx?$/.test(id)) return;
      let output = code;
      for (const route of ['img', 'blog', 'servicios', 'metodo', 'testimonios', 'mi-historia']) {
        output = output.replaceAll(`/${route}/`, `${base}${route}/`);
      }
      output = output.replaceAll('/#', `${base}#`);
      output = output.replaceAll('href="/"', `href="${base}"`);
      return { code: output, map: null };
    },
  }],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        servicios: fileURLToPath(new URL('./servicios/index.html', import.meta.url)),
        blog: fileURLToPath(new URL('./blog/index.html', import.meta.url)),
        testimonios: fileURLToPath(new URL('./testimonios/index.html', import.meta.url)),
        metodo: fileURLToPath(new URL('./metodo/index.html', import.meta.url)),
        historia: fileURLToPath(new URL('./mi-historia/index.html', import.meta.url)),
      },
    },
  },
});
