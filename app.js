function isPalindrome(text) {
    let length = text.length;
  
    for (let i = 0; i < length / 2; i++) {
      if (text[i] !== text[length - 1 - i]) {
        alert("Não é um palíndromo!");
        return;
      }
    }
  
    alert("É um palíndromo!");
  }
  
  // Exemplo de uso
  let palavraSecreta = prompt('Digite uma palavra ou frase para verificar se é um palíndromo');
  isPalindrome(palavraSecreta);
  
