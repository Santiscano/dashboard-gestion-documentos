import * as React from "react";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { TouchRippleActions } from "@mui/material/ButtonBase/TouchRipple";
import ModalInfoFile from "../../ModalForm";
import { GeneralValuesContext } from "../../../../../Context/GeneralValuesContext";

export const ButtonOpenModalEdit = (props: GridRenderCellParams<Date>) => {
  const { hasFocus, value } = props;
  const buttonElement = React.useRef<HTMLButtonElement | null>(null);
  const rippleRef = React.useRef<TouchRippleActions | null>(null);

  // useState
  const { openModalAuth, handleOpenModalAuth } =
    React.useContext(GeneralValuesContext);
  // ----------------------------------------
  // Methods
  // ----------------------------------------

  React.useLayoutEffect(() => {
    if (hasFocus) {
      const input = buttonElement.current?.querySelector("input");
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
          if (event.key === " ") {
            // Prevent key navigation when focus is on button
            event.stopPropagation();
          }
        }}
        onClick={handleOpenModalAuth}
      >
        Abrir
      </Button>
      <ModalInfoFile
        key={props.row.id}
        open={openModalAuth}
        close={handleOpenModalAuth}
        valueFile={props.row}
      />
    </>
  );
};
