import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Row,
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import dateFormat from "dateformat";
import { FadeTransform } from "react-animation-components";
import { Control, LocalForm, Errors } from "react-redux-form";
import "./StaffInfo.css";


const StaffInfo = (props) => {
  const [staffData, setStaffData] = useState({});
  const params = new URLSearchParams(window.location.search);

  const staffDataFilter = props.staffs.filter((staff) => {
    return staff.id === Number(params.get("id"));
  })[0];
  useEffect(() => {
    setStaffData(staffDataFilter);
  }, [params]);

  const department = props.departments.find(
    (x) => x.id === staffDataFilter.departmentId
  );

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeBtn = (
    <button className="close" onClick={toggleModal}>
      &times;
    </button>
  );


  

  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{staffData.name}</BreadcrumbItem>
      </Breadcrumb>

      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        {staffData && Object.keys(staffData).length > 0 && (
          <div className="form-info" key={staffData.id}>
            <div className="staff-image">
              <img src={staffData.image} alt={staffData.name}></img>
            </div>
            <div className="staff-information">
              <h2>Họ và tên : {staffData.name}</h2>
              <p>Ngày sinh : {dateFormat(staffData.doB, "dd/mm/yyyy")}</p>
              <p>
                Ngày vào công ty :{" "}
                {dateFormat(staffData.startDate, "dd/mm/yyyy")}{" "}
              </p>
              <p>Phòng ban : {department.name}</p>
              <p>Số ngày nghỉ còn lại : {staffData.annualLeave}</p>
              <p>Số ngày đã làm thêm : {staffData.overTime}</p>
              <button
                className="btn btn-primary"
                color="danger"
                id="add-btn"
                onClick={toggleModal}
              >
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                Edit
              </button>
              <button
                className="btn btn-danger ms-2"
                color="danger"
                id="add-btn"
                // onClick={delData}
              >
                <i class="fa fa-times" aria-hidden="true"></i>
                Delete
              </button>
              <Modal isOpen={isOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal} close={closeBtn}>
                  Chỉnh sửa thông tin
                </ModalHeader>
                <ModalBody>
                {/* onSubmit={handleSubmit} initialState={staffEdit} */}
                  <LocalForm >
                    {/* Full name */}
                    <Row className="form-group">
                      <Label htmlFor="name" md={5}>
                        Họ tên
                      </Label>
                      <Col md={7}>
                        <Control
                          model=".name"
                          id="name"
                          name="name"
                          className="form-control"
                          validators={{
                            lenRange: (val) => val && val.length > 3,
                          }}
                        />
                        <Errors
                          model=".name"
                          className="text-danger"
                          messages={{
                            lenRange: "Yêu cầu nhiều hơn 3 ký tự",
                          }}
                        />
                      </Col>
                    </Row>

                    {/* Date of birth*/}
                    <Row className="form-group">
                      <Label htmlFor="doB" md={5}>
                        Ngày sinh
                      </Label>
                      <Col md={7}>
                        <Control.input
                          type="date"
                          model=".doB"
                          id="doB"
                          name="doB"
                          className="form-control"
                          validators={{
                            required: (val) => val,
                          }}
                        />
                        <Errors
                          model=".doB"
                          className="text-danger"
                          messages={{
                            required: "Yêu cầu bắt buộc ",
                          }}
                        />
                      </Col>
                    </Row>

                    {/* Started Date*/}
                    <Row className="form-group">
                      <Label htmlFor="startDate" md={5}>
                        Ngày vào công ty
                      </Label>
                      <Col md={7}>
                        <Control.input
                          type="date"
                          model=".startDate"
                          id="startDate"
                          name="startDate"
                          className="form-control"
                          validators={{
                            required: (val) => val,
                          }}
                        />
                        <Errors
                          model=".startDate"
                          className="text-danger"
                          messages={{
                            required: "Yêu cầu bắt buộc ",
                          }}
                        />
                      </Col>
                    </Row>

                    {/* Department */}
                    <Row className="form-group">
                      <Label htmlFor="department" md={5}>
                        Phòng ban
                      </Label>
                      <Col md={7}>
                        <Control.select
                          model=".departmentId"
                          id="department"
                          name="department"
                          className="form-control"
                          defaultValue="Dept01"
                        >
                          {props.departments.map((department) => {
                            return (
                              <option key={department.id} value={department.id}>
                                {department.name}
                              </option>
                            );
                          })}
                        </Control.select>
                        <Errors model=".department" />
                      </Col>
                    </Row>

                    {/* Salary Scale */}
                    <Row className="form-group">
                      <Label htmlFor="salaryScale" md={5}>
                        Hệ số lương
                      </Label>
                      <Col md={7}>
                        <Control
                          model=".salaryScale"
                          id="salaryScale"
                          name="salaryScale"
                          className="form-control"
                          validators={{
                            typeCheck: (val) => !Number.isNaN(Number(val)),
                            numRange: (val) => val > 0 && val < 4,
                          }}
                        />
                        <Errors
                          model=".salaryScale"
                          className="text-danger"
                          messages={{
                            typeCheck: "Yêu cầu nhập số",
                            numRange: "Yêu cầu nhập số từ 1-3",
                          }}
                        />
                      </Col>
                    </Row>

                    {/* Annual Leave */}
                    <Row className="form-group">
                      <Label htmlFor="annualLeave" md={5}>
                        Số ngày nghỉ còn lại
                      </Label>
                      <Col md={7}>
                        <Control
                          model=".annualLeave"
                          id="annualLeave"
                          name="annualLeave"
                          className="form-control"
                          validators={{
                            typeCheck: (val) => !Number.isNaN(Number(val)),
                          }}
                        />
                        <Errors
                          model=".annualLeave"
                          className="text-danger"
                          messages={{
                            typeCheck: "Yêu cầu nhập số ",
                          }}
                        />
                      </Col>
                    </Row>

                    {/* Overtime */}
                    <Row className="form-group">
                      <Label htmlFor="overTime" md={5}>
                        Số ngày đã làm thêm
                      </Label>
                      <Col md={7}>
                        <Control
                          model=".overTime"
                          id="overTime"
                          name="overTime"
                          className="form-control"
                          validators={{
                            typeCheck: (val) => !Number.isNaN(Number(val)),
                          }}
                        />
                        <Errors
                          model=".overTime"
                          className="text-danger"
                          messages={{
                            typeCheck: "Yêu cầu nhập số",
                          }}
                        />
                      </Col>
                    </Row>

                    {/* Submit button */}
                    <Row className="form-group">
                      <Col className="col-7 offset-5">
                        <Button
                          type="submit"
                          color="primary"
                          onClick={toggleModal}
                        >
                          Update
                        </Button>
                      </Col>
                    </Row>
                  </LocalForm>
                </ModalBody>
              </Modal>
            </div>
          </div>
        )}
      </FadeTransform>
    </React.Fragment>
  );
};

export default StaffInfo;
