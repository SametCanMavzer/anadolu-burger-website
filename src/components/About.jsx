import React from 'react'
import BannerImage from '../assets/banneryeni.jpg';
import "../styles/style.css";

function About() {
    return (
        <div className='about'>
            <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})` }}>

            </div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Ratione quidem ex,
                    blanditiis est voluptatum laborum quia
                    consectetur debitis tenetur mollitia
                    rem porro voluptas a magnam sunt
                    assumenda illo vitae recusandae at
                    repellendus laboriosam. Facere
                    animi nihil pariatur suscipit sint
                    mollitia laudantium, officia
                    consequatur harum culpa fugit
                    magni distinctio ea porro.</p>
            </div>

        </div>
    )
}

export default About