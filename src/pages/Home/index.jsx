
import { useContext } from 'react';
import "./Home.css";
import Category from "../../components/Category";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Modal from "../../components/Modal";
import { GlobalContext } from "../../context";

function Home() {
  const { categories ,videos, deleteVideo,openVideo} = useContext(GlobalContext);


  return  (
    <>
     <Banner 
     categories={categories} />
        {
          categories &&
          categories.map(((category, index) => {
            return <Category
              title={category.titulo}
              color={category.color}
              key={index}
              videosCategoria={videos.filter(video => video.categoria === category.titulo)}
              >
              {
                videos.map((video) => {
                  if (category.titulo === video.categoria) {
                    return <Card
                      key={video.id}
                      title={video.titulo}
                      url={video.url}
                      image={video.imagen}
                      id={video.id}
                      deleteVideo={deleteVideo}
                      openVideo={openVideo}
                    >
                      <Modal />
                    </Card>
                  }
                })
              }
            </Category>
          }))

        }
    </>
  )
}

export default Home;
