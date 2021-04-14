function basefase() {
    var escolhaCertaLorde = "direita";
    var escolhaLorde = prompt("Você segue seu caminho atrás da bomba para salvar a vida de todos, seus amigos vão para o outro lado com a mesma missão \n Você escolher ir para direita ou esquerda?","//escreva em minúsculo")
    if (escolhaLorde == escolhaCertaLorde) {
      alert("Tudo está tranquilo na sua caminhada, até você perceber alguns animais correndo em direção oposta à sua, você tem duas opções, fugir com os animais ou enfrentar o que tem a sua frente? Pense nisso")
      faseLorde1()
    } else {
      alert("Você sempre foi sozinho, esse mundo não tem mais nada seu, tudo que você mais amava foi morto, seguindo o caminho em busca da bomba você se lembra que não tem mais nada e mais ninguém, uma melancolia te abraça e você decide que não quer mais continuar. Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz, e você não lembrou. O barulho do corpo caindo sobre as pedras ecoou naquele lugar e o silencio então tomou conta de tudo.")
      document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    }
  } 
  // fase 1 - primeira pergunta
  function faseLorde1() {
    var escolhaCertaLorde1 = 'enfrentar';
    var escolhaLorde1 = prompt("Você tem duas opções, fugir ou enfrentar:","//escreva em minúsculo");
    if (escolhaLorde1 == escolhaCertaLorde1) {
      alert("Você enfrentou seu medo e descobriu que era apenas um raio que assustou os animais. Grande tempestade a frente, melhor buscar um lugar para se abrigar logo")
      faselorde2()
    } else {
      alert("Você decide fugir, que atitude vergonhosa para um lorde, COVARDE! Você acaba de ser pisoteado por animais enfurecidos")
      document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    }
  }

function faselorde2() {
    var escolhaCertaLorde2= "rio";
    var escolhaLorde2= prompt ('Você prefere seguir a trilha da cidade destruída ou o caminho do rio?', 'cidade ou rio?//escreva em minúsculo');
    if (escolhaLorde2 == escolhaCertaLorde2){
      alert ("A guerra foi a tanto tempo e mesmo assim o rio ainda não se purificou totalmente, mas vamos continuar em frente!")
      faseLorde3()
    } else{
      alert ("A cidade destruída está completamente contaminada por radiação, você se sente tonto e desmaia, quando acorda percebe que não consegue mais continuar e aos poucos você morre")
      document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    }
}

function faseLorde3(){
    var escolhaCertaLorde3= "água";
    var escolhaLorde3= prompt ("você está com pouca agua e precisa encher mais sua garrafa, o que você faz? Enche com a água do rio ou prefere beber sua urina?","água ou urina?//escreva em minúsculo");
    if (escolhaLorde3 == escolhaCertaLorde3){
      alert ("A água está apenas suja, não está com contaminação mortal, você enche sua garrafa e segue o caminho, de longe avista uma caverna, além de te proteger da chuva, você consegue descansar em paz")
      faseLorde4()
    }else{
      alert ("O que adianta beber a própria urina e esquecer dos alimentos na base? Não tem nenhum animal por perto e você está com a pressão baixa, dessa vez o descuido venceu.")
      document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    }
}

function faseLorde4 (){
    var escolhaCertaLorde4= "caverna";
    var escolhaLorde4= prompt('você prefere continuar ou ir até a caverna?',"caverna ou continua?//digite em minúsculo");
    if (escolhaLorde4 == escolhaCertaLorde4){
      alert ("Você chegou até a caverna e a tempestade logo em seguida caí, você respira aliviado, quando a chuva cessa você começa a ouvir um barulho de relógio, será que é a bomba?")
      faseLorde5()
    } else {
      alert ("Você quer continuar, mas a chuva vem tão forte que o rio começa a transbordar e você é levado pela enxurrada")
      document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    }
}

function faseLorde5(){
    var escolhaCertaLorde5 = "bomba";
    var escolhaLorde5= prompt("Você escuta um barulho de pedrinhas caindo, por um momento você não sabe o que fazer, você decide seguir o som da bomba e salvar a todos ou você vai atrás do barulho das pedrinhas?","bomba ou barulho?//escreva em minúsculo");
    if (escolhaLorde5 == escolhaCertaLorde5){
      alert ("Você decide ir até a bomba. Ela tem uma senha e você tem 3 chances de resolver, você tem que juntar os resultados dos enigmas e no fim digita-los")
      faseLorde6()
    }else {
      alert("Você seguiu o som das pedrinhas e achou o seu amigo mago, ele está assustado, mas vem até você em silencio, enquanto você tenta entender o que está acontecendo com ele, ele puxa um punhal e te mata")
      document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
    }
}

//fase 7
function faseLorde6 (){
  alert ("No meu jardim existe 3 pés de alface, 1 de pepino e 5 de cenoura. Quantos pés eu tenho no total?");
  alert ("Meu avô tem 5 filhos, cada filho tem 3 filhos. Quantos primos eu tenho?");
  alert ("Há 7 passarinhos em um galho de árvore. Um menino atira em um deles, quantos passarinhos sobraram no galho?");
  var escolhaCertaLorde6 = 2120
  var tentativa = 0;
  while (tentativa < 3){
  var escolhaLorde6 = prompt ("Qual é a senha?")
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