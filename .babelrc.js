// module.exports = {
//   presets: ['@babel/env', '@babel/typescript', '@babel/react'],
//   plugins: [
//     '@babel/proposal-class-properties',
//     [
//       '@babel/plugin-transform-runtime',
//       {
//         corejs: 3,
//         helpers: true,
//       },
//     ],
//   ],
// };

// module.exports = {
//   presets: ['@babel/env', '@babel/typescript', '@babel/react'],
//   plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
// };

// module.exports = {
//   presets: [
//     [
//       '@babel/env',
//       {
//         modules: false, // 关闭模块转换
//       },
//     ],
//     '@babel/typescript',
//     '@babel/react',
//   ],
//   plugins: [
//     '@babel/proposal-class-properties',
//     [
//       '@babel/plugin-transform-runtime',
//       {
//         useESModules: true, // 使用esm形式的helper
//       },
//     ],
//   ],
// };

module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};