const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form");
const textToCopy = document.querySelector("#textToCopy");

form.addEventListener("submit", sumarInputValues);

function sumarInputValues() {
  event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
  textToCopy.setAttribute('value', sumaInputs)
}

textToCopy.addEventListener("copy", showMessageWhenCopy);

function showMessageWhenCopy() {
  alert("Copiaste esto prro");
}
