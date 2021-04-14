function fasebaseMago() {
    var escolhaCertaMago = "acompanhado";
    var escolhaMago = prompt("Você quer seguir o caminho sozinho ou acompanhado?","//escreva em minúsculo")
    if (escolhaMago == escolhaCertaMago) {
      alert ("Você segue com a fada em busca da bomba, durante o caminho você percebe que tem uma vegetação nova surgindo e fica curioso")
      faseMago1()
    } else {
      alert("Você preferiu seguir sozinho e no meio do caminho encontra um ser bem diferente, você não entende o que ele é, mas quando ele se aproxima você percebe que ele começa a mudar de face, ele te mata")
      document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    } 
  } 
  // fase 1 - primeira pergunta
  function faseMago1() {
    var escolhaCertaMago1 = "planta";
    var escolhaMago1 = prompt("Você tem duas opções, pegar uma planta ou ignorar a vegetação, qual você escolhe?","planta ou ignorar //escreva em minúsculo");
    if (escolhaMago1 == escolhaCertaMago1) {
      alert("Você escolheu a planta, siga seu caminho")
      faseMago2 ()
    } else {
      alert("Ignorar parecia a melhor alternativa, mas se você tivesse ido pegar uma planta você não encontraria uma criatura enorme que acabou te matando")
      document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    }
  }

  function faseMago2(){
      var escolhaCertaMago2 = "planta";
      var escolhaMago2 = prompt ("Você está com fome e tem duas opções comer a planta que você guardou ou ir atrás de um animal, qual você escolhe?","planta ou animal? //escreva em minúsculo")
    if (escolhaMago2 == escolhaCertaMago2){
        alert ("Você comeu a planta e acabou gostando do gosto, mas acabou tendo uma sensação esquisita, parecia que você estava perdendo a consciência aos poucos, cuidado")
        faseMago3 ()
    } else {
        alert ("Você escolheu ir atrás de um animal, mas sua habilidade como caçador está longe de ser boa, você acaba tropeçando e quebrando a perna, você tenta andar, mas com tanta dor não percebe que está indo direto para uma areia movediça, você morreu")
        document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    }
 }
function faseMago3(){
    var escolhaCertaMago3 = "caverna";
    var escolhaMago3 = prompt("Você tem duas opções, se abrigar em uma caverna ou seguir o caminho que você está fazendo, qual você quer?","carverna ou caminho? //escreva em minúsculo");
 if (escolhaMago3 == escolhaCertaMago3){
     alert ("Ir até a caverna realmente é a melhor solução, pelo menos você vai ter um abrigo, vamos em frente!");
    faseMago4 ()
    } else {
        alert ("Você decidiu seguir o caminho, mas sua amiga fada não concorda então vocês acabam se separando, seguindo o caminho sozinho você acaba ficando mais vulnerável e acaba encontrando algo que você não queria! Você não vai conseguir lutar e acaba aceitando a morte");
        document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    }
}

function faseMago4 (){
      alert ("Chegando na caverna você percebe um barulho de relógio e resolve ver o que é, você acabou de descobrir a bomba! \n Ela tem uma senha e você tem 3 chances de resolver, você tem que juntar os resultados dos enigmas e no fim digita-los")
      alert ("No meu jardim existe 3 pés de alface, 1 de pepino e 5 de cenoura. Quantos pés eu tenho no total?");
      alert ("Meu avô tem 5 filhos, cada filho tem 3 filhos. Quantos primos eu tenho?");
      alert ("Há 7 passarinhos em um galho de árvore. Um menino atira em um deles, quantos passarinhos sobraram no galho?");
      var escolhaCertaFada7 = 2120
      var tentativa = 0;
      while (tentativa < 3){ 
      var escolhaFada7 = prompt ("Qual é a senha?")
      if (escolhaCertaFada7 == escolhaFada7){
            alert ("ganhou!") //melhorar essa linha
            document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
            break;}
         else {
            alert ("não foi dessa vez") // melhorar essa linha
            document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
      }
} 
}

  