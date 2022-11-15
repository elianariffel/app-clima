import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

const ClimaApi = () => {

    let urlClima = "https://api.openweathermap.org/data/2.5/weather?appid=1ba88c9be3a24da3b3483e886371959b&lang=es";

    let urlCuidad = "&q=";

    const [clima, setClima] = useState ([]);

    const [mostrar, setMostrar] = useState(false);

    const [locacion, setLocacion] = useState("");

    const getLocacion = async(loc) => {

        setLocacion(loc);

        urlClima = urlClima + urlCuidad + loc;

        await fetch(urlClima).then((response) => {

            if (!response.ok) throw {response}

            return response.json();

        }).then((climaData) => {

            console.log(climaData);

            setClima(climaData);

            setMostrar(true);

        }).catch(error => {

            console.log(error);
            
            setMostrar(false);

        });

    }

    return(

        <React.Fragment>

          <Form

             newLocacion = { getLocacion }
          
          />

          <Card

             mostrarData = { mostrar }
             
             clima = { clima }

          />

        </React.Fragment>

    );

}

export default ClimaApi;