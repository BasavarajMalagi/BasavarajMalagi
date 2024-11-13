// Select all elements with the class "btn" and store them in the variable btns
const btns = document.querySelectorAll(".btn");

// Select the main calculator display input and sub-display paragraph
const mainVal = document.querySelector("#main-val");
const subValDisplay = document.querySelector("#sub-Val");

// Add event listeners to all buttons for click events
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const val = e.target.textContent; // Get the text content of the clicked button

    // Check if equals operation was previously done, then clear all and reset main display to "0"
    if (calculator.equals) {
      calculator.clearAll();
      calculator.addMainVal("0");
    }

    // Perform different actions based on the button clicked
    if (val === "AC") {
      calculator.clearAll(); // Clear all values
      calculator.addMainVal("0"); // Reset main display to "0"
    } else if (val === "⌫") {
      calculator.clearOne(); // Clear the last digit from the main value
    } else if (val === "=") {
      calculator.calculate(); // Perform the calculation based on current inputs
    } else if (val === "+" || val === "-" || val === "*" || val === "/") {
      calculator.addOperator(val); // Add the selected operator
    } else if (val === ".") {
      calculator.addDot(); // Add a decimal point
    } else {
      calculator.addMainVal(val); // Add number value to the main display
    }
  });
});

// Calculator object containing properties and methods for calculations
const calculator = {
  mainVal: "", // Holds the main display value
  subVal: "", // Holds the sub-display value used for operations
  subValDisplay: "", // Holds formatted string for sub-display
  operator: "", // Stores the current operator
  equals: false, // Tracks if equals button was pressed

  // Function to add value to the main display
  addMainVal: function (val) {
    if (this.mainVal.length > 10) {
      return; // Prevents adding more than 10 characters to the main display
    }
    if (this.mainVal === "0") {
      this.mainVal = val; // Replaces "0" with the new value
    } else {
      this.mainVal += val; // Adds the value to the end of the current main display
    }
    mainVal.value = this.mainVal; // Updates the main display input
  },

  // Function to add value to sub-display used for operations
  addSubVal: function (val) {
    this.subVal += val;
  },

  // Function to update the sub-display visually with formatted values
  addsubValDisplay: function (val) {
    this.subValDisplay += val;
    subValDisplay.innerHTML = this.subValDisplay; // Updates the sub-display HTML
  },

  // Function to clear the main display
  clearMainVal: function () {
    this.mainVal = "";
    mainVal.value = this.mainVal; // Clears the main display input
  },

  // Function to clear the sub-display values used for operations
  clearSubVal: function () {
    this.subVal = "";
  },

  // Function to clear the formatted sub-display
  clearSubValDisplay: function () {
    this.subValDisplay = "";
    subValDisplay.innerHTML = this.subValDisplay; // Clears the sub-display HTML
  },

  // Function to remove the last character from the main display
  clearOne: function () {
    this.mainVal = this.mainVal.slice(0, -1); // Slices off the last character
    if (this.mainVal === "") {
      this.mainVal = "0"; // Sets display to "0" if it becomes empty
    }
    mainVal.value = this.mainVal; // Updates the main display input
  },

  // Function to clear all values and reset the calculator
  clearAll: function () {
    this.clearMainVal();
    this.clearSubVal();
    this.clearSubValDisplay();
    this.operator = ""; // Resets operator
    this.equals = false; // Resets equals state
  },

  // Function to add an operator and update the sub-display
  addOperator: function (val) {
    if (this.mainVal === "" || this.mainVal === "0") {
      return; // Prevents adding an operator if no number is entered
    }
    if (this.operator) {
      this.updateOperator(val); // Updates the operator if one already exists
      return;
    }
    this.operator = val; // Sets the current operator
    this.addSubVal(this.mainVal); // Adds the main value to sub-value
    this.addsubValDisplay(this.mainVal); // Updates sub-display with main value
    this.addsubValDisplay(`<span class="operator">${val}</span>`); // Adds the operator to sub-display
    this.clearMainVal(); // Clears the main display for the next number
  },

  // Function to update the displayed operator visually
  updateOperator: function (val) {
    subValDisplay.innerHTML = subValDisplay.innerHTML.replace(
      /<span class="operator">.*<\/span>/,
      `<span class="operator">${val}</span>`
    );
  },

  // Function to add a decimal point to the main display
  addDot: function () {
    if (this.mainVal.includes(".")) return; // Prevents adding multiple decimal points
    this.addMainVal("."); // Adds a decimal point to the main value
  },

  // Function to perform the calculation based on input values and the operator
  calculate: function () {
    if (this.mainVal === "" || this.subVal === "") {
      return; // Prevents calculation if there are missing values
    }
    let result = 0; // Variable to hold the calculation result
    const num1 = parseFloat(this.subVal); // Converts sub-value to a number
    const num2 = parseFloat(this.mainVal); // Converts main value to a number
    const operator = this.operator; // Gets the current operator

    // Switch statement to perform the appropriate calculation
    switch (operator) {
      case "+":
        result = num1 + num2; // Adds the two numbers
        break;
      case "-":
        result = num1 - num2; // Subtracts the two numbers
        break;
      case "*":
        result = num1 * num2; // Multiplies the two numbers
        break;
      case "/":
        result = num1 / num2; // Divides the two numbers
        break;
      default:
        result = "error"; // Returns "error" if no valid operator is found
    }

    // Limits the display length of the result if it exceeds 10 characters
    if (result.toString().length > 10) {
      result = result.toPrecision(2);
    }

    // Updates sub-values and displays with the result
    this.addSubVal(this.mainVal);
    this.addsubValDisplay(this.mainVal);
    this.addsubValDisplay(`<span class="operator">=</span>`);
    this.clearMainVal(); // Clears the main display
    this.addMainVal(result); // Sets the result as the new main value
    this.equals = true; // Sets equals state to true
  },
};
