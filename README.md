## TypeScript-CodeCamp
Udemy: This course about TypeScript, including features like decorators and advanced types. By Insturctor Maximilian Schwarzmüller
---
# My journey with TypeScript is interesting.

#### 1. TypeScript's enumeration. 

```ts,
enum Role {ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Meyada',
  age: 26,
  hobbies: ['Sports', 'Coding'],
  role: Role.ADMIN
};

let favoriteAc: string[];
favoriteAc = ['Coding'];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
```
> This code makes use of TypeScript's enumeration feature to define a set of named constants (ADMIN, READ_ONLY, AUTHOR) that are used to set the value of the role property in the person object. This provides a more readable and maintainable way of setting and comparing the role, rather than using raw string or numeric values. Additionally, the code makes use of the for-of loop and the TypeScript's string array type to log the person's hobbies in uppercase.
---
#### 2. Union Aliases.
```ts,
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable, 
  input2: Combinable, 
  resultConversion: ConversionDescriptor
  ){
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number' ){
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(26, 40, 'as-number');
console.log(combineAges);

const combineStringAges = combine('26', '40', 'as-number');
console.log(combineStringAges);

const combineName = combine('Meya', 'Anne', 'as-text')
console.log(combineName);
```

> This TypeScript code defines a function ``combine`` that takes three arguments: ``input1`` and ``input2`` of type Combinable, which is a union type of ``number`` or ``string``, and ``resultConversion`` of type ``ConversionDescriptor``, which is a string literal type with two possible values: 'as-number' or 'as-text'.
The function checks the type of ``input1`` and ``input2`` and the value of ``resultConversion`` to determine how to combine the inputs. If both inputs are numbers or ``resultConversion`` is 'as-number', it performs mathematical addition on the inputs. Otherwise, it concatenates the inputs as strings.
The code also includes examples of how the function can be used with different inputs and conversion types.
---
#### 3. tsconfig.json

- ``"target": "es6",`` This option sets the JavaScript language version for emitted JavaScript, meaning that the code generated by the compiler will be compatible with the specified version of JavaScript. This allows developers to use newer features of the language and have them transpiled for backwards compatibility.

- ``"lib": [ "dom", "es6", "dom.iterable", "scripthost" ],`` This option specifies a set of bundled library declaration files that describe the target runtime environment. This allows developers to use libraries and APIs that are built-in to the specified environment, without having to include them in their project.
- ``"module": "commonjs",`` This option specify what module code is generated, and the developer can use commonjs, es2015, esnext and so on. This allows developers to use the module system that is most appropriate for their project.
- ``"rootDir": "./src",``This option specifies the root folder within your source files. This allows developers to specify the root directory of their source files, making it easier to organize and manage the project.
- ``"removeComments": true`` This option disables emitting comments. This can be useful for reducing the size of the generated JavaScript files or for obscuring the source code.
- ``"moduleSuffixes": [],`` This option allows developers to specify additional file types that should be considered when resolving modules, such as custom file extensions.
- ``"resolveJsonModule": true,`` This option allows developers to import .json files. It can be useful when loading data or configuration files in JavaScript.
- ``"noResolve": true,`` This option helps developers to prevent 'import's, 'require's or `'<reference>'`s from expanding the number of files TypeScript should add to a project. It can be useful when you want to limit the number of files that are included in a project.
- ``"allowJs": true,`` This option allows developers to include JavaScript files in their TypeScript projects. This can be useful when working with a codebase that contains both TypeScript and JavaScript files.
- ``"checkJs": true,`` This option allows developers to enable error reporting in type-checked JavaScript files. This can be useful when working with a codebase that contains both TypeScript and JavaScript files and you want to ensure that the JavaScript files are type-safe.
- ``"maxNodeModuleJsDepth": 1,`` This option allows developers to specify the maximum folder depth used for checking JavaScript files from 'node_modules'. This can be useful when working with a large codebase and you want to limit the number of files that are checked for errors.
- ``"declaration": true,``  This option allows developers to generate .d.ts files from TypeScript and JavaScript files in their project. This can be useful when working with other libraries or when you want to make your code more self-documenting.
- ``"sourceMap": true,`` This option allows developers to create source map files for emitted JavaScript files. This can be useful when debugging the generated JavaScript code, as it allows developers to see the original TypeScript code that generated the JavaScript.
- ``"declarationMap": true,`` This option allows developers to create sourcemaps for d.ts files. This can be useful when debugging the generated declaration files, as it allows developers to see the original TypeScript code that generated the declarations.
- ``emitDeclarationOnly": true,`` This option allows developers to only output d.ts files and not JavaScript files. This can be useful when working with other libraries and you only need the declarations for type checking.
- ``"outFile": "./",`` This option allows developers to specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. This can be useful when you want to bundle multiple JavaScript files into a single file for deployment.
- ``"noEmit": true,`` This option allows developers to disable emitting files from a compilation. This can be useful when you want to perform a type check of the code without generating any output files.
- ``"importHelpers": true`` This option allows developers to import helper functions from tslib once per project, instead of including them per-file. This can be useful when you want to reduce the number of files that are included in a project.
- ``"downlevelIteration": true,`` This option allows developers to emit more compliant, but verbose and less performant JavaScript for iteration. This can be useful when you want to ensure that the generated code is compatible with older JavaScript engines.
- ``"jsx": "preserve",`` This option allows developers to specify how JSX code is generated by the compiler. The default value is "preserve", which means that the JSX code will be included in the output without modification. This can be useful when working with React and you want to use JSX syntax in your TypeScript code.
- ``"jsxFactory": "",`` This option allows developers to specify the JSX factory function that should be used when targeting React JSX emit. This can be useful when working with React and you want to specify a custom factory function for creating React elements.
- ``"jsxFragmentFactory": "",`` This option allows developers to specify the JSX Fragment reference that should be used for fragments when targeting React JSX emit. This can be useful when working with React and you want to specify a custom Fragment type.
- ``"jsxImportSource": "",`` This option allows developers to specify the module specifier that should be used to import the JSX factory functions when using 'jsx: react-jsx*'. This can be useful when working with React and you want to specify a custom import path for the JSX factory functions.
- ``"reactNamespace": "",`` This option allows developers to specify the object invoked for 'createElement'. This can be useful when working with React and you want to specify a custom namespace for the React functions.
---

#### 4.  "private" and "public" Access Modifiers"

- ``"Public" ``members are accessible from anywhere, both within the class and outside of it. This is the default access level for class members if no access modifier is specified.

- ``"Private"`` members, on the other hand, are only accessible within the class in which they are defined. They cannot be accessed or modified from outside the class.
  
```ts,
class MyClass {
    public myPublicField = 'I am public';
    private myPrivateField = 'I am private';
}
let myObject = new MyClass();
console.log(myObject.myPublicField); // Output: "I am public"
console.log(myObject.myPrivateField); // Error: Property 'myPrivateField' is private and only accessible within class 'MyClass'.
```
