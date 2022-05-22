import React from "react";
import { STAFFS } from "../shared/staffs";

class StaffList extends React.Component {
  handleOnClickEmployee = (info) => {
    this.props.history.push({
      pathname: `/info`,
      search: `id=${info.id}`,
    });
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
        <div className="staff">{list}</div>;
      </div>
    );
  }
}

export default StaffList;
