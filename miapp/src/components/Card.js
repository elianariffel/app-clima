import React from 'react';

const Card = ({ mostrarData, clima }) => {

    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();
    let fechaCompleta = dia + '/' + mes + '/' + año;

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let horaCompleta = hora + ':' + minutos + ':' + segundos;

    let iconoUrl = "";
    let icono = "";

    if(mostrarData){

        iconoUrl = "https://openweathermap.org/img/w/";
        icono = iconoUrl + clima.weather[0].icon + ".png"

    }
  
    return (

        <div className="mt-5">

            {
                mostrarData === true ? (

                    <div className="container">

                        <div className="card mb-3 mx-auto bg-secondary text-light">

                            <div className="row g-0">

                                <div className="col-md-4">

                                    <h3 className="card-titulo">{clima.name}</h3>
                                    <p className="card-fecha">{fechaCompleta}</p>
                                    <p className="card-hora">{horaCompleta}</p>
                                    <h1 className="card-temp">{(clima.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <p className="card-icono"><img src={icono} alt="icono"/>{clima.weather[0].description}</p>
                                    <img src="https://images.pexels.com/photos/2962282/pexels-photo-2962282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="imagen"></img>

                                </div>

                                <div className="col-md-8">

                                    <div className="card-body text-start mt-2">

                                        <h5 className="card-text">Temperatura Máxima: {(clima.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Temperatura Mínima: {(clima.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Sensación Térmica: {(clima.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Humedad: {clima.main.humidity}%</h5>
                                        <h5 className="card-text">Viento: {clima.wind.speed}m/s</h5>

                                    </div>   
  
                                </div>

                            </div>

                        </div>

                    </div>

                ):(
                    <h2 className="text-ligth">Sin Datos</h2>
                )
            }

        </div>

    );

}

export default Card;