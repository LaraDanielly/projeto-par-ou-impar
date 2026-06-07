var numeroInput = document.getElementById("numeroInput");
var jogarBtn = document.getElementById("jogarBtn");
var resultado = document.getElementById("resultado");
var resultadoList = document.getElementById("resultadoList");

jogarBtn.addEventListener("click", jogar);

function jogar() {
    var numeroJogador = Number(numeroInput.value);
    var escolha = document.querySelector('input[name="escolha"]:checked').value;
    if (numeroJogador < 1 || numeroJogador > 10) {
        alert("Digite um número de 1 a 10.");
        return;
    }
    var oculto = Math.floor(Math.random() * 10)+1;
    var soma = numeroJogador + oculto;
    var mensagem;

    if (soma % 2 == 0 && escolha == "par" || soma % 2 != 0 && escolha == "impar") {
        mensagem = "Você ganhou! Você: " + numeroJogador + " | João: " + oculto + " | Soma: " + soma;
    } else {
        mensagem = "João ganhou! Você: " + numeroJogador + " | João: " + oculto + " | Soma: " + soma;
    }

    resultado.innerHTML = mensagem;
    adicionarResultado(mensagem);
    salvarResultados();
    numeroInput.value = "";
}

function adicionarResultado(mensagem) {
    var li = document.createElement("li");
    var btn = document.createElement("button");

    li.innerHTML = mensagem;
    btn.innerHTML = "Apagar";

    btn.addEventListener("click", apagarResultado);
    li.appendChild(btn);
    resultadoList.appendChild(li);
}

function apagarResultado() {
    this.parentElement.remove();
    salvarResultados();
}

function salvarResultados() {
    localStorage.setItem("resultados", resultadoList.innerHTML);
}

function carregarResultados() {
    resultadoList.innerHTML = localStorage.getItem("resultados") || "";

    var btns = document.querySelectorAll("li button");

    btns.forEach(function(btn) {
        btn.addEventListener("click", apagarResultado);
    });
}

carregarResultados();
