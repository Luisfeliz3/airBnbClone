import "./styles.css";
import katie_zaferes from "../../images/katie_zaferes.png";
import star from "../../images/star.png";


const Card = (props) => (
  <div className="card">
    <img src={katie_zaferes} className="card--image"/>
      <div className="card--stats">
      <img src={star} className="card--star"/>
        <span>5.0</span>
        <span className="gray">(6)</span>
        <span>USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / Person</p>
  </div>
);

export default Card;
 