import React from "react";
import { STAFFS } from "../../shared/staffs";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import "../staff-list/Stafflist.css";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const newStaff = {
  id:'{STAFFS.length}',
  name: '',
  doB: '',
  salaryScale: '',
  startDate: '',
  department: {
    name: '',
  },
  annualLeave: '',
  overTime: '',
  salary: '',
  image: '/assets/images/alberto.png',
  
  }
  
class StaffList extends React.Component {
constructor(){
  super();
  this.state = {
    staffs:STAFFS
  }
}
  handleSubmit(values) {
    console.log("Current State is :" + JSON.stringify(values));
    alert("Current State is :" + JSON.stringify(values));
    newStaff.name = document.getElementById('fullname').value;
    newStaff.doB = document.getElementById('doB').value;
    newStaff.startDate= document.getElementById('startDate').value;
    newStaff.salaryScale= document.getElementById('salaryScale').value;
    newStaff.department.name= document.getElementById('department').value;
    newStaff.annualLeave= document.getElementById('annualLeave').value;
    newStaff.overTime= document.getElementById('overTime').value;
    newStaff.id = STAFFS.length;
    STAFFS.push(newStaff)
    // event.preventDefault();
    console.log(newStaff)
    console.log(STAFFS)
    
  }
  handleOnClickEmployee = (info) => {
    this.props.history.push({
      pathname: `/info`,
      search: `id=${info.id}`,
    });
  };

  showAddStaffModal = () => {
    // modal.style.display="none";
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
        <div className="staff">{list}</div>
        <div className="modal-add-staff">
          <div className="modal-container">
            <div className="col-12 ">
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <h3>Thêm nhân viên</h3>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="fullname" md={2}>
                    Tên
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".fullname"
                      id="fullname"
                      name="fullname"
                      placeholder="Full Name"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".fullname"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="doB" md={2}>
                    Ngày Sinh
                  </Label>
                  <Col md={10}>
                    <Control
                      type="date"
                      model=".doB"
                      id="doB"
                      name="doB"
                      // placeholder="Last Name"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".doB"
                      show="touched"
                      messages={{
                        required: "Required",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="startDate" md={2}>
                    Ngày vào công ty
                  </Label>
                  <Col md={10}>
                    <Control
                      type="date"
                      model=".startDate"
                      id="startDate"
                      name="startDate"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".startDate"
                      show="touched"
                      messages={{
                        required: "Required",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="salaryScale" md={2}>
                    Hệ số lương
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".salaryScale"
                      id="salaryScale"
                      name="salaryScale"
                      className="form-control"
                      validators={{
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".salaryScale"
                      show="touched"
                      messages={{
                        required: "Required",
                        isNumber: "Must be a number",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="annualLeave" md={2}>
                    Số ngày nghỉ
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".annualLeave"
                      id="annualLeave"
                      name="annualLeave"
                      className="form-control"
                      validators={{
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".annualLeave"
                      show="touched"
                      messages={{
                        required: "Required",
                        isNumber: "Must be a number",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="overTime" md={2}>
                    Số ngày làm thêm
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".overTime"
                      id="overTime"
                      name="overTime"
                      className="form-control"
                      validators={{
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".overTime"
                      show="touched"
                      messages={{
                        required: "Required",
                        isNumber: "Must be a number",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="email" md={2}>
                    Phòng ban
                  </Label>
                  <Col md={10}>
                    <Control.select
                      model=".department"
                      id="department"
                      name="department"
                      className="form-control"
                    >
                      <option>Sale</option>
                      <option>HR</option>
                      <option>IT</option>
                      <option>Marketting</option>
                      <option>Finance</option>
                    </Control.select>
                  </Col>
                </Row>

                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Thêm
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
