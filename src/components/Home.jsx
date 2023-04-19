import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/style.css";

function Home() {
    return (
        <div className='mainPage' >
            <div className='order'>
                <h1 className="mainTitle">Anatolia Burger</h1>
                <p className='mainContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, repellat.</p>
                <Link to="/menu">
                    <button>ORDER</button>
                </Link>
            </div>
        </div>
    )
}

export default Home