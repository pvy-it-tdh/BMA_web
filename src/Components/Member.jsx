import Card from "./Card";
import Khanh from "./Image/khanh.jpg";
import Vo from "./Image/vo.jpg";
import Diem from "./Image/Diem.jpg";
import Loan from "./Image/Loan.jpg";
import PVy from "./Image/pvy.jpg";
const Member = () => {
  return (
    <>
      <h1 className="text-[30px] font-semibold mb-2 text-center">
        Ban Chủ Nhiệm của CLB BMA
      </h1>
      <div className="flex justify-center space-x-10">
        <Card
          imageUrl={Khanh}
          title="Phó Chủ Nhiệm"
          description="Ngô Trần Văn Khánh"
        />
        <Card
          imageUrl={Diem}
          title="Chủ Nhiệm"
          description="Nguyễn Thị Thúy Diễm"
        />
        <Card imageUrl={Vo} title="Ủy Viên" description="Nguyễn Nhức Võ" />
      </div>
      <h1 className="text-[30px] font-semibold mb-2 text-center">
        Ban Truyền Thông của CLB BMA
      </h1>
      <div className="flex justify-center space-x-10">
        <Card imageUrl={PVy} title="Phó ban" description="Lê Thạch Phúc Vy" />
        <Card
          imageUrl={Loan}
          title="Trưởng ban"
          description="Vũ Nguyễn Ngọc Loan"
        />
      </div>
    </>
  );
};

export default Member;
