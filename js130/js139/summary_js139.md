## Hoisting
- function declarations are fully hoisted
- class declarations
  * only variable is hoisted 
  * exists in temporal deadzone

# Closures - What to Focus On:
- Write code that uses closure to create private data.
- Explain why private data is desirable.
- Be able to identify code that gives users of your code a way to alter private data.

# IIFEs - What to Focus On
This assignment is also a short one. However, the concepts discussed are needed often. In particular, you should be able to answer these questions:

What are IIFEs?
How do you use them?
How do you use IIFEs to create private scopes?
How do you use blocks to create private scopes?
How do you use IIFEs to create private data?

# Modules - What To Focus On
Going forward, we'll use CommonJS modules, though you will probably meet JS modules after completing Core. Thus, this assignment will focus on the CommonJS module system. You should be able to answer questions about the following topics:

The benefits of using modules.
How to use and create CommonJS modules.
How CommonJS modules pass exported items to the importing module.
We'll also have a brief discussion of JS modules, but you're not expected to remember the details of that discussion.

# Exceptions - What To Focus On
In this assignment, you should concentrate on the following:

What are exceptions?
Given an exception error message, identify the exception type and understand the meaning.
Understand the terms raise, throw, re-throw, and catch.
Know the syntax for the throw and try/catch statements.
Understand the program flow for an exception.

## Advanced concepts summary
Summary
This lesson has touched on a number of topics ranging from material that focuses on the oldest parts of JavaScript to material that introduces the latest parts. While some of this material isn't as important to learn as others, you will likely encounter them all at different stages of your career. In that respect, they're all about fundamental concepts.

Before moving on to the next lesson, be sure that you're comfortable with the following topics:

- var vs let vs const
- Declared scope (function vs block), visibility scope (global vs local), and lexical scope (inner vs outer)
- Hoisting and its role in determining the scope of names, including those of variables, functions, and classes
- Strict mode vs. sloppy mode JavaScript
- Closures, including both conceptual and practical considerations
- The relationship between closures and scope
- Partial function application
- Private data
- Immediately invokable function expressions (IIFEs)
- Shorthand notation (primarily focus on understanding shorthand notation when you see it)
- Modules (focus on CommonJS modules)
- Throwing and catching exceptions
- Garbage Collection (high-level view)

## Packaging summary
In this lesson, we covered some Node.js tooling, and then walked through setting up a simple JavaScript application as a node package. While we didn't go all the way to the publishing stage, you now know enough to follow the directions on the npm website package and release your module.

As you move on, remember the following details:

npm provides a library of code that you can download and run, or use directly inside your JavaScript programs. You use the npm command to manage the packages you need.

Babel is a JavaScript transpiler that compiles code written with newer syntax into older code. Transpilation is useful when we want to use the latest JavaScript features, but also want our code to run in environments that don't support those features. Typically, that means older browsers. Babel's command-line interface (CLI) works with the Babel core library and the required presets to transpile the latest JavaScript to the desired older version of JavaScript.

The package.json file provides a way to list all of your project's dependencies and their versions in a single file. npm uses this file to resolve the interdependencies between all the packages and installs the appropriate versions.

npm also provides the mechanisms you need to publish your own modules. Those modules can be packages of code that you require into your JavaScript programs or independent command-line programs. For instance, we require readline-sync in our programs to solicit input from the user, and use the jest command-line program from the jest package.

