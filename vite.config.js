const vuePlugin = require('@vitejs/plugin-vue');

module.exports = {
  plugins: [
    vuePlugin({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('my-component'),
        },
      },
    }),
  ],
  build: {
    minify: false,
  },
};
