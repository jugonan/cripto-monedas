class Interfaz {
    constructor(){
        this.init();
    }
    init(){
        this.ConstruirSelect();

    }

    ConstruirSelect(){
        cotizador.obtenerMonedasApi()
            .then(monedas => {
                const select = document.querySelector('#criptomoneda');
                for(const [key,value] of Object.entries(monedas.monedas.Data)){
                    // Esta es una manera de recorrer los arrays de objetos muy largos
                    // Añadir el symbol y el nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            })
    }

    MostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

     // Seleccionar mensajes 

     const divMensaje = document.querySelector('.mensajes');
     divMensaje.appendChild(div);

     // Mostrar contenido
     setTimeout(() => {
         document.querySelector('.mensajes div').remove();
     }, 30000);
    }

    mostrarResultado(resultado, moneda, crypto){

        console.log(resultado, [crypto]);
    }
}