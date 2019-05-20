#

속성 태그 기능의 스마트 서치바

## init 절차

### 1. default

#### bash

```bash
$ yarn create react-app ./ --typescript
$ yarn add ts-optchain -D
```

#### files

- .env

```env
NODE_PATH=src
REACT_EDITOR=atom
```

- .images.d.ts

```typescript
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
```

- tsconfig.paths.json

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "*": ["*"]
    }
  }
}
```

- tsconfig.json

```json
{
  "extends": "./tsconfig.paths.json",
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "plugins": [
      {
        "transform": "ts-optchain/transform"
      }
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve"
  },
  "include": ["src"]
}
```

### 2. eslint

#### extension

- eslint

#### bash

```bash
$ yarn create react-app ./ --typescript
$ yarn add eslint-config-react-app eslint-plugin-react eslint-plugin-sort-class-members @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier-eslint -D

```

#### files

- .eslintrc

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": ["sort-class-members"],
  "ecmaFeatures": {
    "jsx": true,
    "tsx": true
  },
  "rules": {
    "indent": "off",
    "semi": "warn",
    "quote-props": ["error", "as-needed"],
    "sort-class-members/sort-class-members": [
      2,
      {
        "order": [
          "[static-properties]",
          "[static-methods]",
          "[properties]",
          "[conventional-private-properties]",
          "constructor",
          "[methods]",
          "[conventional-private-methods]"
        ],
        "accessorPairPositioning": "getThenSet"
      }
    ],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      {
        "accessibility": "explicit",
        "overrides": {
          "constructors": "no-public",
          "methods": "no-public",
          "properties": "no-public"
        }
      }
    ],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/member-delimiter-style": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/camelcase": "warn",
    "@typescript-eslint/array-type": "warn",
    "@typescript-eslint/no-object-literal-type-assertion": [
      true,
      { "allow-arguments": true }
    ],
    "react/jsx-boolean-value": ["error", "never"],
    "react/sort-prop-types": [
      "warning",
      {
        "callbacksLast": true,
        "noSortAlphabetically": true
      }
    ],
    "react/jsx-curly-spacing": ["error", { "when": "never" }]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### 3. stylelint

#### extension

- stylelint
- prettier

#### bash

```bash
$ yarn add stylelint stylelint-order stylelint-config-rational-order stylelint-config-recommended prettier-stylelint -D

```

#### files

##### .stylelintrc

```json
{
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-rational-order"
  ],
  "rules": {
    "no-descending-specificity": true,
    "plugin/rational-order": true
  }
}
```
