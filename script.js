document.addEventListener("DOMContentLoaded", function () {
  const shiftSelect = document.getElementById("Shift");
  const shiftTimeInput = document.getElementById("shiftTime");

  shiftSelect.addEventListener("change", function () {
    const selectedValue = shiftSelect.value;

    let time = "00:00";
    if (selectedValue === "M") {
      time = "7:00 AM";
    } else if (selectedValue === "E") {
      time = "7:00 PM";
    }
    shiftTimeInput.value = time;
  });
});
