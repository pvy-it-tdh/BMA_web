import "./Card.css";

function Card({ imageUrl, description }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="card-content">
        <h2 className="card-title">{description}</h2>
        <p className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
          culpa.
        </p>
        <a href="#" className="button">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Card;
