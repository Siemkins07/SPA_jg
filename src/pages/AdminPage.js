import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminPage.css'

class AdminPage extends React.Component {

    handleLogoutClick = () => {
        localStorage.clear()
    }

    render() {
        return (
            <>
                <div className="admin">
                    <h3>Witaj w panelu administratora</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio voluptatum aspernatur id quos est, magnam animi error excepturi maiores, commodi quam explicabo placeat ducimus officia nesciunt velit illum? Dolor.</p>
                    <Link to="/" exact='true'>
                        <button onClick={this.handleLogoutClick}>Wyloguj</button>
                    </Link>
                </div>
            </>
        )
    }
}
export default AdminPage;