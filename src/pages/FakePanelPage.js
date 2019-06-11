import React from 'react';
import { Link } from 'react-router-dom'

const FakePanelPage = () => {
    return (
        <>
            <div >
                <h3>Brak dostępu</h3>
                Aby wyświetlić zawartość strony, zaloguj się poprawnie do Panelu Administratora</div>
            <Link to="/login">
                <button>Zaloguj</button>
            </Link>
        </>
    )
}

export default FakePanelPage;
