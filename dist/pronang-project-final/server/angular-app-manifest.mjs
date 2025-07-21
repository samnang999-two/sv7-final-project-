
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
    'index.csr.html': {size: 806, hash: '287d1f8aeaf59c4720274cff5424727bdc7364286213071f553bb21ff908c278', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1208, hash: '520062753e036b15243534ccd6c714fa4dfaa0c80a40358aaf81a6d0cbdc2880', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10992, hash: '118ba140280f002338cf990127e0a596b8314fb8bcb24730969f3d22f47f63a4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BJCVMHSH.css': {size: 4103, hash: 'aUlMLiIUKqQ', text: () => import('./assets-chunks/styles-BJCVMHSH_css.mjs').then(m => m.default)}
  },
};
