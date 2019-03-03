module.exports = {
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true,
      "jest": true
    },
    "extends": "airbnb",
    "plugins": [
      "react",
      "jsx-ally",
      "import"
    ],
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
 }
