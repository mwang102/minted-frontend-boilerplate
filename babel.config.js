module.exports = {
  env: {
    development: {
      plugins: [
        [
          '@emotion',
          {
            autoLabel: 'always',
            sourceMap: true,
          },
        ],
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
        [
          '@babel/preset-react',
          {
            importSource: '@emotion/react',
            runtime: 'automatic',
          },
        ],
      ],
    },
    production: {
      plugins: [
        [
          '@emotion',
          {
            cssPropOptimization: true,
            sourceMap: false,
          },
        ],
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
        [
          '@babel/preset-react',
          {
            importSource: '@emotion/react',
            runtime: 'automatic',
          },
        ],
      ],
    },
    test: {
      plugins: [
        [
          '@emotion',
          {
            autoLabel: 'always',
            sourceMap: false,
          },
        ],
      ],
      presets: [
        '@babel/preset-env',
        [
          '@babel/preset-react',
          {
            importSource: '@emotion/react',
            runtime: 'automatic',
          },
        ],
      ],
    },
  },
};
