import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChapterPage.css';

const ChapterPage = ({ match }) => {
    return (
        <>
            <div className="chapter">
                <h3>
                    {match.params.id}
                </h3>
                <p>Aby uzyskać dostęp do pełnej treści rozdziałów należy wnieść opłatę. W razie pytań lub chęci uzyskania szczegółowych informacji, proszę o kontakt np. za pośrednictem dostępnego na stronie <Link to="/contact">formularza </Link> lub pod numerem tel.: <a href="tel:+48666666666"> <strong>666 666 666</strong></a>.
                </p>
                <Link to="/chapters">Powrót do listy rozdziałów </Link>
            </div>
        </>
    );
}

export default ChapterPage;