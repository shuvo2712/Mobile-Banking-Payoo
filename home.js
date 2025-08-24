// check if js is working
console.log("home.js is working...");

// valid numbers
const VALID_PIN = 1122;
const VALID_ACC = 12345678;
const VALID_AGENT = 123456;

// Function to toggle forms
function toggleForms(Id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    if (form.id === Id) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
}
// Function to get input value as integer
function getInputInt(id) {
  const docInput = document.getElementById(id);
  const docValue = docInput.value;
  const parsedValue = parseInt(docValue);
  return parsedValue;
}
// Function to get inner text as integer
function getInnerTextInt(id) {
  const docText = document.getElementById(id);
  const docInnerText = docText.innerText;
  const parsedText = parseInt(docInnerText);
  return parsedText;
}

// Buttons
// add money button
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn clicked");

    // gets input values
    const bank = document.getElementById("input-add-money-bank").value;
    const account = getInputInt("input-add-money-account");
    const amount = getInputInt("input-add-money-amount");
    const pin = getInputInt("input-add-money-pin");
    // gets balance
    const availableBalance = getInnerTextInt("main-balance");

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

    // console log
    console.log(availableBalance + "+" + amount + '=' + newBalance);
  });

// cash out button
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("cash out btn clicked");

  // gets input values
  const agent = getInputInt("input-cash-out-agent");
  const amount = getInputInt("input-cash-out-amount");
  const pin = getInputInt("input-cash-out-pin");
  // gets balance
  const availableBalance = getInnerTextInt("main-balance");

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

  // console log
  console.log(availableBalance + "-" + amount + "=" + newBalance);
});

// Toggle forms
// 1. add-money toggle
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    toggleForms("add-money-form");
  });

// 2. cash-out toggle
document
  .getElementById("cash-out-card")
  .addEventListener("click", function () {
  toggleForms("cash-out-form");
});

// 3. transfer-money toggle
document
  .getElementById("transfer-money-card")
  .addEventListener("click", function () {
    toggleForms("transfer-money-form");
  });
// 4. get-bonus toggle
document
  .getElementById("get-bonus-card")
  .addEventListener("click", function () {
    toggleForms("get-bonus-form");
  });
// 5. pay-bill toggle
document.getElementById("pay-bill-card").addEventListener("click", function () {
  toggleForms("pay-bill-form");
});
// 6. transactions toggle
document
  .getElementById("transactions-card")
  .addEventListener("click", function () {
    toggleForms("transactions-form");
  });
