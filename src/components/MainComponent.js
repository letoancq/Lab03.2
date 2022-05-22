import React, { Component } from "react";
import { STAFFS } from "../shared/staffs";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  Router,
} from "react-router-dom";
import history from "../utils/history";
import StaffInfo from "./staff-list/StaffInfo";
import StaffList from "./StaffListComponent";
import DepartmentsList from "./DepartmentListComponent";

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
        <BrowserRouter>
          <Router history={history}>
            <Switch>
              <Route path="/home" component={StaffList} />
              <Route exact path="/info" component={() => <StaffInfo />} />
              <Route path="/departmentlist" component={DepartmentsList} />

              {/* <Route
                    exact
                    path="/menu"
                    component={() => <Menu staffs={this.state.staffs} />}
                  />
                  <Route path="/menu/:dishId" component={DishWithId} />
                  <Route exact path="/contactus" component={Contact} /> */}
              <Redirect to="/home" />
            </Switch>
          </Router>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default Main;
