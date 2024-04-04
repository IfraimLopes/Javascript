var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exactamente ${hora} horas.`)

if (hora < 12 ){
    console.log(`Bom dia, são ${hora} da manhã`)
} else if (hora <= 18){
    console.log(`Boa tarde, são ${hora} da tarde`)
} else if (hora >= 18){
    console.log(`Boa noite, são ${hora} da noite`)
}