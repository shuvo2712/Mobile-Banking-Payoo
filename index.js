console.log("this is script.js");

// Colors
// #0874F2 - Blue
// #f4f5f7 - Light Black

// valid numbers
const VALID_USER = 1234;
const VALID_PIN = 1122;

// #login button
document.getElementById("log-in-button").addEventListener("click", function (e) {
  e.preventDefault();
  const inputUserId = parseInt(document.getElementById("input-user").value);
  const inputPinNum = parseInt(document.getElementById("input-pin").value);
  // validation
  if (inputUserId !== VALID_USER) {
    alert("User ID Invalid");
  } else if (inputPinNum !== VALID_PIN) {
    alert("PIN number Invalid");
  } else {
    window.location.href = "home.html";
  }
});
