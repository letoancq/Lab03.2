import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { FadeTransform } from "react-animation-components";



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
              Ngày vào công ty : {dateFormat(staffData.startDate, "dd/mm/yyyy")}{" "}
            </p>
            <p>Phòng ban : {department.name}</p>
            <p>Số ngày nghỉ còn lại : {staffData.annualLeave}</p>
            <p>Số ngày đã làm thêm : {staffData.overTime}</p>
          </div>
        </div>
      )}
      </FadeTransform>
    </React.Fragment>
  );
};

export default StaffInfo;
