import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import rdPlugin from "./plugin.mjs";


export default [
  {
    plugins: {
      rdPlugin
    },
    rules: {
      'rdPlugin/changeToken': 'error'
    }
  },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];