module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/display-name": "off",
    semi: ["error", "never"],
    indent: [0, 4],
    "spaced-comment": ["error", "always"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ],
    "multiline-ternary": ["off"],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true
      }
    ]
  }
}
