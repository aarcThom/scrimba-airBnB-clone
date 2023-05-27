import  airbnbLogo from '../assets/airbnb-logo.svg'

function Navbar() {
    return(
        <nav id="nav">
            <img src= {airbnbLogo} alt='airBnB logo' id='nav--logo'/>
        </nav>
    );
}

export default Navbar;