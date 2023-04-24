const readline = require('readline-sync');

const peso = 80; // PESO - Você pode utilizar o valor que desejar aqui
const altura = 163; // ALTURA - Você pode utilizar o valor que desejar aqui

function calculaBMI(peso, altura) {
  console.log(`peso: ${peso}, altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaQuadrado = alturaEmMetros ** 2;

  const bmi = peso / alturaQuadrado;

  return bmi;
}

const BMI_MAX_AND_MIN = {
  'Magreza': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Peso Normal': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Sobrepeso': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obeso Classe I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obeso Classe II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obeso Classa III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

// A função main é o ponto de partida do nosso programa
function main() {
  const peso = readline.questionFloat('Qual o seu peso? (kg) ');
  const altura = readline.questionInt('Qual a sua altura? (cm) ');

  const bmi = calculaBMI(peso, altura);
  const bmiResult = handleBMIResult(bmi);

  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(bmiResult);
}

main();

// calculaBMI = (peso, altura) => {
//   const bmi = (peso/100) / altura**2;
//   return bmi;
// }

// console.log(calculaBMI(80,163));