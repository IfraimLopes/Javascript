let num = [1, 4, 6, 7]
/*
 for (let i=0; i<num.length; i++ ){
  
 }
*/ 

//A maneira mais simplificada
for (let i in num){
  console.log(`A posição ${i} o número é ${num[i]}`)
}
