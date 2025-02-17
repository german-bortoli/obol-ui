import { FocusEventHandler, forwardRef, useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "../../icons";
import { Box } from "../Box/Box";
import { IconButton } from "../IconButton/IconButton";
import { TextField } from "../TextField/TextField";

interface NumberFieldProps {
  // sets the max value to increase number field value
  max?: number;
  // sets the min value to increase number field value
  min?: number;
  value?: number;
  onChangeValue?(value: number): void;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  name?: string;
}

export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  ({ max = 10, min = 0, value, onChangeValue, onBlur, name }, ref) => {
    const [qty, setQty] = useState(value || min);

    const handleOnDec = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (qty < min) {
        setQty(min);
      } else {
        setQty(qty - 1);
      }
    };
    const handleOnInc = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (qty >= max) {
        setQty(max);
      } else {
        setQty(qty + 1);
      }
    };

    const handleOnChange = (e: any) => {
      const value = e.target.value as number;
      if (value > max) {
        setQty(max);
      } else if (value < min) {
        setQty(min);
      } else {
        setQty(value);
      }
    };

    useEffect(() => {
      if (qty && onChangeValue) {
        onChangeValue(qty);
      }
    }, [qty]);
    return (
      <Box
        css={{
          display: "flex",
          maxHeight: "$3xl",
          "input::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },

          /* Firefox */
          "input[type=number]": {
            "-moz-appearance": "textfield",
          },

          "& .dec-button": {
            btlr: "2px",
            bblr: "2px",
            btrr: 0,
            bbrr: 0,
          },

          "& .inc-button": {
            btlr: 0,
            bblr: 0,
            btrr: "2px",
            bbrr: "2px",
          },

          "& button": {
            display: "grid",
            placeItems: "center",
            color: "$textLight",
            width: "48px",
            fontSize: "$8",
          },

          "& input": {
            borderRadius: 0,
            width: "95px",
          },
        }}
      >
        <IconButton
          disabled={qty <= min}
          className="dec-button"
          onClick={handleOnDec}
          borderDisabled={qty <= min}
        >
          <MinusIcon />
        </IconButton>
        <TextField
          css={{ borderRightStyle: "none", borderLeftStyle: "none" }}
          type="number"
          ref={ref}
          value={qty}
          onChange={handleOnChange}
          onBlur={onBlur}
          name={name}
        />
        <IconButton
          disabled={qty >= max}
          className="inc-button"
          onClick={handleOnInc}
          borderDisabled={qty >= max}
        >
          <PlusIcon />
        </IconButton>
      </Box>
    );
  }
);

NumberField.displayName = "NumberField";
