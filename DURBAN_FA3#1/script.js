function getUserInput() {
    let input;
    do {
        input = prompt("Please enter a number:");
    } while (isNaN(input) || input.trim() === "");

    const number = parseInt(input);
    let output = `\nNumber inputted: ${number}\n\n`;

    if (number % 2 === 1) {
        // Odd: print rectangle
        for (let i = number; i >= 1; i--) {
            output += (i + " ").repeat(number).trim() + "\n";
        }
    } else {
        // Even: print triangle
        for (let i = number; i >= 1; i--) {
            output += (i + " ").repeat(i).trim() + "\n";
        }
    }
    document.getElementById("output").innerText = output;
}
