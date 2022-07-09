import * as React from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TablePaleoModal from "../TablePaleoModal/TablePaleoModal";

import { makeStyles } from "@mui/styles";

import dataPaleo from "../../Data/paleosoil.json";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const columns = [
  { id: "id", label: "№", minWidth: 70, align: "left" },
  { id: "settlement", label: "Населений пункт", minWidth: 100, align: "left" },
  { id: "district", label: "Район", minWidth: 100, align: "left" },
  { id: "region", label: "Область", minWidth: 100, align: "left" },
  { id: "size", label: "Природна зона", minWidth: 100, align: "left" },
  { id: "reshearch", label: "Дослідник", minWidth: 100, align: "left" },
  { id: "year", label: "Рік вивчення", minWidth: 100, align: "left" },
];

// Styling table
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 500,
  },
  tableCell: {
    padding: 0,
  },
}));

let Body = document.querySelector('body')

export default function TablePaleo() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [showModal, setShowModal] = React.useState(false);
  const [infoResearch, setInfoResearch] = React.useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(showModal)
    if(showModal ==='false'){
      Body.style.overflowY = 'auto';
    }else{
      Body.style.overflowY = 'hidden';
    }
  };

  const onClickItem = (e) => {
    setInfoResearch(e);
    toggleModal();
  };
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - dataPaleo.features.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {showModal && (
        <TablePaleoModal onClose={toggleModal} info={infoResearch} />
      )}
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: 800,
                    padding: "5px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? dataPaleo.features.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage,
                )
              : dataPaleo.features
            ).map((rowData) => (
              <TableRow key={rowData.properties.id}>
                <TableCell
                  style={{ minWidth: 70 }}
                  align="center"
                  className={classes.tableCell}
                >
                  {rowData.properties.id}
                </TableCell>
                <TableCell
                  style={{ minWidth: 100 }}
                  align="left"
                  className={classes.tableCell}
                >
                  {rowData.properties.Settlement}
                </TableCell>
                <TableCell
                  style={{ minWidth: 100 }}
                  align="left"
                  className={classes.tableCell}
                >
                  {rowData.properties.District}
                </TableCell>
                <TableCell
                  style={{ minWidth: 100 }}
                  align="left"
                  className={classes.tableCell}
                >
                  {rowData.properties.Region}
                </TableCell>
                <TableCell
                  style={{ minWidth: 100 }}
                  align="left"
                  className={classes.tableCell}
                >
                  {rowData.properties.Natural_ar}
                </TableCell>
                <TableCell
                  style={{ minWidth: 100 }}
                  align="left"
                  className={classes.tableCell}
                >
                  {rowData.properties.Researcher}
                </TableCell>
                <TableCell
                  style={{ minWidth: 70 }}
                  align="left"
                  className={classes.tableCell}
                >
                  {rowData.properties.Year}
                </TableCell>
                <TableCell style={{ minWidth: 80 }} align="left">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => onClickItem(rowData.properties)}
                  >
                    Інфо
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25]}
          colSpan={3}
          count={dataPaleo.features.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          style={{ minWidth: "max-content" }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableContainer>
    </>
  );
}
