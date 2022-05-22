import React, {Component, useEffect, useState} from 'react';
import {STAFFS} from "../../shared/staffs";

const StaffInfo = (props) => {
    const [staffData, setStaffData] = useState({});
    const params = new URLSearchParams(window.location.search)

    useEffect(() => {
        const staffDataFilter = STAFFS.filter(staff => {
            return staff.id === Number(params.get('id'));
        })[0];
        setStaffData(staffDataFilter);
    }, [params]);

    return (
        <React.Fragment>
            {staffData && Object.keys(staffData).length > 0 && (<div className="form-info" key={staffData.id}>
                <h2>Họ và tên : {staffData.name}</h2>
                <p>Ngày sinh : {staffData.doB}</p>
                <p>Ngày vào công ty : {staffData.startDate}</p>
                <p>Phòng ban : {staffData.departmentName}</p>
                <p>Số ngày nghỉ còn lại : {staffData.annualLeave}</p>
                <p>Số ngày đã làm thêm : {staffData.overTime}</p>
            </div>)}
        </React.Fragment>
    )
}

export default StaffInfo;