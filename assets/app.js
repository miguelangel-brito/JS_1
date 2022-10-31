const amount = document.querySelector("#amount");
const price = document.querySelector("#price");
const btn = document.querySelector("#btn");
const color = document.querySelector("#color");
const priceTotal = document.querySelector("#priceTotal");
const amountTotal = document.querySelector("#amountTotal");
const buttomTotal = document.querySelector("#buttonTotal");

btn.addEventListener("click", () => {
  amountTotal.textContent = "Cantidad: " + amount.value;
  let price = 80000;
  priceTotal.textContent = "Total: $" + price * amount.value;
});

function cambiaColor(color) {
  let buttomTotal = document.getElementById("buttonTotal");
  buttomTotal.style.backgroundColor = color.value;
}