import { useEffect, useState } from "react"

export const useFetchImage = () => {

    const [Images, setImages] = useState([]);

    const getAllImages = async () => {
        const newImages = await getImages(topic);
        setImages(newImages);
    };

    useEffect(() => {
      getAllImages
    }, []);

    return {
        Images
    }
    


}
