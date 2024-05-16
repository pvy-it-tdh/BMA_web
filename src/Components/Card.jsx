import { motion } from "framer-motion";
import "./Card.css";

function Card(props) {
  const { imageUrl, title, description } = props;

  return (
    <motion.div
      className="card"
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
      }}
      initial={{ opacity: 0, rotateY: -45, z: -100 }}
      animate={{ opacity: 1, rotateY: 0, z: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </motion.div>
  );
}
//tes branch
export default Card;
