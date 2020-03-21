import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './SelectLocation.css';
import { ascending } from 'd3';

export const SelectLocation = ({ locations, defaultLocation, onChange }) => {
  return (
    <Autocomplete
      className="autocomplete"
      multiple
      options={locations.sort(ascending)}
      // getOptionLabel={option => option.title}
      defaultValue={defaultLocation}
      onChange={onChange}
      renderInput={params => (
        <TextField {...params} variant="standard" label="Select locations" />
      )}
    />
  );
};
