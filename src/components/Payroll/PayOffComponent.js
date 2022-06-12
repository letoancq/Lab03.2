import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";


class Salarys extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.staffs.map((staff) => {
      const pay = (
        staff.salaryScale * 3000000 +
        staff.overTime * 200000
      ).toFixed(0);
      return (
        <div className="payoff">
          <div className="card-payoff">
            <h4 className="staff-name">{staff.name}</h4>
            <div className="infostaff">
              <p className="staff-id">Mã nhân viên : {staff.id}</p>
              <p className="staff-salaryScale">
                Hệ số lương : {staff.salaryScale}
              </p>
              <p className="staff-overTime">
                Số ngày làm thêm : {staff.overTime}
              </p>
              <div className="infopay">Lương : {pay}</div>
            </div>
          </div>
        </div>
      );
    });


    return (
      <React.Fragment>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>PayOff</BreadcrumbItem>
        </Breadcrumb>
        
        <div className="container-staff">
          <h3 className="list-staffs">Bảng lương nhân viên</h3>
          <div id="table-pay">{list}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Salarys;
