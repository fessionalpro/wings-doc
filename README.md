# WingsBoot Document

this is the [WingsBoot](https://github.com/trydofor/pro.fessional.wings) document.

and special thanks to the following projects,

* [vuepress](https://v2.vuepress.vuejs.org/zh)
* [vuepress-theme-hope](https://theme-hope.vuejs.press/)

## Development Tips

make sure the versions matches,

* `vue` to [hope vue]
* `vuepress/*` to [hope vue]
* `execa` to [hope pnpm]
* `pnpm` to [hope pnpm]

then pnpm commands,

* `npm -g install pnpm` - global install pnpm
* `pnpm install` - install/update packages
* `pnpm docs:dev-clean` - clean and review
* `pnpm dlx vp-update` - update deps helper

[hope vue]: https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/components/package.json
[hope pnpm]: https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/package.json

## Markdown Conventions

* `.markdownlint.yml`
* `category` PascalNaming singular noun.
* `title` PascalNaming without prep.
* `link` current dir omit `./`
* `list` level 1-3 use `*`,`+`,`-`
