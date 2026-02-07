let display = document.getElementById('display');

function addToDisplay(number) {
    display.value = display.value + number;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    let problem = display.value;

    if (problem === '') {
        return;
    }

    problem = problem.replace('×', '*');

    try {
        let answer = eval(problem);

        if (isNaN(answer) || !isFinite(answer)) {
            display.value = 'Error';
        } else {
            display.value = answer;
        }
    } catch {
        display.value = 'Error';
    }
}