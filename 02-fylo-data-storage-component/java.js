const price = document.querySelector("#price");
const output = document.querySelector(".price-output");
const totalOcupado = document.querySelector(".totalOcupado");

price.addEventListener("input", function () {
  output.textContent = 1000 - parseInt(price.value);
  totalOcupado.textContent = price.value;
});
