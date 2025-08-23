console.log("this is script.js");

// #login button
document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();
  const mobNumber = 1234;
  const passNumber = 1234;
  const inputMobNumValue = document.getElementById("input-number").value;
  const inputPassNumValue = document.getElementById("input-password").value;
  const inputMobNum = parseInt(inputMobNumValue);
  const inputPassNum = parseInt(inputPassNumValue);
    
    if (inputMobNum === mobNumber && inputPassNum === passNumber) {
        window.location.href='homepage.html'
        }
    else {
        alert('invalid input')
    }
});
