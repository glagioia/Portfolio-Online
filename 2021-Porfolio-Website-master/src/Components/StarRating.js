import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function StarRating({ stars }) {
  const [value] = React.useState(stars);

  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
