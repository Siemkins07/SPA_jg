import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {

    const navigationList = [
        { name: "start", path: "/", exact: true },
        { name: "książka", path: "/book" },
        { name: "rozdziały", path: "/chapters" },
        { name: "kontakt", path: "/contact" },
        { name: "panel admina", path: "/login" },
    ];

    const menu = navigationList.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : null}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav className="left-nav">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;