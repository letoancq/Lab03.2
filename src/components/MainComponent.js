import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffInfo from "./staff-list/StaffInfo";
import StaffList from "./staff-list/StaffListComponent";
import DepartmentsList from "./Department/DepartmentListComponent";
import PayRoll from "./Payroll/PayOffComponent";
import NotFound from "./NotFoundPage";
import DepartmentData from "./Department/DepartmentInfo";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
  };
};
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/info" component={() => <StaffInfo />} />
          <Route path="/departmentlist" component={DepartmentsList} />
          <Route exact path="/dep" component={() => <DepartmentData />} />
          <Route path="/payoff" component={PayRoll} />
          <Route path="/" component={StaffList} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
