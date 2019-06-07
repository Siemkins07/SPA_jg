import React from 'react';
import ReadMoreReact from 'read-more-react';
import '../styles/Paragraph.css'


const Paragraph = ({ title, chapter, text }) => {


    return (

        <article>
            <h3>
                <span>Rozdział {chapter} |</span>  {title}</h3>
            {/* <span>Rozdział {chapter}</span> */}
            <ReadMoreReact text={text}
                min={200}
                ideal={300}
                max={100000}
                readMoreText="Czytaj więcej" />
        </article>
    );
}

export default Paragraph;