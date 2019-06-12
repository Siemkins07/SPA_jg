import React from 'react';
import { withRouter } from 'react-router-dom'

import img1 from '../images/foto1.jpg';
import img2 from '../images/foto2.jpg'
import img3 from '../images/foto3.jpg'
import img4 from '../images/foto4.jpg'
import img5 from '../images/foto5.jpg'
import img6 from '../images/foto6.jpg'
import img7 from '../images/foto7.jpg'
import img8 from '../images/foto8.jpg'
import img9 from '../images/foto9.jpg'

const HeaderImage = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const index = Math.floor(Math.random() * 9);
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