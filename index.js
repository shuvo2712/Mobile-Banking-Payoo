console.log("this is script.js");

// valid numbers
const VALID_MOBILE = 1234;
const VALID_PIN = 1122;

// #login button
document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const inputMobNum = parseInt(document.getElementById("input-mobile").value);
  const inputPinNum = parseInt(document.getElementById("input-pin").value);
  // validation
  if (inputMobNum !== VALID_MOBILE) {
    alert("Mobile Number Invalid");
  } else if (inputPinNum !== VALID_PIN) {
    alert("PIN number Invalid");
  } else {
    window.location.href = "home.html";
  }
});
