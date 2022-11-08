import React from "react";
import './header.css';
import Photo from './Photo';
import SocialLinks from './SocialLinks';
import Resume from './Resume';

const Header = () => {
    return(
        <header>
            <div>
                <Photo />
                <SocialLinks />
                <Resume />
            </div>
        </header>
    )
}

export default Header