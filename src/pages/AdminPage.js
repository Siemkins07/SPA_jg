import React from 'react';
import { Link } from 'react-router-dom';

class AdminPage extends React.Component {
    state = {}

    handleLogOffClick = () => {
        localStorage.clear()

    }
    render() {
        return (
            <>
                <p>Witaj w panelu administratora :)</p>
                <Link to="/" exact='true'>
                    <button onClick={this.handleLogOffClick}>Wyloguj</button>
                </Link>
            </>
        )
    }
}
export default AdminPage;