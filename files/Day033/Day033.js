// alert('Hello World!');

// alert(secretPassword + ' is your secret password');

// runs a loop starting from 0 to the length of the secret password
function guessSecretPassword() {
    let secretPassword = parseInt(
      prompt('Please enter your secret password (Numbers only)')
    );
    let guess = 0;
    alert('your Secret Password is ' + secretPassword);
  
    let start = new Date().getTime();
    console.log('start: ' + start);
    while (guess !== secretPassword) {
      guess++;
    }
    let end = new Date().getTime();
    console.log('end:' + end);
    let time = end - start;
    alert('Execution Time:  ' + time + 'ms');
  }
  
  guessSecretPassword();