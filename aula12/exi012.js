var idade = 90;
console.log(`A sua idade é de ${idade} anos.`)
if (idade < 16) {
  console.log("Não votar");
} else {
  if (idade >= 16 && idade < 18 || idade > 65) {
    console.log("Voto Opcional");
  } else if (idade > 18) {
    console.log("Voto é obrigatório");
  }
}
