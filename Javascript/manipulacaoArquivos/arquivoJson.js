const { on } = require("events");
var fs = require("fs");
var nomeArquivo = 'carros.json';
var carros = ['Gol', 'Palio', 'Uno', 'Celta'];
var concessionaria = {
  nome: 'Concessionária XYZ',
  carros
}

//console.log(concessionaria)

//cria o arquivo
fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function(err){
  if (err){
    console.log(err);
  }else{
    //recupera o conteúdo
    fs.readFile(nomeArquivo, 'utf-8', function(err, data){
      if(err){
        console.log(err)
      }else{
        //cria um objeto para adicionar mais um elemento no indice de carros
        var obj = JSON.parse(data);
        obj.carros.push('HRV');
        //escreve o arquivo novamente
        fs.writeFile(nomeArquivo, JSON.stringify(obj), function(err){
          if (err){
            console.log(err)
          }
        })
      }
    })
  }
});