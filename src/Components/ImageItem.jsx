

export const ImageItem = ({img}) => {
  console.log(img)
  return (
    <>
      <img src={img.url} alt={img.title}
      className='figure-img img-fluid image' height={392}/>
        <figcaption className="figure-caption">
            <h5>{img.title}</h5>
            <p>{img.autor}</p>
        </figcaption>
    </>
  )
}
