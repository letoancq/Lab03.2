import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffInfo from "./staff-list/StaffInfo";
import StaffList from "./staff-list/StaffListComponent";
import DepartmentsList from "./Department/DepartmentListComponent";
import PayRoll from "./Payroll/PayOffComponent";
import NotFound from "./NotFoundPage";
import DepartmentData from "./Department/DepartmentData";
import { Switch, Route, withRouter } from "react-router-dom";
import {fetchStaffs, fetchDepartments, fetchSalarys} from "../redux/ActionCreator"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    staffs: state.staffs,
    salarys: state.salarys,
    departments: state.departments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchSalarys: () => {
    dispatch(fetchSalarys());
  },
});
class Main extends Component {

  componentDidMount = () => {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalarys();
  }

  render() {
    const HomePage = () => {
        return (
          <StaffList staffs={this.props.staffs} department={this.props.departments}/>
        )
        }
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/info" component={() => <StaffInfo />} />
          <Route path="/departmentlist" component={DepartmentsList} />
          <Route exact path="/dep" component={() => <DepartmentData />} />
          <Route path="/payoff" component={PayRoll} />
          <Route path="/" component={HomePage } />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
