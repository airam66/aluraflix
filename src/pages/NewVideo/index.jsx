import { useContext, useState } from 'react';
import './NewVideo.css';
import { GlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

function NewVideo() {
    const { videos, setVideos } = useContext(GlobalContext);

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [url, setUrl] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const navigateTo = useNavigate();

    const sendForm = async (event) => {

        event.preventDefault();
        const lastId = videos.reduce((maxId, video) => {
            return video.id && parseInt(video.id) > maxId ? parseInt(video.id) : maxId;
          }, 0);
    
         const id = (lastId + 1).toString();

        const video = {
            id,
            titulo,
            categoria,
            imagen,
            url,
            descripcion
        }

       
        const stringifiedVideo = JSON.stringify(video);


        try {

            const conection = await fetch('https://my-json-server.typicode.com/airam66/challenge-aluraFlix/videos', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: stringifiedVideo
            });
            if (conection.ok) {
                const newVideo = await conection.json();
                setVideos([...videos, newVideo]);
                cleanForm();
                navigateTo('/');
            } else {
                console.log("Error al crear video");
            }
        } catch (error) {
            console.log(error)
        }


    }

    const cleanForm = () => {
        setTitulo("");
        setImagen("");
        setCategoria("");
        setUrl("");
        setDescripcion("");
    };

    return (
        <div className='add-container'>
            <h1>NUEVO VIDEO</h1>
            <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            <div className='form-container'>
                <h2>Crear Tarjeta</h2>
                <form onSubmit={sendForm}>
                    <div className='form-group'>
                        <div className='form-input'>
                            <label htmlFor="titulo">Título</label>
                            <input
                                type="text"
                                name='titulo'
                                placeholder='titulo del video'
                                value={titulo}
                                required
                                className='form-control'
                                onChange={(e)=>setTitulo(e.target.value)} />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="categoria">Categoría</label>
                            <select
                                name="categoria"
                                id="categoria"
                                required
                                className='form-control'
                                value={categoria}
                                onChange={(e)=>setCategoria(e.target.value)}>
                                <option value="" className='option'>escoja una categoría</option>
                                <option value="FRONT END" className='option'>Front end</option>
                                <option value="BACKEND" className='option'>Back end</option>
                                <option value="INNOVACIÓN Y GESTIÓN" className='option'>Innovación y gestión</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-input'>
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                type="text"
                                name='imagen'
                                placeholder='link de la imagen'
                                required
                                value={imagen}
                                className='form-control'
                                onChange={(e)=>setImagen(e.target.value)} />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="url">Video</label>
                            <input
                                type="text"
                                name='url'
                                placeholder='link del video'
                                required
                                value={url}
                                className='form-control'
                                onChange={(e)=>setUrl(e.target.value)} />
                        </div>
                    </div>
                    <div className='form-input'>
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                            name="descripcion"
                            id="descripcion"
                            value={descripcion}
                            placeholder='¿de qué se trata el video?'
                            required className='form-control-textarea'
                            onChange={(e)=>setDescripcion(e.target.value)}></textarea>
                    </div>
                    <div className='btn-container'>
                        <button type="submit" className='btn btn-save'>GUARDAR</button>
                        <button type="reset" className='btn'>LIMPIAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewVideo;