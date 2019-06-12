import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NoAccessPage.css';

const FakePanelPage = () => {
    return (
        <>
            <div className='access' >
                <h3>Brak dostępu</h3>
                Aby wyświetlić zawartość strony zaloguj się poprawnie do Panelu Administratora
                <Link to="/login">
                    <button>Zaloguj</button>
                </Link>
            </div>

        </>
    )
}

export default FakePanelPage;
