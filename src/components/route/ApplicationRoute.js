import React from "react";
import {Route, Switch} from "react-router-dom";
import AttendanceList from "../attendance/AttendanceList";
import CompanyList from "../company/CompanyList";
import DepartmentList from "../department/DepartmentList";
import EmployeeList from "../employee/EmployeeList";
import LeaveList from "../leave/LeaveList";
import LoanList from "../loan/LoanList";
import PayrollList from "../payroll/PayrollList";
import PositionList from "../position/PositionList";
import ProjectList from "../project/ProjectList";
import SalaryList from "../salary/SalaryList";
import TaxList from "../tax/TaxList";
import TrainingList from "../training/TrainingList";
import Location from "../location/Location";
import User from "../user/User";

export default function ApplicationRoute() {
    return (
            <Switch>
                <Route path="/attendance" component={AttendanceList} exact/>
                <Route path="/company" component={CompanyList} exact/>
                <Route path="/department" component={DepartmentList} exact/>
                <Route path="/employee" component={EmployeeList} exact/>
                <Route path="/leave" component={LeaveList} exact/>
                <Route path="/loan" component={LoanList}exact/>
                <Route path="/location" component={Location} exact/>
                <Route path="/payroll" component={PayrollList} exact/>
                <Route path="/position" component={PositionList} exact/>
                <Route path="/project" component={ProjectList} exact/>
                <Route path="/salary" component={SalaryList} exact/>
                <Route path="/tax" component={TaxList} exact/>
                <Route path="/training" component={TrainingList} exact/>
                <Route path="/user" component={User} exact/>
            </Switch>
    );
}
