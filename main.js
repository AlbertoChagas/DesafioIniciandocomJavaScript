
/* 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.*/
      alert("Hello World!")

/* 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.*/
      let numOne = 1
      let numTwo = 2
      alert(numOne+numTwo)

/*3. Crie um script que declare uma variável e verifique se o seu valor é um número.
  Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/
      let numThree = "string"
      if (typeof(numThree)=="number"){
        alert("É um número")
      }else{
        alert("Não é um número")
      }
/* 4. Crie um script que declare uma variável e verifique se o seu valor é uma string.
      Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/
      let numFour = "Não é uma string"
      if (typeof(numFour)=="string"){
        alert("É uma string")
      }else{
        alert("Não é uma string")
      }

/* 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.
      Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/
      let numFive = "boolean"
      if (typeof(numFive)=="boolean"){
        alert("É um booleano")
      }else{
        alert("Não é um booleano")
      }
/* 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.*/
      let numSix = 6
      let numSeven = 7
      alert(numSix-numSeven)
/* 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.*/
      let numEight = 8
      let numNine = 9
      alert(numEight*numNine)
/* 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.*/
      let numTen = 10
      let numEleven = 2
      alert(numTen/numEleven)
/* 9. Crie um script que declare uma variável e verifique se o seu valor é um número par.
      Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".*/
      let numTwelve = 12
      if (numTwelve%2==0){
        alert("É um número par")
      }else{
        alert("Não é um número par")
      }
/* 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
       Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".*/
       let numThirteen = 13
       if (numThirteen%2!=0){
         alert("É um número ímpar")
       }else{
          alert("Não é um número ímpar")
       }