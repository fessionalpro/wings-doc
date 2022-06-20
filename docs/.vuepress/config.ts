import { defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { hopeTheme } from 'vuepress-theme-hope';
import { themeOption } from './configs/theme';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'WingsBoot',
  description: '快速实现业务目标；快速偿还技术债务；安全重构程序和业务',
  base: '/',
  theme: hopeTheme(themeOption),
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
  ],
  plugins: [
    docsearchPlugin({
      appId: '8YBPIAAF53',
      apiKey: '115c7d17dacbf60d985d6389e9eff675',
      indexName: 'java-code-review-moilioncircle',
    }),
  ],
});
