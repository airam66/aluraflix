import { useContext } from 'react';
import "./Card.css";
import deleteIcon from "./delete.png";
import editIcon from "./edit.png";
import { GlobalContext } from "../../context";

function Card({ id, title, url, image,deleteVideo, openVideo, children }) {
    const { openModal } = useContext(GlobalContext);
    return (

        <div className='card-container'>
            <img src={image} alt={title} className="card-img" onClick={() => openVideo(id)}/>
            <div className='card-container-icons'>

                <div className='card-icon' onClick={() => deleteVideo(id)}>
                    <img src={deleteIcon} alt="icon delete">
                    </img>
                    <span>BORRAR</span>
                    
                </div>
                <div className='card-icon' onClick={() => openModal(id)}>
                    <img src={editIcon} alt="icon edit">
                    </img>
                    <span>EDITAR</span>
                </div>
            </div>

            {children}
        </div>


    )
}

export default Card;