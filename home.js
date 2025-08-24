console.log("home.js working...");

// valid numbers
const VALID_PIN = 1122;
const VALID_ACC = 123456;
const VALID_AGENT = 12345;

// Buttons
// add money button
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn clicked");

    // gets input values
    const bank = document.getElementById("input-add-money-bank").value;
    const account = parseInt(
      document.getElementById("input-add-money-account").value
    );
    const amount = parseInt(
      document.getElementById("input-add-money-amount").value
    );
    const pin = parseInt(document.getElementById("input-add-money-pin").value);
    // gets balance
    const availableBalance = parseInt(
      document.getElementById("main-balance").innerText
    );

    // validation.......................
    if (account !== VALID_ACC) {
      alert("Invalid Bank Account Number");
      return;
    }
    if (!Number.isInteger(amount) || amount <= 0) {
      alert("Invalid Amount");
      return;
    }
    if (pin !== VALID_PIN) {
      alert("Invalid PIN Number");
      return;
    }
    // amount check
    if (amount > availableBalance) {
      alert("Insufficient Balance");
      return;
    }

    // sets new balance
    const newBalance = availableBalance + amount;
    document.getElementById("main-balance").innerText = newBalance;

    // console logs
    console.log("available-balance :", availableBalance);
    console.log("amount-added :", amount, "from", bank);
    console.log("new-balance :", newBalance);
  });

// cash out button
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("cash out btn clicked");

    // gets input values
    const agent = parseInt(
      document.getElementById("input-cash-out-agent").value
    );
    const amount = parseInt(
      document.getElementById("input-cash-out-amount").value
    );
    const pin = parseInt(document.getElementById("input-cash-out-pin").value);
    // gets balance
    const availableBalance = parseInt(
      document.getElementById("main-balance").innerText
    );

    // validation.................
    if (agent !== VALID_AGENT) {
      alert("Invalid Agent Number");
      return;
    }
    if (!Number.isInteger(amount) || amount <= 0) {
      alert("Invalid Amount");
      return;
    }
    if (pin !== VALID_PIN) {
      alert("Invalid PIN Number");
      return;
    }
    // available balance check
    if (amount > availableBalance) {
      alert("Insufficient Balance");
      return;
    }

    // sets new balance
    const newBalance = availableBalance - amount;
    document.getElementById("main-balance").innerText = newBalance;

    // console logs
    console.log("available-balance :", availableBalance);
    console.log("amount-withdrawn :", amount);
    console.log("new-balance :", newBalance);
  });

// Toggle forms
// 1. add-money toggle
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").style.display = "block";
    document.getElementById("cash-out-form").style.display = "none";
  });

// 2. cash-out toggle
document.getElementById("cash-out-card").addEventListener("click", function () {
  document.getElementById("cash-out-form").style.display = "block";
  document.getElementById("add-money-form").style.display = "none";
});
