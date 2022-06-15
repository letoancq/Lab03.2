import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffInfo from "./staff-list/StaffInfo";
import StaffList from "./staff-list/StaffListComponent";
import DepartmentsList from "./Department/DepartmentListComponent";
import Salarys from "./Payroll/PayOffComponent";
import NotFound from "./NotFoundPage";
import DepartmentData from "./Department/DepartmentData";
import { Switch, Route, withRouter } from "react-router-dom";
import {
  fetchStaffs,
  fetchDepartments,
  fetchSalarys,
} from "../redux/ActionCreator";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: [],
      departments: [],
    };
  }

  componentDidMount = async () => {
    const { fetchStaffs } = this.props;
    const dataStaffs = await fetchStaffs();
    this.setState({
      staffs: dataStaffs,
    });

    const { fetchDepartments } = this.props;
    const dataDepartments = await fetchDepartments();
    this.setState({
      departments: dataDepartments,
    });

  };
  render() {
    const HomePage = () => {
      return (
        <StaffList
          staffs={this.state.staffs}
          departments={this.state.departments}
        />
      );
    };

    const ListDepartments = () => {
      return (
        <DepartmentsList
          staffs={this.state.staffs}
          departments={this.state.departments}
        />
      );
    };
    const PayRoll = () => {
      return (
        <Salarys
          staffs={this.state.staffs}
          departments={this.state.departments}
        />
      );
    };

    const StaffInfos = () => {
      return (
        <StaffInfo
          staffs={this.state.staffs}
          departments={this.state.departments}
        />
      );
    };

    const DepartmentDatas = () => {
      return (
        <DepartmentData
          staffs={this.state.staffs}
          departments={this.state.departments}
        />
      );
    };

    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/info" component={StaffInfos} />
          <Route path="/departmentlist" component={ListDepartments} />
          <Route exact path="/dep" component={DepartmentDatas} />
          <Route path="/payoff" component={PayRoll} />
          <Route path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    salarys: state.salarys,
    departments: state.departments,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchStaffs: fetchStaffs,
      fetchDepartments: fetchDepartments,
      fetchSalarys: fetchSalarys,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
