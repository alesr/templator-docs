import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// Project-page hosting on GitHub Pages: https://stdout.alesr.me/templator-docs/
// The URL path must equal the repo slug (same mechanism as the mcpgen docs).
export default defineConfig({
  site: 'https://stdout.alesr.me/templator-docs/',
  base: '/templator-docs',
  srcDir: './src',
  outDir: './dist',
  integrations: [
    starlight({
      title: 'templator',
      description:
        'A type-safe HTML template rendering engine for Go: compile-time data guarantees, optional field validation, and go:generate support on top of html/template.',
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/alesr/templator-docs/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/alesr/templator',
        },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Quickstart', link: '/quickstart/' },
        {
          label: 'Concepts',
          items: [
            { label: 'The type-safety model', link: '/concepts/type-safety/' },
            { label: 'Registry and handlers', link: '/concepts/registry-and-handlers/' },
            { label: 'Field validation', link: '/concepts/field-validation/' },
            { label: 'Filesystems', link: '/concepts/filesystems/' },
          ],
        },
        {
          label: 'How-to guides',
          items: [
            { label: 'Custom template functions', link: '/guides/custom-functions/' },
            { label: 'Test templates', link: '/guides/testing-templates/' },
            { label: 'Generate typed accessors', link: '/guides/code-generation/' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'API', link: '/reference/api/' },
            { label: 'Generator CLI', link: '/reference/generator/' },
            { label: 'Errors', link: '/reference/errors/' },
          ],
        },
        {
          label: 'Project',
          items: [
            { label: 'Contributing', link: '/project/contributing/' },
            { label: 'FAQ and troubleshooting', link: '/project/faq/' },
          ],
        },
      ],
      plugins: [
        starlightLinksValidator({
          errorOnFallbackPages: false,
        }),
      ],
    }),
  ],
});
