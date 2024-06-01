import Card from "./Card";
import khanhImg from "./Image/khanh.jpg";
import voImg from "./Image/vo.jpg";
import diemImg from "./Image/Diem.jpg";
import loanImg from "./Image/Loan.jpg";
import pvyImg from "./Image/pvy.jpg";
import "./Member.css"; // Assuming additional styling might be in this file

const Member = () => {
  return (
    <div className="bg-zinc-900 member-container">
      <h1 className="text-[30px] font-semibold mb-4 text-center text-cyan-400">
        Ban Chủ Nhiệm của CLB BMA
      </h1>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
        <Card imageUrl={khanhImg} description="Khánh" />
        <Card imageUrl={diemImg} description="Nguyễn Thị Thúy Diễm" />
        <Card imageUrl={voImg} description="Nguyễn Nhức Võ" />
      </div>
      <h1 className="text-[30px] font-semibold mt-8 mb-4 text-center text-cyan-400">
        Ban Truyền Thông của CLB BMA
      </h1>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
        <Card imageUrl={pvyImg} description="Lê Thạch Phúc Vy" />
        <Card imageUrl={loanImg} description="Vũ Nguyễn Ngọc Loan" />
      </div>
    </div>
  );
};

export default Member;
