import Card from "./Card";
import Biggame from "./Image/biggame.jpg";
import Biggame1 from "./Image/biggame1.jpg";
import Biggame2 from "./Image/biggame2.jpg";
import QuanSu from "./Image/quansu.jpg";
import QuanSu1 from "./Image/quansu1.jpg";
import QuanSu2 from "./Image/quansu2.jpg";
import KetNap from "./Image/ketnapthanhvien.jpg";
import KetNap1 from "./Image/ketnapthanhvien1.jpg";
import KetNap2 from "./Image/ketnapthanhvien2.jpg";
import DaiHoi from "./Image/daihoi.jpg";
import Picnic from "./Image/picnic.jpg";
import Picnic1 from "./Image/picnic1.jpg";
import Picnic2 from "./Image/picnic2.jpg";
import Daihoi1 from "./Image/daihoi1.jpg";
import Daihoi2 from "./Image/daihoi2.jpg";
import Tatniem from "./Image/tatnien.jpg";
import Tatniem1 from "./Image/tatnien1.jpg";
import Tatniem2 from "./Image/tatnien2.jpg";
import "./Activities.css";
const Activities = () => {
  return (
    <div className="activities-container">
      <h1 className="activities-title">BIGGAME</h1>
      <div className="activities-group">
        <Card
          imageUrl={Biggame1}
          title="BIGGAME 2022"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={Biggame}
          title="BIGGAME 2022"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={Biggame2}
          title="BIGGAME 2022"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
      </div>
      <h1 className="activities-title">QUÂN SỰ CÙNG BMA</h1>
      <div className="activities-group">
        <Card
          imageUrl={QuanSu1}
          title="Quân Sự Cùng BMA"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={QuanSu}
          title="Quân Sự Cùng BMA"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={QuanSu2}
          title="Quân Sự Cùng BMA"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
      </div>
      <h1 className="activities-title">KẾT NẠP THÀNH VIÊN</h1>
      <div className="activities-group">
        <Card
          imageUrl={KetNap1}
          title="Kết nạp thành viên"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={KetNap}
          title="Kết nạp thành viên"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={KetNap2}
          title="Kết nạp thành viên"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
      </div>
      <h1 className="activities-title">ĐẠI HỘI</h1>
      <div className="activities-group">
        <Card
          imageUrl={DaiHoi}
          title="Kết nạp thành viên"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={Daihoi1}
          title="Kết nạp thành viên"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={Daihoi2}
          title="Kết nạp thành viên"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
      </div>
      <h1 className="activities-title">PICNIC</h1>
      <div className="activities-group">
        <Card
          imageUrl={Picnic}
          title="Kết nạp thành viên"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={Picnic2}
          title="Kết nạp thành viên"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />
        <Card
          imageUrl={Picnic1}
          title="Kết nạp thành viên"
          description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
        />

        <h1 className="activities-title">TẤT NIÊN CÙNG BMA</h1>
        <div className="activities-group">
          <Card
            imageUrl={Tatniem}
            title="Kết nạp thành viên"
            description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
          />
          <Card
            imageUrl={Tatniem2}
            title="Kết nạp thành viên"
            description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
          />
          <Card
            imageUrl={Tatniem1}
            title="Kết nạp thành viên"
            description="Là 1 sự kiện thường niên và lớn nhất của câu lạc bộ"
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
