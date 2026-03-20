/*
We can improve the interface by returning an Object from makeList instead of a function. 
That lets us create an API that is easy to use and understand:
*/

function makeList() {
  return {
    items: [],

    add: function(todo) {
      if (!this.items.includes(todo)){
        this.items.push(todo);
        console.log(`${todo} added!`)
      }
    },

    remove: function(todo) {
      if (this.items.includes(todo)) {
        let index = this.items.indexOf(todo);
        let removed = this.items.splice(index, 1)[0];
        console.log(`${removed} removed!`);
      }
    },

    list: function() {
      this.items.forEach(item => console.log(item));
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