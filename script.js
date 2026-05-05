const billEL = document.getElementById("bill");
const tipsBtnEL = document.querySelectorAll(".tip-box");
const customEL = document.getElementById("custom");
const numberOfPeopleEL = document.getElementById("amount-people");
const tip_amountEL = document.getElementById("tip-amount");
const total_amountEL = document.getElementById("total-amount");
const resetBtnEl = document.getElementById("reset");

let bill = 0;
let tipAmount = 0;
let numberOfPeople = 0;
let totalBill = 0;
let tipPerPerson = 0;
let totalAmountPerPerson = 0;
billEL.addEventListener("input", function () {
  // console.log(billEL.value);
  bill = Number(billEL.value);
});
// console.log(tipsBtnEL);
tipsBtnEL.forEach((tipBtnEL) => {
  tipBtnEL.addEventListener("click", function () {
    const tip = Number(tipBtnEL.innerHTML.slice(0, -1)) / 100;
    tipAmount = tip * bill;
    // console.log(tipAmount);
  });
});
customEL.addEventListener("input", function () {
  const tip = Number(customEL.value) / 100;
  tipAmount = tip * bill;
});
numberOfPeopleEL.addEventListener("input", function () {
  numberOfPeople = Number(numberOfPeopleEL.value);
  
  // if (!numberOfPeople) {
  //   console.log("can't be zero");
  // } else {
  //   console.log("input number");
  // }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    totalBill = tipAmount + bill;
    tipPerPerson = tipAmount / numberOfPeople;
    totalAmountPerPerson = totalBill / numberOfPeople;

    // console.log(tipPerPerson.toFixed(2));
    // console.log(totalAmountPerPerson.toFixed(2));
    tip_amountEL.textContent = tipPerPerson.toFixed(2);
    total_amountEL.textContent = totalAmountPerPerson.toFixed(2);
  }
});
resetBtnEl.addEventListener("click", function () {
  // bill=number(billEL.value);
  document.getElementById("bill").value = 0;
  // document.querySelectorAll(".tip-box").textContent=
  document.getElementById("custom").value = "custom";
  document.getElementById("amount-people").value = 0;
  document.getElementById("tip-amount").textContent = 0.0;
  document.getElementById("total-amount").textContent = 0.0;
});
