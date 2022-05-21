import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import { STAFFS } from "../shared/staffs";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Info from "./InfoStaffComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={StaffList} />
          <Route exact path='/info' component={() => <Info staffs={this.props.staffs} />} />
          {/* <Route
            exact
            path="/menu"
            component={() => <Menu staffs={this.state.staffs} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} /> */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
