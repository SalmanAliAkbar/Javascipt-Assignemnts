const squareRootButton = document.getElementById('squareRoot');

squareRootButton.addEventListener('click', () => {
    // Get the current display value
    let currentValue = document.getElementById('disp').value;

    // Check if the value is a valid number
    if (!isNaN(parseFloat(currentValue))) {
        // Calculate the square root
        let result = Math.sqrt(parseFloat(currentValue));

        // Ensure the result is within a reasonable range to avoid overflow
        if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
            alert("Error: Result is too large or too small.");
            return;
        }

        // Update the display
        document.getElementById('disp').value = result.toString();
    } else {
        alert("Error: Please enter a valid number.");
    }
});

function square() {
  // Get the current value from the display
  let currentValue = document.getElementById('disp').value;

  // Check if the input is a valid number
  if (!isNaN(parseFloat(currentValue))) {
    // Calculate the square
    let squaredValue = Math.pow(parseFloat(currentValue), 2);

    // Ensure the result doesn't exceed JavaScript's safe integer range
    if (squaredValue > Number.MAX_SAFE_INTEGER || squaredValue < Number.MIN_SAFE_INTEGER) {
      alert("Error: Result is too large or too small.");
      return;
    }

    // Update the display with the squared value
    document.getElementById('disp').value = squaredValue.toString();
  } else {
    alert("Error: Please enter a valid number.");
  }
}
