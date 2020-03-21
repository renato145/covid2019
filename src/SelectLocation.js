import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './SelectLocation.css';

export const SelectLocation = ({ locations, defaultLocation, onChange }) => {
  return (
    <>
      <Autocomplete
        multiple
        // id="tags-standard"
        options={locations}
        // getOptionLabel={option => option.title}
        defaultValue={[defaultLocation]}
        onChange={onChange}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
      {/* <label className="selection-label mb-0 ml-2">Select location</label>
      <select
        value={selection}
        className="custom-select"
        onChange={e => setSelection(e.target.value)}
      >
        {locations.map((d, i) => (
          <option key={i} value={d}>
            {d}
          </option>
        ))}
      </select> */}
    </>
  );
};
