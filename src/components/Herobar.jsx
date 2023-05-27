import photoGrid from "../assets/photogrid.png";

function Herobar() {
    return (
        <div id="hero">
            <div id="hero--photo-div">
                <img src= {photoGrid} alt="photogrid" id="hero--photogrid" />
            </div>
            
            <h1>Online Experiences</h1>
            <p id="hero--para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}

export default Herobar;