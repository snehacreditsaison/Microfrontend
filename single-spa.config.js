import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue', 
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === "/react" ? false : true
);

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/vue"  ? false : true
);

registerApplication(
  'verification', 
  () => import('./src/verification/vue.app.js'),
  () => location.pathname === "/verification" ? false : true
);

registerApplication(
  'dedupe', 
  () => import('./src/dedupe/main.app.js'),
  () => location.pathname === "/dedupe" ? false : true
);

registerApplication(
  'dsa', 
  () => import('./src/dsa/main.app.js'),
  () => location.pathname === "/dsa" ? false : true
);

start();