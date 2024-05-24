import "./Card.css";

function Card(props) {
  const { imageUrl, description } = props;

  return (
    <div className="card">
      <img src={imageUrl} className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
export default Card;
