import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route} from "react-router-dom";
import StaffInfo from "./staff-list/StaffInfo";
import StaffList from "./StaffListComponent";
import DepartmentsList from "./DepartmentListComponent";
import PayRoll from "./PayOffComponent";
import NotFound from "./NotFoundPage";
import DepartmentData from "./staffOfDepartment/StaffOfDepartment"

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
          <Switch>
            <Route path="/home" component={StaffList} />
            <Route exact path="/info" component={() => <StaffInfo />} />
            <Route path="/departmentlist" component={DepartmentsList} />
            <Route exact path="/departmentlist/department.name" component={() => <DepartmentData />} />
            <Route path="/payoff" component={PayRoll} />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
