import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Router } from "react-router-dom";
import history from "../utils/history";
import StaffInfo from "./staff-list/StaffInfo";
import StaffList from "./StaffListComponent";
import DepartmentsList from "./DepartmentListComponent";
import DepartmentMembers from "../components/DepartmentInfo/DepartmentMembers";
import PayOff from "./PayOffComponent"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Router history={history}>
          <Switch>
            <Route path="/home" component={StaffList} />
            <Route exact path="/info" component={() => <StaffInfo />} />

            <Route path="/departmentlist" component={DepartmentsList} />
            <Route
              exact
              path="/staffOfDepartment"
              component={() => <DepartmentMembers />}
            />
            <Route path="/payoff" component={PayOff} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Main;
