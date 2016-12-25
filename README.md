#node-vue
Vue.js boilerplate using express & node as back-end.

## Installation
```sh
npm install --save node-vue
cd node_modules/node-vue
npm install
copy node-vue folder to wherever you want your project to reside
npm start
```

## Bugs
At the moment the entire boilerplate will be added  to your node_modules when running <code>npm install --save node-vue</code>, which is not the intent. You'll have to run <code>npm install</code> twice (once to download the module from npm to your machine, and once after navigating to <code>node_modules/node-vue</code> to also install the boilerplate's dependencies. I'm currently looking for a workaround, but the boilerplate still works if you run <code>npm start</code> from the <code>node_modules/node-vue</code> folder.


## Todo
- Automatically open the project in a browser.
- Trigger hot reload when non-vue files are updated.
