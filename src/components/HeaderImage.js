import React from 'react';
import { withRouter } from 'react-router-dom'
import img1 from '../images/raz.jpg';
import img2 from '../images/dwa.jpg';
import img3 from '../images/trzy.jpg'
import img4 from '../images/cztery.jpg'

const HeaderImage = () => {

    const images = [img1, img2, img3, img4];
    const index = Math.floor(Math.random() * 3);
    const img = images[index]


    return (
        <>
            <div>
                <h1>Jestem graczem</h1>
                <p>Historia Test Drive Unlimited okiem Siemkinsa</p>
            </div>
            <img src={img} alt='foto' />
        </>
    );
}

export default withRouter(HeaderImage);