document.getElementById("quizForm").addEventListener("submit", enviarQuiz);

function enviarQuiz(event) {
  event.preventDefault();

  const respostasCertas = {
    q1: "Você e Bibi",
    q2: "Macarrão",
    q3: "😎",
    q4: "Tudo",
    q5: "Lily e Marshall",
    q6: "Batata",
    q7: "Dorama",
    q8: "Todas",
    q9: "100 vidas",
    q10: "Motivos"
  };

  let acertos = 0;

  for (let pergunta in respostasCertas) {
    const respostaSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
    if (respostaSelecionada && respostaSelecionada.value === respostasCertas[pergunta]) {
      acertos++;
    }
  }

  if (acertos === 10) {
    window.location.href = "/love-quiz/src/screens/surpresa.html";
  } else {
    alert(`Você acertou ${acertos}/10. Tente de novo, meu amor! 💘`);
  }
}

// Coraçãozao

function explosaoDeCoracoes() {
  for (let i = 0; i < 10; i++) {
    criarCoracao();
  }
}

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.textContent = "❤️";

  // Posição aleatória horizontal
  coracao.style.left = Math.random() * 100 + "vw";
  // Posição vertical inicial
  coracao.style.top = "70vh";

  document.body.appendChild(coracao);

  // Remover o coração após a animação
  setTimeout(() => {
    coracao.remove();
  }, 2000);
}