module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Definiujesz środowisko przeglądarki
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
    },
    rules: {
      // Twoje zasady ESLint
    },
    settings: {
      react: {
        version: "detect", // Automatyczne wykrywanie wersji React
      },
    },
  },
];
