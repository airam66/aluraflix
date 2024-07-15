import { Link } from "react-router-dom";
import "./Header.css";
import HeaderLink from "../HeaderLink";

function Header() {
    return (
        <header className='header'>
            <div className="logo-container-mobile">
                <img src="/img/logo.png" alt="Logo AluraFlix" />
            </div>
            <div className="nav-container">
                <Link to="/">
                    <div className='logo-container'>
                        <img src="/img/logo.png" alt="Logo AluraFlix" />
                    </div>
                </Link>
                <nav>
                    <HeaderLink url="./">
                        HOME
                    </HeaderLink>
                    <HeaderLink url="./NewVideo">
                        NUEVO VIDEO
                    </HeaderLink>
                </nav>
            </div>

        </header>
    )
}

export default Header