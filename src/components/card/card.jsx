import "./card.css";
import Crystal from "../../assets/icon_types/Crystal.jpeg";
import Digital from "../../assets/icon_types/Digital.jpeg";
import Earth from "../../assets/icon_types/Digital.jpeg";
import Electric from "../../assets/icon_types/Electric.jpeg";
import Melee from "../../assets/icon_types/Melee.jpeg";
import Mental from "../../assets/icon_types/Mental.jpeg";
import Nature from "../../assets/icon_types/Nature.jpeg";
import Toxic from "../../assets/icon_types/Toxic.jpeg";
import Wind from "../../assets/icon_types/Wind.jpeg";
import Neutral from "../../assets/icon_types/Neutral.jpeg";
import Water from "../../assets/icon_types/Water.jpeg";
import Fire from "../../assets/icon_types/Fire .jpeg";

const temtemTypes = {
  Crystal,
  Digital,
  Earth,
  Electric,
  Melee,
  Mental,
  Nature,
  Toxic,
  Wind,
  Neutral,
  Water,
  Fire,
};

function imageByKey(key) {
  return temtemTypes[key];
}

const Card = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((item) => (
        <div className={`card ${item.types[0].toLowerCase()}`} key={item.number}>
          <div className="card__info">
            <span className="card__info__id">#{item.number}</span>
            <h2 className="card__info__name">{item.name}</h2>

            <div className="card__info__type">
            {item.types.map((type) =>
              <img 
                key={type}
                className="card__info__type--img"
                src={imageByKey(type)}
                alt=""
              ></img>
            )}
            </div>

          </div>

          <img src={item.portraitWikiUrl} alt={item.name} />
        </div>
      ))}
    </>
  );
};

export default Card;
