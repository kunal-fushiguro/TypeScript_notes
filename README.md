# TypeScript Guide

## 01 TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, providing better tooling at any scale.

### Why TypeScript

- Avoid bugs in development.
- Increase development speed.
- Additional features (like enums, interfaces, property modifiers).

### Can We Run TypeScript in Production?

No, we can't run TypeScript in production. We only use TypeScript in development to help with typo errors, autocomplete, etc.

## Installation of TypeScript

1. Install Node.js.
2. Run the command: `npm i -g typescript`.
3. Verify the installation with: `tsc --help`.

### Run TypeScript

1. Run the command: `tsc filepath.ts`.
2. After that, you will get a JavaScript file.
3. Run the command: `node filepath.js`.

## 02 Type Alias

Type Aliases allow defining types with a custom name (an Alias).

- **Examples**: `number`, `string`, `Array<type>`, `boolean`
- **Custom Type**: `type CustomType = { name: string, age: number, address?: string }`
- **Function Return Type**: `function fnName(params: type): type { return params }`
- **Union Type**: `variableName: string | number`
- **Narrowing**: Check in union which type is passed in union variable using if-else type

## 03 Interfaces

Interfaces are similar to type aliases, except they only apply to object types.

- **Example**: `interface TypeName { email: string, password: string }`

### Difference Between Interface and Type in TypeScript

- Types in TypeScript are more flexible and can define primitive, intersection, union, tuple, or different types of data, while interfaces are used to describe the shape of an object.

### Extends in Interface

- The `extends` keyword is used for Interface Inheritance (or Class Inheritance).

## 04 Generics

Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use. Generics make it easier to write reusable code.

## TS Config

### Config Commands

- `tsc --init`

### Compile Command

- In `tsconfig.json`, set `"outDir": "./dist"` and run `tsc` in the command line.
- `"include": ["src/**/*"], "exclude": ["node_modules", "**/*.spec.ts"]`

## 05 TypeScript with React.js

(TypeScript with React.js section to be expanded based on specific use cases and examples.)

