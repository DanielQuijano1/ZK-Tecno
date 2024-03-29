import { Link } from "react-router-dom";
import Button from "./Button/Button";
import "./Card.css";
import "./Button/Button.css"
import React from "react";

function Card(props) {
    const { title, precio, img, detalle, id, stock } = props.item

    return (
        <div>
            <h3 className="estiloCard__title">{title}</h3>
            <div className="estiloCard">
                <div className="estiloCard__img">
                    <img className="estiloImagen" height="200px" src={img} alt={title} />
                </div>
                {
                    stock <= 1 ? <h5 className="ultimoDisponible">Último Disponible!</h5> : <div className="ultimoDisponible"></div>
                }
                <div className="estiloCard__PrecioYDescripcion margenLeft">
                    <div className="estiloCard__desc">
                        <small>{detalle}</small>
                    </div>
                    <h3 className="estiloCard__precio">${precio}</h3>
                </div>
                <div className="estiloCard__Contador margenLeft">
                    <Link to={`/detalle/${id}`}>
                        <Button text="Agregar" className="styleButton"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;
