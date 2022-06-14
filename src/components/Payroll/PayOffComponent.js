import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Pay.css";
import { FadeTransform } from "react-animation-components";

class Salarys extends React.Component {
  render() {
    const list = this.props.staffs.map((staff) => {
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
              <div className="infopay">Lương : {staff.salary}</div>
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
          <FadeTransform
            in
            fadeProps={{ exitFade: "0", enterFade: "1" }}
            transformProps={{ exitTransform: "scale(.7) translateY(50%)" }}
          >
            <div>
              <Button>
                <i class="fa fa-sort-amount-asc" aria-hidden="true"></i> Lương
                tăng dần
              </Button>
              <Button>
                <i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Lương
                giảm dần
              </Button>
            </div>
            <div id="table-pay">{list}</div>
          </FadeTransform>
        </div>
      </React.Fragment>
    );
  }
}

export default Salarys;
