import React from "react";
import { DEPARTMENTS } from "../shared/staffs";

class DepartmentsList extends React.Component {
  handleDepartmentsClick = (department) => {
    this.props.history.push({
      pathname: `/department`,
      search: `department=${department.name}`,
    });
  };

  render() {
    const listDepartments = DEPARTMENTS.map((department) => {
      return (
        <div
          className="span-list"
          onClick={() => this.handleDepartmentsClick(department)}
        >
          <div key={department.id} className="col">
            <h4 className="department-name">{department.name}</h4>
          </div>
        </div>
      );
    });

    return (
      <div className="container-staffs">
        <h3 className="list-staffs">Danh sách phòng ban</h3>
        <div className="department">{listDepartments}</div>;
      </div>
    );
  }
}

export default DepartmentsList;
