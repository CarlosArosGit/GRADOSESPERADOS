const convertirFahrenheitACelsius = (tempFahrenheit)=>{
    return new Promise((resuelve)=>{
        if(tempFahrenheit < -200){
            let mensajeError = 'Error: Valor muy negativo';
            resuelve(mensajeError);
        }
        else{
            setTimeout(()=>{
                let tempCelsius = (5/9)*(tempFahrenheit -32);
                resuelve(tempCelsius.toFixed(2));
            }, 6000);
        }
    } );

};


const convertirTemperatura = async ()=>{
    let elParrafoCelsius = document.getElementById('celsius');
    elParrafoCelsius.innerText = 'Calculando Temperatura ...';
    let lasCajasTemperatura = document.getElementsByClassName('farenheit');
    let valorTempFahrenheit = Number(lasCajasTemperatura[0].value);
    let respuestaPromesa = await convertirFahrenheitACelsius(valorTempFahrenheit);
    elParrafoCelsius.innerText = respuestaPromesa + ' °C';
};

const asignarEventos =()=>{
    let elBoton = document.getElementById('btnConvertir');
    elBoton.addEventListener('click', convertirTemperatura);
};