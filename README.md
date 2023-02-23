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

---

#### 5. "readonly" Properties

- ``"readonly" ``access modifier is used to create properties that can only be read and cannot be modified. Once a readonly property is set, its value cannot be changed.

```ts,
 class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string ) {
    // this.id = id;
    // this.name = n;
  }
 }
```

---
#### 6. Overriding Properties & The "protected" Modifier
- In TypeScript, the ``"protected"`` access modifier is similar to the ``"private"`` access modifier, but with one key difference: protected members can also be accessed from within derived classes.

When it comes to overriding properties, the ``"protected"`` access modifier can be useful because it allows derived classes to access and modify the value of the base class property.

```ts, 
class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private id: string, public name: string ) {
    // this.id = id;
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department (${this.id}: ${this.name})`);
  }
  addEmployee(employee: string){
    // Validation etc
    this.employees.push(employee);
  }
  printEmployeeInformattion(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
} 

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]){
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]){
    super(id, 'Accounting');
  }
  addEmployee(name: string) {
      if (name === 'Meya') {
        return;
      }
      this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('D1', ['Meya']);

it.addEmployee('Meya');
it.addEmployee('Malee');

// it.employees[2] = 'Mario';

it.describe();
it.name = 'New name';
it.printEmployeeInformattion();

console.log(it);

const accounting = new AccountingDepartment('D2', []);

accounting.addReport('Something went wrong...');

accounting.addEmployee('Meya');
accounting.addEmployee('Malee');

accounting.printReports();
accounting.printEmployeeInformattion();
```
---

#### 7. Getters & Setters

- In TypeScript, getters and setters are used to control access to the properties of an object. A getter is a method that is used to retrieve the value of a property, while a setter is a method that is used to set the value of a property.
```ts,
class MyClass {
    private _myProperty: string;
    get myProperty(): string {
        return this._myProperty;
    }
    set myProperty(value: string) {
        this._myProperty = value;
    }
}

let myObject = new MyClass();
myObject.myProperty = 'new value';
console.log(myObject.myProperty); // Output: "new value"
```
> In this example, the ``"myProperty"``property is defined as private, and can only be accessed and modified using the public getter and setter methods. 
> Getters and setters are useful in situations where you want to control access to a property, or perform additional logic when a property is accessed or modified. For example, you can use a setter to validate the value being set before it is stored, or use a getter to return a computed value based on the current state of the object. 
> Also, with the latest version of TypeScript, you can use the getter and setter syntax directly on the property, it's called the ``"Accessor Property"``
---

#### 8. Abstract Classes
```ts,
abstract class Shape {
    abstract getArea(): number;
}

class Square extends Shape {
    side: number;
    constructor(side: number) {
        super();
        this.side = side;
    }
    getArea(): number {
        return this.side * this.side;
    }
}
let square = new Square(5);
console.log(square.getArea()); // Output: 25

```
> An abstract class in TypeScript is a class that cannot be instantiated, but can be extended by other classes. It serves as a base class for other classes and provides a common interface for derived classes. Abstract classes are defined using the ``"abstract"`` keyword and can contain both abstract and non-abstract members (methods and properties). An abstract class must be extended by a derived class, which must implement all the abstract methods and properties defined in the base class. It's important to note that you can't create an instance of an abstract class and can't override a non-abstract method with an abstract one.
---

#### 9. Singletons & Private Constructors
```ts, 
class Singleton {
    private static instance: Singleton;
    private constructor() {}
    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
let singleton1 = Singleton.getInstance();
let singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // Output: true
```
> A singleton is a design pattern that ensures that a class has only one instance and provides a global point of access to that instance. It can be implemented in TypeScript using a private constructor and a private static instance variable. The private constructor prevents other classes from instantiating the class directly, and the private static instance variable holds the single instance of the class, which can be accessed using a public static method ``"getInstance"``. The use of private constructors can also prevent other classes from instantiating an object of the class, allowing the developer to control the way objects are created, and to ensure that a class has only one instance, like in the singleton pattern.

---

#### 10. Using Interfaces with Classes

```ts,
interface Person {
    firstName: string;
    lastName: string;
    sayHello(): string;
}

class Student implements Person {
    firstName: string;
    lastName: string;
    sayHello(): string {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
}
```
> the interface ``"Person"`` defines the properties ``"firstName"`` and ``"lastName"`` as well as the method ``"sayHello"``. The class ``"Student"`` implements this interface, meaning that it must have the properties and methods defined in the interface. The class must provide an implementation for the sayHello method, which is defined in the interface. 
> Using interfaces with classes provides a way to ensure that a class has the properties and methods that it should have, without providing an implementation for them. This can be useful in situations where you want to ensure that a class conforms to a certain structure, or where you want to create a contract for the shape of an object that multiple classes can implement.

---

#### 11. Readonly Interface Properties

 ```ts,
 interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
 ```

 > In TypeScript, readonly interface properties are properties in an interface that can only be read, not written to. This is achieved by using the ``readonly`` keyword before the property name. The value of a readonly property must be set at the time of object creation and cannot be changed

---

#### 12. Discriminated Unions

```ts,
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
  }
}
```
>In TypeScript, a discriminated union is a type that represents a value that can be one of several types. The union is "discriminated" because a property that distinguishes between the different types of the union is used to determine which type the value is. This allows the type system to infer the type of the value, and provide more specific type information when working with the value.

---

#### 13. Type Casting
```ts,
let value: any = "Hello, world!";
let str = value as string;
```
> In TypeScript, type casting is a way to tell the compiler to treat a value as a specific type, even if its original type is different. This can be useful when working with APIs that return values of a more general type than the actual type of the values, or when working with values that are inferred as a more general type than their actual type.

---

#### 14. Function Overloads

```ts,
 function formatName(first: string, last: string): string;
function formatName(first: string): string;
function formatName(first: string, last?: string): string {
  if (last) {
    return `${first} ${last}`;
  } else {
    return first;
  }
}

let fullName = formatName("John", "Doe");
let firstName = formatName("Jane");
```
> In TypeScript, function overloading allows you to declare multiple functions with the same name but different parameter lists. This can be useful when you want to provide different implementations for a function based on the types of its arguments. When calling a function with overloaded signatures, TypeScript will choose the best match based on the types of the arguments being passed.

---

#### 15. Optional Chaining

```ts,
let user = { name: "John", address: { city: "London" } };

let city = user?.address?.city;
console.log(city); // Output: "London"

user = null;
city = user?.address?.city;
console.log(city); // Output: undefined
```
> Optional chaining is a feature in TypeScript (and in many other programming languages) that allows you to access properties or methods of an object without having to check if the object is ``null`` or ``undefined`` first.

> The optional chaining operator ``?``. allows you to safely access properties or methods of an object without having to check if the object is ``null`` or ``undefined``. If the object is ``null`` or ``undefined``, the expression short-circuits and returns ``undefined`` instead of throwing an error.


---

#### 16. Working with Constraints

```ts, 
interface HasName {
  name: string;
}

function printName<T extends HasName>(obj: T): void {
  console.log(obj.name);
}

let person = { name: "John", age: 30 };
printName(person); 

let animal = { species: "Dog" };
```
> In TypeScript, constraints are used to restrict the types of values that can be used with a generic type. When working with generic types, you can use constraints to ensure that the type of value being used meets certain requirements.

---

#### 17. Decorator
> Decorator in TypeScript is a special syntax that can be used to modify the behavior of a class, method, property, or parameter. Decorators can be used to add metadata to your code, to change the behavior of a class or its members, or to implement aspect-oriented programming (AOP) techniques.

```ts, 
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Calling method ${propertyKey} with arguments`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${propertyKey} returned`, result);
    return result;
  };
}

class UserService {
  @logMethod
  getUser(id: number) {
    return { id: id, name: "John" };
  }
}

const userService = new UserService();
userService.getUser(1);
// Output:
// Calling method getUser with arguments [ 1 ]
// Method getUser returned Object { id: 1, name: "John" }
```
> The ``logMethod`` decorator is used to log information about a method before and after it is called. The ``logMethod`` decorator takes three arguments: ``target``, ``propertyKey``, and ``descriptor``. The ``target`` argument is the instance of the class that the method belongs to, the ``propertyKey`` argument is the name of the method, and the ``descriptor`` argument is a property descriptor that can be used to modify the behavior of the method.

> In the implementation of the ``logMethod`` decorator, we use the ``descriptor.value`` property to get a reference to the original method, and then we use the ``descriptor.value`` property to assign a new function that wraps the original method and logs information about it before and after it is called.

---

#### 18. Diving into Property Decorators

> A property decorator in TypeScript is a special syntax that can be used to modify the behavior of a class property. Property decorators can be used to add metadata to your code, to change the behavior of a property, or to implement aspect-oriented programming (AOP) techniques.

```ts, 
function logProperty(target: any, propertyKey: string) {
  let _val = target[propertyKey];
  const getter = function() {
    console.log(`Getting value for property ${propertyKey}: ${_val}`);
    return _val;
  };
  const setter = function(newVal: any) {
    console.log(`Setting value for property ${propertyKey}: ${newVal}`);
    _val = newVal;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  });
}

class User {
  @logProperty
  name: string;
}

const user = new User();
user.name = "John";
console.log(user.name);
// Output:
// Setting value for property name: John
// Getting value for property name: John
```

>In this example, the ``logProperty`` decorator is used to log information about a property whenever its value is set or retrieved. The ``logProperty`` decorator takes two arguments: ``target`` and ``propertyKey``. The ``target`` argument is the instance of the class that the property belongs to, and the ``propertyKey`` argument is the name of the property.

>In the implementation of the ``logProperty`` decorator, we use the ``Object.defineProperty`` method to define a new property with a getter and a setter that log information about the property whenever its value is set or retrieved.


---

#### 19. Returning (and changing) a Class in a Class Decorator
>In TypeScript, class decorators can return a new class that will replace the original one. This is useful when you want to change the behavior or properties of a class.

```ts,
function logClass(target: any) {
  console.log(`Creating instance of class ${target.name}`);
  return class extends target {
    constructor(...args: any[]) {
      console.log(`Calling constructor of class ${target.name}`);
      super(...args);
    }
  };
}

@logClass
class User {
  constructor(public name: string) {}
}

const user = new User("John");
console.log(user);
// Output:
// Creating instance of class User
// Calling constructor of class User
// User { name: "John" }
```

>The ``logClass`` decorator logs information about the creation of an instance of the ``User`` class and the call to its constructor. The decorator returns a new class that extends the original ``User`` class and adds logging to the constructor.


---

#### 19. Autobind Decorator

>The Autobind decorator is a TypeScript decorator that can be used to automatically bind the ``this`` keyword to the correct value when calling a method. This is useful when you want to ensure that the method always refers to the instance of the class, even when the method is passed as a callback or used in a different context.
```ts,
function autobind(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjustedDescriptor;
}

class User {
  name = "John";
  @autobind
  getName() {
    return this.name;
  }
}

const user = new User();
const getName = user.getName;
console.log(getName());
// Output:
// John
```

> The Autobind decorator is used to bind the ``this`` keyword to the correct value when calling the ``getName`` method. This means that the method can be called as a standalone function, and it will still refer to the ``User`` instance, not the global context.


---

#### 20. Validation with Decorators
```ts,
function required(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    get() {
      return this["_" + propertyKey];
    },
    set(value) {
      if (!value) {
        throw new Error(`${propertyKey} is required.`);
      }
      this["_" + propertyKey] = value;
    },
  });
}

class User {
  @required
  name!: string;
  @required
  email!: string;
}

const user = new User();
user.name = "John";
user.email = "john@example.com";
console.log(user);
// Output:
// User { _name: "John", _email: "john@example.com" }
```
 > The ``required`` decorator sets a getter and setter on the decorated properties that validate the presence of a value. When the value of a decorated property is set to ``undefined`` or ``null``, the setter throws an error indicating that the property is required

---

#### 21. DOM Element Selection & OOP Rendering

```ts,
 class Form {
  private formElement: HTMLFormElement;

  constructor(selector: string) {
    this.formElement = document.querySelector(selector);
    if (!this.formElement) {
      throw new Error(`Cannot find form with selector "${selector}"`);
    }
    this.render();
  }

  private render() {
    this.formElement.innerHTML = `
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
    `;
  }
}

const form = new Form("#sign-in-form");
console.log(form);
```
> The ``Form`` class is used to select a form element from the DOM using a selector, and render the form content using OOP concepts. The ``render`` method is used to render the content of the form, and the class constructor is used to select the form element and render the form content. This approach can be extended to handle more complex rendering scenarios and allow for easy maintenance and reuse of code.

---

#### 22. Interacting with DOM Elements

```ts,
class Form {
  private formElement: HTMLFormElement;
  private submitButton: HTMLButtonElement;

  constructor(selector: string) {
    this.formElement = document.querySelector(selector);
    if (!this.formElement) {
      throw new Error(`Cannot find form with selector "${selector}"`);
    }
    this.submitButton = this.formElement.querySelector("button");
    this.submitButton.addEventListener("click", this.submitForm.bind(this));
    this.render();
  }

  private render() {
    this.formElement.innerHTML = `
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
    `;
  }

  private submitForm() {
    console.log("Form submitted!");
  }
}

const form = new Form("#sign-in-form");
console.log(form);
```
> The ``Form`` class is used to select a form element from the DOM using a selector, and render the form content using OOP concepts. The ``render`` method is used to render the content of the form, and the class constructor is used to select the form element, the submit button, and add a click event listener to the submit button. When the submit button is clicked, the ``submitForm`` method will be called, which will log a message to the console. This approach can be extended to handle more complex interaction scenarios and allow for easy maintenance and reuse of code.

---
#### 23. Rendering Project Items with a Class

```ts,
class ProjectItem {
  constructor(public id: string, public title: string, public description: string) {}

  render() {
    const itemEl = document.createElement("li");
    itemEl.innerHTML = `
      <h2>${this.title}</h2>
      <p>${this.description}</p>
    `;
    itemEl.id = this.id;
    return itemEl;
  }
}

class ProjectList {
  private projects: ProjectItem[] = [];

  constructor(private type: "active" | "finished") {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      const id = prjItem.id;
      const title = prjItem.querySelector("h2")!.textContent!;
      const description = prjItem.querySelector("p")!.textContent!;
      this.projects.push(new ProjectItem(id, title, description));
    }
    this.renderProjects();
  }

  private renderProjects() {
    const listEl = document.querySelector(`#${this.type}-projects ul`)!;
    listEl.innerHTML = "";
    for (const prjItem of this.projects) {
      const listItem = prjItem.render();
      listEl.appendChild(listItem);
    }
  }
}

const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
```

> The ``ProjectItem`` class is used to represent each item in the project list, and the ``ProjectList`` class is used to manage the list of project items. The ``ProjectItem`` class has a render method that creates a new DOM element for each project item. The ``ProjectList`` class has a constructor that selects the project items from the DOM and creates a new ``ProjectItem`` instance for each item, and a ``renderProjects`` method that renders the list of project items on the screen. This approach can be extended to handle more complex rendering scenarios and allow for easy maintenance and reuse of code.

---
#### 24. Utilizing Interfaces to Implement Drag & Drop

```ts,
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

class Project implements Draggable {
  constructor(public id: string, public title: string, public description: string, public people: number) {}

  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  dragEndHandler(_: DragEvent) {
    console.log("DragEnd");
  }
}

class ProjectList {
  private projects: Project[] = [];

  constructor(private type: "active" | "finished") {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      const id = prjItem.id;
      const title = prjItem.querySelector("h2")!.textContent!;
      const description = prjItem.querySelector("p")!.textContent!;
      const people = +prjItem.querySelector("span")!.textContent!;
      const project = new Project(id, title, description, people);
      prjItem.addEventListener("dragstart", project.dragStartHandler.bind(project));
      prjItem.addEventListener("dragend", project.dragEndHandler);
      this.projects.push(project);
    }
  }
}

new ProjectList("active");
new ProjectList("finished");
```

> The ``Draggable`` interface defines the ``dragStartHandler`` and ``dragEndHandler`` methods that a draggable object should have. The ``Project`` class implements this interface, and provides its own implementation of the methods. The ``ProjectList`` class creates a new ``Project`` instance for each project item, and adds event listeners for the ``dragstart`` and ``dragend`` events to handle the drag and drop behavior. By using interfaces in this way, you can ensure that only objects that have the necessary properties and methods can be dragged.
---

#### 25. Working with Namespaces

> In TypeScript, namespaces provide a way to organize your code into logical groups, and avoid naming conflicts with other code. A namespace is simply a named scope that can contain functions, classes, interfaces, and other objects.

```ts,
namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

const result1 = MathUtils.add(10, 5); // returns 15
const result2 = MathUtils.subtract(10, 5); // returns 5
```

> In this example, the ``MathUtils`` namespace contains two functions: ``add`` and ``subtract``. These functions are exported using the ``export`` keyword, which makes them accessible from outside the namespace. To use the functions, you simply call them using the namespace name as a prefix.

>Namespaces can also be nested inside other namespaces, and can be split across multiple files using the ``/// <reference path="filename.ts" />`` syntax.
