// Select the input screen
const input = document.getElementById('inputBox');

// Select all buttons inside the calculator
const buttons = document.querySelectorAll('.calculator button');

// Loop through each button and add click event
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        switch (value) {
            case 'AC':
                input.value = ''; // Clear input
                break;
            case 'DEL':
                input.value = input.value.slice(0, -1); // Delete last character
                break;
            case '=':
                try {
                    // Evaluate expression safely
                    input.value = eval(input.value) || '';
                } catch {
                    input.value = 'Error';
                }
                break;
            default:
                // Append number or operator
                input.value += value;
                break;
        }
    });
});
