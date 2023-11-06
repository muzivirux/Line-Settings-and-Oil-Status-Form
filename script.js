document.addEventListener("DOMContentLoaded", function () {
  // Get references to the HTML elements
  const shiftSelect = document.getElementById("Shift");
  const shiftTimeInput = document.getElementById("shiftTime");

  // Add an event listener to the select element
  shiftSelect.addEventListener("change", function () {
    // Get the selected option value
    const selectedValue = shiftSelect.value;

    // Determine the time based on the selected option
    let time = "00:00"; // Default value
    if (selectedValue === "M") {
      time = "9:00 AM"; // Morning time
    } else if (selectedValue === "E") {
      time = "9:00 PM"; // Evening time
    }

    // Update the time input field
    shiftTimeInput.value = time;
  });
});
