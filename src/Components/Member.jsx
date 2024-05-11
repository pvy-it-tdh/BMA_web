import Card from "./Card";
import "./Card.css";
import PhucVy from"./Image/pvy.jpg"
const Members = () => {
  return (
    <>
      <Card
        imageUrl={PhucVy}
        title="Product 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </>
  );
};

export default Members;
