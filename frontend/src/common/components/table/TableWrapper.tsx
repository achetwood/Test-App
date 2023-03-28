import TableContainer from '@mui/material/TableContainer';
import MaterialReactTable, { type  MRT_ColumnDef } from 'material-react-table';
import { IPatientListItem } from 'types/PatientListTypes';

interface TableWrapperProps {
  columns: Array<MRT_ColumnDef<IPatientListItem>>;
  rows: Array<IPatientListItem>;
};

export function TableWrapper(props: TableWrapperProps) {
  const {
    columns,
    rows,
  } = props;

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