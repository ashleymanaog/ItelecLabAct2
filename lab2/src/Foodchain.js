import "./styles/card.css";

function Foodchain(props) {
  return (
    <div className="card">
      <img
        className="img_card"
        src={props.foodObj.img2}
        alt="Avatar"
        style={{ width: "100%", height: "150px" }}
      ></img>
      <div className="container">
        <h4 className="card_header">{props.foodObj.name}</h4>
        <SkillList />
      </div>
    </div>
  );
  function SkillList() {
    return (
      <ul className="skill-list">
        <li
          className="skill2 skill"
          style={{ fontWeight: "bolder", paddingBottom: "20px" }}
        >
          {" "}
          <b> {props.foodObj.address}</b> <br></br>
        </li>
        <li className="skill" style={{ backgroundColor: "#cdb4db" }}>
          {props.foodObj.skill}
        </li>{" "}
        <li className="skill" style={{ backgroundColor: "#ffc2d1" }}>
          {props.foodObj.skill4}
        </li>
        <li className="skill" style={{ backgroundColor: "#f6bd60" }}>
          {props.foodObj.skill3}
        </li>
        <li className="skill" style={{ backgroundColor: "#a3b18a" }}>
          {props.foodObj.skill2}
        </li>
      </ul>
    );
  }
}

export default Foodchain;
