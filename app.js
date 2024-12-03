function checkPalindrome() {
  const inputField = document.getElementById("inputText");
  const trophyIcon = document.getElementById("trophyIcon");
  const mensagem = document.getElementById("mensagem");

  // Captura e limpa o texto
  const text = inputField.value.trim();
  const cleanedText = text.replace(/[\W_]/g, '').toLowerCase();

  // Validação para entrada vazia
  if (cleanedText.length === 0) {
      mensagem.innerHTML = 'Você não digitou!';
      mensagem.className = "red";
      trophyIcon.classList.add("hidden");
      return;
  }

  // Verifica se é um palíndromo
  const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');
  if (isPalindrome) {
      mensagem.innerHTML = '<span style="color: white;">Você</span> acertou!';
      mensagem.className = "green";
      trophyIcon.classList.remove("hidden");
  } else {
      mensagem.innerHTML = '<span style="color: white;">Você</span> errou!';
      mensagem.className = "red";
      trophyIcon.classList.add("hidden");
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
  const trophyIcon = document.getElementById("trophyIcon");
  trophyIcon.classList.add("hidden");
}
