import { useContext ,useState,useEffect} from 'react';
import "./Modal.css";
import closeIcon from "./cross.png";
import { GlobalContext } from "../../context";


function Modal() {
    const { showModal, closeModal, videos, currentVideo, updateVideo } = useContext(GlobalContext);


    const [formData, setFormData] = useState({
        titulo: "",
        categoria: "",
        imagen: "",
        url: "",
        descripcion: ""
    });

    useEffect(() => {
        if (currentVideo) {
            const video = videos.find(video => video.id === currentVideo);
            setFormData({ ...video });
        }
    }, [currentVideo,showModal])


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

    }

     const resetForm = () => {
        setFormData({
        titulo: "",
        categoria: "",
        imagen: "",
        url: "",
        descripcion: ""
    });

    }

    const sendForm = async (event) => {
        event.preventDefault();
        const stringifiedVideo = JSON.stringify(formData);

        await updateVideo(currentVideo, stringifiedVideo);

        closeModal();
    }

   

    return (
        <>
            {showModal && currentVideo &&
                <div className='modal-overlay'>
                    <dialog className='modal-content'>
                        <img src={closeIcon} alt="Cerrar" onClick={closeModal} className='btn-close' />
                        <h2>EDITAR CARD</h2>

                        <form className='edit-form' onSubmit={sendForm}>
                            <div className='form-input'>
                                <label htmlFor="titulo">Título</label>
                                <input
                                    type="text"
                                    name='titulo'
                                    required
                                    className='form-control'
                                    value={formData.titulo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-input'>
                                <label htmlFor="categoria">Categoría</label>
                                <select
                                    name="categoria"
                                    id="categoria"
                                    required
                                    className='form-control'
                                    value={formData.categoria}
                                    onChange={handleChange}
                                >

                                    <option value="FRONT END" className='option'>FRONT END</option>
                                    <option value="BACK END" className='option'>BACK END</option>
                                    <option value="INNOVACÍON Y GESTIÓN" className='option'>INNOVACÍON Y GESTIÓN</option>

                                </select>
                            </div>
                            <div className='form-input'>
                                <label htmlFor="imagen">Imagen</label>
                                <input
                                    type="text"
                                    name='imagen'
                                    required
                                    className='form-control'
                                    value={formData.imagen}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-input'>
                                <label htmlFor="url">Video</label>
                                <input
                                    type="text"
                                    name='url'
                                    required
                                    className='form-control'
                                    value={formData.url}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-input'>
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea
                                    name="descripcion"
                                    id="descripcion"
                                    required
                                    className='form-control-textarea'
                                    value={formData.descripcion}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className='btn-container'>
                                <button type="submit" className='btn btn-save'>GUARDAR</button>
                                <button type="reset" className='btn' onClick={resetForm}>LIMPIAR</button>
                            </div>
                        </form>

                    </dialog>
                </div>
            }
        </>
    )
}

export default Modal;