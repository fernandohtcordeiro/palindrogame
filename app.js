function checkPalindrome() {
  const inputField = document.getElementById("inputText");
  const trofeuicon = document.getElementById("trofeuicon");
  const mensagem = document.getElementById("mensagem");
  const textoVerificacao = document.querySelector(".container__texto h2"); // Seleciona o h2

  // Captura e limpa o texto
  const text = inputField.value.trim();
  const cleanedText = text.replace(/[\W_]/g, '').toLowerCase();

  // Validação para entrada vazia
  if (cleanedText.length === 0) {
    mensagem.innerHTML = 'Você não digitou!';
    mensagem.className = "red";
    trofeuicon.classList.add("hidden");
    textoVerificacao.style.display = "block"; // Garante que o h2 reapareça
    return;
  }

  // Verifica se é um palíndromo
  const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');
  if (isPalindrome) {
    mensagem.innerHTML = '<span style="color: white;">Você</span> acertou!';
    mensagem.className = "green";
    trofeuicon.classList.remove("hidden");
    textoVerificacao.style.display = "none"; // Oculta o h2
  } else {
    mensagem.innerHTML = '<span style="color: white;">Você</span> errou!';
    mensagem.className = "red";
    trofeuicon.classList.add("hidden");
    textoVerificacao.style.display = "block"; // Garante que o h2 reapareça
  }
}

function resetForm() {
  // Limpa o campo de entrada
  document.getElementById("inputText").value = "";

  // Limpa a mensagem e remove estilos
  const mensagem = document.getElementById("mensagem");
  mensagem.innerHTML = "";
  mensagem.className = "";

  // Esconde o troféu, caso visível
  const trofeuicon = document.getElementById("trofeuicon");
  trofeuicon.classList.add("hidden");

  // Garante que o texto do h2 reapareça
  const textoVerificacao = document.querySelector(".container__texto h2");
  textoVerificacao.style.display = "block";
}
