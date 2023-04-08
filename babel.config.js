module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@DesignSystem": "./src/DesignSystem/index.ts",
            "@Lib": "./src/Lib/index.ts",
            "^@Screens/(.+)": "./src/Screens/\\1",
            "^@Assets/(.+)": "./assets/\\1",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
