import React from "react";

const Activities = () => {
  return (
    <section className="activities" id="activities">
      <h2>Hoạt động</h2>
      <div className="activity-list">
        <div className="activity">
          <h3>Tên hoạt động 1</h3>
          <p>Mô tả hoạt động 1</p>
        </div>
        <div className="activity">
          <h3>Tên hoạt động 2</h3>
          <p>Mô tả hoạt động 2</p>
        </div>
        {/* ... */}
      </div>
    </section>
  );
};

export default Activities;
