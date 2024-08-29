import Card from "./Card";
import khanhImg from "./Image/khanh.jpg";
import voImg from "./Image/vo.jpg";
import diemImg from "./Image/Diem.jpg";
import loanImg from "./Image/cLoan.jpg";
import tranImg from "./Image/tran.jpg";
import phongImg from "./Image/phong.jpg";
import phucImg from "./Image/phuc.jpg";
import cuongImg from "./Image/Cuong.jpg";
import pvy from "./Image/phucvy.jpg";
import "../styles/Member.css";

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
          imageUrl={loanImg}
          title="Vũ Nguyễn Ngọc Loan"
          description="Trưởng ban"
        />
        <Card imageUrl={tranImg} title="Cao Bảo Trân" description="Phó Ban" />
      </div>
      <h1 className="member-title">Ban Nội Dung của CLB BMA</h1>
      <div className="card-group">
        <Card
          imageUrl={phucImg}
          title="Lê Nguyễn Vĩnh Phúc"
          description="Phó Ban"
        />
        <Card
          imageUrl={phongImg}
          title="Lê Hồ Tấn Phong"
          description="Trưởng Ban"
        />
        <Card
          imageUrl={cuongImg}
          title="Nguyễn Vũ Cường"
          description="Phó Ban"
        />
      </div>
      <h1 className="member-title">Các Thành Viên Của BMA</h1>
      <Card
        imageUrl={pvy}
        title="Lê Thạch Phúc Vy"
        description="Thành viên ban truyền thông kiêm Coder đến từ BMA"
      />
    </div>
  );
};

export default Member;
