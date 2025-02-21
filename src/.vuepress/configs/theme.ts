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
  logo: '/logo.png',
  repo: 'trydofor/professional-wings',
  docsRepo: 'fessionalpro/wings-doc',
  docsDir: 'docs',
  footer:
    '<a href="https://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache2</a> licensed, ' +
    '<a href="https://theme-hope.vuejs.press" target="_blank">Mr.Hope</a> powered',
  copyright: 'Copyright© <a href="https://www.trydofor.com" target="_blank">trydofor</a>',
  displayFooter: true,
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  markdown: {
    alert: true,
    align: true,
    codeTabs: true,
    footnote: true,
    hint: true,
    imgMark: true,
    mark: true,
    mermaid: true,
    plantuml: true,
    spoiler: true,
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    stylize: [
      stylizeIt(/^(?:MUST|必须)$/u, '', 'info', 'strong', 'sup'),
      stylizeIt(/^(?:SHOULD|RECOMMENDED|TIP|推荐|建议)$/u, '', 'tip', 'strong', 'sup'),
      stylizeIt(/^(?:MAY|NOTE|可选|不推荐|不建议)$/u, '', 'note', 'strong', 'sup'),
      stylizeIt(/^(?:NOT|WARN|慎用)$/u, '', 'warning', 'strong', 'sup'),
    ],
  },
  plugins: {
    blog: false,
    comment: {
      provider: 'Giscus',
      repo: 'trydofor/professional-wings',
      repoId: 'MDEwOlJlcG9zaXRvcnkxOTUxNjgwMzE=',
      category: 'General',
      categoryId: 'DIC_kwDOC6IHH84CPy0E',
    },
    docsearch: {
      appId: '2OIWW9DS0Z',
      apiKey: 'c70807b7265d204d74d39aeee10b4474',
      indexName: 'wingsboot',
    },
    icon:{
      assets: 'fontawesome-with-brands', // https://fontawesome.com/search?o=r&m=free&f=brands%2Cclassic
    },
  },
});
