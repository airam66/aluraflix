import { createContext, useContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([
        {
            id: 1,
            titulo: "FRONT END",
            color: "var(--color-frontend)",
        },
        {
            id: 2,
            titulo: "BACK END",
            color: "var(--color-backend)",
        },
        {
            id: 3,
            titulo: "INNOVACIÓN Y GESTIÓN",
            color: "var(--color-innovacion)",
        }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [banner, setBanner] = useState({
        titulo: "Challenge React",
        categoria: "FRONT END",
        url: "https://www.youtube.com/embed/rpvrLaBQwgg?si=LK0iqkY0TeTlNn46",
        descripcion: "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
    });

    const closeModal = () => {
        setShowModal(false);
        setCurrentVideo(null);
    }

    const openModal = (id) => {
        setShowModal(true);
        setCurrentVideo(id);
    };


    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const conection = await fetch('https://my-json-server.typicode.com/airam66/challenge-aluraFlix/videos');
                const data = await conection.json();
                setVideos(data);
               
            } catch (error) {
                console.error(error);
            }
        }
        fetchVideos()
    }, []);


    const openVideo = (id) => {
        const showedVideo = videos.find(video => video.id === id);
        
        setBanner(showedVideo);
        const bannerElement = document.getElementById('banner');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    //Delete 
    const deleteVideo = async (id) => {
        try {
            const conection = await fetch(`https://my-json-server.typicode.com/airam66/challenge-aluraFlix/videos/${id}`,{
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                },
            });
            
            const updVideo = videos.filter(video => video.id !== id);
            setVideos(updVideo);
        } catch (error) {
            console.error(error);
        }
    
    }
    //Update 
    const updateVideo = async (id, updatedVideo) => {
        try {
            await fetch(`https://my-json-server.typicode.com/airam66/challenge-aluraFlix/videos/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: updatedVideo
            });
            const updated = JSON.parse(updatedVideo);
            const updVideo = videos.map(video => (video.id === id ? updated : video));
            setVideos(updVideo);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <GlobalContext.Provider value={{
            videos,
            setVideos,
            showModal,
            closeModal,
            openModal,
            currentVideo,
            categories,
            deleteVideo,
            updateVideo,
            openVideo,
            banner,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}



export default GlobalContextProvider;