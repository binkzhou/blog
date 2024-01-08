module.exports = {
  base: "/blog",
  title: "博客",
  dest: "./build",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    type: "blog",
    subSidebar: "auto",
    sidebarDepth: 2,
    authorAvatar: "/avatar.jpg",
    nav: [
      {
        text: "home",
        icon: "reco-home",
        link: "/",
      },
      {
        text: "软件",
        icon: "reco-other",
        link: "/other/2022/0929001",
      },
      {
        text: "github",
        icon: "reco-github",
        link: "https://github.com/zhoubin-datareachable",
      },
      {
        text: "留言板",
        icon: "reco-suggestion",
        link: "https://support.qq.com/product/435903",
      },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
    ],
    record: "ICP 备案文案",
    recordLink: "ICP 备案指向链接",
    cyberSecurityRecord: "公安部备案文案",
    cyberSecurityLink: "公安部备案指向链接",
    startYear: "2021",
    author: "土豆",
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  ],
  extendMarkdown(md) {
    md.set({ html: true });
    md.use(require("markdown-it-katex"));
  },
};
