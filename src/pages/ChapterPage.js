import React from 'react';
import { Link } from 'react-router-dom';

const ChapterPage = ({ match }) => {
    return (
        <>
            <div>
                {match.params.id}
            </div>

            <p>
                Aby uzyskać dostęp do pełnej treści rozdziałów należy wnieść opłatę. Zapraszam do kontaktu W celu uzyskania szczegółowych informacji, np. za pośrednictem dostępnego na stronie formularza lub pod nr tel. 888 666 666.</p>
            <Link to="/chapters">Powrót do listy rozdziałów </Link>
        </>
    );
}

export default ChapterPage;