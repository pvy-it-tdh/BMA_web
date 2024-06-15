import Card from "./Card";
import khanhImg from "./Image/khanh.jpg";
import voImg from "./Image/vo.jpg";
import diemImg from "./Image/Diem.jpg";
import loanImg from "./Image/Loan.jpg";
import pvyImg from "./Image/pvy.jpg";
import "./Member.css";

const Member = () => {
  return (
    <div className="member-container">
      <h1 className="member-title">Ban Chủ Nhiệm của CLB BMA</h1>
      <div className="card-group">
        <Card
          imageUrl={khanhImg}
          title="Ngô Trần Văn Khánh"
          description="Phó Chủ Nhiệm"
        />
        <Card
          imageUrl={diemImg}
          title="Nguyễn Thị Thúy Diễm"
          description="Chủ Nhiệm"
        />
        <Card imageUrl={voImg} title="Nguyễn Nhức Võ" description="Ủy viên" />
      </div>
      <h1 className="member-title">Ban Truyền Thông của CLB BMA</h1>
      <div className="card-group">
        <Card
          imageUrl={pvyImg}
          title="Lê Thạch Phúc Vy"
          description="Thành viên"
        />
        <Card
          imageUrl={loanImg}
          title="Vũ Nguyễn Ngọc Loan"
          description="Trưởng Ban Truyền Thông"
        />
      </div>
    </div>
  );
};

export default Member;
