import Button from "./Button/Button";
import "./Card.css";
import ItemCount from "./ItemCount/ItemCount";


function Card(props) {
    const {title,precio,img,detalle,stock} = props.item

    return (
        <div>
            <h3 className="estiloCard__title">{title}</h3>
            <div className="estiloCard">
                <div className="estiloCard__img">
                    <img className="estiloImagen" height="200px" src={img} alt={title} />
                </div>
                <div className="estiloCard__PrecioYDescripcion margenLeft">
                    <div className="estiloCard__desc">
                        <small>{detalle}</small>
                    </div>
                    <h3 className="estiloCard__precio">${precio}</h3>
                </div>
                <div className="estiloCard__Contador margenLeft">
                    <ItemCount stock={stock} />
                    <Button text="Agregar" />
                </div>
            </div>
        </div>
    )
}

export default Card;
