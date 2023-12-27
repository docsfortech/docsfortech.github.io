import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs for Tech',
            customCss: [
                './src/styles/custom.css'
            ],
			social: {
				github: 'https://github.com/docsfortech',
                instagram: 'https://www.instagram.com/docsfortech/',
			},
            pagefind: false
			/*sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],*/
		}),
	],
});
