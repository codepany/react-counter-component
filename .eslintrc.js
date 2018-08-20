module.exports = {
    "parser": "babel-eslint",
    "extends": [
      "standard",
      "standard-react"
    ],
    "plugins": [
      "babel",
      "react",
      "promise"
    ],
    "env": {
      "browser" : true,
      "jest": true
    },
    "globals": {
      "__DEV__"      : false,
      "__TEST__"     : false,
      "__PROD__"     : false,
      "__COVERAGE__" : false
    },
    "rules": {
      "key-spacing"          : 0,
      "jsx-quotes"           : [2, "prefer-single"],
      "max-len"              : [2, 200, 2],
      "space-before-function-paren": ["error", {
          "anonymous": "always",
          "named": "never",
          "asyncArrow": "always"
      }],
      "object-curly-spacing" : [2, "always"],
      "react/jsx-no-bind": [
        2,
        {
          "ignoreRefs"          : true,
          "allowArrowFunctions" : true,
          "allowBind"           : true
        }
      ],
    }
};
