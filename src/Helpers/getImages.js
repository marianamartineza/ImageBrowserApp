export const getImages = async ({topic}) => {

    const url = `https://api.pexels.com/v1/search?query=${topic}`;

    const resp = await fetch(url);
    const {photos} = await resp.json();


    // console.log(photos);

    const images = photos.map(
        (img) => {
            return {
                id: img.id,
                title: img.alt,
                autor: img.photographer,
                url: img.src.original, 
            }
        }
    )

    return images;
}