

// let numeroRandomico = Math.floor(Math.random() * 100) + 1;
// let tentativas = 10;
// let palpites = [];

// while (tentativas > 0) {
//   let palpite = parseInt(prompt("Informe um número entre 1 e 100:"));
  
//   if (isNaN(palpite)) {
//     alert("Você precisa informar um número válido.");
//     continue;
//   }
  
//   if (palpite < 1 || palpite > 100) {
//     alert("O número precisa estar entre 1 e 100.");
//     continue;
//   }
  
//   if (palpites.includes(palpite)) {
//     alert("Você já informou esse número.");
//     continue;
//   }
  
//   palpites.push(palpite);
  
//   if (palpite === numeroRandomico) {
//     alert("Parabéns! Você acertou o número " + numeroRandomico + " em " + (10 - tentativas + 1) + " tentativas.");
//     break;
//   }
  
//   if (palpite < numeroRandomico) {
//     alert("Seu palpite é menor que o número gerado.");
//   } else {
//     alert("Seu palpite é maior que o número gerado.");
//   }
  
//   tentativas--;
  
//   if (tentativas === 0) {
//     alert("Você perdeu! O número gerado era " + numeroRandomico + ".");
//   }
// }

