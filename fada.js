function fasebase() {
    var escolhaCerta = "mago";
    var escolha = prompt("Quem você deseja seguir, mago ou lorde?", "escreva tudo em minúsculo")
    if (escolha == escolhaCerta) {
      alert ("Você fez uma boa escolha, vamos em frente")
      faseFada1()
    } else {
      alert("Vocês seguiram o caminho destruído da guerra, mas esqueceram de levar mantimentos e os que vocês encontraram tinham radiação")
      document.write("<font size=900> <font face =Arial><font color=#800000> <h1>Game Over</h1></font> </font> </font>");
    } 
  } 
  // fase 1 - primeira pergunta
  function faseFada1() {
    alert('Para seguir o caminho e destruir a bomba você tem que resolver duas questões:');
    var escolhaCertaFada1 = 20;
    var escolhaFada1 = prompt("Caminhando ao fim da tarde, uma senhora contou 20 casas em uma rua à sua direita. No regresso, ela contou 20 casas à sua esquerda. Quantas casas ela viu no total?");
    if (escolhaFada1 == escolhaCertaFada1) {
      alert("Parabéns, vamos a próxima pergunta")
      faseFada2 ()
    } else {
      alert("Coragem não basta, você precisa ter lógica! Fim de jogo.")
      document.write("<font size=900> <font face =Arial><font color=#800000> <h1>Game Over</h1></font> </font> </font> <link rel=stylesheet type=text/css href=style.css />");
    }
  }

//fase 2 - segunda pergunta
function faseFada2 (){
      var escolhaCertaFada2 = 3;
      var escolhaFada2 = prompt ("Há um pato entre dois patos, um pato atrás de um pato e um pato na frente de outro pato. De quantos patos estamos falando?")
      if (escolhaFada2 == escolhaCertaFada2){
            alert ("Você é bom! Quero ver se chega até o fim do jogo")
            faseFada3()
      } else {
            alert ("Coragem não basta, você precisa ter lógica! Fim de jogo.")
            document.write("<font size=250> <font face =Arial><font color=#800000> <h1>Game Over</h1></font> </font> </font> <link rel=stylesheet type=text/css href=style.css />");
      }
} 

//fase 3
function faseFada3 (){
      alert ("um frio avassalador alcançou você e seu amigo mago, vocês têm algumas opções para seguir: caminho do norte, sul, oeste ou leste, qual você escolhe?")
      var escolhaCertaFada3 = "leste";
      var escolhaFada3 = prompt ("Você escolhe: Norte, Sul, Leste ou Oeste?","norte, sul,leste ou oeste //escreva em minúsculo");
      if (escolhaFada3 == escolhaCertaFada3){
            alert ("O caminho até parece aquela antiga história, vocês seguem pelo lado leste como se seguissem a estrada dos tijolos amarelos, o sol começa a esquentar seu corpo e seu amigo começa a recuperar a força, não foi fácil chegar até aqui, mas o caminho está longe de acabar, você deve estar pensando o que deve estar vindo pela frente, treine sua mente, mantenha a calma o próximo passo que você der pode destruir a todos...")
            faseFada4 ()
      } else if (escolhaFada3 == "norte") {
            alert ("O caminho ficou mais frio, suas asas estão congelando, você não vai aguentar")   
            document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
      } else if (escolhaFada3 == "sul"){
            alert ("O frio diminuiu, mas suas asas quebraram pelo vento forte, meu amigo não consegue te salvar e a morte vem te buscar.")
            document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
      } else if (escolhaFada3 == "oeste"){
            alert ("O mundo já não é mais o mesmo, você foi capturado por criaturas enormes e seu amigo foi decapitado por mutantes desconhecidos")
            document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
      }
} 

//fase4
function faseFada4 (){
      alert ("Preste atenção, cuidado, o movimento pode ser em falso")
      var escolhaCertaFada4 = "eco";
      var escolhaFada4 = prompt ("Eu falo, mas não tenho boca. Eu ouço, mas não tenho ouvidos. Não tenho corpo, mas vivo com o vento. Quem sou eu?", "//escreva em minúsculo")
      if (escolhaFada4 == escolhaCertaFada4){
            alert ('Estamos perto, será que você consegue?')
            faseFada5 ()
      } else {
            alert ("Você estava perto, muito perto, mas no fim do trajeto a única coisa que você ouviu foi o seu eco e a última visão foi do mago, a pessoa que você mais confiava, ter te esfaqueado pelas costas, você não vai resistir e seu corpo vai se decompor nessa caverna")
            document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
      }
} 

//fase 5
function faseFada5 (){
      var escolhaCertaFada5 = "continua";
      var escolhaFada5 = prompt ("Como seria se tudo voltasse ao normal? Antes de terminar o seu pensamento você escuta um barulho, olha para trás e percebe que está sozinha, você tem dois caminhos, segue pela caverna em busca de seu amigo ou sai da caverna em busca de ajuda?","continua ou amigo? //escreva em minúsculo")
      if (escolhaFada5 == escolhaCertaFada5){
            alert ("Siga sem medo!")
            faseFada6 ()
      } else {
            alert ("Seus olhos não estão acostumados com a claridade, você cerra os olhos tentando recuperar a visão e sente seu corpo sendo empurrado do penhasco, a última visão que você tem e é de quem te empurrou: O MAGO")
            document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
      }
} 

//fase 6
function faseFada6 (){
      alert ("Você se sente sendo observada, mas começa a ouvir um barulho de relógio, você está perto da bomba! Mas cadê seu amigo?");
      var escolhaCertaFada6 = "bomba"
      var escolhaFada6 = prompt ("Ir atrás da bomba ou procurar seu amigo?","bomba ou amigo? //escreva em minúsculo")
      if (escolhaCertaFada6 == escolhaFada6){
            alert ("Você decide ir até a bomba, mesmo sozinha e confusa sobre o que fazer. Ela tem uma senha e você tem 3 chances de resolver, você tem que juntar os resultados dos enigmas e no fim digita-los")
            faseFada7 ()
      } else {
            alert ("Não temas o inimigo que te ataca, mas o falso amigo que te abraça. Esse foi o último abraço que você recebeu em vida")
            document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:900;font-face:Arial;font-color:#800000;'>Game Over</h1>");
      }
} 

function faseFada7 (){
      alert ("No meu jardim existe 3 pés de alface, 1 de pepino e 5 de cenoura. Quantos pés eu tenho no total?");
      alert ("Meu avô tem 5 filhos, cada filho tem 3 filhos. Quantos primos eu tenho?");
      alert ("Há 7 passarinhos em um galho de árvore. Um menino atira em um deles, quantos passarinhos sobraram no galho?");
      var escolhaCertaFada7 = 2120
      var tentativa = 0;
      while (tentativa < 3){
            var escolhaFada7 = prompt ("Qual é a senha?")
            if (escolhaCertaFada7 == escolhaFada7){
                  alert ("Ganhou! :D")
                  document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>You Win</h1>");
                  break
            } else{
                  tentativa++
                alert ("Não foi dessa vez, tente novamente") // melhorar essa linha
                document.write("<link rel=stylesheet type=text/css href=style.css /><h1 style='font-size:250;font-face:Arial;font-color:#800000;'>Game Over</h1>");
          }
        }
}

