import { useRegions } from 'components/hooks/useRegions';
import { useState } from 'react';
import { Control } from 'react-hook-form';
import { AddressInputs } from 'types';
import SelectCities from './SelectCities';

export default function Selects({
  control,
}: {
  control: Control<AddressInputs>;
}) {
  const [defaultOpt, setDefaultOpt] = useState('');
  const data = useRegions(defaultOpt);
  return (
    <>
      <SelectCities
        control={control}
        name="city_id"
        id="city_id"
        rules={{ required: 'لطفا این قسمت را خالی نگذارید ' }}
        options={data.length == 0 ? [] : data[1]}
        placeholder="شهرستان"
        instanceId="react-select-29-live-region"
        isLoading={data.length == 0 ? true : false}
      />
      <SelectCities
        control={control}
        options={data.length == 0 ? [] : data[0]}
        isLoading={data.length == 0 ? true : false}
        name="state"
        id="state"
        rules={{ required: 'لطفا این قسمت را خالی نگذارید' }}
        placeholder="استان"
        instanceId="react-select-31-live-region"
        setDefaultOpt={setDefaultOpt}
      />
    </>
  );
}
