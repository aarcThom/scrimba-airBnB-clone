import stalin from "../assets/stalin.png";
import star from "../assets/star.png";

function PhotoCard() {
    return (
        <div className="photocard">
            <div className="photocard--status">SOLD OUT</div>
            <img src={stalin} alt="Stalin" class="photocard--photo" />
            <div className="photocard--rating-line">
                <img src={star} alt="star" className="photocard--star" />
                <p className="photocard--rating-number">5.0</p>
                <p className="photocard--subscribers" >(6)</p>
                <p className="photocard--dot">&#8226;</p>
                <p className="photocard--location">USSR</p>
            </div>
            <p className="photocard--caption">Life lessons with Joseph Stalin</p>
            <div className="photocard--price-line">
                <p className="photocard--from">From $</p>
                <p className="photocard--price">136</p>
                <p className="photocard--person"> / person</p>
            </div>
        </div>
    );
}

export default PhotoCard;