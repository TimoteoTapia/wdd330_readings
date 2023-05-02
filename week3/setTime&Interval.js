//************* setTimeout *******************//
let timerId = setTimeout(func | code, [delay], [arg1], [arg2], ...);
/*func|code Function or a string of code to execute. Usually, that’s a
function. For historical reasons, a string of code can be passed, but
that’s not recommended.*/
/*delay The delay before run, in milliseconds (1000 ms = 1 second), by
default 0. */
/*arg1, arg2… Arguments for the function */

//For instance, this code calls sayHi() after one second:
function sayHi() {
    alert('Hello');
}

setTimeout(sayHi, 1000);

//With arguments:
function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, 'Hello', 'John'); // Hello, John

//this is another way
setTimeout(() => alert('Hello'), 1000);

//********** Canceling with clearTimeout *************//

//   let timerId = setTimeout(...);
//           clearTimeout(timerId);
let timerId = setTimeout(() => alert('never happens'), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

//------Intervals-----//
let timerId = setInterval(func | code, [delay], [arg1], [arg2], ...)

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);