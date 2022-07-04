import * as Stitches from "@stitches/react";

import { styled } from "../../../stitches.config";
import { modifyVariantsForStory } from "../../utils/types";

export const IconButton = styled("button", {
  //reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  display: "flex",
  btrr: "$1",
  bbrr: "$1",
  p: "10px",
  $$background: "$bg04",
  backgroundColor: "$$background",
  "&:hover": {
    $$background: "$bg05",
    cursor: "pointer",
  },
  "&:disabled": {
    $$background: "$bg02",
    color: "$muted",
  },
  margin: 0,
  variants: {
    ghost: {
      true: {
        $$background: "transparent",
        color: "white",
        "&:hover": {
          $$background: "transparent",
        },
        p: "10px",
      },
    },
    fullWidth: {
      true: {
        width: "$full",
      },
    },
  },
});
/* Storybook utility for stitches variant props

NOTE: this can't live in the stories file because the storybook navigator will take a story and will crash
      I can't figure out why it can't be defined without being exported.
*/

type IconButtonComponentVariants = Stitches.VariantProps<typeof IconButton>;
export type IconButtonComponentProps = IconButtonComponentVariants;

export const IconButtonStory =
  modifyVariantsForStory<
    IconButtonComponentVariants,
    IconButtonComponentProps,
    typeof IconButton
  >(IconButton);
