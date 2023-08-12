const numeroAleatorio = Math.floor(Math.random() * 10 + 1);
let pontuacao = 300;
let tentativas = 0;
const maxTentativas = 3;

function adivinhar() {
    const numeroInput = document.getElementById("numero");
    const numero = Number(numeroInput.value);
    let errou; 
    let mensagem = "";

    do {
        errou = numero !== numeroAleatorio;

        if (errou) {
            tentativas++;
            pontuacao -= 100;
            if (tentativas === maxTentativas) {
                mensagem = `Você perdeu! O número era ${numeroAleatorio}.`;
                document.getElementById("adivinharBtn").disabled = true;
            } else if (tentativas === maxTentativas - 1) {
                mensagem = `Você errou! Resta apenas 1 chance...`;
            } else {
                mensagem = `Você errou! Restam ${maxTentativas - tentativas} chances...`;
            }
            document.getElementById("resultado").innerText = mensagem;
            numeroInput.value = "";
            return;
        } else {
            break;
        }
    } while (errou && tentativas < maxTentativas);

    document.getElementById("resultado").innerText = `Parabéns, você acertou! Sua pontuação foi de ${pontuacao} pontos!`;
    document.getElementById("adivinharBtn").disabled = true;
}
