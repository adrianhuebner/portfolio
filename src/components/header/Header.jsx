import React from "react";
import './header.css';
import Photo from './Photo';
import SocialLinks from './SocialLinks';
import Resume from './Resume';

const Header = () => {
    return(
        <header>
            <div className="Introduction">
                <h2>
                    Hello, I'm Adrian Huebner!
                </h2>
                <h2>
                    I'm a frontend web developer!
                </h2>
            </div>
            <div>
                <Photo />
                <SocialLinks /> 
                <Resume />
            </div>
        </header>
    )
}

export default Header