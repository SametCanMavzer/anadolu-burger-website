import React from 'react';
 import "../styles/style.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='socialMedia'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
                <p>All rights reserved. | Anatolia Burger</p>
            </div>
        </div>
    )
}

export default Footer