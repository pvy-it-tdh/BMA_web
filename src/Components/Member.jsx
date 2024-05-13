import Card from "./Card";
import Khanh from "./Image/khanh.jpg";
import Vo from "./Image/vo.jpg";
import Diem from "./Image/Diem.jpg";

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
    </>
  );
};

export default Member;
