import { defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import hopeTheme from './configs/theme';
import { execa } from 'execa';

// 2022-10-22 e660ee1a6acf4f32a1d7ec7bbe548bba6b3fe051
const { stdout } = await execa('git', ['--no-pager', 'log', '-1', '--format=%as %H'], { stdin: 'inherit' });

export default defineUserConfig({
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'WingsBoot 纹丝不忒',
      description: '快速实现业务目标；及时偿还技术债务；安全重构程序和业务',
    },
    '/en/': {
      lang: 'en-US',
      title: 'WingsBoot wins bigger',
      description: 'Fast biz delivery; Timely tech-debt repayment; Safe code & biz refactoring',
    },
  },
  base: '/',
  theme: hopeTheme,
  plugins: [
    docsearchPlugin({
      appId: '2OIWW9DS0Z',
      apiKey: 'c70807b7265d204d74d39aeee10b4474',
      indexName: 'wingsboot',
    }),
  ],
  // use HEAD date and hash
  extendsPage: page => {
    page.frontmatter.GIT_REPO_HEAD = stdout;
  },
});
