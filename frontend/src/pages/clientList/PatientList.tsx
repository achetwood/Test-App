import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Loading } from 'common/components/loading/Loading';
import { MaterialTable }  from 'common/components/table/MaterialTable';
import { IPatientListItem } from 'types/PatientListTypes';
import { useGetClientList } from 'handlers/applicationHandlers';
import type { MRT_ColumnDef } from 'material-react-table';

export default function PatientList() {
  const [patientListArray] = useGetClientList();

  const columns = React.useMemo<MRT_ColumnDef<IPatientListItem>[]>(
    () => [
      {
        accessorKey: 'firstName',
        enableColumnFilter: false,
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        enableColumnFilter: true,
        header: 'Last Name',
      },
      {
        accessorKey: 'dateOfBirth',
        enableColumnFilter: false,
        header: 'Date of Birth',
      },
      {
        accessorKey: 'clinicName',
        enableColumnFilter: true,
        filterVariant: 'select',
        filterSelectOptions: [
          { text: 'Salve Fertility', value: 'Salve Fertility'},
          { text: 'London IVF', value: 'London IVF'},
        ],
        header: 'Clinic',
      },
    ],
    [],
  );

  const isLoading = patientListArray.length === 0;

  return (
    <Box>
      <Paper sx={{ width: '100%', mb: 2 }}>
        { isLoading ? (
            <Loading isOpen={isLoading} />
          ) : (
            <>
              <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                Patients
              </Typography>
              <MaterialTable 
                rows={patientListArray}
                columns={columns}
              />
            </>
          )
      }
      </Paper>
    </Box>
  );
};