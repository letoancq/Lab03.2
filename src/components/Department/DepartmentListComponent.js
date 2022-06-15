import React from "react";
import "../Department/department.css"
import {  withRouter } from "react-router-dom";
import {  FadeTransform } from "react-animation-components";



class DepartmentsList extends React.Component {
  

  handleDepartmentsClick = (department) => {

    this.props.history.push({
      pathname: `/dep`,
     search: `name=${department.name}`,
      
    });
  };

  
  handleDataClick = (department) => {
    return(
      this.props.staffs.filter(b => b.departmentId === department.name)
    )
  }
  render() {
    console.log(this.props);
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
        <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <h3 className="list-staffs">Danh sách phòng ban</h3>
        <div className="department">{listDepartments}</div>;
        </FadeTransform>
      </div>
    );
  }
}

export default withRouter( DepartmentsList);
