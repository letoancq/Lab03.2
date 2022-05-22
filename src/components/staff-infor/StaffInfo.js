import React from 'react';

const StaffList = (props) => {
    const {staffListData, renderInfo, selectedInfo} = props;

    return (
        <div className="container-staff">
            <h3 className="list-staffs">Danh sách nhân viên</h3>
            <div className="staff">{list}</div>;
            <div className="info">{this.renderInfo(this.state.selectedInfo)}</div>
        </div>
    )
}

export default StaffList;