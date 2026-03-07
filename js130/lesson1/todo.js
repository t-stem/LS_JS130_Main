class Todo {
  static DONE_MARKER = 'X';
  static UNDONE_MARKER = ' ';

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new Error('TypeError: this is not a todo. Can only add todo items.');
    }

    this.todos.push(todo);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  _validateIndex(index) {
    let lastIndex = this.size() - 1;
    if (typeof index !== 'number' || index > lastIndex || index < 0 ) {
      throw new Error(`ReferenceError: invalid index (${index})`);
    }
  }
  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  markDoneAt(index) {
    let item = this.itemAt(index);
    item.markDone()
  }

  markUndoneAt(index) {
    let item = this.itemAt(index);
    item.markUndone()
  }

  isDone() {
    return this.todos.every(item => item.isDone() === true);
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  toString() {
    let title = `---- ${this.title} ----`;
    let todos = this.todos.map(todo => todo.toString()).join('\n');
    return `${title}\n${todos}`;
  }
}


let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

todo1.markDone();

// console.log(todo1.toString());
// console.log(todo2.toString());
// console.log(todo3.toString());

todo1.markUndone();

// console.log(String(todo1));
// console.log(String(todo2));
// console.log(String(todo3));

todo2.markDone();
// console.log(todo2.isDone() ? "The todo is done." : "The todo is not done.");

todo2.markUndone();
// console.log(todo2.isDone() ? "The todo is done." : "The todo is not done.");

// console.log(todo2.getTitle()); // => 'Clean room'

let list = new TodoList('Today');
list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
console.log(list);

console.log(list.size());  // 4
// Omitted code

console.log(list.first());
console.log(list.last());

let emptyList = new TodoList("Empty List");
console.log(emptyList.first()); // undefined
console.log(emptyList.last()); // undefined

// console.log(list.itemAt(1));
// console.log(list.itemAt(55));

// list.markDoneAt(); // delete this line after testing it
// list.markUndoneAt(55); // delete this line after testing it

console.log(list.isDone()); // false

list.markDoneAt(0);
list.markDoneAt(1);
list.markDoneAt(2);
console.log(list.isDone()); // true

list.markUndoneAt(2);
console.log(list.isDone()); // false

/*
console.log(list.shift());
console.log(list.pop());
console.log(list);
*/

console.log(emptyList.shift());
console.log(emptyList.pop());
console.log(emptyList);

// Omitted code

// First, let's create some new todos.
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
list.add(todo5);
list.add(todo6);
console.log(list);
console.log(`${list.toString()}`);

/*
console.log(list.removeAt(2));
console.log(list.removeAt(0));
console.log(list.removeAt(1));
console.log(list);
*/

// list.removeAt(100); // delete this line after testing it
