"use client";

import { Button } from "@chakra-ui/react";

const ReadMore = (props) => {
  const buttonStyles = {
    variant: "solid",
    size: "lg",
    bg: "white",
    color: "black",
  };

  return (
    <Button {...buttonStyles} {...props}>
      Read More
    </Button>
  );
};

export default ReadMore;
