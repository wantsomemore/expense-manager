import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  Paper,
  TableContainer,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "auto",
  },
  listTitle: {
    color: "#323232",
    textAlign: "center",
    marginBottom: "14px",
    fontSize: "26px",
    lineHeight: "32px",
  },
  table: {
    background: "#d3d3d3",
  },
  tableHead: {
    background: "#323232",
    color: "#ffffff",
    fontSize: "20px",
    lineHeight: "26px",
    fontWeight: 500,
  },
  tableItem: {
    color: "#323232",
    fontSize: "18px",
    lineHeight: "22px",
    textTransform: "capitalize",
  },
  deleteBtn: {
    background: "#e60b0b",
    color: "#ffffff",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    "&:hover": {
      background: "#e60b0b",
      opacity: 0.7,
    },
  },
});

const ExpensesList = ({ expenseList, setExpenseList }) => {
  const classes = useStyles();

  const handleRemove = (id) => {
    const listCopy = [...expenseList].filter((row) => row.id !== id);
    setExpenseList(listCopy);
  };

  return (
    <>
      <Typography className={classes.listTitle}>List of expenses</Typography>
      <TableContainer className={classes.root} component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.tableHead}>
                Date
              </TableCell>
              <TableCell align="left" className={classes.tableHead}>
                Product
              </TableCell>
              <TableCell align="left" className={classes.tableHead}>
                Price
              </TableCell>
              <TableCell align="left" className={classes.tableHead}>
                Currency
              </TableCell>
              <TableCell
                align="center"
                className={classes.tableHead}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenseList.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell align="left" className={classes.tableItem}>
                  {expense.date}
                </TableCell>
                <TableCell align="left" className={classes.tableItem}>
                  {expense.product}
                </TableCell>
                <TableCell align="left" className={classes.tableItem}>
                  {expense.price}
                </TableCell>
                <TableCell align="left" className={classes.tableItem}>
                  {expense.currency}
                </TableCell>

                <Button
                  className={classes.deleteBtn}
                  onClick={() => handleRemove(expense.id)}
                >
                  <DeleteOutlinedIcon></DeleteOutlinedIcon>
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ExpensesList;
