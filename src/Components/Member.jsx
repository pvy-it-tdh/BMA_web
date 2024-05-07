import React from "react";

const Members = () => {
  return (
    <section className="members" id="members">
      <h2>Thành viên</h2>
      <div className="member-list">
        <div className="member">
          <h3>Tên thành viên 1</h3>
          <p>Chức vụ/Vai trò</p>
          <p>Liên hệ: [Thông tin liên hệ]</p>
        </div>
        <div className="member">
          <h3>Tên thành viên 2</h3>
          <p>Chức vụ/Vai trò</p>
          <p>Liên hệ: [Thông tin liên hệ]</p>
        </div>
        {/* ... */}
      </div>
    </section>
  );
};

export default Members;
