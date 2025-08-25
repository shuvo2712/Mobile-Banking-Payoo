// check js is linked
console.log("home.js is working...");

// Transaction history array
const transactionHistory = [];

// VALID NUMBERS
const VALID_PIN = 1122;
const VALID_ACC = 12345678;
const VALID_AGENT = 123456;

// Functions...........................
// Get input value as integer function
function getInputInt(id) {
  const docInput = document.getElementById(id);
  const docValue = docInput.value;
  const parsedValue = parseInt(docValue);
  return parsedValue;
}
// Get inner text as integer function
function getInnerTextInt(id) {
  const docText = document.getElementById(id);
  const docInnerText = docText.innerText;
  const parsedText = parseInt(docInnerText);
  return parsedText;
}
// Set new balance function
function setNewBalance(newBalance) {
  document.getElementById("main-balance").innerText = newBalance;
}
// Toggle card border function
function toggleCards(cardId) {
  const cards = document.getElementsByClassName("feature-card");
  for (const card of cards) {
    if (card.id === cardId) {
      card.style.border = "2px solid #0874F2";
    } else {
      card.style.border = "2px solid #0808081a";
    }
  }
}
// Toggle form display function
function toggleForms(formId) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    if (form.id === formId) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }
}

// Form Buttons.........................
// Add money button
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn clicked");
    // gets input values
    // const bank = document.getElementById("input-add-money-bank").value;
    const account = getInputInt("input-add-money-account");
    const amount = getInputInt("input-add-money-amount");
    const pin = getInputInt("input-add-money-pin");
    const availableBalance = getInnerTextInt("main-balance");
    // validation.....
    // if (account !== VALID_ACC) {
    //   alert("Invalid Bank Account Number");
    //   return;
    // }
    if (!Number.isInteger(amount) || amount <= 0) {
      alert("Invalid Amount");
      return;
    }
    // if (pin !== VALID_PIN) {
    //   alert("Invalid PIN Number");
    //   return;
    // }
    // sets new balance
    const newBalance = availableBalance + amount;
    setNewBalance(newBalance);
    // add transaction to history
    const transaction = {
      type: "Add Money",
      amount: amount,
      date: new Date().toLocaleString(),
    }
    transactionHistory.push(transaction);
    console.log(transactionHistory);
  });

// Cash out button
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("cash out btn clicked");

  // gets input values
  const agent = getInputInt("input-cash-out-agent");
  const amount = getInputInt("input-cash-out-amount");
  const pin = getInputInt("input-cash-out-pin");
  const availableBalance = getInnerTextInt("main-balance");

  // validation.....
  // if (agent !== VALID_AGENT) {
  //   alert("Invalid Agent Number");
  //   return;
  // }
  if (!Number.isInteger(amount) || amount <= 0) {
    alert("Invalid Amount");
    return;
  }
  // if (pin !== VALID_PIN) {
  //   alert("Invalid PIN Number");
  //   return;
  // }
  // available balance check
  if (amount > availableBalance) {
    alert("Insufficient Balance");
    return;
  }

  // sets new balance
  const newBalance = availableBalance - amount;
  setNewBalance(newBalance);
});

// Toggle.............................
// Toggle cards & forms on click events
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    toggleCards("add-money-card");
    toggleForms("add-money-form");
  });
document.getElementById("cash-out-card").addEventListener("click", function () {
  toggleCards("cash-out-card");
  toggleForms("cash-out-form");
});
document
  .getElementById("transfer-money-card")
  .addEventListener("click", function () {
    toggleCards("transfer-money-card");
    toggleForms("transfer-money-form");
  });
document
  .getElementById("get-bonus-card")
  .addEventListener("click", function () {
    toggleCards("get-bonus-card");
    toggleForms("get-bonus-form");
  });
document.getElementById("pay-bill-card").addEventListener("click", function () {
  toggleCards("pay-bill-card");
  toggleForms("pay-bill-form");
});
document
  .getElementById("transactions-card")
  .addEventListener("click", function () {
    toggleCards("transactions-card");
    toggleForms("transactions-form");
  });

// Log Out button
document.getElementById("log-out-btn").addEventListener("click", function () {
  window.location.href = "index.html";
}
);