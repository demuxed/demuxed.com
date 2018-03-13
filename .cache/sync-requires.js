// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mmcc/Projects/demuxed/demuxed.com/src/pages/404.js")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/mmcc/Projects/demuxed/demuxed.com/src/pages/index.jsx")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/mmcc/Projects/demuxed/demuxed.com/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/layout-index.json"),
  "404.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/404.json"),
  "layout-index.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/layout-index.json"),
  "index.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/index.json"),
  "layout-index.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/mmcc/Projects/demuxed/demuxed.com/.cache/json/404-html.json")
}