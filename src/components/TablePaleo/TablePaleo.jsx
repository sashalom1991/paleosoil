import React, { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
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
  Button,
} from '@mui/material';
import { ThreeCircles } from 'react-loader-spinner';
import TablePaleoModal from '../TablePaleoModal/TablePaleoModal';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import { t } from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import {
  getAllPaleosoilPoint,
  fetchPaleosoilPoint,
  deletePaleosoilPoint,
  getLoading,
} from '../../redux/paleosoil';

import { makeStyles } from '@mui/styles';

// Styling table
const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 500,
  },
  tableCell: {
    padding: 0,
  },
}));

let Body = document.querySelector('body');

// Table
export default function TablePaleo() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const data = useSelector(getAllPaleosoilPoint);
  const loading = useSelector(getLoading);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [showModal, setShowModal] = React.useState(false);
  const [infoResearch, setInfoResearch] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState('');
  const [lng, setLng] = React.useState('ua');
  const dispatch = useDispatch();

  // Search in Table
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter(item => {
    return (
      item.settlement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.natural_zones.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.researcher.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
  });

  const tableData = searchQuery === '' ? data : filteredData;

  // Modal windows
  const toggleModal = () => {
    setShowModal(!showModal);
    if (showModal === 'false') {
      Body.style.overflowY = 'auto';
    } else {
      Body.style.overflowY = 'hidden';
    }
  };

  const onClickItem = e => {
    setInfoResearch(e);
    toggleModal();
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Language in table
  const columnsUa = [
    { id: 'id', label: '№', minWidth: 70, align: 'left' },
    { id: 'settlement', label: 'Поселення', minWidth: 100, align: 'left' },
    { id: 'district', label: 'Район', minWidth: 100, align: 'left' },
    { id: 'region', label: 'Область', minWidth: 100, align: 'left' },
    {
      id: 'natural_zones',
      label: 'Природна зона',
      minWidth: 100,
      align: 'left',
    },
    { id: 'researcher', label: 'Дослідник', minWidth: 100, align: 'left' },
    { id: 'year', label: 'Рік вивчення', minWidth: 100, align: 'left' },
  ];

  const columnsEn = [
    { id: 'id', label: '№', minWidth: 70, align: 'left' },
    { id: 'settlement', label: 'Settlement', minWidth: 100, align: 'left' },
    { id: 'district', label: 'District', minWidth: 100, align: 'left' },
    { id: 'region', label: 'Region', minWidth: 100, align: 'left' },
    {
      id: 'natural_zones',
      label: 'Natural zones',
      minWidth: 100,
      align: 'left',
    },
    { id: 'researcher', label: 'Researcher', minWidth: 100, align: 'left' },
    { id: 'year', label: 'Year of research', minWidth: 100, align: 'left' },
  ];

  const columns = lng === 'en' ? columnsEn : columnsUa;

  useEffect(() => {
    dispatch(fetchPaleosoilPoint());
  }, [dispatch]);

  useEffect(() => {
    setLng(localStorage.getItem('lng'));
  }, [lng]);
  return (
    <>
      {showModal && (
        <TablePaleoModal onClose={toggleModal} info={infoResearch} />
      )}
      {loading ? (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      ) : (
        <>
          <TableContainer component={Paper}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder={t('infoPaleo.search')}
              style={{ width: '70%', color: '#3b8b66', fontWeight: '900' }}
            />

            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontWeight: 800,
                        padding: '5px',
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? tableData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                  : tableData
                ).map(rowData => (
                  <TableRow key={rowData._id}>
                    <TableCell
                      style={{ minWidth: 70 }}
                      align="center"
                      className={classes.tableCell}
                    >
                      {rowData.id}
                    </TableCell>
                    <TableCell
                      style={{ minWidth: 100 }}
                      align="left"
                      className={classes.tableCell}
                    >
                      {rowData.settlement}
                    </TableCell>
                    <TableCell
                      style={{ minWidth: 100 }}
                      align="left"
                      className={classes.tableCell}
                    >
                      {rowData.district}
                    </TableCell>
                    <TableCell
                      style={{ minWidth: 100 }}
                      align="left"
                      className={classes.tableCell}
                    >
                      {rowData.region}
                    </TableCell>
                    <TableCell
                      style={{ minWidth: 100 }}
                      align="left"
                      className={classes.tableCell}
                    >
                      {rowData.natural_zones}
                    </TableCell>
                    <TableCell
                      style={{ minWidth: 100 }}
                      align="left"
                      className={classes.tableCell}
                    >
                      {rowData.researcher}
                    </TableCell>
                    <TableCell
                      style={{ minWidth: 70 }}
                      align="left"
                      className={classes.tableCell}
                    >
                      {rowData.year}
                    </TableCell>
                    <TableCell style={{ minWidth: 80 }} align="left">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => onClickItem(rowData)}
                      >
                        Іnfo
                      </Button>
                      <IconButton
                        aria-label="delete"
                        sx={{ color: '#FF0000' }}
                        onClick={() =>
                          dispatch(deletePaleosoilPoint(rowData._id))
                        }
                        style={
                          isLoggedIn
                            ? { display: 'inline' }
                            : { display: 'none' }
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
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
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              style={{ minWidth: 'max-content' }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableContainer>
        </>
      )}
    </>
  );
}
