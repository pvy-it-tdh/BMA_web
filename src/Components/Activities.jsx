import Card from "./Card";
import Biggame from "./Image/biggame.jpg";
import Daihoi from "./Image/daihoi.jpg";
import "./Activities.css";
const Activities = () => {
  return (
    <div className="activities-container">
      <h1 className="activities-title">BIGGAME</h1>
      <div className="activities-group">
        <Card
          imageUrl={Biggame}
          title="Biggame 2023"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card imageUrl={Daihoi} title="Bigame 2023" description="ádasdasdasd" />
      </div>
    </div>
  );
};

export default Activities;
