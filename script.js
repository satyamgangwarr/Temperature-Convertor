function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        showResult();
        return;
    }

    if (unit === 'celsius') {
        result = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        document.getElementById('result').innerText = `${temperature} °C = ${result.toFixed(2)} °F`;
    } else {
        result = (temperature - 32) * 5/9; // Fahrenheit to Celsius
        document.getElementById('result').innerText = `${temperature} °F = ${result.toFixed(2)} °C`;
    }

    showResult();
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('show'); // Reset opacity
    setTimeout(() => {
        resultElement.classList.add('show'); // Add class to show result
    }, 50);
}
