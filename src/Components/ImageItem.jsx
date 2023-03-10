

export const ImageItem = ({img}) => {
  
  return (
    <>
      <img src={img.url} alt={img.title}
      className='figure-img img-fluid image'/>
        <figcaption className="figure-caption">
            <h5>{img.title}</h5>
            <p>{img.autor}</p>
        </figcaption>
    </>
  )
}
