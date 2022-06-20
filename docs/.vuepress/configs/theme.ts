import type { HopeThemeOptions } from 'vuepress-theme-hope';
import { navbar } from './navbar';
import { sidebar } from './sidebar';

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

export const themeOption: HopeThemeOptions = {
  navbar,
  sidebar,

  hostname: 'https://wings.fessional.pro',
  author: {
    name: 'trydofor',
    url: 'https://www.trydofor.com',
  },
  themeColor: {
    blue: '#2196f3',
    red: '#f26d6d',
    green: '#3eaf7c',
    orange: '#fb9b5f',
  },
  iconAssets: "iconfont",
  logo: '/logo.png',
  repo: 'trydofor/pro.fessional.wings',
  docsDir: 'docs',
  footer: 'Apache 2 licensed, Vuepress-Theme-Hope powered',
  copyright: 'Copyright© trydofor',
  displayFooter: true,
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  plugins: {
    blog: false,
    comment: {
      provider: 'Giscus',
      repo: 'trydofor/pro.fessional.wings',
      repoId: 'R_kgDOHVWlGQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHVWlGc4CPK4C',
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        stylizeIt(/^(?:MUST|必须)$/u, '', 'info', 'strong', 'sup'),
        stylizeIt(/^(?:SHOULD|推荐)$/u, '', 'tip', 'strong', 'sup'),
        stylizeIt(/^(?:MAY|可选)$/u, '', 'note', 'strong', 'sup'),
        stylizeIt(/^(?:NOT|慎用)$/u, '', 'warning', 'strong', 'sup'),
        stylizeIt('猿初', '🙈猿初', 'note', 'sup'),
        stylizeIt('猿中', '🙉猿中', 'note', 'sup'),
        stylizeIt('猿高', '🙊猿高', 'note', 'sup'),
        stylizeIt('狮初', '🦁狮初', 'tip', 'sup'),
      ],
    },
  },
};
