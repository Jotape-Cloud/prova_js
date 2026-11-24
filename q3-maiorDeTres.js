// Questão 3: maiorDeTres(a, b, c)
// Receba três números e retorne o maior deles.

function maiorDeTres(a, b, c) {
  if(a > b && c){
    return a
  }
  else if(b > a && c){
    return b
  }
  else{
    return c
  }
}
  
// Testes (não altere esta parte)
console.log(maiorDeTres(3, 9, 5) === 9 ? "OK" : "ERRO");
console.log(maiorDeTres(-2, -8, -4) === -2 ? "OK" : "ERRO");
