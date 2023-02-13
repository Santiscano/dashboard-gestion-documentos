import { TextField } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import InputAdornment from "@mui/material/InputAdornment";


const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#2759cd",
    },
  },
});

function TextFieldOutlined({
  label,
  type,
  value,
  setValue,
  required,
  disabled,
  event,
  readOnly,
  iconStart,
  iconEnd,
  defaultValue,
}:any) {
  return (
    <CssTextField
      id="custom-css-outlined-input"
      fullWidth
      type={type}
      required={required}
      disabled={disabled}
      label={label}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        event && event(e);
      }}
      variant={"outlined"}
      color={"primary"}
      autoComplete={"off"}
      InputProps={{
        readOnly: readOnly,
        startAdornment: iconStart ? (
          <InputAdornment position="start"> {iconStart} </InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end"> {iconEnd} </InputAdornment>
        ) : null,
      }}
      sx={{ m: 1, width: 0.98 }}
    />
  );
}

export default TextFieldOutlined;
