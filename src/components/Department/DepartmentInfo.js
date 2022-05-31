import React, { useEffect, useState } from "react";
import { STAFFS } from "../../shared/staffs";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";

const DepartmentData = (props) => {
  const [departmentData, setDepartmentData] = useState({});
  const params = new URLSearchParams(window.location.search);
  let name = String(params.get("name"));
  console.log(String(params.get("name")));

  useEffect(() => {
    const departmentDataFilter = STAFFS.filter((departmentss) => {
      return departmentss.department.name === name;
    })[0];
    console.log(departmentDataFilter);
    setDepartmentData(departmentDataFilter);
  }, [params]);
  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/departmentlist">Dep</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{name}</BreadcrumbItem>
      </Breadcrumb>
      {departmentData && Object.keys(departmentData).length > 0 && (<div className="form-info" key={departmentData.id}>
               <div className="staff-image">
                   <img src={departmentData.image} alt={departmentData.name}></img>
               </div>
               <div className="staff-information">
                <h2>Họ và tên : {departmentData.name}</h2>
                <p>Ngày sinh : {dateFormat(departmentData.doB, "dd/mm/yyyy")}</p>
                <p>Ngày vào công ty : {dateFormat(departmentData.startDate, "dd/mm/yyyy")} </p>
                <p>Phòng ban : {departmentData.department.name}</p>
                <p>Số ngày nghỉ còn lại : {departmentData.annualLeave}</p>
                <p>Số ngày đã làm thêm : {departmentData.overTime}</p>
               </div>
            </div>)}
    </React.Fragment>
  );
};

export default DepartmentData;
