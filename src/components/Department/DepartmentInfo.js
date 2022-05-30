import React, { useEffect, useState} from 'react';
import {STAFFS} from "../../shared/staffs";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";


const DepartmentData = (props) => {
    const [departmentData, setDepartmentData] = useState({});
    const params = new URLSearchParams(window.location.search)

    useEffect(() => {
        const departmentDataFilter = STAFFS.filter(departmentss => {
            return departmentss.department.name === String(params.get('name'));
        })[0];
        setDepartmentData(departmentDataFilter);
    }, [params]);
    console.log(departmentData)
    return (
        <React.Fragment>
            <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link> 
            </BreadcrumbItem>
            {/* <BreadcrumbItem active>{departmentData.name}</BreadcrumbItem> */}
          </Breadcrumb>
            {/* {departmentData && Object.keys(departmentData).length > 0 && (<div className="form-info" key={departmentData.id}> */}
            <h2>Họ và tên : </h2>
                {/* <p>Ngày sinh : {dateFormat(departmentData.doB, "dd/mm/yyyy")}</p> */}
                {/* <p>Ngày vào công ty : {dateFormat(departmentData.startDate, "dd/mm/yyyy")} </p> */}
            {/* </div>)} */}
        </React.Fragment>
    )
}

export default DepartmentData;