import "../styles/Card.css";

function Card({ imageUrl, title, description }) {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{description}</p>
      </div>
    </div>
  );
}

export default Card;
