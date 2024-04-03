import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        //src={item.photo[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from centre</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Saloon with Air conditioning
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">Rs.{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/saloon/${item._id}`} />
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
