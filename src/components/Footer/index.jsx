import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return <div className="footer-container">
        <div className="logo-container">
            <img src="/img/logo.png" alt="Logo AluraFlix" />
        </div>
        <nav>
            <Link to='./' className='link-btn'>
                <img src="/img/home.png" alt="imagen home" /> 
                <span>HOME</span>
            </Link>
            <Link to='./NewVideo' className='link--footer'>
            <img src="/img/add.png" alt="imagen nuevo video" />
            </Link>
        </nav>


    </div>


}

export default Footer;