import React from "react";
import sinImagen from "../../img/sinImagen.png"

export const Cards = ({title}) =>{
    return(
        <div className="card p-0" style={{width: '22.5rem'}}>
            <img src={sinImagen} className="card-img-top w-100" alt="sinImagen"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

// style={{width: '22.5rem'}}