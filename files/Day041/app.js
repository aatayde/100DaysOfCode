const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Throwing Error
function throwError() {
    throw new Error('Ran out of coffee');
}

throwError()

// Handling Exception

    try {
        console.log('try this!')
        // e is an exception value
    } catch (e) {
        console.log('catch this: ', e)
    }


// Catching uncaught exceptions
process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    process.exit(1); // mandatory (as per the Node.js docs)
  });


// Exceptions with Promises
doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => console.error(err));


  const doSomething1 = () => {
    // ...
    try {
      // ...
    } catch (err) {
      // ... handle it locally
      throw new Error(err.message);
    }
    // ...
  };
  



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});