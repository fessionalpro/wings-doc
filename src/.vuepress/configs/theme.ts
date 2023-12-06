import { hopeTheme } from 'vuepress-theme-hope';
import { navbarZh, navbarEn } from './navbar';
import { sidebarZh, sidebarEn } from './sidebar';

function stylizeIt(key: string | RegExp, txt: string, type: string, ...tags: string[]) {
  return {
    matcher: key,
    replacer: ({ tag, content }) => {
      if (tags.includes(tag)) {
        let vertical = 'middle';
        if (tag === 'sup') {
          vertical = 'top';
        } else if (tag === 'sub') {
          vertical = 'bottom';
        }
        return {
          tag: 'Badge',
          attrs: { type, vertical },
          content: txt ? txt : content,
        };
      }
    },
  };
}

export default hopeTheme({
  locales: {
    '/': {
      navbar: navbarEn,
      sidebar: sidebarEn,
    },
    '/zh/': {
      navbar: navbarZh,
      sidebar: sidebarZh,
    },
  },

  hostname: 'https://wings.fessional.pro',
  author: {
    name: 'trydofor',
    url: 'https://www.trydofor.com',
  },
  themeColor: true,
  iconAssets: 'iconfont',
  logo: '/logo.png',
  repo: 'trydofor/pro.fessional.wings',
  docsRepo: 'fessionalpro/wings-doc',
  docsDir: 'docs',
  footer:
    '<a href="https://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache2</a> licensed, ' +
    '<a href="https://theme-hope.vuejs.press" target="_blank">Mr.Hope</a> powered',
  copyright: 'Copyright© <a href="https://www.trydofor.com" target="_blank">trydofor</a>',
  displayFooter: true,
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  plugins: {
    blog: false,
    comment: {
      provider: 'Giscus',
      repo: 'trydofor/pro.fessional.wings',
      repoId: 'MDEwOlJlcG9zaXRvcnkxOTUxNjgwMzE=',
      category: 'General',
      categoryId: 'DIC_kwDOC6IHH84CPy0E',
    },
    //components: ['Badge', 'FontIcon'],
    mdEnhance: {
      alert: true,
      hint: true,
      vPre: true,
      tabs: true,
      codetabs: true,
      align: true,
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      imgMark: true,
      tasklist: true,
      mermaid: true,
      stylize: [
        stylizeIt(/^(?:MUST|必须)$/u, '', 'info', 'strong', 'sup'),
        stylizeIt(/^(?:SHOULD|RECOMMENDED|TIP|推荐|建议)$/u, '', 'tip', 'strong', 'sup'),
        stylizeIt(/^(?:MAY|NOTE|可选|不推荐|不建议)$/u, '', 'note', 'strong', 'sup'),
        stylizeIt(/^(?:NOT|WARN|慎用)$/u, '', 'warning', 'strong', 'sup'),
      ],
    },
  },
});
