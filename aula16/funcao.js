function par_ou_impar(n){
    if(n%2 == 0){
        return 'Par'
    } else{
        return 'Impar'
    }
}

let res = par_ou_impar(4)
console.log(`O número digitado é ${res}`)