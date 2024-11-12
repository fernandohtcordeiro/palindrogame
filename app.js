function checkPalindrome() {
  let text = document.getElementById("inputText").value;
  let length = text.length;

  for (let i = 0; i < length / 2; i++) {
    if (text[i] !== text[length - 1 - i]) {
      document.getElementById("resultado").innerText = "Não é um palíndromo!";
      return;
    }
  }

  document.getElementById("resultado").innerText = "É um palíndromo!";
}

function checkPalindrome() {
  let text = document.getElementById("inputText").value;
  let cleanedText = text.replace(/[\W_]/g, '').toLowerCase(); // Limpeza e normalização
  let length = cleanedText.length;

  for (let i = 0; i < length / 2; i++) {
    if (cleanedText[i] !== cleanedText[length - 1 - i]) {
      document.getElementById("resultado").innerText = "Não é um palíndromo!";
      return;
    }
  }

  document.getElementById("resultado").innerText = "É um palíndromo!";
}


function checkPalindrome() {
  let text = document.getElementById("inputText").value;
  let cleanedText = text.replace(/[\W_]/g, '').toLowerCase(); // Remove espaços e pontuação e transforma em minúsculas
  let length = cleanedText.length;
  
  if (length === 0) {
    document.getElementById("resultado").innerText = "Por favor, digite uma palavra ou frase.";
    document.getElementById("resultado").style.color = "orange";
    return;
  }

  for (let i = 0; i < length / 2; i++) {
    if (cleanedText[i] !== cleanedText[length - 1 - i]) {
      document.getElementById("resultado").innerText = "Não é um palíndromo!";
      document.getElementById("resultado").style.color = "red";
      return;
    }
  }

  document.getElementById("resultado").innerText = "É um palíndromo!";
  document.getElementById("resultado").style.color = "green";
}
