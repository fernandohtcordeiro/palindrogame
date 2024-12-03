function checkPalindrome() {
  const inputField = document.getElementById("inputText");
  const trofeuicon = document.getElementById("trofeuicon");
  const mensagem = document.getElementById("mensagem");

  // Captura e limpa o texto
  const text = inputField.value.trim();
  const cleanedText = text.replace(/[\W_]/g, '').toLowerCase();

  // Validação para entrada vazia
  if (cleanedText.length === 0) {
      mensagem.innerHTML = 'Você não digitou!';
      mensagem.className = "red";
      trofeuicon.classList.add("hidden");
      return;
  }

  // Verifica se é um palíndromo
  const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');
  if (isPalindrome) {
      mensagem.innerHTML = '<span style="color: white;">Você</span> acertou!';
      mensagem.className = "green";
      trofeuicon.classList.remove("hidden");
  } else {
      mensagem.innerHTML = '<span style="color: white;">Você</span> errou!';
      mensagem.className = "red";
      trofeuicon.classList.add("hidden");
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
}
