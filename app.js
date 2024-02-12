let numeroSecretro = 0;//declaramos una variable y se le asigna la funcion generar numero secreot
let numeroDeIntentos = 0;
console.log(numeroSecretro);
//Decalrar lista
let listaNumerosSorteados = [];
let numeroMaximo =10

//Cambiar texto de etiqutas especificas donde eleemnto es la etiqueta y texto el texto va mostrar
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}


function verificarIntento(){
    //Obtiene el valor numerico de la caja de texto del formulario 
    let numeroUusario = parseInt(document.getElementById('valorUsuario').value);
    
    //Dice al usuario que si acerto el numero o le da ayudas para que adivine 
    if(numeroUusario == numeroSecretro){
        asignarTextoElemento('p',`Acertaste el numero ${numeroDeIntentos} ${(numeroDeIntentos === 1) ? 'vez' : 'veces'}`);
        //Documento getelemntbyID selecciona el id del elemento y va a remover el atributo de disabled cuando acierte el numero
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(numeroUusario>numeroSecretro){
        asignarTextoElemento('p','El numnero secreto es menor ')
        limpiarCaja();

    }else if(numeroUusario<numeroSecretro){
        asignarTextoElemento('p','El numnero secreto es mayor ')
        limpiarCaja();
    }
    numeroDeIntentos ++;
    return;
}

//Genarar numero secreto de forma aleatoria 
//math.floor quita lamparte decimal 
function generarNumeroAleaotorio (){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numero
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(`p` , `Ya se sortearon los numero posibles`);
    }else{
        //Si el numero generado esta incluido a la lista hacemos una operacion 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleaotorio();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecretro = generarNumeroAleaotorio();
    numeroDeIntentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();