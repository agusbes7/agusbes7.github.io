
window.addEventListener('load',function presentacion(){
    Window.alert('Hola te presentamos el curriculum de candice una joven entusiasta en busqueda de su primer empleo');})
 // Funcion refinada de ocultar mostrar
function ocultarmostrar(x){
  var aux,aux2,aux3;
    aux=document.querySelector('#foraca');
    aux2=document.querySelector('#infadi');
    aux3=document.querySelector('#habyapti');
    console.log(x);
switch (x){

 case 1:
    if(aux.style.display=="block"){       aux.style.display="none";}
     
    else{  
    aux.style.display="block";
    aux2.style.display="none";
    aux3.style.display="none";}   
  break;

case 2:
    if(aux2.style.display=="block"){      aux2.style.display="none";}
     
    else{  
    aux2.style.display="block";
    aux.style.display="none";
    aux3.style.display="none";}
  break;

case 3:
    if(aux3.style.display=="block"){     aux3.style.display="none";}
     
    else{  
    aux3.style.display="block";
    aux2.style.display="none";
    aux.style.display="none";}
  break;
}}
//Paso a otras funcionalidades de la pagina
function alerta(){
window.alert('Seccion en mantenimiento');}
//contactar

//alerta de ayuda
function alertaAy(){
  window.alert('¿Deseas compartir tu cv con las companias y empresas de la zona?  registrate y carga tu cv o hacelo en este mismo sitio si no tenes');}

