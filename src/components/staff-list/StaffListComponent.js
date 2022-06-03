import React, { useState } from "react";
import {
  Button,
  Modal,
  Col,
  Input,
  ModalHeader,
  ModalBody,
  Row,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { DEPARTMENTS, STAFFS } from "../../shared/staffs";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val && val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const minNum = (val) => !required(val) || !isNumber(val) || val >= 1;
const maxNum = (val) => val <= 3 || !isNumber(val);
const soDuong = (val) => !isNumber(val) || val >= 0;

const StaffList = (props) => {
  const [state, setState] = useState({
    staffs: STAFFS,
    name: "",
    modalOpen: false,
    strSearch: "a",
  });
  const handleOnClickEmployee = (info) => {
    props.history.push({
      pathname: `/info`,
      search: `id=${info.id}`,
    });
  };

  const handleSubmit = (value) => {
    const department = DEPARTMENTS.find((x) => x.id === value.department);
    const newStaff = {
      name: value.name,
      doB: value.doB,
      startDate: value.startDate,
      department: department,
      salaryScale: value.salaryScale,
      annualLeave: value.annualLeave,
      overTime: value.overTime,
      image: "/assets/images/alberto.png",
    };
    if (
      !value.name ||
      !value.doB ||
      !value.startDate ||
      !value.department ||
      !value.salaryScale ||
      !value.overTime ||
      !value.image
    )
      STAFFS.push(newStaff);

    setState({
      ...state,
      modalOpen: !state.modalOpen,
    });
  };

  const handleSearch = (e) => {
    const search = e.target;
    e.preventDefault();
    const nameSearch = search.nameSearch.value;
    setState({ ...state, name: nameSearch });
    console.log(nameSearch);
  };

  const toggleModal = () => {
    setState({
      ...state,
      modalOpen: !state.modalOpen,
    });
  };

  const list = state.staffs
    .filter((staff) => {
      if (state.name === "") return staff;
      else if (staff.name.toLowerCase().includes(state.name.toLowerCase()))
        return staff;
      return 0;
    })
    .map((staff) => {
      return (
        <span
          key={staff.id}
          className="span-list"
          onClick={() => {
            handleOnClickEmployee(staff);
          }}
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
      <form onSubmit={handleSearch} className="form-group row">
        <div className="col-8 col-md-8">
          <Input
            type="text"
            className="form-control"
            name="nameSearch"
            placeholder="Tìm kiếm nhân viên..."
          />
        </div>
        <div className="col-4 col-md-4">
          <button className="btn btn-success" type="submit">
            Tìm kiếm
          </button>
      <Button outline onClick={toggleModal}>
        <span className="fa fa-plus fa-lg"></span>
      </Button>
        </div>
      </form>
      <div className="staff">{list}</div>
      <Modal isOpen={state.modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Thêm nhân viên</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={handleSubmit}>
            <Row className="control-group mb-4">
              <Label htmlFor="name" md={4}>
                Tên
              </Label>
              <Col md={8}>
                <Control.text
                  model=".name"
                  className="form-control"
                  id="name"
                  name="name"
                  vallidate={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  model=".name"
                  className="form-danger"
                  show="touched"
                  messages={{
                    required: "Yêu cầu",
                    minLength: "Nhập từ 3 ký tự trở lên",
                    maxLength: "Nhập ít hơn 15 ký tự",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group  mb-4">
              <Label htmlFor="doB" md={4}>
                Ngày sinh
              </Label>
              <Col md={8}>
                <Control.text
                  type="date"
                  model=".doB"
                  className="form-control"
                  id="doB"
                  name="doB"
                  vallidate={{
                    required,
                  }}
                />
                <Errors
                  model=".doB"
                  className="form-danger"
                  show="touched"
                  messages={{
                    required: "Yêu cầu",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group  mb-4">
              <Label htmlFor="startDate" md={4}>
                Ngày vào công ty
              </Label>
              <Col md={8}>
                <Control.text
                  type="date"
                  model=".startDate"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                  vallidate={{
                    required,
                  }}
                />
                <Errors
                  model=".startDate"
                  className="form-danger"
                  show="touched"
                  messages={{
                    required: "Yêu cầu",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group  mb-4">
              <Label htmlFor="department" md={4}>
                Phòng ban
              </Label>
              <Col md={8}>
                <Control.select
                  model=".department"
                  id="department"
                  name="department"
                  defaultValue="Sale"
                  className="form-control"
                >
                  <option value="Dept01">Sale</option>
                  <option value="Dept02">HR</option>
                  <option value="Dept03">Marketing</option>
                  <option value="Dept04">IT</option>
                  <option value="Dept05">Finance</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="control-group  mb-4">
              <Label htmlFor="salaryScale" md={4}>
                Hệ số lương
              </Label>
              <Col md={8}>
                <Control.text
                  model=".salaryScale"
                  className="form-control"
                  id="salaryScale"
                  name="salaryScale"
                  vallidate={{
                    required,
                    isNumber,
                    minNum,
                    maxNum,
                  }}
                />
                <Errors
                  model=".salaryScale"
                  className="form-danger"
                  show="touched"
                  messages={{
                    required: "Yêu cầu",
                    isNumber: "Phải nhập số",
                    minNum: "Số phải >=1",
                    maxNum: "Số phải <=3",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group">
              <Label htmlFor="annualLeave" md={4}>
                Số ngày nghỉ còn lại
              </Label>
              <Col md={8}>
                <Control.text
                  model=".annualLeave"
                  id="annualLeave"
                  name="annualLeave"
                  defaultValue="0"
                  className="form-control"
                  validators={{
                    required,
                    isNumber,
                    soDuong,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".annualLeave"
                  show="touched"
                  messages={{
                    required: "Chưa nhập ",
                    isNumber: "Phải là số",
                    soDuong: "Phải >=0",
                  }}
                />
              </Col>
            </Row>
            <Row className="control-group  mb-3">
              <Label htmlFor="overTime" md={4}>
                Số ngày đã làm thêm
              </Label>
              <Col md={8}>
                <Control.text
                  model=".overTime"
                  id="overTime"
                  name="overTime"
                  defaultValue="0"
                  className="form-control"
                  validators={{
                    required,
                    isNumber,
                    soDuong,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".overTime"
                  show="touched"
                  messages={{
                    required: "Chưa nhập ",
                    isNumber: "Phải là số",
                    soDuong: "Phải >=0",
                  }}
                />
              </Col>
            </Row>
            <div className="form-group row">
              <div className="col-12  text-center">
                <Button type="submit" color="primary">
                  Thêm nhân viên
                </Button>
              </div>
            </div>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default StaffList;
