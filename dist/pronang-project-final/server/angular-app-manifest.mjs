
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 806, hash: '4e1b8f31b939e3e2ff549a1f39abb861f19d7b50a316eec469bcdbbc6878272b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1208, hash: '71eb60e84d5f8e56b5ff391ad2daa8bb309b45cf0fff133762a4feef2feca6ff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12176, hash: 'c4aa3bc8c56b9dfc00b4e12a7b90248e434de4a3f41594cec36258876339b7da', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PYFXD3GJ.css': {size: 4355, hash: 'hkCndykzQ0w', text: () => import('./assets-chunks/styles-PYFXD3GJ_css.mjs').then(m => m.default)}
  },
};
