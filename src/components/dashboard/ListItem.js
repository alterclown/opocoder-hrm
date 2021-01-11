// import React from 'react';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import AttendanceList from '../attendance/AttendanceList';

// export const mainListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Attendance" component = {AttendanceList} to="/attendance"/>
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ShoppingCartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Orders" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Customers" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Reports" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <LayersIcon />
//       </ListItemIcon>
//       <ListItemText primary="Integrations" />
//     </ListItem>
//   </div>
// );

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );

import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";
import LayersIcon from '@material-ui/icons/Layers';
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

function ListItems() {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: 'flex' }}>
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/attendance" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary={"Attendance"} />
              </ListItem>
            </Link>
            <Link to="/company" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <LayersIcon />
                </ListItemIcon>
                <ListItemText primary={"Company"} />
              </ListItem>
            </Link>
          <Link to="/department" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary={"Department"} />
              </ListItem>
            </Link>
            <Link to="/employee" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={"Employee"} />
              </ListItem>
            </Link>
            <Link to="/leave" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={"Leave"} />
              </ListItem>
            </Link>
            <Link to="/loan" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={"Loan"} />
              </ListItem>
            </Link>
            <Link to="/payroll" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={"Payroll"} />
              </ListItem>
            </Link>
            <Link to="/position" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={"Position"} />
              </ListItem>
            </Link>
            <Link to="/project" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={"Project"} />
              </ListItem>
            </Link>
            <Link to="/salary" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={"Salary"} />
              </ListItem>
            </Link>
            <Link to="/tax" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={"Tax"} />
              </ListItem>
            </Link>
            <Link to="/training" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary={"Training"} />
              </ListItem>
            </Link>
            <Link to="/user" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary={"User"} />
              </ListItem>
            </Link>
            </List>
        <Switch>
          <Route exact path="/">
            {/* <Container>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Container> */}
          </Route>
          <Route exact path="/">
            <Container>
              <Typography variant="h3" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </Typography>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default ListItems;