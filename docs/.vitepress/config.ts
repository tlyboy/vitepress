import { defineConfig } from 'vitepress'

export default defineConfig({
  description: '',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    theme: 'vitesse-dark',
    lineNumbers: true,
  },
  title: 'starter',
  themeConfig: {
    logo: '/img/logo.svg',
    siteTitle: 'starter',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档简介',
        link: '/guide/',
      },
    ],
    outlineTitle: '在本页',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/tlyboy/starter',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Guany',
    },
    editLink: {
      pattern: 'https://github.com/tlyboy/starter/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
  },
})
