import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    return (
        <>
            <p>Witaj w panelu administratora :)</p>
            <Link to="/" exact='true'>
                <button>Wyloguj</button>
            </Link>
        </>
    )
}
export default AdminPage;