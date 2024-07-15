import "./Banner.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context";

function Banner({categories}) {

    const { banner } = useContext(GlobalContext);
    const categoria = categories.find(categoria => categoria.titulo === banner.categoria);

    return (
        <section className='banner-container' id="banner">
            <div className='banner-info'>
                <h2 className="title" style={{ backgroundColor: categoria.color }}>{banner.categoria}</h2>
                <h3>Challenge React</h3>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className='banner-video-container'>
                <iframe src={banner.url} title="Deadpool 3"></iframe>
            </div>
        </section>)
}

export default Banner;