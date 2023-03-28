import { useEffect, useState } from 'react';
import { IPatientListItem } from 'types/PatientListTypes';

const useFetch = (url: string) => {
  const [data, setData] = useState<Array<IPatientListItem>>([]);

  useEffect(() => {
    fetch(url).then(async res => {
      const data = await res.json();
      setData(data);
    });
  }, [setData, url]);

  return [data];
};

export const useGetClientList = () => {
  const [clientListData] = useFetch('/api/clinics');

  return [clientListData];
};