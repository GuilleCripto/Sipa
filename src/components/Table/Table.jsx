/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
//import SvgIcon from '@material-ui/core/SvgIcon';
import Edit from "@material-ui/icons/Edit";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

function CustomTable({ ...props }) {
	const state = {
      data: [],
      page: 0,
      rowsPerPage: 5
    };
	 
	const handleChangePage = (event, page) => {
    state.page=({page});
  };

  const handleChangeRowsPerPage = event => {
	  var target = event.target;
		var value = target.value;
    state.rowsPerPage({ value });
  };
	
 /* const editIcon1 = (
    <IconButton onClick={console.log("editado")}>
      <SvgIcon>
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </SvgIcon>
    </IconButton>
  );*/
  
  const editIcon = (<IconButton	onClick={() => alert('Boton')}>
					<Edit></Edit>
					</IconButton>)
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  //console.log(classes);
    
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
			
               
                return (
				
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
				 
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {
			  tableData.map((prop, key) => {   
			if(prop[2]==='../img/banner1.jpg'){
				//console.log('Lista',prop[4]);
			}
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
				if(key===2){
					 return (
					
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
            
                     {editIcon }
                    </TableCell>
					)
				}else{
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
					)
				}
                }
					
				
				)}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
	   <TablePagination
               component="div"
            count={5}
            rowsPerPage={state.rowsPerPage}
            page={state.page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          >
	  </TablePagination>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
  marginTop: "-40px"
 

};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
