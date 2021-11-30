import React from "react";
import './imageList.css';
import Imagecard from './imageCard';

const ImageList =(props) =>{
    const images = props.images.map((image) => {
        return<Imagecard key={image.id} image={image} />
    })
    return <div className='image-list'> {images}</div>
};


export default ImageList;