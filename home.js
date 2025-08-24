console.log("home.js working...");
// Toggle forms
// 1. add-money toggle
document.getElementById("add-money-card").addEventListener("click", function () {document.getElementById("add-money-form").style.display = "block";
  document.getElementById("cash-out-form").style.display = "none";
});

// 2. cash-out toggle
document.getElementById("cash-out-card").addEventListener("click", function () {
  document.getElementById("cash-out-form").style.display = "block";
  document.getElementById("add-money-form").style.display = "none";
});





// add money button
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn clicked");
    const bank = document.getElementById("input-bank").value;
    const account = document.getElementById("input-account").value;
    const ammount = parseInt(document.getElementById("input-ammount").value);
    const pin = document.getElementById("input-pin").value;

    const availableBalance = parseInt(
      document.getElementById("main-balance").innerText
    );
      console.log("available-balance :", availableBalance);
      const newBalance = ammount + availableBalance;
      document.getElementById("main-balance").innerText = newBalance;
      console.log('ammount-added :', ammount);
      console.log('new-balance :', newBalance);
  });

// cash out button
