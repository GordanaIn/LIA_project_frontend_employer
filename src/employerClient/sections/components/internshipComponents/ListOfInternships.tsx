import React, {FC, useEffect, useState} from 'react'
import {InternshipVacancy} from "../../interfaces/NewHandleInterface";
import theme from "../../../Theme";
import {useStyles} from "../styles/AddInternshipStyle";
import ApiEmployerClient from "../../api/ApiEmployerClient";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination ,TableRow, ThemeProvider} from '@mui/material';

interface Column {
    id: 'logo' | 'companyName' | 'title' | 'description' | 'date'|'contactNumber'  ;
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'logo', label: 'Logo', minWidth: 70 },
    { id: 'companyName', label: 'Company', minWidth: 90 },
    {
        id: 'title',
        label: 'Title',
        minWidth: 70,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'description',
        label: 'Description',
        minWidth: 100,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'date',
        label: 'Up load Date',
        minWidth: 70,
        align: 'center',
        format: (value: number) => value.toFixed(2),
    },
    {
        id: 'contactNumber',
        label: 'Contact number',
        minWidth: 70,
        align: 'center',
        format: (value: number) => value.toFixed(2),
    },
];
interface Data {
    logo: string;
    companyName: string;
    title: string;
    description: string;
    date: string;
    contactNumber:string;
}

function createData(
    logo: string,
    companyName: string,
    title: string,
    description: string,
    date:string,
    contactNumber: string,

): Data {
    return {logo,companyName, title, description, date, contactNumber };
}

const rows = [
    createData('CGI', 'CGI', 'Javautvecklare', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','20-11-2021','089576454'),
    createData('G', 'Google', 'Frontend Developer', 'Vi söker 3 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','21/11/2021','08456454'),
    createData('FX', 'Forex', 'Full-stack Developer', 'Vi söker 1 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','10/11/2021','08970054'),
    createData('N', 'Nordea', 'Frontend Developer', 'Vi söker  praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','21/11/2021','08456454'),
    createData('SwB', 'SwedBank', 'UI/UX Designer', 'Vi söker 2 praktikanter som är UI/UX Designer som vill vara en del av våran team i företaget och vill utveckla sig!','29/11/2021','07985454'),
    createData('G', 'Google', 'Frontend Developer', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','22/11/2021','08456454'),
    createData('Italy', 'IT', 'Backend Developer', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','27/11/2021','08976454'),
    createData('G', 'Google', 'Frontend Developer', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','1/11/2021','08456454'),
    createData('Italy', 'IT', 'Backend Developer', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','5/11/2021','08976454'),
    createData('CGI', 'CGI', 'Javautvecklare', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','20-11-2021','089576454'),
    createData('G', 'Google', 'Frontend Developer', 'Vi söker 3 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','21/11/2021','08456454'),
    createData('FX', 'Forex', 'Full-stack Developer', 'Vi söker 1 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','10/11/2021','08970054'),
    createData('N', 'Nordea', 'Frontend Developer', 'Vi söker  praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','21/11/2021','08456454'),
    createData('SwB', 'SwedBank', 'UI/UX Designer', 'Vi söker 2 praktikanter som är UI/UX Designer som vill vara en del av våran team i företaget och vill utveckla sig!','29/11/2021','07985454'),
    createData('G', 'Google', 'Frontend Developer', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','22/11/2021','08456454'),
    createData('Italy', 'IT', 'Backend Developer', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','27/11/2021','08976454'),
    createData('G', 'Google', 'Frontend Developer', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','1/11/2021','08456454'),
    createData('Italy', 'IT', 'Backend Developer', 'Vi söker 2 praktikanter som är Javautvecklare som vill vara en del av våran team i företaget och vill utveckla sig!','5/11/2021','08976454'),

]

const ListOfInternships:FC<{internship: InternshipVacancy}> = ({internship}) =>  {
    const classes = useStyles();
    const [secondary, setSecondary] =useState(false);
    const [internships, setInternships] = useState([internship]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

        const handleChangePage = (event: unknown, newPage: number) => {
            setPage(newPage);
        };

        const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
        };

    useEffect(() => {
        ApiEmployerClient.getInternships().then(setInternships).catch(err=>console.log(err));
    },[]);
        return (
            <ThemeProvider theme={theme}>
            <Paper className={classes.root} sx={{ width: '100%'}}>
                <TableContainer className={classes.container} sx={{ maxHeight: 640}}>
                    <Table stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={6} style={{backgroundColor:"#4C525C", color:"#fff"}}>
                                    <h1>Adverts of Internsips</h1>
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 90, minWidth: column.minWidth ,backgroundColor:"#2165A4", color:"#fff"}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.tableBody}>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.companyName}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell className={classes.tableBody} key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
                <TablePagination
                    className={classes.root}
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </ThemeProvider>
    )
}

export default ListOfInternships;
