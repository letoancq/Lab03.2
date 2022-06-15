import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "./department.css";
import { FadeTransform } from "react-animation-components";

const DepartmentData = (props) => {
  const [departmentData, setDepartmentData] = useState([]);
  const params = new URLSearchParams(window.location.search);
  let name = String(params.get("name"));

  const depId = props.departments.filter((dep) => {
    return dep.name === name;
  })

 const a = depId.find(e => {return e.id});

  const departmentDataFilter = props.staffs.filter((departmentss) => {
    return departmentss.departmentId === a.id;
  });

  useEffect(() => {
    setDepartmentData(departmentDataFilter);
  }, [name]);



  return (
    <React.Fragment>
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
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
      </FadeTransform>
    </React.Fragment>
  );
};

export default DepartmentData;
