// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentValue = ""; // Current input value
    let operator = ""; // The selected operator
    let firstOperand = ""; // The first operand
  
    // Function to reset the calculator
    const resetCalculator = () => {
      currentValue = "";
      operator = "";
      firstOperand = "";
      display.value = ""; // Clear the display
    };
  
    // Function to update the display
    const updateDisplay = (value) => {
      display.value = value; // Set the display to the given value
    };
  
    // Add click event listeners to all buttons
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        // Handle numbers and decimal points
        if (!isNaN(value) || value === ".") {
          currentValue += value; // Append to the current input
          updateDisplay(currentValue); // Update the display
        }
        // Handle clear button (C)
        else if (value === "C") {
          resetCalculator(); // Reset everything
        }
        // Handle equal button (=)
        else if (value === "=") {
          if (firstOperand && operator && currentValue) {
            try {
              // Perform the calculation
              const result = eval(`${firstOperand} ${operator} ${currentValue}`);
              updateDisplay(result); // Display the result
              firstOperand = result.toString(); // Allow chaining of operations
              currentValue = ""; // Clear current input
              operator = ""; // Clear operator
            } catch (error) {
              updateDisplay("Error"); // Display error for invalid calculations
              resetCalculator();
            }
          } else {
            updateDisplay("Error"); // Display error for incomplete input
          }
        }
        // Handle operators (+, -, *, /)
        else {
          if (currentValue) {
            firstOperand = currentValue; // Store the first operand
            operator = value; // Store the operator
            currentValue = ""; // Clear current input for the next value
            updateDisplay(`${firstOperand} ${operator}`); // Update the display
          } else if (firstOperand) {
            operator = value; // Update operator if already selected
            updateDisplay(`${firstOperand} ${operator}`); // Update display with the new operator
          }
        }
      });
    });
  });
  