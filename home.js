console.log("homepage.js connected");

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
