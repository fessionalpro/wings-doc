import { NavbarOptions } from 'vuepress-theme-hope';

/*
https://dota2.fandom.com/wiki/Category:Hero_minimap_icons
https://liquipedia.net/dota2/Portal:Heroes
https://www.dota2.com/hero/batrider/?l=english
*/

export const navbarZh: NavbarOptions = [
  { text: '神翼', icon: '/mango_minimap_icon_16.png', link: '/0-wings/' },
  { text: '沉默', icon: '/silencer_minimap_icon_16.png', link: '/1-silencer/' },
  { text: '虚空', icon: '/faceless_minimap_icon_16.png', link: '/2-faceless/' },
  { text: '鱼人', icon: '/slardar_minimap_icon_16.png', link: '/3-slardar/' },
  { text: '术士', icon: '/warlock_minimap_icon_16.png', link: '/4-warlock/' },
  { text: '蝙蝠', icon: '/batrider_minimap_icon_16.png', link: '/5-batrider/' },
  { text: '实战', icon: '/animal_minimap_icon_16.png', link: '/9-example/' },
  {
    text: '阵营',
    icon: '/blueheart_minimap_icon_16.png',
    children: [
      { text: '天辉全明星', icon: '/tiny_minimap_icon_16.png', link: '/8-radiant/' },
      { text: '米拉娜工具', icon: '/mirana_minimap_icon_16.png', link: '/a-mirana/' },
      { text: '米波英雄模板', icon: '/meepo_minimap_icon_16.png', link: '/b-meepo/' },
    ],
  },
];
export const navbarEn: NavbarOptions = [
  { text: 'WingsGod', icon: '/mango_minimap_icon_16.png', link: '/en/0-wings/' },
  { text: 'Silencer', icon: '/silencer_minimap_icon_16.png', link: '/en/1-silencer/' },
  { text: 'Faceless', icon: '/faceless_minimap_icon_16.png', link: '/en/2-faceless/' },
  { text: 'Slardar', icon: '/slardar_minimap_icon_16.png', link: '/en/3-slardar/' },
  { text: 'Warlock', icon: '/warlock_minimap_icon_16.png', link: '/en/4-warlock/' },
  { text: 'Batrider', icon: '/batrider_minimap_icon_16.png', link: '/en/5-batrider/' },
  { text: 'Practice', icon: '/animal_minimap_icon_16.png', link: '/en/9-example/' },
  {
    text: 'Factions',
    icon: '/blueheart_minimap_icon_16.png',
    children: [
      { text: 'Randiant AllStars', icon: '/tiny_minimap_icon_16.png', link: '/en/8-radiant/' },
      { text: 'Mirana Utility', icon: '/mirana_minimap_icon_16.png', link: '/en/a-mirana/' },
      { text: 'Meepo Template', icon: '/meepo_minimap_icon_16.png', link: '/en/b-meepo/' },
    ],
  },
];
