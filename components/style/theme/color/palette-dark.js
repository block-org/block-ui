const { generate } = require('@block-org/color');

module.exports = {
  install(_, __, functions) {
    functions.add('color-palette-dark', (color, index) => {
      return generate(color.value, { index: index.value, dark: true });
    });
  },
};
