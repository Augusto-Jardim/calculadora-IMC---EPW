const form = document.querySelector('form');
const resultados = document.querySelectorAll('.resultado');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  var peso = parseFloat(document.querySelector('#peso').value);
  var altura = parseFloat(document.querySelector('#altura').value);

  var imc = peso / (altura * altura);

  if (imc < 18.5) {
    alert(`Seu IMC é ${imc.toFixed(2)}. Você está na categoria Magreza.`);
  } else if (imc >= 18.5 && imc < 25) {
    alert(`Seu IMC é ${imc.toFixed(2)}. Você está na categoria Normal.`);
  } else if (imc >= 25 && imc < 30) {
    alert(`Seu IMC é ${imc.toFixed(2)}. Você está na categoria Sobrepeso.`);
  } else if (imc >= 30 && imc < 35) {
    alert(`Seu IMC é ${imc.toFixed(2)}. Você está na categoria Obesidade Grau 1.`);
  } else if (imc >= 35 && imc < 40) {
    alert(`Seu IMC é ${imc.toFixed(2)}. Você está na categoria Obesidade Grau 2.`);
  } else {
    alert(`Seu IMC é ${imc.toFixed(2)}. Você está na categoria Obesidade Grau 3.`);
  }
});