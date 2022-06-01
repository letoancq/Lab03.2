import React from "react";
import { STAFFS } from "../../shared/staffs";

// const modalAdd = document.querySelector("modal-add-staff");
class StaffList extends React.Component {
  handleOnClickEmployee = (info) => {
    this.props.history.push({
      pathname: `/info`,
      search: `id=${info.id}`,
    });
  };

  showAddStaffModal = () => {
    console.log("abc");
  };
  render() {
    const list = STAFFS.map((staff) => {
      return (
        <span
          className="span-list"
          onClick={() => this.handleOnClickEmployee(staff)}
        >
          <div key={staff.id} className="col">
            <img src={staff.image} alt={staff.name} />
            <h4>{staff.name}</h4>
          </div>
        </span>
      );
    });

    return (
      <div className="container-staff">
        <h3 className="list-staffs">Danh sách nhân viên</h3>
        <input type="text" className="search-staff-input" />
        <span className="search-staff-btn">Search</span>
        <span className="add-staff-btn" onClick={this.showAddStaffModal()}>
          Thêm
        </span>
        {/* Modal add new staff */}
        <div className="modal-add-staff">
          <div className="modal-add-staff-container">
            <div className="modal-add-header">
              <h3 className="modal-add-headeing">Thêm Nhân Viên </h3>
            </div>
            <div className="modal-add-staff-content">
              <label className="col-4">Tên</label>
              <input type="text" className="new-staff-name col-8" />
              <label className="col-4">Ngày Sinh</label>
              <input
                type="text"
                className="new-staff-doB col-8"
                placeholder={"dd/mm/yyyy"}
              />
              <label className="col-4">Ngày vào công ty</label>
              <input type="text" className="new-staff-startDate col-8" />
              <label className="col-4">Phòng ban</label>
              <select className="new-staff-department col-8">
                <option value="Sale">Sale</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
              </select>
              <label className="col-4">Hệ số lương</label>
              <input type="text" className="new-staff-salaryScale col-8" />
              <label className="col-4">Số ngày nghỉ</label>
              <input type="text" className="new-staff-annualLeave col-8" />
              <label className="col-4">Số ngày làm thêm</label>
              <input type="text" className="new-staff-overTime col-8" />

              <button className="add-btn" onClick={this.addnewStaff}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="staff">{list}</div>;
      </div>
    );
  }
}

export default StaffList;
