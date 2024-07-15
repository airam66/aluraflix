import { Link } from "react-router-dom";
import  "./HeaderLink.css";

function HeaderLink({url,children}){
    return(
        <Link to={url} className='link'>
        {children}
        
        </Link>

    )
}


export default HeaderLink