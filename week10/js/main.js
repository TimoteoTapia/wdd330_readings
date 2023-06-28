function multiplyByTwo(num) {
    return num * 2;
}

function calculate() {
    var input = document.getElementById("numberInput").value;
    var output = multiplyByTwo(input);
    document.getElementById("result").textContent = "Result: " + output;
}

// Define a higher-order function called 'map'
function map(arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}

// Define a regular function to be used with 'map'
function double(num) {
    return num * 2;
}

// Example function to execute the code
function executeCode() {
    // Example usage of 'map' function
    var numbers = [1, 2, 3, 4, 5];
    var doubledNumbers = map(numbers, double);

    // Output the result to the console
    console.log(doubledNumbers);

    // Display the result on the webpage
    document.getElementById('output').innerHTML = "<p>Original Numbers: " + numbers.join(", ") + "</p>"
        + "<p>Doubled Numbers: " + doubledNumbers.join(", ") + "</p>";
}