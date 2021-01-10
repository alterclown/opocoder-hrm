import React from "react";
import {Route, Switch} from "react-router-dom";
import AttendanceList from "../attendance/AttendanceList";
import CompanyList from "../company/CompanyList";

export default function ApplicationRoute() {
    return (
            <Switch>
                <Route path="/attendance" component={AttendanceList} exact/>
                <Route path="/company" component = {CompanyList} exact/>
            </Switch>
    );
}
