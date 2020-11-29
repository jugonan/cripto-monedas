// Instanciamos la clase que utilizaremos para la API
const cotizador = new Api('0708dbf758a84d594539badb6c9759cfd7a98127baa875274f5c7f0ed763f921');

cotizador.obtenerMonedasApi();
//Instaciamos las clases para toda la aplicación
const ui = new Interfaz ();

// Leer el formulario
const formulario = document.querySelector('#formulario'); 

formulario.addEventListener('submit', (e)  => {
    e.preventDefault();

    const monedaSelect = document.getElementById('moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    const cryptoMonedaSelect = document.getElementById('criptomoneda');
    const cryptoMonedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    if(monedaSeleccionada === '' || cryptoMonedaSeleccionada === ''){
        ui.MostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
    }
    else{
        cotizador.obtenerValores(monedaSeleccionada, cryptoMonedaSeleccionada)
            .then(data =>{
                ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada, cryptoMonedaSeleccionada);
            })
    }
})