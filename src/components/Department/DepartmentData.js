import React, { useEffect, useState } from "react";
import { STAFFS } from "../../shared/staffs";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";

const DepartmentData = (props) => {
  const [departmentData, setDepartmentData] = useState([]);
  const params = new URLSearchParams(window.location.search);
  let name = String(params.get("name"));

  useEffect(() => {
    const departmentDataFilter = STAFFS.filter(departmentss => {
      return departmentss.department.name === name;
    });
    
    setDepartmentData(departmentDataFilter[0]);
  }, [name]);
  console.log( departmentData);
  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/departmentlist">Dep</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{name}</BreadcrumbItem>
      </Breadcrumb>
      {departmentData && Object.keys(departmentData).length > 0 && (
        <div className="form-info" key={departmentData.id}>
          <span
          className="span-list"
        >
          <div key={departmentData.id} className="col">
            <img src={departmentData.image} alt={departmentData.name} />
            <h4>{departmentData.name}</h4>
          </div>
        </span>
        </div>
      )}
    </React.Fragment>
  );
};

export default DepartmentData;
