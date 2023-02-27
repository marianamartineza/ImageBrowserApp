
import { useEffect, useState } from 'react'
import { getImages } from '../Helpers/getImages';
import { ImageItem } from './ImageItem'


export const GridImage = ({topic}) => {

  const [images, setImages] = useState([]);

  const showImages = async () => {
    const newImages = await getImages({topic});
    setImages(newImages);
  }

  useEffect(() => {
    showImages();
  },[]);
  
  return (
    <div className='container text-center'>
        <h3>{topic}</h3>
          
        <div className='row justify-content-evenly cols-4'>

          {images.map((img) => {
              return (<div className='col-3'>
                  <ImageItem key={img.id} img={img}/>
              </div>
              )
          })}

        </div>
    </div>
  )
}
