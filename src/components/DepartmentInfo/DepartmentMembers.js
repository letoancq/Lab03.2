import React, { useEffect, useState} from 'react';
import {DEPARTMENTS, STAFFS} from "../../shared/staffs";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";




const DepartmentMembers = (props) => {
    const [departmentData, setDepartmentData] = useState({});
    const params = new URLSearchParams(window.location.search)

    useEffect(() => {
        const departmentDataFilter = DEPARTMENTS.filter(department => {
            return department.name === params.get('name');
        })[0];
        setDepartmentData(departmentDataFilter);
    }, [params]);

    
    return (
        <React.Fragment>
            <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{departmentData.name}</BreadcrumbItem>
          </Breadcrumb>
            {departmentData && Object.keys(departmentData).length > 0 && (<div className="form-info" key={departmentData.name}>
                <h2>Tên bộ phận : {departmentData.name}</h2>
            </div>)}
        </React.Fragment>
    )
}

export default DepartmentMembers;