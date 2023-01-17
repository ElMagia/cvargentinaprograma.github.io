/**
document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Se envió el mensaje"
}

 document.addEventListener('click', function(){
     console.log("Hola mundo desde EventListener");
     document.getElementById("demo").innerHTML = "Estamos probando nuestro primer EventListener"
    })
    
    document.getElementById('boton').addEventListener('click', function(){
        console.log("Hola mundo desde EventListener");
        document.getElementById("demo").innerHTML = "Estamos probando nuestro primer EventListener"
        */


        function redireccion(){
            location.href ="https://www.argentina.gob.ar/economia/conocimiento/argentina-programa"
        }
        
        function redireccion2(){
            location.href ="https://es-la.facebook.com/"
        }
        
        document.getElementById('boton').onclick = function (){
            alert('Te has registrado con exito!');
        }

        document.getElementById('inicio').onclick = function (){
            alert('Aca va un menu');
        }
