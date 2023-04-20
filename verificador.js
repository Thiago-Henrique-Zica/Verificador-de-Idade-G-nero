function verificar (){
    /* window.alert( " funcionou") para teste*/
    var data = new Date()                                                         // pegando a dta de hoje, para fazer a lógica da idade.
    var ano = data.getFullYear()
    var formularioAno = document.getElementById("txtano")
    var res = document.querySelector('div#res')                                 // resposta pronta do html
 
         if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano){      // se o usuario preencher 0 ou maior que o ano atual, vai aparecer um erro.  // ano = é a variavel do ano atual.
             window.alert(" [ERRO], Confira os Dados!")
         }else {
             var formulariosex = document.getElementsByName('radsex')
             var idade = ano - Number(formularioAno.value)
             var gênero = ''  
             var img = document.createElement('img')
             img.setAttribute('id', ' foto')
             
             
 
         }if ( formulariosex[0].checked){                                  // o 0 significa o primeiro radio. marcado
                gênero = " Masculino"
                 if (idade =>0 && idade < 10) {
                         // criança
                       
 
                } else if( idade < 21){                 
                        //jovem
 
                } else if ( idade < 50){
                         // Adulto
                   
          
                } else {
                        //Idoso
                        
                }
         }else if  ( formulariosex[1].checked){
                 gênero = " Feminino"
 
                 if (idade =>0 && idade <10){
                     // criança
                     
 
                 } else if( idade < 21){
                     // Jovem
                     
 
                 } else if ( idade < 50){
                     // Adulto
                     
 
                 } else{
                    //Idoso
                    
                    
                  }
                 
         }
             res.style.textAlign = ' center'
             res.innerHTML= ` Detectamos o um gênero ${gênero} com ${idade} anos.` 
             res.appendChild(img)
             
 }