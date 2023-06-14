function executeScript1() {
    let message = "Hello";
    alert(message);
}

function executeScript2() {
    sayHello();

    function sayHello() {
        alert("Hello!");
    }
}

function executeScript3() {
    let phrase = "Hello";

    function sayHello() {
        let name = "John";
        alert(phrase + ", " + name);
    }

    sayHello();
}

function executeScript4() {
    function makeCounter() {
        let count = 0;

        return function () {
            return count++;
        };
    }

    let counter = makeCounter();

    alert(counter()); // 0
    alert(counter()); // 1
    alert(counter()); // 2
}

function executeScript5() {
    function greet(name) {
        return function () {
            alert("Hello, " + name);
        };
    }

    let sayHello = greet("John");
    let sayGoodbye = greet("Jane");

    sayHello();
    sayGoodbye();
}

function executeScript6() {
    function createFunction() {
        let value = Math.random();

        return function () {
            alert(value);
        };
    }

    let fn = createFunction();
    fn();

    fn = null;
}

function executeScript7() {
    let value = "Surprise!";

    function outerFunction() {
        let value = "the closest value";

        function innerFunction() {
            debugger;
        }

        return innerFunction;
    }

    let fn = outerFunction();
    fn();
}
/**************************************/
// Currying Example
const element = document.getElementById("operations")
element.innerHTML = ""
const elementList = document.createElement('ul')
const list = document.createElement('li')
const list1 = document.createElement('li')
const list2 = document.createElement('li')
const list3 = document.createElement('li')
const list4 = document.createElement('li')
function add(a) {
    return function (b) {
        return a + b;
    };
}

function multiply(a) {
    return function (b) {
        return a * b;
    };
}

function runExample() {
    var addTwo = add(2);
    var addTen = add(10);
    var multiplyByTwo = multiply(2);
    var multiplyByThree = multiply(3);
    var multiplyByFive = multiply(5);

    console.log(addTwo(5));
    list.textContent = addTwo(5)
    console.log(addTen(5));
    list1.textContent = addTen(5)

    var result = multiplyByThree(addTwo(4));
    console.log(result);
    list2.textContent = result

    console.log(multiplyByFive(2));
    list3.textContent = multiplyByFive(2)
    console.log(multiplyByFive(3));
    list4.textContent = multiplyByFive(3)

    elementList.appendChild(list)
    elementList.appendChild(list1)
    elementList.appendChild(list2)
    elementList.appendChild(list3)
    elementList.appendChild(list4)

    element.appendChild(elementList)
}

/**********************************/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
let y = 200;

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();

    x += 5;

    if (x > canvas.width + 50) {
        x = -50;
    }

    requestAnimationFrame(drawCircle);
}

drawCircle();