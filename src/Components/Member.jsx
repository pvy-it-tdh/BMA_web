import Card from "./Card";
import Khanh from "./Image/khanh.jpg";
import Vo from "./Image/vo.jpg";
import Diem from "./Image/Diem.jpg";
import Loan from "./Image/Loan.jpg";
import PVy from "./Image/pvy.jpg";
const Member = () => {
  return (
    <div className="bg-zinc-900">
      <h1 className="text-[30px] font-semibold mb-2 text-center text-cyan-400">
        Ban Chủ Nhiệm của CLB BMA
      </h1>
      <div className="flex justify-center space-x-10">
        <Card imageUrl={Khanh} description="Khánh" />
        <Card imageUrl={Diem} description="Nguyễn Thị Thúy Diễm" />
        <Card imageUrl={Vo} description="Nguyễn Nhức Võ" />
      </div>
      <h1 className="text-[30px] font-semibold mb-2 text-center text-cyan-400">
        Ban Truyền Thông của CLB BMA
      </h1>
      <div className="flex justify-center space-x-10">
        <Card imageUrl={PVy} description="Lê Thạch Phúc Vy" />
        <Card imageUrl={Loan} description="Vũ Nguyễn Ngọc Loan" />
      </div>
    </div>
  );
};

export default Member;
