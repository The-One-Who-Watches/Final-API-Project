const IDEl = document.getElementById("ID");
const form = document.getElementById("form");
const tallyEl = document.getElementById("amountTally");
const nameEl = document.getElementById("name");
const searchF = document.getElementById("searchForm");
const search = document.getElementById("search");
const amountEl = document.getElementById("amount");
const withdrawBtn = document.getElementById("withdrawBTN");
const depositBtn = document.getElementById("depositBTN");
const change = document.getElementById("amountChange");
const greeting = document.getAnimations("greeting");

let index;
let indexNum;
let amount = 0;
let currentObj;
let arr = [
  { name: "Scrimblo", id: "8762", amount: "10000" },
  { name: "Scrunglo", id: "2678", amount: "10000" },
  { name: "Burns", id: "0002", amount: "10000" },
];
let obj = {};

function formCheck(e) {
  e.preventDefault();
  obj.name = nameEl.value;
  obj.id = IDEl.value;
  obj.amount = amountEl.value;
  arr.push(obj);
  console.log(arr);
  obj = {};
}

function searchArr(e) {
  e.preventDefault();
  let target = search.value;
  console.log(search.value);
  searchF.value = target;
  index = arr.find((element) => element.id === searchF.value);
  indexNum = arr.findIndex((element) => element.id === searchF.value);
  console.log(index);
  amount = Number(index.amount);
  index.amount = Number(index.amount);
  currentObj = index;
  tallyEl.textContent = amount;
  greeting.textContent = `Greetings, ${index.name}.`;
}

function withdrawFunc(e) {
  e.preventDefault();
  change.value = Number(change.value);
  if (change.value > amount) {
    alert("Please do not withdraw more than you have");
  } else {
    amount = amount - change.value;
    tallyEl.textContent = amount;
    index.amount = amount;
    console.log(index.amount);
  }
}

function depositFunc(e) {
  e.preventDefault();
  amount = amount + Number(change.value);
  tallyEl.textContent = amount;
  index.amount = amount;
  arr.splice(indexNum, 1, index);
  console.log(index.amount);
}

form.addEventListener("submit", formCheck);
searchF.addEventListener("submit", searchArr);
withdrawBtn.addEventListener("click", withdrawFunc);
depositBtn.addEventListener("click", depositFunc);
