import { defineConfig } from 'vitepress'
export default defineConfig({
    title: 'Home',
    description: 'A knowledge base with known vulnerabilities to help prevent attacks.',
    titleTemplate: 'KBvul',
    lastUpdated: true,
    themeConfig: {
      siteTitle: 'KBvul',
      nav: [
        { 
        text: 'Introduction', 
        link: '/introduction/',
        activeMatch: '/introduction/' 
      }
      ],
      editLink: {
        pattern: 'https://github.com/icepcp/KBvul/edit/docs/:path',
        text: 'Edit this page on GitHub'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/icepcp/KBvul' }
      ],
      sidebar: [
        {
          items: [
            { text: 'Introduction', link: '/introduction/' }
          ]
        }
      ]
    }
  })