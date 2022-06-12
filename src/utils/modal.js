import React from 'react';
import {
    Button,
    Modal,
    Col,
    ModalHeader,
    ModalBody,
    Row,
    Label,
  } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";


const modalAdd = () => {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => val && val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    const isNumber = (val) => !isNaN(Number(val));
    const minNum = (val) => !required(val) || !isNumber(val) || val >= 1;
    const maxNum = (val) => val <= 3 || !isNumber(val);
    const soDuong = (val) => !isNumber(val) || val >= 0;
<Modal>
        <ModalHeader >Thêm nhân viên</ModalHeader>
        <ModalBody>
          <LocalForm >
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
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  model=".name"
                  className="text-danger"
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
                  validators={{
                    required,
                  }}
                />
                <Errors
                  model=".doB"
                  className="text-danger"
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
                  validators={{
                    required,
                  }}
                />
                <Errors
                  model=".startDate"
                  className="text-danger"
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
                  validators={{
                    required,
                    isNumber,
                    minNum,
                    maxNum,
                  }}
                />
                <Errors
                  model=".salaryScale"
                  className="text-danger"
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
}

export default modalAdd;