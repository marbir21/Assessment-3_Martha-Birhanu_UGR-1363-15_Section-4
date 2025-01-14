document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('#buttons .btn');
  const clearButton = document.getElementById('clear');
  const equalsButton = document.getElementById('equals');

  let currentInput = '';
  let storedInput = '';
  let operator = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');
      if (value.match(/[0-9]/)) {
        currentInput += value;
        display.value = currentInput;
      } else if (value.match(/[+\-*/]/)) {
        storedInput = currentInput;
        operator = value;
        currentInput = '';
        display.value = operator;
      }
    });
  });

  equalsButton.addEventListener('click', () => {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(storedInput) + parseFloat(currentInput);
        break;
      case '-':
        result = parseFloat(storedInput) - parseFloat(currentInput);
        break;
      case '*':
        result = parseFloat(storedInput) * parseFloat(currentInput);
        break;
      case '/':
        result = parseFloat(storedInput) / parseFloat(currentInput);
        break;
    }
    display.value = result;
    currentInput = result;
    storedInput = '';
    operator = '';
  });

  clearButton.addEventListener('click', () => {
    currentInput = '';
    storedInput = '';
    operator = '';
    display.value = '';
  });
});
