import { defineUserConfig } from 'vuepress';
import hopeTheme from './configs/theme';
import { execFileSync } from 'node:child_process';

const stdout = execFileSync(
  'git',
  ['--no-pager', 'log', '-1', '--format=%as %H'],
  { encoding: 'utf8', windowsHide: true }
);

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'WingsBoot Win Sprint',
      description: 'Fast biz delivery; Timely tech-debt repayment; Safe code & biz refactoring',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'WingsBoot 纹丝不忒',
      description: '快速实现业务目标；及时偿还技术债务；安全重构程序和业务',
    },
  },
  base: '/',
  theme: hopeTheme,
  // use HEAD date and hash
  extendsPage: page => {
    page.frontmatter.GIT_REPO_HEAD = stdout;
  },
});
