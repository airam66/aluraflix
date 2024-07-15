import "./Category.css";

function Category({ title, color, videosCategoria, children }) {

    return (
        <>
            {videosCategoria && videosCategoria.length > 0 &&
                <section className='category-container'>
                    <h2 className="title" style={{ backgroundColor: color }}>{title} </h2>
                    <div className='cards-container'>
                        {children}
                    </div>
                </section>

            }
        </>
    )

}

export default Category;