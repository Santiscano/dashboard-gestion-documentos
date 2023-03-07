import * as React from 'react';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple';
import BasicModal from '../ModalForm';

export const ButtonToggleOpenEdit = (props: GridRenderCellParams<Date>) => {
    const { hasFocus, value } = props;
    const buttonElement = React.useRef<HTMLButtonElement | null>(null);
    const rippleRef = React.useRef<TouchRippleActions | null>(null);

    // useState
    const [ open, setOpen ] = React.useState(false);
    // ----------------------------------------
    // Methods
    // ----------------------------------------
    const handleOpen = () => {
      console.log(props);
      setOpen(true)
      console.log('open: ', open);
    };
    const handleClose = () => setOpen(false);


    React.useLayoutEffect(() => {
      if (hasFocus) {
        const input = buttonElement.current?.querySelector('input');
        input?.focus();
      } else if (rippleRef.current) {
        // Only available in @mui/material v5.4.1 or later
        rippleRef.current.stop({} as any);
      }
    }, [hasFocus]);

    return (
      <>
        <Button
          component="button"
          ref={buttonElement}
          touchRippleRef={rippleRef}
          variant="contained"
          size="small"
          style={{ marginLeft: 1 }}
          // Remove button from tab sequence when cell does not have focus
          tabIndex={hasFocus ? 0 : -1}
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === ' ') {
              // Prevent key navigation when focus is on button
              event.stopPropagation();
            }
          }}
          onClick={handleOpen}
        >
          Abrir
        </Button>
        <BasicModal
          key={props.row.id}
          open={open}
          close={handleClose}
          id={props.row.id}
          cedi={props.row.cedi}
          account_type={props.row.account_type}
          document_type={props.row.document_type}
          document_number={props.row.document_number}
          provider={props.row.provider}
          address={props.row.address}
          phone={props.row.phone}
          email={props.row.email}
          document_date={props.row.document_date}
          value={props.row.value}
        />
      </>
    );
  };
