 import React, { useState } from 'react';

 const Form = ({ newLocacion }) => {

    const [cuidad, setCuidad] = useState("");

    const onSubmit = (e) => {

        e.preventDefault();

        console.log({cuidad});

        if (cuidad === "" || !cuidad) return;

        newLocacion(cuidad);

    }

    return(

        <div className="container">

            <form onSubmit={onSubmit}>

                <div className="input-group mb-3 mx-auto">

                    <input type="text" className="form-control" placeholder="Cuidad" onChange={(e) =>setCuidad(e.target.value)}/>

                    <button className="btn btn-secondary input-group-text" type="submit">Buscar</button>

                </div>

            </form>
            
        </div>

    );
    
 }

 export default Form;