import { NavbarOptions } from 'vuepress-theme-hope';

export const navbarZh: NavbarOptions = [
  { text: '神翼', icon: 'discover', link: '/0-wings/' },
  { text: '沉默', icon: 'define', link: '/1-silence/' },
  { text: '虚空', icon: 'time', link: '/2-faceless/' },
  { text: '鱼人', icon: 'speed', link: '/3-slardar/' },
  { text: '术士', icon: 'proxy', link: '/4-warlock/' },
  { text: '蝙蝠', icon: 'config', link: '/5-batrider/' },
  { text: '实战', icon: 'actions', link: '/9-example/' },
  { text: '阵营', icon: 'emoji', children: ['/8-radiant/', '/a-mirana/', '/b-meepo/'] },
];
export const navbarEn: NavbarOptions = [
  { text: 'WingsGod', icon: 'discover', link: '/en/0-wings/' },
  { text: 'Silencer', icon: 'define', link: '/en/1-silence/' },
  { text: 'Faceless', icon: 'time', link: '/en/2-faceless/' },
  { text: 'Slardar', icon: 'speed', link: '/en/3-slardar/' },
  { text: 'Warlock', icon: 'proxy', link: '/en/4-warlock/' },
  { text: 'Batrider', icon: 'config', link: '/en/5-batrider/' },
  { text: 'InAction', icon: 'actions', link: '/en/9-example/' },
  { text: 'Factions', icon: 'emoji', children: ['/en/8-radiant/', '/en/a-mirana/', '/en/b-meepo/'] },
];
