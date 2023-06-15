console.log('Hello World! -- Arquivo externo!')
document.write('Texto qualquer!')

/* function clickBotao(){
  alert('Hello World!')
} */

//DOM - DOcument Object Model
function clickBotao(){
  //document.getElementById('paragrafo2').innerHTML = "Texto alterado com sucesso!"
  //document.getElementById('paragrafo2').style.display = "none";
  for( var i=0; i < document.getElementsByClassName("paragrafo").length; i++){
    document.getElementsByClassName("paragrafo")[i].style.color="blue";
    document.getElementsByClassName("paragrafo")[i].style.fontWeight="bold";
  }
}

//DOM - DOcument Object Model
function clickBotao2(){
  document.getElementById('paragrafo2').style.display = "block";
  var i = 0;
  var botoes = document.getElementsByTagName("button")
  while(i < botoes.length){
    botoes[i].style.fontSize="20px";
    i++;
  }
}

function ligarLampada(){
  document.getElementById("lampada").src="imgs/lampada2.jpg";
}

function desligarLampada(){
  document.getElementById("lampada").src="imgs/lampada1.jpg";
}


var quatidadeElementos = 0;

function adicionarElemento(){
  var elemento = document.createElement("P")
  elemento.innerHTML = "elemento " + quatidadeElementos;
  quatidadeElementos++;
  document.getElementById("div-elementos").appendChild(elemento);
}

function removerElemento(){
  var filhos = document.getElementById("div-elementos").childNodes
  var size = filhos.length
  for(var i=0; i < size; i++){
    document.getElementById("div-elementos").removeChild(filhos[0]); 
  }
}
  