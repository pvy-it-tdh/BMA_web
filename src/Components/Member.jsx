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
import vlinh from "./Image/vietlinh.jpg";
import thuyna from "./Image/thuyna.jpg";
import binh from "./Image/binh.jpg";
import baoanh from "./Image/baoanh.jpg";
import tramy from "./Image/tramy.jpg";
import hoang from "./Image/hoang.jpg";
import anhthai from "./Image/athai.jpg";
import tuan from "./Image/tuan.jpg";
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
      <div className="card-group">
        <Card
          imageUrl={pvy}
          title="Lê Thạch Phúc Vy"
          description="Thành viên ban truyền thông kiêm Coder đến từ BMA"
        />
        <Card imageUrl={vlinh} title="Lý Việt Linh" description="Thành viên" />
        <Card imageUrl={thuyna} title="Phạm Thúy Na" description="Thành viên" />
      </div>
      <div className="card-group">
        <Card
          imageUrl={binh}
          title="Nguyễn Vũ Thanh Bình"
          description="Thành viên"
        />
        <Card
          imageUrl={baoanh}
          title="Trần Nguyễn Bảo Anh"
          description="Thành viên"
        />
        <Card
          imageUrl={tramy}
          title="Nguyễn Thị Trà My"
          description="Thành viên"
        />
      </div>
      <div className="card-group">
        <Card
          imageUrl={hoang}
          title="Mai Tuấn Hoàng"
          description="Sếp lớn tự dộng hóa"
        />
        <Card
          imageUrl={anhthai}
          title="Trần Văn Thái"
          description="Spiderman đến từ BMA"
        />
        <Card imageUrl={tuan} title="Lê Đức Tuấn" description="Thành viên" />
      </div>
    </div>
  );
};

export default Member;
