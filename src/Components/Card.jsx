import "./Card.css";

function Card({ imageUrl, title, description }) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imageUrl}) cover` }}
      ></div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{description}</p>
        {/* <a href="#" className="button">
          Learn More
        </a> */}
      </div>
    </div>
  );
}

export default Card;
