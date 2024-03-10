function calculateOddValues() {
    let min = parseInt(document.getElementById("minValue").value);
    let max = parseInt(document.getElementById("maxValue").value);

    let result = 0;
    let oddValues = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 !== 0) {
            result += i;
            oddValues.push(i);
        }
    }

    document.getElementById("result").innerHTML = "<p>Result: " + result + " (" + oddValues.join('+') + ")</p>";
}