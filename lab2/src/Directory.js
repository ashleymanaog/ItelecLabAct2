import Foodchain from "./Foodchain";
import { foodData } from "./data";
import "./styles/directory.css";
function Directory(props) {
  return (
    <div className="foodchain">
      {/* <img src={props.foodObj.photoName} alt={props.foodObj.name}></img>
      <div className="foodchain">
        <h2>{props.foodObj.name}</h2>
        <p>{props.foodObj.address}</p>
        <span>{props.foodObj.skill}</span>
      </div> */}
      <div className="foods">
        {foodData.map((foods) => (
          <Foodchain foodObj={foods} />
        ))}
      </div>
    </div>
  );
}
export default Directory;
