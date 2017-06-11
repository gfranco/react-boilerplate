module.exports = {

  "parser": "babel-eslint",

  "env": {
    "browser": true,
    "mocha": true,
    "es6": true
  },

  "extends": "google",

  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },

  "plugins": [
    "react"
  ],

  "rules": {

    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    "require-jsdoc": 0,

    "padded-blocks": ["error", {
      "switches": "always"
    }],

    "arrow-parens": ["error", "always"],

    "comma-dangle": ["error", "never"],

    "no-unused-expressions": [2, {
      allowShortCircuit: true
    }],

    "jsx-quotes": ["error", "prefer-single"]

  }

};
