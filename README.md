#node-vue
Vue.js boilerplate using express & node as back-end.

## Installation
```sh
npm install --save node-vue
npm install
```

## Bugs
At the moment the entire boilerplate will be added  to your node_modules when running <code>npm install --save node-vue</code>, which is not the intent. You'll have to run <code>npm install</code> twice to also install the boilerplate's dependencies. I'm currently looking for a workaround, but the boilerplate still works.


## Todo
- Automatically open the project in a browser.
- Trigger hot reload when non-vue files are updated.
