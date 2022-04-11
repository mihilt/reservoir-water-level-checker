import { Autocomplete, TextField } from '@mui/material';
import { ReservoirMetaData } from '../../../../../interfaces';
import { getSelectedReservoirEquipNoList } from '../../../../../utils/utils';

interface SettingsProps {
  sortedReservoirMetaDataList: ReservoirMetaData[];
}

const addItem = (event: React.SyntheticEvent<Element, Event>, value: ReservoirMetaData[]): void => {
  localStorage.setItem(
    'selectedReservoirEquipNoList',
    JSON.stringify(value.map((e) => e.equip_no))
  );
};

function Settings(props: SettingsProps) {
  const { sortedReservoirMetaDataList } = props;

  const setDefaultValue = (): ReservoirMetaData[] => {
    const selectedReservoirEquipNoList: number[] = getSelectedReservoirEquipNoList();

    const actualIndex: number[] = [];
    sortedReservoirMetaDataList.forEach((e: ReservoirMetaData, idx: number) => {
      if (selectedReservoirEquipNoList.indexOf(e.equip_no) !== -1) {
        actualIndex.push(idx);
      }
    });

    const result: ReservoirMetaData[] = [];
    actualIndex.forEach((e) => {
      result.push(sortedReservoirMetaDataList[e]);
    });
    return result;
  };

  return (
    <>
      <Autocomplete
        sx={{ mt: 1 }}
        multiple
        size='small'
        options={sortedReservoirMetaDataList}
        getOptionLabel={(option) => `${option.equip_name}(${option.equip_no})`}
        defaultValue={setDefaultValue() || []}
        onChange={(event, value) => addItem(event, value)}
        renderInput={(params) => (
          <TextField {...params} label='Resorvoir list' placeholder='Resorvoir' />
        )}
      />
    </>
  );
}

export default Settings;
