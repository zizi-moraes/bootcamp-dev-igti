var fs = require('fs');
var nomeArquivo = 'meuArquivo.txt'

//cria arquivo
fs.writeFile(nomeArquivo, 'TanTanTanTan!', function(err){
  if (err !== null){
    console.log(err);
  }else{
    console.log('arquivo gerado com sucesso!')
    
    //add mais texto no fim
    fs.appendFile(nomeArquivo, '\nMelissa é minha princesa TanTan!', function(err){
      if (err){
        console.log(err)
      }else{
        //lê o texto
        fs.readFile(nomeArquivo, 'utf-8', function(err, data){
          if (err){
            console.log(err)
          }else{
            console.log(data)
          }
        });
      }
    });
  }
});