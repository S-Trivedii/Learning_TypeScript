# What is TypeScript ?

TypeScript is a superset of JavaScript created by Microsoft.

- It adds static types to JavaScript.
- It compiles down to plain JavaScript, so it can run anywhere JavaScript runs (browser, Node.js, etc.).

---

1. Install TypeScript in your system if you don't have
   `npm i -g typescript`

2. How to compile .ts file

   - run this command -> `tsc filename` e.g. `tsc app.ts`
   - The above command will compile a file called `app.ts` and will create a `app.js` file in the same directory (unless your `tsconfig.json` specifies otherwise)

---

# How to compile a `.ts` file automatically ?

1. run this command -> `tsc app.ts --watch` or `tsc filename --watch`
   - Runs the compiler in **watch mode**.
   - This means the compiler **keeps running in the background**.
   - Whenever you save changes to `app.ts` (or other imported `.ts` files), it will automatically recompile into JavaScript without you having to run `tsc` again.

---

# How to compile multiple `.ts` file at the same time ?

1. First method

```bash
tsc file1.ts file2.ts file3.ts
```

2. Create a **TypeScript configuration** file:

- **Step 1: Generate config file**

```bash
tsc --init
```

This creates a tsconfig.json file in your project root.

- **Step 2: Inside tsconfig.json, set your options**

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src/**/*"]
}
```

Here:

- All `.ts` files inside `src/` will be compiled.

- Compiled `.js` files go into `dist/`.

- **Step 3: Compile all at once**

Now you can run:

```bash
tsc
```

or to keep watching:

```bash
tsc --watch
```

This will compile all `.ts` files defined in `include`.

---

# Topics covered in `classes`

1. Basic class
2. public and private access modifieres
3. readonly property
4. Inheritance
   - override properties and protected modifiers
5. getters and setters
6. static method and properties
7. abstract classes

---

# Topics covered in `interface`

1. Interface for object
2. Interface for class
3. Optional and Readonly
4. Extending interface
5. Interface for function

---

# Topics covered in `type guards`

1. `typeof` type guard
2. `in` operator based type guard
3. type gurad in class

---

# Learn Type Casting or Type Assertion

---

# Topics covered in `generics`

1. What use generic
2. generic function
3. generic interface
4. generic class
5. generic contraints (extends)
6. default parameters

---

# Todo vs Todo2

Both approachs are correct. But the best approach is the first approach - `todo`. This approach contains **'Single source of truth'**. Second approach - `todo2` does not have any single source of truth.
For better understanding compare code of both approaches.

---

# Nodo Todo Project

1. `npm init -y`
2. `tsc -init`
3. update `tsconfig.json` file according to your need
4. setup complete, you are ready to go
