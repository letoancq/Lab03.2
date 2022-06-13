import React from "react";
import "../Department/department.css"
import {  withRouter } from "react-router-dom";


class DepartmentsList extends React.Component {
  constructor(props){
    super(props);
    console.log(props, 4444)
  }
  handleDepartmentsClick = (department) => {
    this.props.history.push({
      pathname: `/dep`,
     search: `name=${department.name}`,
      
    });
  };
  
  handleDataClick = (department) => {
    console.log(department)
    return(
      this.props.staffs.filter(b => b.department.name === department.name)
    )
  }
  render() {
    const listDepartments = this.props.departments.map((department) => {
      return (
        <div
          className="span-list"
          onClick={() => this.handleDepartmentsClick(department)}
        >
          <div key={department.id} className="col departmentinfo">
            <h4 className="department-name" onClick = {() => this.handleDataClick(department)}>{department.name}</h4>
            <p>Số nhân viên :{department.numberOfStaff}</p>
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

export default withRouter( DepartmentsList);
