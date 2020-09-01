
module.exports = {
    extends: "stylelint-config-standard",
    plugins: ["stylelint-scss"],
    ignoreFiles: ["node_modules/"],
    rules: {
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["function", "if", "each", "include", "mixin"]
          }],
        // "no-eol-whitespace": "inside-block",
        "indentation": 4,
    }
}