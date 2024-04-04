let num = [4, 45, 3, 1, 2, 5];
//num.sort()
num[6] = 20;
//num.push();
console.log(`Nosso vetor é o ${num}`);
console.log(`O número de elementos são: ${num.length}`)
console.log(`O primeiro valor da array é ${0}`)

let pos = num.indexOf(9)
if (pos == -1){
    console.log("Este número não foi encontrado.")
} else{
    console.log(`O valor 2 está na posição ${pos}`)
}
