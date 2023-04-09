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
            "^@Presentation/(.+)": "./src/Presentation/\\1",
            "^@Modules/(.+)": "./src/Modules/\\1",
            "^@Assets/(.+)": "./assets/\\1",
            "^@Types/(.+)": "./src/Types/\\1",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
