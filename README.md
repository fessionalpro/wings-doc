# WingsBoot Document

this is the [WingsBoot](https://github.com/trydofor/professional-wings) document.

and special thanks to the following projects,

* [vuepress](https://v2.vuepress.vuejs.org/zh)
* [vuepress-theme-hope](https://theme-hope.vuejs.press/)
* [fontawesome icon](https://fontawesome.com/search?o=r&m=free&f=brands%2Cclassic)

## Development Tips

make sure the versions matches,

* `vue` to [hope vue]
* `vuepress/*` to [hope vue]
* `execa` to [hope cli]
* `prettier` to [hope npm]
* `deploy-docs.yml` to [git workflow]

then npm commands,

* `asdf install` - check and install node by nvm
* `npm install` - install/update packages
* `npm run docs:dev-clean` - clean and review
* `npm run docs:update-package` - update deps helper

[hope vue]: https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/pnpm-workspace.yaml
[hope cli]: https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/create/package.json
[hope npm]: https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/package.json
[git workflow]: https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/create/src/config/workflow.ts

## Markdown Conventions

* `.markdownlint.yml` install [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
* `category` PascalNaming singular noun.
* `title` PascalNaming without prep.
* `link` should start with `./`, `../`, `/`, `http`
* `list` level 1-3 use `*`,`+`,`-`
