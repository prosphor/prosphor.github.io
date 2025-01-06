import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import { dataToEsm } from "@rollup/pluginutils";

export default defineConfig({
	plugins: [sveltekit(), ViteYaml()],
	server: {
    watch: {
      ignored: ['**/*.yaml'],
    },
  },
});
