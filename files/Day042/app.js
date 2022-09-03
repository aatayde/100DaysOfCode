const obj = {
    name: 'joe',
    age: 35,
    person1: {
      name: 'Tony',
      age: 50,
      person2: {
        name: 'Albert',
        age: 21,
        person3: {
          name: 'Peter',
          age: 23,
        },
      },
    },
  };
  console.log(obj);

  
  console.log(JSON.stringify(obj, null, 2));

  require('util').inspect.defaultOptions.depth = null;

console.log(obj);


// `depth` tells util.inspect() how many times to recurse while formatting the object, default is 2
console.dir(obj, {
    depth: 10,
  });
  
  // ...or pass `null` to recurse indefinitely
  console.dir(obj, {
    depth: null,
  });

  
  // %o tells console.log() to string-format and log obj in its place
console.log('%o', obj);
