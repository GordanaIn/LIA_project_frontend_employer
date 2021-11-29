import React, {FC, useEffect, useState} from "react";
import {useStyles} from "../components/styles/AddInternshipStyle";
import ApiEmployerClient from "../api/ApiEmployerClient";
import theme from "../../Theme";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    ThemeProvider
} from '@mui/material';
import {InternshipVacancy} from "../../interfaces/HandleInterface";



interface Column {
    id: 'companyName' | 'title' | 'description' | 'datePosted' ;
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: number) => string;
}

const columns: Column[] = [

    {id: 'companyName', label: 'Company Name', minWidth: 90},
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
        id: 'datePosted',
        label: 'Date Posted',
        minWidth: 70,
        align: 'center',
        format: (value: number) => value.toFixed(2),
    },


];

const ListOfInternships: FC<{}> = ({}) => {
    //Array<InternshipVacancy>
    const classes = useStyles();
    const [internships, setInternships] = useState([]);
    const [employerId, SetEmployerId] = useState('331338e5-6738-4b33-838d-46fb79f90c58');
    const [internshipId, SetInternshipId] = useState('549b604a-3a0b-4a94-97a6-2e258199fcc4');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const remove = (internships: InternshipVacancy | any ) => {
        console.log(internships?.id)
        ApiEmployerClient.deleteInternship(employerId, internshipId)
            .then(response => console.log(response))
            .catch((err) => console.log(err));
    }
    const edit = (internships: InternshipVacancy | any) => {
        ApiEmployerClient.editInternship(employerId, internshipId)
            .then(response => console.log(response))
            .catch((err: any) => console.log(err));
    }


    useEffect(() => {
        ApiEmployerClient.getInternships().then(setInternships).catch(err => console.log(err));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.root} sx={{width: '100%'}}>
                <TableContainer className={classes.container} sx={{maxHeight: 640}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={8}
                                           style={{backgroundColor: "#4C525C", color: "#fff"}}>
                                    <h1>Adverts of Internships</h1>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            top: 90,
                                            minWidth: column.minWidth,
                                            backgroundColor: "#2165A4",
                                            color: "#fff"
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody className={classes.tableBody}>
                            { internships
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row:any) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} /*key={row.companyName}*/ >
                                            {columns.map((column) => {
                                                const value = row[column.id];

                                                return (

                                                    <TableCell className={classes.tableBody} key={column.id}
                                                               align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}

                                                    </TableCell>

                                                );

                                            })}

                                            <EditIcon style={{color: 'green'}}  id='edit' onClick={() => edit(internships)}/>


                                            <DeleteIcon style={{color: 'red'}} id='delete' onClick={() => remove(internships)}/>

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
                count={internships.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </ThemeProvider>

    )
}
export default ListOfInternships;
