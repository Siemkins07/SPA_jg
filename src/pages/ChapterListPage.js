import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChapterListPage.css';

const chapters = ['Wstęp', "Rozdział 1", 'Rozdział 2', "Rozdział 3", "Rozdział 4", "Rozdział 5", "Epilog", "Bonus"]

const ChapterListPage = () => {

    const list = chapters.map(chapter => (
        <li key={chapter}>
            <Link to={`/chapter/${chapter}`}>
                {chapter}
            </Link>
        </li>
    ))

    return (
        <div className="chapters">
            <h3>Lista rozdziałów</h3>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
}

export default ChapterListPage;