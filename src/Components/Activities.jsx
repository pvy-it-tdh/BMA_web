import Card from "./Card";
import Biggame from "./Image/Biggame.jpg";
import "./Activities.css";
const Activities = () => {
  return (
    <div className="activities-container">
      <h1 className="activities-title">
        Một số hoạt động truyền thống của CLB
      </h1>
      <div className="activities-group">
        <Card
          imageUrl={Biggame}
          title="Biggame 2023"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
      </div>
    </div>
  );
};

export default Activities;
