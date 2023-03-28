import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import MaterialReactTable, { type  MRT_ColumnDef } from 'material-react-table';
import { IPatientListItem } from 'types/PatientListTypes';

interface MaterialTableProps {
  columns: Array<MRT_ColumnDef<IPatientListItem>>;
  rows: Array<IPatientListItem>;
};

export function MaterialTable(props: MaterialTableProps) {
  const {
    columns,
    rows,
  } = props;
  //   event: React.MouseEvent<unknown>,
  //   property: keyof IClientListItem,
  // ) => {
  //   const isAsc = orderBy === property && order === 'asc';
  //   setOrder(isAsc ? 'desc' : 'asc');
  //   setOrderBy(property);
  // };

  // const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
  //   const selectedIndex = selected.indexOf(id);
  //   let newSelected: readonly string[] = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDense(event.target.checked);
  // };

  // const isSelected = (id: string) => selected.indexOf(id) !== -1;

  // // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length!) : 0;

  return (
    <TableContainer sx={{ width: 'auto', padding: '20px' }}>
      <MaterialReactTable
        columns={columns}
        data={rows}
        enableHiding={false}
        enableFullScreenToggle={false}
        enableDensityToggle={false}
      />
    </TableContainer>      
  );
};