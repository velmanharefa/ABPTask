$(document).ready(function () {
    let textAlignment = "left";
    let originalColor = "#B4B4B8";
    let alternateColor = "#E3E1D9";
    let colorFlag = false;
    
    $("#alignButton").click(function () {
        const box = $("#box");
        if (textAlignment === "left") {
            textAlignment = "center";
        } else if (textAlignment === "center") {
            textAlignment = "right";
        } else {
            textAlignment = "left";
        }
        box.css("text-align", textAlignment);
    });

    $("#colorButton").click(function () {
        const box = $("#box");
        if (colorFlag) {
            box.css("background-color", originalColor);
        } else {
            box.css("background-color", alternateColor);
        }
        colorFlag = !colorFlag;
    });
});