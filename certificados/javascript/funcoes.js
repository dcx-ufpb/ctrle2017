  function formataCpf(e, mascara, documento)
            {
              var i = documento.value.length;
              var saida = mascara.substring(0,1);
              var texto = mascara.substring(i); 
              if (texto.substring(0,1) != saida){
                        documento.value += texto.substring(0,1);
              }
            //apenas numeros
            var tecla=new Number();
            if(window.event) {
                tecla = e.keyCode;
            }
            else if(e.which) {
                tecla = e.which;
            }
            else {
                return true;
            }
            if (tecla =="8"){
                documento.value="";
            }
            if (tecla=="45" || tecla=="46" || tecla=="32"){
                return false;
        } 
                      
        }
function SomenteNumero(e){
     var tecla=(window.event)?event.keyCode:e.which;
            if (tecla =="8"){
                documento.value="";
            }
            if (tecla=="45" || tecla=="46" || tecla=="32"){
                return false;
        }  
}