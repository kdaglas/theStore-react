module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-ally",
        "import"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 6
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }

 }
 