import * as React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="all"
          control={<Radio color="default" />}
          label="All"
        />
        <FormControlLabel
          value="priority"
          control={<Radio color="default" />}
          label="Priority"
        />
        <FormControlLabel
          value="normal"
          control={<Radio color="default" />}
          label="Normal"
        />
      </RadioGroup>
    </FormControl>
  );
}
