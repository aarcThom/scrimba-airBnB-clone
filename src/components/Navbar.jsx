import  airbnbLogo from '../assets/airbnb-logo.svg'

function Navbar() {
    return(
        <div id="navbar">
            <img src= {airbnbLogo} alt='airBnB logo' id='airbnb-logo'/>
        </div>
    );
}

export default Navbar;