// Rewrite the following code using classic JavaScript syntax:

function foo() {
  return {
    bar() {
      console.log("bar");
    },
    qux(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}



function foo() {
  return {
    bar: function() {
      console.log("bar");      
    },

    qux: function() {
      console.log("qux");
      console.log(arg1); 
    },

    baz: function() {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);    
    }
  }
}