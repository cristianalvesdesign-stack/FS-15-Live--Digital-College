const semaforo = "vermelho"
const podePassar = "verde"
const atencao = "amarelo"
const pare = "vermelho"


if (semaforo == podePassar) {
    console.log("Pode passar, o semáforo está verde")
}

if (semaforo == atencao) {
    console.log("Cuidado! O semáforo está fechando.")
}

if (semaforo == pare) {
    console.log("Semáforo fechado!")
}