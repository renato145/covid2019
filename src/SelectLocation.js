import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import './SelectLocation.css';
import { ascending } from 'd3';

const LocationTag = ({ tag, color, onDelete }) => (
  <Chip
    className="location-tag"
    label={tag}
    onDelete={e => onDelete(e, tag)}
    style={{ backgroundColor: color, color: 'white' }}
  />
);

export const SelectLocation = ({
  locations,
  values,
  colors,
  colorScheme,
  onChange,
  onDelete,
}) => {
  return (
    <Autocomplete
      className="autocomplete"
      multiple
      options={locations.sort(ascending)}
      // getOptionLabel={option => option.title}
      value={values}
      onChange={onChange}
      renderInput={params => (
        <TextField {...params} variant="standard" label="Select locations" />
      )}
      renderTags={tag =>
        tag.map((d, i) => (
          <LocationTag
            key={i}
            tag={d}
            color={colorScheme[colors[d] % colorScheme.length]}
            onDelete={onDelete}
          />
        ))
      }
    />
  );
};
