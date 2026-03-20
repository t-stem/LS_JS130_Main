/*
Notice that our solution to the previous problem lets us access the array of items through the items property:
That wasn't the case in the single-function implementation:
Update the implementation from problem 1 so that it retains the use of an object with methods but prevents outside access to the items the object stores internally.
*/

function makeList() {
  let items = [];

  return {
    add: function(todo) {
      if (!items.includes(todo)){
        items.push(todo);
        console.log(`${todo} added!`)
      }
    },

    remove: function(todo) {
      if (items.includes(todo)) {
        let index = items.indexOf(todo);
        let removed = items.splice(index, 1)[0];
        console.log(`${removed} removed!`);
      }
    },

    list: function() {
      items.forEach(item => console.log(item));
    }
  }
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn