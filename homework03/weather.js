function toCelsius() {
  // grabs the input from the user
  let input = document.getElementById("temperature").value;
  // If input is not a number, say an error message.
  if (isNaN(input)) {
    document.getElementById("result-parent").innerText =
      "Please input a valid number!";
    // Change the styling to signal an error.
    document.getElementById("result-parent").style.color = "red";
    document.getElementById("result-parent").style.fontWeight = "bold";
  } else {
    // converts the temperature to C
    let celsius = ((input - 32) * 5) / 9;

    // Return the temperature
    document.getElementById("result-parent").innerText =
      `The Temperature in Celsius is ${celsius}`;
    // Change the styling to normal.
    document.getElementById("result-parent").style.color = "black";
    document.getElementById("result-parent").style.fontWeight = "normal";
  }
  // makes the div visible
  // element.style can be used to change CSS properties of an HTML document
  document.getElementById("result-parent").style.visibility = "visible";
}
