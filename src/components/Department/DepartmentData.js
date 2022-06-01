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
    const departmentDataFilter = STAFFS.filter((departmentss) => {
      return departmentss.department.name === name;
    });

    setDepartmentData(departmentDataFilter);
  }, [name]);
  console.log(departmentData);
  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/departmentlist">Dep</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{name}</BreadcrumbItem>
      </Breadcrumb>
      {departmentData &&
        Object.keys(departmentData).length > 0 &&
        departmentData.map((staff) => {
          return (
            <div className="form-info" key={staff.id}>
              <span className="span-list col-4">
                <div key={staff.id} className="col">
                  <img src={staff.image} alt={staff.name} />
                  <h4>{staff.name}</h4>
                </div>
              </span>
            </div>
          );
        })}
      
    </React.Fragment>
  );
};

export default DepartmentData;
