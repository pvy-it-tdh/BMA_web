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
import "../styles/Activities.css";
const Activities = () => {
  return (
    <div className="activities-container">
      <h1 className="activities-title mt-5">BIGGAME</h1>
      <div className="activities-group">
        <Card
          imageUrl={Biggame1}
          title="BIGGAME 2022"
          description="Là chương trình thường niên lớn nhất của CLB BMA để kết nối tất cả các bạn sinh viên trong trường thông qua các hoạt động team building, khả năng dẫn dắt đội nhóm, kĩ năng mềm"
        />
        <Card
          imageUrl={Biggame}
          title="BIGGAME 2022"
          description="Là chương trình thường niên lớn nhất của CLB BMA để kết nối tất cả các bạn sinh viên trong trường thông qua các hoạt động team building, khả năng dẫn dắt đội nhóm, kĩ năng mềm"
        />
        <Card
          imageUrl={Biggame2}
          title="BIGGAME 2022"
          description="Là chương trình thường niên lớn nhất của CLB BMA để kết nối tất cả các bạn sinh viên trong trường thông qua các hoạt động team building, khả năng dẫn dắt đội nhóm, kĩ năng mềm"
        />
      </div>
      <h1 className="activities-title mt-5">QUÂN SỰ CÙNG BMA</h1>
      <div className="activities-group">
        <Card
          imageUrl={QuanSu1}
          title="Quân Sự Cùng BMA"
          description="Là chương trình dành cho các bạn tân sinh viên khi đi học tập quân sự. Cũng là cơ hội để CLB BMA có thể quan tâm và giúp đỡ nhiều hơn đối với các bạn CTV CLB đang đi học quân sự"
        />
        <Card
          imageUrl={QuanSu}
          title="Quân Sự Cùng BMA"
          description="Là chương trình dành cho các bạn tân sinh viên khi đi học tập quân sự. Cũng là cơ hội để CLB BMA có thể quan tâm và giúp đỡ nhiều hơn đối với các bạn CTV CLB đang đi học quân sự"
        />
        <Card
          imageUrl={QuanSu2}
          title="Quân Sự Cùng BMA"
          description="Là chương trình dành cho các bạn tân sinh viên khi đi học tập quân sự. Cũng là cơ hội để CLB BMA có thể quan tâm và giúp đỡ nhiều hơn đối với các bạn CTV CLB đang đi học quân sự"
        />
      </div>
      <h1 className="activities-title mt-5">KẾT NẠP THÀNH VIÊN</h1>
      <div className="activities-group">
        <Card
          imageUrl={KetNap1}
          title="Kết nạp thành viên"
          description="Là một sự kiện quan trọng, đánh dấu sự trưởng thành của các bạn CTV CLB BMA và là khoảnh khắc cùng nhau ngồi xem lại những kỉ niệm đáng nhớ trong quá trình khi còn là CTV"
        />
        <Card
          imageUrl={KetNap}
          title="Kết nạp thành viên"
          description="Là một sự kiện quan trọng, đánh dấu sự trưởng thành của các bạn CTV CLB BMA và là khoảnh khắc cùng nhau ngồi xem lại những kỉ niệm đáng nhớ trong quá trình khi còn là CTV"
        />
        <Card
          imageUrl={KetNap2}
          title="Kết nạp thành viên"
          description="Là một sự kiện quan trọng, đánh dấu sự trưởng thành của các bạn CTV CLB BMA và là khoảnh khắc cùng nhau ngồi xem lại những kỉ niệm đáng nhớ trong quá trình khi còn là CTV"
        />
      </div>
      <h1 className="activities-title mt-5">ĐẠI HỘI</h1>
      <div className="activities-group">
        <Card
          imageUrl={DaiHoi}
          title="Đại Hội"
          description="Đại hội câu lạc bộ BMA là chương trình để toàn thể CLB cùng nhau nhìn lại chặn đường khó khăn vừa qua, đề ra những phương hướng hoạt động trong tương lai và cuối cùng là bầu ra một Ban Chủ Nhiệm mới để tiếp tục dìu dắt CLB"
        />
        <Card
          imageUrl={Daihoi1}
          title="Đại Hội"
          description="Đại hội câu lạc bộ BMA là chương trình để toàn thể CLB cùng nhau nhìn lại chặn đường khó khăn vừa qua, đề ra những phương hướng hoạt động trong tương lai và cuối cùng là bầu ra một Ban Chủ Nhiệm mới để tiếp tục dìu dắt CLB"
        />
        <Card
          imageUrl={Daihoi2}
          title="Đại Hội"
          description="Đại hội câu lạc bộ BMA là chương trình để toàn thể CLB cùng nhau nhìn lại chặn đường khó khăn vừa qua, đề ra những phương hướng hoạt động trong tương lai và cuối cùng là bầu ra một Ban Chủ Nhiệm mới để tiếp tục dìu dắt CLB"
        />
      </div>
      <h1 className="activities-title mt-5">PICNIC</h1>
      <div className="activities-group">
        <Card
          imageUrl={Picnic}
          title="Picnic"
          description="Picnic là một hoạt động thường niên của CLB nhằm giúp cho các bạn giải tỏa căng thẳng, tăng cường sự gắn kết, tạo cơ hội để các bạn hòa mình vào thiên nhiên, tận hưởng không khí trong lành"
        />
        <Card
          imageUrl={Picnic2}
          title="Picnic"
          description="Picnic là một hoạt động thường niên của CLB nhằm giúp cho các bạn giải tỏa căng thẳng, tăng cường sự gắn kết, tạo cơ hội để các bạn hòa mình vào thiên nhiên, tận hưởng không khí trong lành"
        />
        <Card
          imageUrl={Picnic1}
          title="Picnic"
          description="Picnic là một hoạt động thường niên của CLB nhằm giúp cho các bạn giải tỏa căng thẳng, tăng cường sự gắn kết, tạo cơ hội để các bạn hòa mình vào thiên nhiên, tận hưởng không khí trong lành "
        />

        <h1 className="activities-title mt-5">TẤT NIÊN CÙNG BMA</h1>
        <div className="activities-group">
          <Card
            imageUrl={Tatniem}
            title="Tất niên cùng BMA"
            description="Là chương trình để CLB cùng nhau nhìn lại những thành quả mà mình đạt được trong đầu học kì đến trước kì nghỉ Tết Nguyên Đán."
          />
          <Card
            imageUrl={Tatniem2}
            title="Tất niên cùng BMA"
            description="Là chương trình để CLB cùng nhau nhìn lại những thành quả mà mình đạt được trong đầu học kì đến trước kì nghỉ Tết Nguyên Đán."
          />
          <Card
            imageUrl={Tatniem1}
            title="Tất niên cùng BMA"
            description="Là chương trình để CLB cùng nhau nhìn lại những thành quả mà mình đạt được trong đầu học kì đến trước kì nghỉ Tết Nguyên Đán."
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
