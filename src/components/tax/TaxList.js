import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Typography from "@material-ui/core/Typography";
import TablePagination from "@material-ui/core/TablePagination";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const useStyles = theme => ({
    table: {
        minWidth: 650,
    },
    tableHeader: {
        justifyContent: "center",
        color: "white",
        fontWeight: "bold"
    },
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
    head: {
        backgroundColor: (theme.palette.primary.main),
        color: 'inherit'
    },
    formControl: {
        margin: theme.spacing(1),
    },
    searchItem: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    '& .MuiTableBody-root .MuiTableRow-root .MuiTableCell-root': {
        padding: '6px !important'
    }
});

class TaxList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        };
    };


    componentDidMount() {
        let _this = this;
        // AttendanceActions.getOrders(_this.state.url)
        //         .then(response => {
        //             this.setState({
        //                 orderList: response.data.results
        //             }, () => {
        //                 _this.setState({loaded: true});
        //             })
        //         })
        //         .catch(err => {
        //             _this.setState({loaded: true})
        //         });
    };

    render() {
        const {classes} = this.props;
        return (
                <React.Fragment>
                    <Grid item xs={12} sm={12} key={'all-order-page-container'} id={'all-order-page-container'}
                          style={{padding: '2em'}}>
                        <div key={'page-title'}>
                            <Typography variant="h4" color="primary" align={'center'}>
                                <Box fontWeight="fontWeightBold">Tax List</Box>
                            </Typography>
                        </div>
                        <div className={classes.searchItem}>
                            <div key={'search-field-order-number'}>
                                <TextField variant="outlined" margin="dense" type="text" label="Order Number"
                                           name="text" autoComplete="off"/>
                            </div>
                            <div key={'search-field-owner'}>
                                <TextField variant="outlined" margin="dense" type="text" label="Owner" name="text"
                                           autoComplete="off"
                                />
                            </div>
                            <div key={'search-field-status'}>
                            </div>
                            <div>
                                {/* <DatePicker/> */}
                            </div>
                            <div>
                                <Button variant={"outlined"} size="medium" color="primary" className={classes.margin}
                                        style={{maxWidth: '160px'}}>Search</Button>
                            </div>
                        </div>
                    </Grid>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                    <TableContainer component={Paper} style={{boxShadow: 'none'}}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead className={classes.head}>
                                                <TableRow>
                                                    <TableCell className={classes.tableHeader}
                                                               align={'center'}>#</TableCell>
                                                    <TableCell className={classes.tableHeader} align={'center'}>Order
                                                        #</TableCell>
                                                    <TableCell className={classes.tableHeader}>Owner</TableCell>
                                                    <TableCell className={classes.tableHeader}>Ordered By</TableCell>
                                                    <TableCell className={classes.tableHeader}>Items</TableCell>
                                                    <TableCell className={classes.tableHeader}>Order Amount</TableCell>
                                                    <TableCell className={classes.tableHeader}>Total</TableCell>
                                                    <TableCell className={classes.tableHeader}>Status</TableCell>
                                                    <TableCell className={classes.tableHeader}>Date Created</TableCell>
                                                    <TableCell className={classes.tableHeader}>Date Modified</TableCell>
                                                    <TableCell className={classes.tableHeader}
                                                               align={'center'}>Actions</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                        <TableRow key={'order-table' }>
                                                            <TableCell align="center"></TableCell>
                                                            <TableCell
                                                                    align="center"></TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell
                                                                    align="left"></TableCell>
                                                            <TableCell align="left"></TableCell>
                                                            <TableCell
                                                                    align="left"></TableCell>
                                                            <TableCell
                                                                    align="left"></TableCell>
                                                            <TableCell align="center">
                                                                <div style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center'
                                                                }}>
                                                                            <div style={{
                                                                                padding: '0px',
                                                                                margin: '0px',
                                                                                textAlign: 'center',
                                                                                display: 'inline-block',
                                                                                cursor: 'pointer',
                                                                            }} title='Update order status'>
                                                                                <IconButton color="primary">
                                                                                    <EditIcon fontSize='small'/>
                                                                                </IconButton>
                                                                            </div>
                                                                    <div style={{
                                                                        padding: '0px',
                                                                        margin: '0px',
                                                                        textAlign: 'center',
                                                                        display: 'inline-block',
                                                                        cursor: 'pointer',
                                                                    }} title='View Order'>
                                                                        <IconButton color="primary">
                                                                            <VisibilityOutlinedIcon fontSize="small"/>
                                                                        </IconButton>
                                                                    </div>
                                                                </div>
                                                            </TableCell>
                                                        </TableRow>
                                            </TableBody>
                                        </Table>
                                        {/* <TablePagination
                                                component="div"
                                                rowsPerPageOptions={[]}
                                                count={this.state.totalResult}
                                                rowsPerPage={this.state.rowsPerPage}
                                                page={this.state.page}
                                                onChangePage={this.handleChangePage}
                                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                        /> */}
                                    </TableContainer>
                            </Grid>
                        </Grid>
                    </div>
                </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(TaxList)