import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function index(props: any) {
  
  return (
    <div>
      <label className="block mb-2 mt-10 text-base font-semibold dark:text-white" >{props.title}</label>
      <FormControl sx={{ m: 1, minWidth: 350 }}>
        <InputLabel id={`${props.placeholder}-label`}>{props.placeholder}</InputLabel>
        <Select
          key={props.index}
          labelId={`${props.placeholder}-label`}
          id= {props.placeholder}
          value={props.value}
          onChange={props.onChange}
          autoWidth
          label={props.placeholder}
        >
          <MenuItem value="">
            <em>{props.itemDefault}</em>
          </MenuItem>

          {props.items.map((item:any, index:any) => (
            <MenuItem 
              key={index}
              value={item.value} 
              sx={{ m: 1, minWidth: 350 }}>
                {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}